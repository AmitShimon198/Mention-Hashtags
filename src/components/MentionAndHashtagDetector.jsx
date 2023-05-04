import React, { useState, useRef } from 'react';
import './MentionAndHashtagDetector.css';
const users = [
  'john',
  'jane',
  'michael',
  'sarah',
  'david',
  'emily',
];

const hashtags = [
  'fun',
  'adventure',
  'sports',
  'travel',
  'music',
  'coding',
];
const mentionOrHashtagRegex = /(?:^| )(@|#)\w*/g;
const MentionAndHashtagDetector = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeMentionOrHashtag, setActiveMentionOrHashtag] = useState(null);
  const inputRef = useRef(null);
  const handleChange = (e) => {
    const text = e.target.innerHTML;
    const mentionOrHashtagMatch = text.match(mentionOrHashtagRegex);
    if (mentionOrHashtagMatch) {
      const lastMentionOrHashtag = mentionOrHashtagMatch[mentionOrHashtagMatch.length - 1].trim();
      if (
        (lastMentionOrHashtag.startsWith('@') && lastMentionOrHashtag.length > 1) ||
        (lastMentionOrHashtag.startsWith('#') && lastMentionOrHashtag.length > 1)
      ) {
        setActiveMentionOrHashtag(lastMentionOrHashtag);
        setDropdownVisible(true);

        const searchList = lastMentionOrHashtag.startsWith('@') ? users : hashtags;
        const filteredItems = searchList.filter((item) =>
          item.toLowerCase().startsWith(lastMentionOrHashtag.slice(1).toLowerCase())
        );
        setSuggestions(filteredItems);

      } else if (lastMentionOrHashtag.length === 1) {
        setActiveMentionOrHashtag(lastMentionOrHashtag);
        setDropdownVisible(true);
        const searchList = lastMentionOrHashtag.startsWith('@') ? users : hashtags;
        setSuggestions(searchList);
      } else {
        setDropdownVisible(false);
      }
    } else {
      setDropdownVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const symbol = activeMentionOrHashtag.charAt(0);
    const taggedItem = `<span class="tagged-item" contenteditable="false">${symbol}${suggestion}</span>&nbsp;`;
    const updatedInput = inputRef.current.innerHTML.replace(symbol + activeMentionOrHashtag.slice(1), taggedItem);
    inputRef.current.innerHTML = updatedInput;
    setActiveMentionOrHashtag(null);
    setDropdownVisible(false);

    // Move the cursor to the end of the content
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(inputRef.current);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <div>
      <div
        ref={inputRef}
        contentEditable={true}
        onInput={handleChange}
        className="editable-textarea"
        placeholder="Type your text here..."
      ></div>
      {dropdownVisible && (
        <ul className="suggestion-dropdown">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {activeMentionOrHashtag.charAt(0)}
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MentionAndHashtagDetector;
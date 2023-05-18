import React, { useState, useRef } from 'react';
import './MentionAndHashtagDetector.css';

const users = ['john', 'jane', 'michael', 'sarah', 'david', 'emily'];
const hashtags = ['fun', 'adventure', 'sports', 'travel', 'music', 'coding'];
const mentionOrHashtagRegex = /(?:^|\s)([@#])\w*(?![^<>]*>|[^<>]*<\/span>)/g;

const MentionAndHashtagDetector = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeMentionOrHashtag, setActiveMentionOrHashtag] = useState(null);
  const inputRef = useRef(null);
  const getParentElementText = (element) => {
    const html = element.innerHTML;
    const matches = html.match(mentionOrHashtagRegex);
    const text = matches ? matches.join('').trim() : '';
    return text;
  };
  const handleChange = () => {
    const mentionOrHashtagMatch = getParentElementText(inputRef.current)
    if (mentionOrHashtagMatch) {
      const lastMentionOrHashtag = mentionOrHashtagMatch;
      if (
        (lastMentionOrHashtag.startsWith('@') && lastMentionOrHashtag.length > 1) ||
        (lastMentionOrHashtag.startsWith('#') && lastMentionOrHashtag.length > 1)
      ) {
        setActiveMentionOrHashtag(lastMentionOrHashtag);
        const searchTerm = lastMentionOrHashtag.slice(1);
        const searchList = lastMentionOrHashtag.startsWith('@') ? users : hashtags;
        const filteredItems = searchList.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
        setSuggestions(filteredItems);
        setDropdownVisible(true);
      } else {
        setActiveMentionOrHashtag(null);
        setDropdownVisible(false);
      }
    } else {
      setActiveMentionOrHashtag(null);
      setDropdownVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (activeMentionOrHashtag) {
      const symbol = activeMentionOrHashtag.charAt(0);
      const taggedItem = document.createElement("span");
      taggedItem.innerText = `${symbol}${suggestion}`;
      taggedItem.classList.add("tagged-item");
      taggedItem.setAttribute("contenteditable", "false");
      const { childNodes } = inputRef.current;
      const s = window.getSelection();
      const an = s.anchorNode;
      const fn = s.focusNode;
      console.log('doc', window.getSelection().anchorNode);
      console.log('an, s, fn', { wholeText: an?.wholeText, fn });
      for (let index = 0; index < childNodes.length; index++) {
        let child = childNodes[index];

        if (child.nodeType === Node.TEXT_NODE &&
          activeMentionOrHashtag === child?.nodeValue?.trim()) {
          inputRef.current.replaceChild(taggedItem, child);
        }
      }
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStartAfter(taggedItem);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    setActiveMentionOrHashtag(null);
    setDropdownVisible(false);
  };

  return (
    <div>
      <div
        ref={inputRef}
        contentEditable={true}
        onInput={handleChange}
        onClick={handleChange}
        className="editable-textarea"
        placeholder="Type your text here..."
      ></div>
      {dropdownVisible && (
        <ul className="suggestion-dropdown">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {activeMentionOrHashtag && activeMentionOrHashtag.charAt(0)}
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MentionAndHashtagDetector;
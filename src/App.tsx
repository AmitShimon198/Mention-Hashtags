import React, { useEffect, useReducer, useRef, useState } from 'react';
import './App.css'
import RefExample, { RefHandler } from './components/RefExample';
import TransitionExample from './components/TransitionExmple';
import UseCallbackUseMemoExample, { Permissions } from './components/useCallbackUseMemoExample';
import EnhancedUserProfile from './components/HOCExample';
import WhatsAppContactShareButton from './WhatsAppContactShareButton';
import TreeView from './components/Tree';
// import mdConfig from './services/config';
// import medicalGuidelineService from './services/service';
import medicalGuidelineAPI from './services/api';
import medicalGuidelineService from './services/service';
import medicalGuideline from './services/config';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import { AnimatedBox } from './components/AnimatedBox';
import ConveyorBelt from './components/animation';
interface Card {
  id: number;
  content: string;
}

const generateMockData = (numCards: number): Card[] => {
  return Array.from({ length: numCards }, (_, index) => ({
    id: index,
    content: `Card Content ${index + 1}`
  }));
}

// Example usage
const mockCards = generateMockData(4);
console.log(mockCards);

function reducer(_: any, { type, payload }: any) {
  switch (type) {
    case 1:
      return `${payload}:Deleted`;
    case 2:
      return `${payload}:Edit`;
    case 3:
      return `${payload}:Create`;
    case 4:
      return `${payload}:Get`;
    default:
      break;
  }
}
type ReducerType = (_: any, { type, payload }: any) => string | undefined;

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    medicalGuidelineService?.loadMedicalGuidelineOptions().then((data: any) => {
      medicalGuideline.setData(data);
      setIsLoading(false)
    })
  }, [])
  // const ref = useRef<RefHandler>(null);
  // const [value, dispatch] = useReducer<ReducerType>(reducer, '');
  // const exampleFunc = (value: string): void => dispatch({ type: Math.floor(Math.random() * 4) + 1, payload: value });
  return (

    <div className="container">
      {/* <AnimatedBox>
        <div style={{ background: 'red' }}>Hi</div>
      </AnimatedBox> */}
      <ConveyorBelt cards={mockCards} />
      {/* <TransitionExample /> */}
      {/* <UseCallbackUseMemoExample permission={Permissions.READ} userId={'1'}/> */}
      {/* <EnhancedUserProfile userName={'amit'} pass={'pass'}/> */}
      {/* <RefExample ref={ref} />
      <button
        onClick={() => ref.current?.exampleFunc(exampleFunc)}>
        Random Action
      </button>
      {value} */}
      <>
        {/* <Routes>
          <Route path="/" element={isLoading ? <>Loading</> : <Home />} />
          <Route path="about" element={isLoading ? <>Loading</> : <About />} />
          <Route path="contact" element={isLoading ? <>Loading</> : <Contact />} />
        </Routes> */}
        {/* {!isLoading && <TreeView />}
        {isLoading && 'Loading'} */}
        {/*
      */}
        {/* <h1>Welcome to my website</h1>
        <p>Share this content with your friends on WhatsApp!</p>
        <WhatsAppContactShareButton
          text="Check out this awesome content!"
          url="https://www.amit.com/api/file/64e9f201973369319fcfbdd7/Post"
          // url="https://yourwebsite.com/path-to-content"
        >
         <>Share</> 
        </WhatsAppContactShareButton> */}
      </>
    </div>);
}

export default App;

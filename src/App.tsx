import React, { useReducer, useRef } from 'react';
import './App.css'
import RefExample, { RefHandler } from './components/RefExample';
import TransitionExample from './components/TransitionExmple';
import UseCallbackUseMemoExample from './components/useCallbackUseMemoExample';
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
  // const ref = useRef<RefHandler>(null);
  // const [value, dispatch] = useReducer<ReducerType>(reducer, '');
  // const exampleFunc = (value: string): void => dispatch({ type: Math.floor(Math.random() * 4) + 1, payload: value });
  return (
    <div className="container">
      {/* <TransitionExample /> */}
      <UseCallbackUseMemoExample userId={'1'}/>
      {/* <RefExample ref={ref} />
      <button
        onClick={() => ref.current?.exampleFunc(exampleFunc)}>
        Random Action
      </button>
      {value} */}
    </div>);
}

export default App;

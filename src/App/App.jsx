import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  return (
    <div className="App">
      <Button><img alt="" src="./img/ok_sub.png" /> ok</Button>
      <Button text="cancel"></Button>
    </div>
  );
  // <Button children={<div><img alt="" src="./img/ok_sub.png" /> <span>ok</span></div>}></Button> => {props.children}
  // <Button><img alt="" src="./img/ok_sub.png" /> ok</Button> => => {props.children} aussi
  // <Button text="cancel"></Button> => {props.text}
}

export default App;

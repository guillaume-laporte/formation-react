import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  return (
    <div className="App">
      <Button className="primary" onClick={(unParamDeLenfant) => console.log("fonction envoyée part le parent - ", unParamDeLenfant)}><img alt="" src="./img/ok_sub.png" /> ok</Button>
      <Button className="error" text="cancel"></Button>
    </div>
  );
  // <Button children={<div><img alt="" src="./img/ok_sub.png" /> <span>ok</span></div>}></Button> => {props.children}
  // <Button><img alt="" src="./img/ok_sub.png" /> ok</Button> => => {props.children} aussi
  // <Button text="cancel"></Button> => {props.text}
  // <Button style={{fontSize: '48pt'}}>AAA</Button> => {props.text}
  // <Button bgColor='tomato' text="cancel"></Button>
}

export default App;

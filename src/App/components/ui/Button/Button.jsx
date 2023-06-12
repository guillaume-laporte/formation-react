import React from 'react';
import './Button.css';

// function Button() {}

// approche proche de TS (on peut facilement rajouter le typage, Button:XXX)
const Button = (props) => {
    return <button className='Button'>Benjamin</button>
    // return <><button>Benjamin</button><button>Benjamin</button></>
}

export default Button;

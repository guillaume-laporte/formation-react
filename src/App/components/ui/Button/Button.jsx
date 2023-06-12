import React from 'react';
import style from './Button.module.css'
import PropTypes from 'prop-types'

// function Button() {}

// Approche proche de TS (on peut facilement rajouter le typage, Button:XXX)
const Button = (props) => {
    console.log(props);
    return (
        <button type={props.type} className={style.Button + ' btn'}>
            {undefined !== props.children ? props.children : props.text}
        </button>
    );
    // return <><button>Benjamin</button><button>Benjamin</button></> => balise vide car un seul premier niveau obligatoire
}

Button.propTypes = {
    text: PropTypes.string,
    children: PropTypes.any,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired
}

Button.defaultProps = {
    type: 'button'
}

export default Button;

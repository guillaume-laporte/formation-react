import React from 'react';
import style from './Button.module.css'
import PropTypes from 'prop-types'

// function Button() {}

// Approche proche de TS (on peut facilement rajouter le typage, Button:XXX)
const Button = (props) => {
    console.log(props);
    return (
        <button style={{...props.style, backgroundColor: props.bgColor}} type={props.type} className={style.Button + ' btn'} onClick={(evt) => {
            if (undefined !== props.onClick && typeof props.onClick === 'function') {
                props.onClick('click');
            }
        }}>
            {undefined !== props.children ? props.children : props.text}
        </button>
    );
    // return <><button>Benjamin</button><button>Benjamin</button></> => balise vide car un seul premier niveau obligatoire
    // onClick={evt => props.onClick()}
}

Button.propTypes = {
    text: PropTypes.string,
    children: PropTypes.any,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    bgColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
}

Button.defaultProps = {
    type: 'button',
    onClick: () => console.log("fonction default envoyée par l'enfant"),
    bgColor: 'skyblue'
}

export default Button;

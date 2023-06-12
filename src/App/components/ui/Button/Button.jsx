import React from 'react';
import style from './Button.module.css'
import PropTypes from 'prop-types'

// function Button() {}

// Approche proche de TS (on peut facilement rajouter le typage, Button:XXX)
const Button = (props) => {
    // console.log(props);
    return (
        <button style={{...props.style, color: props.color}} type={props.type}
                className={`${style.Button} btn${
                    undefined !== props.className ? ' ' + props.className : ''
                } ${
                    undefined !== props.isClicked && props.isClicked ? ' ' + style.clicked : ''
                }`}
                onClick={(evt) => {
                    if (undefined !== props.onClick && typeof props.onClick === 'function') {
                        props.onClick('click');
                    }
                }}
        >
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
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
    className: PropTypes.oneOf(['primary', 'error'])
}

Button.defaultProps = {
    type: 'button',
    onClick: () => console.log("fonction default envoyée par l'enfant"),
    color: 'white'
}

export default Button;

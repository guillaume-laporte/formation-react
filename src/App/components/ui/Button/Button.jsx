import React from 'react';
import style from './Button.module.css'
import PropTypes from 'prop-types'

// function Button() {}

// Approche proche de TS (on peut facilement rajouter le typage, Button:XXX)
const Button = (props) => {
    console.log(props);
    return (
        <button type={props.type} className={style.Button + ' btn'} onClick={(evt) => {
            if (undefined !== props.onClick && typeof props.onClick === 'function') {
                props.onClick();
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
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    type: 'button',
    onClick: () => console.log('coucou')
}

export default Button;

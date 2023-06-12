import React, {useState, useEffect} from 'react';
import style from './Button.module.css'
import PropTypes from 'prop-types'

// function Button() {}

// Approche proche de TS (on peut facilement rajouter le typage, Button:XXX)
const Button = (props) => {
    // console.log(props);

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
        if (isClicked) { setIsClicked(false); }
        }, 1000);
    }, [isClicked]);

    return (
        <button style={{...props.style, color: props.color}} type={props.type}
                className={`${style.Button} btn${
                    undefined !== props.className ? ' ' + props.className : ''
                } ${
                    true === isClicked ? ' ' + style.clicked : ''
                }`}
                onClick={(evt) => {
                    setIsClicked(true);
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

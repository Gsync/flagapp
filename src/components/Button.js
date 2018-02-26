import React from 'react'
import './Button.css';

const Button = ({ text, onClick, type }) => (
    <button
        className="btn"
        type={type || "button"}
        onClick={onClick}
    >
        {text}
    </button>
);

export default Button;
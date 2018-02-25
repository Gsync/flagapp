import React from 'react'
import './Options.css';

const Options = props => {
    let inputs = props.options.map(option => (
        <label key={option.id} className="option">
            <input
                type="radio"
                value={option.id}
                checked={option.checked}
            />
            {option.name}
        </label>
    ));
    return (
        <form className="flag-form">
            <div className="option-container">
                {inputs}
            </div>
        </form>
    );
}

export default Options;
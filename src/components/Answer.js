import React from 'react'
import Button from './Button';
import './Answer.css';

let output;

const Answer = ({ correct, answer, onNext }) => {
    if (correct) {
        output = (
            <div className="correct">
                {`Correct!: ${answer} is the right Answer.`}
            </div>
        );
    } else {
        output = (
            <div className="incorrect">
                {`Incorrect! Correct Answer: ${answer}`}
            </div>
        );
    }
    return (
        <div className="result">
            {output}
            <Button text="NEXT" onClick={onNext} />
        </div>
    );
}


export default Answer;
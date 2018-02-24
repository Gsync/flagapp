import React, { Component } from 'react'
import Options from './Options';
import Answer from './Answer';
import './Question.css';

const QuestionStates = {
    QUESTION: 1,
    ANS_WRONG: 2,
    ANS_CORRECT: 3,
};

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userOption: undefined
        };
    }
    render() {
        return (
            <div>
                Question Container
                <Options />
            </div>
        );
    }
}

export default Question;
export { QuestionStates };
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
    static defaultProps = {
        options: []
    }
    constructor(props) {
        super(props);
        this.state = {
            userOption: undefined
        };
    }
    render() {
        let output = this.props.options.map(option => {
            return (
                <div key={option.id}>
                    {option.name}
                </div>
            );
        });
        return (
            <div>
                Question state:
                {this.props.questionState}
                {output}
                {<img src={this.props.flag} />}
                <Options />
            </div>
        );
    }
}

export default Question;
export { QuestionStates };
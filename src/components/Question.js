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
        let options = this.props.options.map(option => ({
            ...option,
            checked: this.state.userOption === option.id
        })) //Add checked key/value to options object
        console.log(options);
        let output = (
            <Options options={options} />
        );
        return (
            <div>
                <img
                    className="flag-image"
                    src={this.props.flag}
                    alt="Flag Image"
                />
                {output}
                Question state:
                {this.props.questionState}
                <h3>correct answer: {this.props.answer}</h3>
            </div>
        );
    }
}

export default Question;
export { QuestionStates };
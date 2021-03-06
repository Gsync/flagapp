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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            userOption: Number(e.target.value)
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onGuess(this.state.userOption);
    }
    render() {
        let options = this.props.options.map(option => ({
            ...option,
            checked: this.state.userOption === option.id
        })) //Add checked key/value to options object
        let output;
        if (this.props.questionState === QuestionStates.QUESTION) {
            output = (
                <Options 
                    options={options}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                />
            );
        } else {
            output = (
                <Answer 
                    answer={this.props.answer}
                    correct={this.props.questionState === QuestionStates.ANS_CORRECT}
                    onNext={this.props.onNext}
                />
            );
        }
        return (
            <div>
                <img
                    className="flag-image"
                    src={this.props.flag}
                    alt="Flag img"
                />
                {output}
            </div>
        );
    }
}

export default Question;
export { QuestionStates };
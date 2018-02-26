import React, { Component } from 'react'
import Question, { QuestionStates } from './Question';
import shuffle from 'shuffle-array';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [], //data to get back from API Request
            options: [],
            selectOption: undefined,
            questionState: undefined,
        }
        this.onGuess = this.onGuess.bind(this);
    }
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(countries => {
                const selectOption = Math.floor(Math.random() * countries.length);
                const options = this.getOptions(selectOption, countries);
                this.setState({
                    countries,
                    selectOption,
                    options,
                    questionState: QuestionStates.QUESTION,
                });
            }).catch(console.warn);
    }
    onGuess(answer) {
        let questionState;
        if (answer === this.state.selectOption) {
            questionState = QuestionStates.ANS_CORRECT;
        } else {
            questionState = QuestionStates.ANS_WRONG;
        }
        this.setState({ questionState });
    }
    getOptions(selectOption, countries) {
        let options = [selectOption];
        while (options.length < 4) {
            let option = Math.floor(Math.random() * countries.length);
            if (!options.includes(option)) {
                options.push(option);
            }
        }
        return shuffle(options);
    }
    render() {
        let output = (<div>Loading...</div>);
        if (this.state.selectOption !== undefined) {
            const name = this.state.countries[this.state.selectOption].name;
            const flag = this.state.countries[this.state.selectOption].flag;
            let options = this.state.options.map(option => ({
                id: option,
                name: this.state.countries[option].name,
            }));
            output = (
                <Question
                    options={options}
                    flag={flag}
                    answer={name}
                    questionState={this.state.questionState}
                    onGuess={this.onGuess}
                />
            );
        }
        return (
            <div>
                {output}
            </div>
        );
    }
}

export default Quiz;
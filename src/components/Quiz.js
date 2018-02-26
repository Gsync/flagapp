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
            score: 0,
        }
        this.onGuess = this.onGuess.bind(this);
        this.nextQestion = this.nextQestion.bind(this);
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
        let score = 0;
        if (answer === this.state.selectOption) {
            questionState = QuestionStates.ANS_CORRECT;
            score++;
        } else {
            questionState = QuestionStates.ANS_WRONG;
        }
        this.setState({ questionState, score });
    }
    nextQestion() {
        const selectOption = Math.floor(Math.random() * this.state.countries.length);
        const options = this.getOptions(selectOption, this.state.countries);
        this.setState({
            selectOption,
            options,
            questionState: QuestionStates.QUESTION
        });

    }
    getOptions(selectOption, countries) {
        let options = [selectOption];
        let tries = 0;
        while (options.length < 4 && tries < 10) {
            let option = Math.floor(Math.random() * countries.length);
            if (!options.includes(option)) {
                options.push(option);
            } else {
                tries++;
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
                    onNext={this.nextQestion}
                    score={this.state.score}
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
import React, { Component } from 'react'
import Question from './Question';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            options: [],
            correctOption: undefined,
            currentState: undefined,
        }
    }
    render() {
        let output = (<Question />);
        return (
            <div>
                Quiz Container
                {output}
            </div>
        );
    }
}

export default Quiz;
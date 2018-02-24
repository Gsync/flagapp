import React, { Component } from 'react'
import Options from './Options';
import './Question.css';

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
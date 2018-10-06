import React from 'react';
import './guess-form.css';
export default class GuessForm extends React.Component {

    onSubmit(event){
        event.preventDefault();

        if(this.props.makeGuess){
            const text = this.input.value;
            this.props.makeGuess(text);
        }
        this.input.value = "";
        this.input.focus();
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <input 
                    type="number"
                    name="userGuess"
                    id="userGuess"
                    className="text"
                    min="1"
                    max="100"
                    ref={input => this.input = input}
                    required
                >
                </input>
                <button
                    type="submit"
                    name="submit"
                    id="guessButton"
                    className="button"
                >
                    Guess
                </button>
            </form>
        );
    }
}

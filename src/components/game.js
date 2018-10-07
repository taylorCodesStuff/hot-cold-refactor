import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            answer: Math.floor(Math.random() * 101),
            guess: 0,
            guesses: [], 
            feedback: 'Make your Guess!'
        }
    }

    onMakeGuess(guess) {
        console.log(typeof guess);
        console.log(guess);
        guess = parseInt(guess);

        if(this.state.guesses.indexOf(guess) > -1){
            alert('You\'ve already guessed this number!');
            return;
        } else {
           let newFeedback = this.calculateFeedback(guess);
           this.setState({
               guess: guess,
               guesses: [...this.state.guesses, guess],
               feedback: newFeedback
           });
        }
    }

    calculateFeedback(guess){
        let diff = Math.abs(guess - this.state.answer);
        if(diff < 1) return "YOU WON! Click new game to play again!";
        if(this.state.guesses.length < 1){
            if(diff >= 50) return "You're ICE COLD";
            else if(diff >= 25) return "You're cold";
            else if(diff >= 15) return "You're warm-ish";
            else if(diff >= 10) return "You're warm";
            else if(diff >= 5) return "You're very warm";
            else return "You're in HELL";
        } else {
            let len = this.state.guesses.length;
            let lastGuess = this.state.guesses[len-1];
            let lastGuessDiff = Math.abs(lastGuess - this.state.answer);
            if(lastGuessDiff > diff) return "Warmer";
            else return "Colder";
        }
    }

    reset() {
        this.setState({
            answer: Math.floor(Math.random() * 101),
            guess: 0,
            guesses: [],
            feedback: 'Make your Guess!'
        });
    }
    render() {
        console.log(this.state.guesses);
        console.log(this.state.guess);
        console.log(this.state.answer);
        return(
            <div>
                <Header onReset={() => this.reset()} />
                <main>
                    <GuessSection 
                    makeGuess={guess => this.onMakeGuess(guess)}
                    feedback={this.state.feedback}
                    />
                    <StatusSection guesses={this.state.guesses} />
                    <InfoSection />
                </main>
            </div>
        );
    }
}



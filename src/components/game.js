import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    onMakeGuess(guess) {
        console.log(typeof guess);
        console.log(guess);
    }

    render() {
        return(
            <div>
                <Header />
                <main>
                    <GuessSection makeGuess={guess => this.onMakeGuess(guess)}/>
                    <StatusSection />
                    <InfoSection />
                </main>
            </div>
        );
    }
}



import React from 'react';
import FeedBack from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
    return (
        <section>
            <FeedBack />
            <GuessForm makeGuess={guess => props.makeGuess(guess)}/>
        </section>
    );
}
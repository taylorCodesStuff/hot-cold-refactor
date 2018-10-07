import React from 'react';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default function StatusSection(props) {
    return (
        <section>
            <GuessCount count={props.guesses.length} />
            <GuessList guesses={props.guesses} />
        </section>
    );
}
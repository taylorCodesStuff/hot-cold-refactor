import React from 'react';

export default function GuessCount(props) {
    const isPlural = props.count > 1 || props.count === 0;
    const guessNoun = isPlural ? 'guesses' : 'guess';
    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.count}</span> {guessNoun}!
        </h2>
    );
}
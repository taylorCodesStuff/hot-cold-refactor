import React from 'react';
import './guess-list.css';

export default function GuessList(props) {
    const guesses = <li>1</li>
    return (
        <ul id="guessList" className="guessBox clearfix">
           {guesses}
        </ul>
    );
}
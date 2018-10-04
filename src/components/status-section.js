import React from 'react';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default function StatusSection() {
    return (
        <section>
            <GuessCount />
            <GuessList />
        </section>
    );
}
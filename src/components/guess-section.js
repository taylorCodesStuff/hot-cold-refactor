import React from 'react';
import FeedBack from './feedback';
import GuessForm from './guess-form';

export default function GuessSection() {
    return (
        <section>
            <FeedBack />
            <GuessForm />
        </section>
    );
}
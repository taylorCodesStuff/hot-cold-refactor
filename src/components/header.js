import React from 'react';
import Nav from './nav';
import './header.css';

export default function Header(props) {
    return (
        <section>
            <Nav onReset={() => props.onReset()} />
            <h1>HOT or COLD</h1>
        </section>
    );
} 
import React from 'react';
import './nav.css';

export default function Nav(props){
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a
                        href="#feedback"
                        className="new"
                        onClick={() => props.onReset()}
                    >
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}
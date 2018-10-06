import React from 'react';
import './nav.css';

export default function Nav(props){
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a 
                        href="#what" 
                        className="what"
                        >
                        What?
                    </a>
                </li>
                <li>
                    <a
                        href="#feedback"
                        className="new"

                    >
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}
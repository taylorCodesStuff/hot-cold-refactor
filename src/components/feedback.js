import React from 'react';
import './feedback.css';

export default function FeedBack(props) {
    return (
        <h2
         id="feedback"
         role="status"
        >
            {props.feedback}
        </h2>
    );
}
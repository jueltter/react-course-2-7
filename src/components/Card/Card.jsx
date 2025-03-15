import React from 'react';
import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={`${styles.card}`}>
            <h2>Card Title</h2>
            <p>Card content goes here.</p>
        </div>
    );
};

export default Card;
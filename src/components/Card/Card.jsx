import React from 'react';
//import './styles.css';
//import styles from './Card.module.css';
//import styles from './Card.module.scss';
import styles from './Card.module.sass';

const Card = () => {
    return (
        <div className={`${styles.card}`}>
            <h2>Card Title</h2>
            <p>Card content goes here.</p>
        </div>
    );
};

export default Card;
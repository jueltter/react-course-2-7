import React from 'react';
import styles from './CardFooter.module.sass';

const CardFooter = ({ children }) => {
    return (
        <div className={styles.container}>
            <button>Go!</button>
        </div>
    );
};

export default CardFooter;
import React from 'react';
import styles from './CardHeader.module.sass';

const CardHeader = ({ img, title }) => {
    return (
        <>
            <div className={styles.container}>
                {img && <img src={`/${img}`} className={styles.image} />}
            </div>
            <div className={styles.container}>
                {title && <h3>{title}</h3>}
            </div>
        </>
    );
};

export default CardHeader;
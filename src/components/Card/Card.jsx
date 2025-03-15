import React from 'react';
//import './styles.css';
//import styles from './Card.module.css';
//import styles from './Card.module.scss';
import styles from './Card.module.sass';
import CardHeader from './CardHeader/CardHeader';
import CardContent from './CardContent/CardContent';
import CardFooter from './CardFooter/CardFooter';

const Card = () => {
    return (
        
        <div className={`${styles.card}`}>
            <CardHeader img="wizardmon.jpg" title="Stalin" />
            <CardContent content="A Software Artisan from Ecuador 🇪🇨!" />
            <CardFooter />
        </div>
        
    );
};

export default Card;
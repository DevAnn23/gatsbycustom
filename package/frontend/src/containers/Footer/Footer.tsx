import React from 'react';

import * as styles from './Footer.module.scss';
import FooterI from './Footer.type';
import { cn } from '../../utils/';

const Footer = ({}: FooterI) => {
    return (
        <footer className={styles.footer}>
            <div className={cn(styles.wrapper, 'container')}>footer</div>
        </footer>
    );
};

export default Footer;

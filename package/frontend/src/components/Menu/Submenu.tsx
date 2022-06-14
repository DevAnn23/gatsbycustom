import React from 'react';
import { Link } from 'gatsby';

import * as styles from './Menu.module.scss';
import MenuI from './Menu.type';

const Submenu = ({ menuItems, className }: MenuI) => {
    const navItems = menuItems.filter((item) => item.parentId === null);
    {
        console.log(menuItems);
        console.log('menuItems');
    }
    return (
        <ul className={className}>
            {menuItems.map((item) => (
                <li className={styles.MenuItem} key={item.databaseId}>
                    <Link className={styles.link} to={item.url}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Submenu;

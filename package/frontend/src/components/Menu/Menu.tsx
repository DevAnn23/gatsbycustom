import React from 'react';
import { Link } from 'gatsby';

import * as styles from './Menu.module.scss';
import MenuI from './Menu.type';
import Submenu from './Submenu';

const Menu = ({ menuItems, className }: MenuI) => {
    const navItems = menuItems.filter((item: any) => item.parentId === null);

    return (
        <nav className={className}>
            <ul className={styles.MenuList}>
                {navItems.map((item: any, index) => (
                    <li className={styles.MenuItem} key={index + 1}>
                        <Link className={styles.link} to={item.url}>
                            {item.label}
                        </Link>
                        {console.log(item.childItems.nodes.length)}
                        {item.childItems.nodes.length > 0 && (
                            <>
                                {console.log(item.childItems.nodes.length)}

                                <Submenu
                                    menuItems={item.childItems.nodes}
                                    className={styles.mainMenu}
                                />
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;

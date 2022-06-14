import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import * as styles from './Header.module.scss';
import HeaderI from './Header.type';
import Menu from '../../components/Menu/Menu';

const Header = ({}: HeaderI) => {
    const dataQ = useStaticQuery(data);
    const items = dataQ.allWpMenuItem.nodes;
    return (
        <>
            <header className={styles.header}>
                <Menu menuItems={items} className={styles.mainMenu} />
            </header>
        </>
    );
};

export default Header;
const data = graphql`
    query {
        allWpMenuItem(filter: { locations: { eq: MAIN_MENU } }) {
            nodes {
                url
                path
                label
                databaseId
                parentId
                childItems {
                    nodes {
                        url
                        path
                        label
                        databaseId
                        parentId
                    }
                }
            }
        }
    }
`;

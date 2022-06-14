import React from 'react';

import LayoutI from './Layout.type';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Helmet from '../Helmet/Helmet';

const Layout = ({ children }: LayoutI) => {
    return (
        <>
            <Helmet title={'title'} thumbnail={'thumbnail'} />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

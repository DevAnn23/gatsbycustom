import React from 'react';
import ReactHelmet from 'react-helmet';

import HelmetI from './Helmet.type';

const Helmet = ({ title, thumbnail }: HelmetI) => (
    <ReactHelmet
        title={`Project Name | ${title}`}
        meta={[
            {
                name: 'description',
                content: 'desc',
            },
            {
                name: 'robots',
                content: 'index,follow',
            },
            {
                name: 'copyright',
                content: 'Copyrights © Project Name. All rights reserved.',
            },
            {
                name: 'msapplication-TileColor',
                content: '#da532c',
            },
            {
                name: 'theme-color',
                content: '#ffffff',
            },
            {
                property: 'og:image',
                content: '',
            },
        ]}
        htmlAttributes={{ lang: 'en-US' }}
    ></ReactHelmet>
);

export default Helmet;

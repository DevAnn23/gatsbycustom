import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import ImageI from './Image.type';

const Image = ({
    localFile: { childImageSharp, publicURL },
    altText,
    className,
    style,
    sizes,
    loading = 'lazy',
    ...props
}: ImageI) =>
    childImageSharp ? (
        <GatsbyImage
            className={className}
            image={childImageSharp.gatsbyImageData}
            alt={altText}
            style={style}
            sizes={sizes}
            {...props}
        />
    ) : (
        <img
            className={className}
            src={publicURL}
            alt={altText}
            style={style}
            loading={loading}
            {...props}
        />
    );

export default Image;

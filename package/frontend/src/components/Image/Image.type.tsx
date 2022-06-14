import { IGatsbyImageData } from 'gatsby-plugin-image';
import { CSSProperties } from 'react';

interface ImageI {
    altText: string;
    localFile: {
        childImageSharp?: {
            gatsbyImageData: IGatsbyImageData;
        };
        publicURL: string;
    };
    className?: string;
    style?: CSSProperties;
    sizes?: string;
    loading?: 'eager' | 'lazy';
}

export default ImageI;

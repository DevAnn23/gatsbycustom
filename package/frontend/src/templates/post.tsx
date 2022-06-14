import '../assets/styles/index.scss';

import React from 'react';

import { graphql } from 'gatsby';
import Seo from 'gatsby-plugin-wpgraphql-seo';

import Layout from '../containers/Layout/Layout';

const Post = ({ pageContext, data }: any) => {
    return (
        <Layout {...pageContext}>
            <Seo post={data.post} />
            <h1>{pageContext.title}</h1>
        </Layout>
    );
};

export default Post;

export const query = graphql`
    query ($id: String) {
        post: wpPost(id: { eq: $id }) {
            seo {
                opengraphPublisher
                breadcrumbs {
                    text
                    url
                }
                opengraphPublishedTime
                opengraphModifiedTime
                metaRobotsNofollow
                metaKeywords
                metaDesc
                fullHead
                cornerstone
                canonical
                opengraphTitle
                opengraphSiteName
                opengraphUrl
                opengraphType
                readingTime
                twitterDescription
                title
                twitterTitle
                twitterImage {
                    altText
                    srcSet
                    sourceUrl
                }
                schema {
                    articleType
                    pageType
                    raw
                }
                opengraphAuthor
                metaRobotsNoindex
                opengraphDescription
            }
            title
            content
            id
            uri
            date(formatString: "DD MMMM YYYY")
        }
    }
`;

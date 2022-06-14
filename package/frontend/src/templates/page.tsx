import '../assets/styles/index.scss';

import React from 'react';
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout/Layout';
import getSectionComponent from '../utils/sectionComponentsMap';
import SectionI from '../types/Section.type';

const Page = ({ pageContext, data }: any) => {
    // const { sections } = data.page.sections;

    return (
        <Layout {...pageContext}>
            <Seo post={data.page} />
            <h1>{pageContext.title}</h1>
            {/* {sections
                ?.filter(({ fieldGroupName }: SectionI) => fieldGroupName)
                .map(
                    ({ fieldGroupName, ...props }: SectionI, index: number) => {
                        const Section = getSectionComponent(fieldGroupName);
                        return (
                            <Section
                                key={fieldGroupName + index}
                                dataKey={fieldGroupName}
                                {...props}
                            />
                        );
                    }
                )} */}
        </Layout>
    );
};

export default Page;

export const query = graphql`
    query($id: String) {
        page: wpPage(id: { eq: $id }) {
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
        }
    }
`;

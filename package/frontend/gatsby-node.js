const path = require(`path`);

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const {
        data: {
            allWpPage: { nodes: pageNodes },
            allWpPost: { nodes: postNodes },
        },
    } = await graphql(`
        query {
            allWpPage {
                nodes {
                    uri
                    id
                    title
                }
            }

            allWpPost(sort: { fields: date, order: DESC }) {
                nodes {
                    uri
                    title
                    content
                    id
                    date(formatString: "DD MMMM YYYY")
                }
            }
        }
    `);

    const pageTemplate = path.resolve(`./src/templates/page.tsx`);
    pageNodes.forEach((page) => {
        createPage({
            path: page.uri != '/home/' ? page.uri : '/',
            component: pageTemplate,
            context: {
                id: page.id,
                title: page.title,
                uri: page.uri,
                ...page,
            },
        });
    });
    const postTemplate = path.resolve(`./src/templates/post.tsx`);
    postNodes.forEach((post) => {
        createPage({
            path: post.uri,
            component: postTemplate,
            context: {
                id: post.id,
                title: post.title,
                uri: post.uri,
            },
        });
    });
};

exports.onCreateWebpackConfig = (helper) => {
    const { stage, actions, getConfig } = helper;
    if (stage === 'develop') {
        const config = getConfig();
        const miniCssExtractPlugin = config.plugins.find(
            (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
        );
        if (miniCssExtractPlugin) {
            miniCssExtractPlugin.options.ignoreOrder = true;
        }
        actions.replaceWebpackConfig(config);
    }
    if (stage === 'build-javascript') {
        actions.setWebpackConfig({
            devtool: false,
        });
    }
};

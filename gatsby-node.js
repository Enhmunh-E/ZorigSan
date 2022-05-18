const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query {
      allContentfulPrograms {
        edges {
          node {
            contentful_id
            longDescription {
              longDescription
            }
            image {
              file {
                url
              }
            }
            shortDescription
            title
            event {
              contentful_id
              description {
                description
              }
              image {
                file {
                  url
                }
              }
              startDate
              endDate
              name
              alumni {
                contentful_id
                name
                word {
                  word
                }
                image {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const eventCategories = path.resolve(`./src/pages/event-categories.js`);
  const eventDetails = path.resolve(`./src/pages/event-details.js`);
  queryResults.data.allContentfulPrograms.edges.forEach((node) => {
    createPage({
      component: eventCategories,
      context: {
        data: node.node,
      },
      path: `/${node.node.contentful_id}`,
    });
    node.node.event?.forEach((sNode) => {
      createPage({
        component: eventDetails,
        context: {
          data: sNode,
        },
        path: `/${node.node.contentful_id}/${sNode.contentful_id}`,
      });
    });
  });
};
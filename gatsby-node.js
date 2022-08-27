const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query allContentfulProgramPage {
      allContentfulProgramPage {
        nodes {
          description
          programTypes {
            contentful_id
            image {
              file {
                url
              }
            }
            longDescription {
              longDescription
            }
            shortDescription
            title
            program {
              contentful_id
              description {
                description
              }
              endDate
              image {
                file {
                  url
                }
              }
              name
              projectNames
              startDate
              logo {
                file {
                  url
                }
              }
              faq {
                answer {
                  answer
                }
                question {
                  question
                }
              }
            }
          }
          title
        }
      }
    }
  `);
  const eventCategories = path.resolve(`./src/pages/event-categories.js`);
  const eventDetails = path.resolve(`./src/pages/event-details.js`);
  queryResults.data.allContentfulProgramPage.nodes.forEach((pageNode) => {
    pageNode.programTypes.forEach((node) => {
      createPage({
        component: eventCategories,
        context: {
          data: node,
        },
        path: `/${node.contentful_id}`,
      });
      node.program?.forEach((sNode) => {
        createPage({
          component: eventDetails,
          context: {
            data: sNode,
          },
          path: `/${node.contentful_id}/${sNode.contentful_id}`,
        });
      });
    });
  });
};

// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
  // const { createPage } = actions;
  // const queryResults = await graphql(`
  //   query {
  //     allContentfulPrograms {
  //       edges {
  //         node {
  //           contentful_id
  //           longDescription {
  //             longDescription
  //           }
  //           image {
  //             file {
  //               url
  //             }
  //           }
  //           shortDescription
  //           title
  //           event {
  //             contentful_id
  //             description {
  //               description
  //             }
  //             image {
  //               file {
  //                 url
  //               }
  //             }
  //             startDate
  //             endDate
  //             name
  //             alumni {
  //               contentful_id
  //               name
  //               word {
  //                 word
  //               }
  //               image {
  //                 file {
  //                   url
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // const productTemplate = path.resolve(`./src/pages/event-categories.js`);
  // queryResults.data.allContentfulPrograms.edges.forEach((node) => {
  //   createPage({
  //     component: productTemplate,
  //     context: {
  //       data: node.node,
  //     },
  //     path: `/event-categories/${node.node.contentful_id}`,
  //   });
  // });
// };
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query dataInNode {
      allGemsJson {
        edges {
          node {
            mainHeading
            headingOne
            headingTwo
            imageMain
            desc2
            desc1
            link
          }
        }
      }
    }
  `)

  data.allGemsJson.edges.forEach(gem => {
    const slug = gem.node.link
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/template/gem_details.tsx`),
      context: {
        mainHeading: gem.node.mainHeading,
        desc2: gem.node.desc2,
        heading1: gem.node.heading1,
        imageMain: gem.node.imageMain,
        desc1: gem.node.desc1,
        heading2: gem.node.heading2,
      },
    })
  })
}

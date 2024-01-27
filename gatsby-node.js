exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query dataInNode {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
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
    }
  `)
  console.log("data.allMarkdownRemark.edges", data.allMarkdownRemark.edges)
  data.allMarkdownRemark.edges.forEach(gem => {
    console.log("gem", gem)
    const gemContent = gem?.node?.frontmatter
    const slug = `/gems/${gemContent.link
      ?.toString()
      .toLowerCase()
      .replace(/\s+/g, "-")}`
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/template/gem_details.tsx`),
      context: {
        link: gemContent.link,
        desc1: gemContent.desc1,
        desc2: gemContent.desc2,
        mainHeading: gemContent.mainHeading,
        imageMain: gemContent.imageMain,
        headingTwo: gemContent.headingTwo,
        headingOne: gemContent.headingOne,
      },
    })
  })
}

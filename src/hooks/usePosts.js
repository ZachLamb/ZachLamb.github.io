import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query {
      allDevArticles(limit: 10) {
        edges {
          node {
            article {
              id
              url
              title
              published_at(formatString: "MM-DD-YYYY")
              description
              body_markdown
            }
          }
        }
      }
    }
  `)
    return data.allDevArticles.edges.map(post => ({
        id: post.node.article.id,
        url: post.node.article.url,
        title: post.node.article.title,
        date: post.node.article.published_at,
        desc: post.node.article.description,
        body: post.node.article.body_markdown,
    }))
}

export default usePosts
import { request } from 'graphql-request';
import path from 'path';

const GRAPHCMS_ENDPOINT = 'https://api-uswest.graphcms.com/v1/cjvjziu5s627901ehblbcdtu9/master';

const query = `
{
  posts{
    id
    title
    image{
      handle
    }
    content
    tags
    author{
      id
      name
    }
  }
  
  authors{
    id
    name
    avatar{
      handle
    }
    bibliography
  }
}
`

export default {
  getSiteData: () => ({
    title: 'Kimaleen Tran'
  }),
  getRoutes: async () => {
    const { authors, posts } = await request(GRAPHCMS_ENDPOINT, query)

    return [
      {
        path: '/',
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/pages/post',
          getData: () => ({
            post
          })
        }))
      },
      {
        path: '/about',
        component: 'src/pages/about',
        getData: () => ({
          authors
        })
      }
    ];
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages')
      }
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
};

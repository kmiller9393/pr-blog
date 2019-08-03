import { request } from 'graphql-request';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const GRAPHCMS_ENDPOINT =
  'https://api-uswest.graphcms.com/v1/cjvjziu5s627901ehblbcdtu9/master';

const query = `
{
  posts{
    id
    title
    image{
      handle
    }
    content
    tag
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
`;

export default {
  getSiteData: () => ({
    title: 'Kimaleen Tran'
  }),
  getRoutes: async () => {
    const { authors, posts } = await request(GRAPHCMS_ENDPOINT, query);

    return [
      {
        path: '/',
        component: 'src/pages/index.js',
        getData: () => ({
          posts,
          authors
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
        path: '/blog',
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
        path: '/thoughts',
        component: 'src/pages/thoughts',
        getData: () => {
          let thoughtsPosts = posts.filter(post => post.tag === 'Thoughts');

          return { posts: [...thoughtsPosts] };
        },
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/pages/post',
          getData: () => ({
            post
          })
        }))
      },
      {
        path: '/lifestyle',
        component: 'src/pages/lifestyle',
        getData: () => {
          let lifestylePosts = posts.filter(post => post.tag === 'Lifestyle');

          return { posts: [...lifestylePosts] };
        },
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/pages/post',
          getData: () => ({
            post
          })
        }))
      },
      {
        path: '/travel',
        component: 'src/pages/travel',
        getData: () => {
          let travelPosts = posts.filter(post => post.tag === 'Travel');

          return { posts: [...travelPosts] };
        },
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/pages/post',
          getData: () => ({
            post
          })
        }))
      },
      {
        path: '/food',
        component: 'src/pages/food',
        getData: () => {
          let foodPosts = posts.filter(post => post.tag === 'Food');

          return { posts: [...foodPosts] };
        },
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/pages/post',
          getData: () => ({
            post
          })
        }))
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

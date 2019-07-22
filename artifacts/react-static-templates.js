

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/kumi5605/Desktop/projects/pr-blog/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/pages/404.js'), universalOptions)
      t_0.template = '../src/pages/404.js'
      
const t_1 = universal(import('../src/pages/about.js'), universalOptions)
      t_1.template = '../src/pages/about.js'
      
const t_2 = universal(import('../src/pages/blog.js'), universalOptions)
      t_2.template = '../src/pages/blog.js'
      
const t_3 = universal(import('../src/pages/contact.js'), universalOptions)
      t_3.template = '../src/pages/contact.js'
      
const t_4 = universal(import('../src/pages/food.js'), universalOptions)
      t_4.template = '../src/pages/food.js'
      
const t_5 = universal(import('../src/pages/index.js'), universalOptions)
      t_5.template = '../src/pages/index.js'
      
const t_6 = universal(import('../src/pages/lifestyle.js'), universalOptions)
      t_6.template = '../src/pages/lifestyle.js'
      
const t_7 = universal(import('../src/pages/post.js'), universalOptions)
      t_7.template = '../src/pages/post.js'
      
const t_8 = universal(import('../src/pages/travel.js'), universalOptions)
      t_8.template = '../src/pages/travel.js'
      
const t_9 = universal(import('../src/pages/post'), universalOptions)
      t_9.template = '../src/pages/post'
      

// Template Map
export default {
  '../src/pages/404.js': t_0,
'../src/pages/about.js': t_1,
'../src/pages/blog.js': t_2,
'../src/pages/contact.js': t_3,
'../src/pages/food.js': t_4,
'../src/pages/index.js': t_5,
'../src/pages/lifestyle.js': t_6,
'../src/pages/post.js': t_7,
'../src/pages/travel.js': t_8,
'../src/pages/post': t_9
}
// Not Found Template
export const notFoundTemplate = "../src/pages/404.js"


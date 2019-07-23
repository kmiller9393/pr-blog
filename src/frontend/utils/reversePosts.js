const reversePosts = posts => {
  let newPosts = [];

  posts.forEach(post => {
    if (!newPosts.includes(post)) newPosts.unshift(post);
  });

  return newPosts;
};

export default reversePosts;

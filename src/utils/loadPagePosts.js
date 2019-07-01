const loadPagePosts = posts =>
  posts.filter(post =>
    window.location.pathname.includes(post.tag.toLowerCase())
  );

export default loadPagePosts;

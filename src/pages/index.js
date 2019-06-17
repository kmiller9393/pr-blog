import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import RecentPosts from '../components/RecentPosts/RecentPosts';
import InstaPost from '../components/InstaPost/InstaPost';
import Footer from '../components/Footer/Footer';

class index extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }

  getPosts = () => {
    const { posts } = this.props;
    let newPosts = [];

    for (let i = 1; i <= 3; i++) {
      newPosts.push(posts[posts.length - i]);
    }

    return newPosts;
  };

  addIdea = (name, email, idea) => {
    const newIdea = { ...idea, id: Date.now() };
    const ideas = [...this.state.ideas, newIdea];
    this.setState({ ideas });
  };

  render() {
    const { handle } = this.props.authors[0].avatar;
    const { bibliography } = this.props.authors[0];

    const recentPosts = this.getPosts();

    return (
      <div className="home-container">
        <article className="image-container banner-image">
          <aside className="author-image-container">
            <img
              className="author-image"
              src={`https://media.graphcms.com/${handle}`}
              alt="Kimaleen"
            />
          </aside>
          <aside className="bio-text">
            <p>{bibliography}</p>
            <h4 className="signature">Kimaleen</h4>
          </aside>
        </article>
        <RecentPosts posts={recentPosts} />
        <Footer addIdea={this.addIdea} />
      </div>
    );
  }
}

export default withRouteData(index);

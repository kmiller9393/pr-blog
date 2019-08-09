import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import RecentPosts from '../frontend/components/RecentPosts/RecentPosts';
import Footer from '../frontend/components/Footer/Footer';
import Header from '../frontend/components/Header/Header';
import Navbar from '../frontend/components/Navbar/Navbar';
import Sidebar from '../frontend/components/Sidebar/Sidebar';
import Backdrop from '../frontend/components/Backdrop/Backdrop';
import signature from '../frontend/images/signature.svg';

class index extends Component {
  state = {
    ideas: [],
    drawerOpen: false
  };

  getPosts = () => {
    const { posts } = this.props;
    let newPosts = [];

    for (let i = 1; i <= 3; i++) {
      if (posts[posts.length - i]) {
        newPosts.push(posts[posts.length - i]);
      }
    }

    return newPosts;
  };

  handleSubscribe = (email, idea) => {
    const newIdea = { ...idea, id: Date.now() };
    const ideas = [...this.state.ideas, newIdea];
    this.setState({ ideas });
  };

  toggleDrawer = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  render() {
    const { handle } = this.props.authors[0].avatar;
    const { bibliography } = this.props.authors[0];
    const { drawerOpen } = this.state;
    const { toggleDrawer } = this;

    const recentPosts = this.getPosts();

    return (
      <div className="home-container">
        <Sidebar display={drawerOpen} />
        {drawerOpen && <Backdrop toggleDrawer={toggleDrawer} />}
        <Header toggleDrawer={toggleDrawer} />
        <Navbar />
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
            <img src={signature} className="signature" alt="signature" />
          </aside>
        </article>
        <RecentPosts posts={recentPosts} />
        <Footer handleSubscribe={this.handleSubscribe} />
      </div>
    );
  }
}

export default withRouteData(index);

import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './instaPosts.css';

const instaPosts = [
  <InstagramEmbed
    className="insta-card"
    url="https://www.instagram.com/p/BxbSE6vhC7Y/"
    maxWidth={300}
    hideCaption={true}
    containerTagName="div"
  />,
  <InstagramEmbed
    className="insta-card"
    url="https://www.instagram.com/p/Bv24WsJBagt/"
    maxWidth={300}
    hideCaption={true}
    containerTagName="div"
  />,
  <InstagramEmbed
    className="insta-card"
    url="https://www.instagram.com/p/Bvk7FlUBMQ3/"
    maxWidth={300}
    hideCaption={true}
    containerTagName="div"
  />
];

export default instaPosts;

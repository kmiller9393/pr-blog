import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './instaPosts.css';

const instaPosts = [
  <InstagramEmbed
    className="insta-card"
    url="https://www.instagram.com/p/ByJcDqoBXOV/"
    maxWidth={300}
    hideCaption={true}
    containerTagName="div"
    key={1}
    thumbnail_url="https://instagram.fapa1-1.fna.fbcdn.net/vp/7d0196e787a8965b55a3ac2667a3861d/5D79F50E/t51.2885-15/sh0.08/e35/p640x640/56165223_328697697784169_5125572935053907042_n.jpg?_nc_ht=instagram.fapa1-1.fna.fbcdn.net"
  />,
  <InstagramEmbed
    className="insta-card"
    url="https://www.instagram.com/p/BvX577VHfSy/"
    maxWidth={300}
    hideCaption={true}
    containerTagName="div"
    key={2}
  />,
  <InstagramEmbed
    className="insta-card"
    url="https://www.instagram.com/p/BwD71YmH5KU/"
    maxWidth={300}
    hideCaption={true}
    containerTagName="div"
    key={3}
  />
];

export default instaPosts;

(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{69:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(10),r=a(17),l=a(8);t.default=Object(i.withRouteData)(function(e){var t=e.posts;return n.a.createElement("div",{className:"blog-container"},t.map(function(e){return n.a.createElement(r.Link,{key:e.id,to:"/post/".concat(e.id),className:"card",onClick:l.goToTop},n.a.createElement("div",{style:{paddingRight:"1rem"}},n.a.createElement("img",{alt:e.title,className:"card-img",src:"https://media.graphcms.com/resize=w:170,h:150,fit:crop/".concat(e.image[0].handle)})),n.a.createElement("div",null,n.a.createElement("h3",{style:{color:"#2b2b2b",margin:0}},e.title),n.a.createElement("p",{style:{color:"#2b2b2b",display:"flex"}},"By ",e.author.name)))}))})}}]);
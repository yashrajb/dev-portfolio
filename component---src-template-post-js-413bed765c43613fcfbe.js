(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var n=a(0),r=a.n(n),l=a(169),i=a(168),c=a(151),o=a.n(c),s="3006564972";t.default=function(e){e.slug;var t=e.data;console.log(t);var a=t.markdownRemark.frontmatter,n=a.title,c=a.createdAt,s=t.markdownRemark.html;return r.a.createElement(i.a,{page:n},r.a.createElement(l.a,{title:"blog - "+n,description:"blog on "+n}),r.a.createElement("div",{className:"container "+o.a.blog_template},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("strong",null,n)),r.a.createElement("h5",null,r.a.createElement("b",null,c))),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}})))}},164:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(164),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Yashraj Basan"}},allFile:{edges:[{node:{publicURL:"/static/yashraj-basan-full-stack-developer-PIET-69bbc8c81068a0125020daac5f13bc43.pdf"}}]}}}},167:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(166),i=a(165),c=a(149),o=a.n(c),s=function(e){e.siteTitle,e.header;var t=l.data;return r.a.createElement("nav",{className:"navbar navbar-expand-md "+o.a.navbar__purple},r.a.createElement(i.a,{className:"navbar-brand "+o.a.navbarBrand__white,to:"/"},t.site.siteMetadata.title),r.a.createElement("button",{className:"navbar-toggler "+o.a.navbar__toggle_button,type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},"menu"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.a,{className:"nav-link "+o.a.navlink__purple,to:"/projects"},"projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.a,{className:"nav-link "+o.a.navlink__purple,to:"/blog"},"blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.a,{className:"nav-link "+o.a.navlink__purple,to:"/experience"},"experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.a,{className:"nav-link "+o.a.navlink__purple,to:"/about"},"about")))))};t.a=function(e){var t=e.children,a=(e.comp,e.header);return r.a.createElement("div",null,r.a.createElement(s,{header:a}),t)}},169:function(e,t,a){"use strict";var n=a(170),r=a(0),l=a.n(r),i=a(4),c=a.n(i),o=a(171),s=function(e){var t=n.data.site.siteMetadata,a=t.title,r=t.description,i=t.host,c={title:e.title||a,description:e.description||r,image:""+i+(e.image||null),url:""+i+(e.pathname||null)};return l.a.createElement(o.Helmet,{title:c.title,titleTemplate:c.title},l.a.createElement("meta",{name:"description",content:c.description}),l.a.createElement("meta",{name:"image",content:c.image}),c.url&&l.a.createElement("meta",{property:"og:url",content:c.url}),!e.article?null:l.a.createElement("meta",{property:"og:type",content:"article"}),c.title&&l.a.createElement("meta",{property:"og:title",content:c.title}),c.description&&l.a.createElement("meta",{property:"og:description",content:c.description}),c.image&&l.a.createElement("meta",{property:"og:image",content:c.image}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),e.twitterUsername&&l.a.createElement("meta",{name:"twitter:creator",content:e.twitterUsername}),c.title&&l.a.createElement("meta",{name:"twitter:title",content:c.title}),c.description&&l.a.createElement("meta",{name:"twitter:description",content:c.description}),c.image&&l.a.createElement("meta",{name:"twitter:image",content:c.image}))};t.a=s,s.propTypes={title:c.a.string,description:c.a.string,image:c.a.string,article:c.a.bool},s.defaultProps={title:null,description:null,image:null,article:!1}},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Yashraj Basan",description:"Yashraj Basan is full stack developer"}}}}}}]);
//# sourceMappingURL=component---src-template-post-js-413bed765c43613fcfbe.js.map
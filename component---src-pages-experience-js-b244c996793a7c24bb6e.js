(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,a,t){"use strict";t.r(a);var n=t(179),i=t(0),l=t.n(i),r=t(164),s=t(165),c=t(154),m=t.n(c);a.default=function(){var e=n.data;return l.a.createElement(r.a,{header:"white"},l.a.createElement(s.a,{title:e.site.siteMetadata.author+" experience",description:"experience of "+e.site.siteMetadata.author}),l.a.createElement("div",{className:"container "+m.a.container},l.a.createElement("div",{className:""+m.a.line},l.a.createElement("div",{className:m.a.row+" "+m.a.cf},l.a.createElement("div",{className:m.a.block+" "+m.a.fl},l.a.createElement("p",{className:m.a.p},l.a.createElement("span",{className:m.a.circle+" "+m.a.first}),l.a.createElement("h3",null,"company name"),l.a.createElement("p",{className:m.a.exp__subheadline},"Quisque enim quam, semp quis dui sed, pellentesque consectetur augue. Nam convallis diam lacus, vel posuere lacus adipiscing et. mauris dapibus, ut aliquet odio posuere. Quisque enim quam, mauris dapibus, ut aliquet odio posuere. Quisque enim quam,"))),l.a.createElement("div",{className:m.a.block+" "+m.a.fr},l.a.createElement("p",{className:m.a.p},l.a.createElement("span",{className:""+m.a.circle}),l.a.createElement("h3",null,"company name"),l.a.createElement("p",{className:m.a.exp__subheadline},"Quisque enim quam, semp quis dui sed, pellentesque consectetur augue. Nam convallis diam lacus, vel posuere lacus adipiscing et. mauris dapibus, ut aliquet odio posuere. Quisque enim quam, mauris dapibus, ut aliquet odio posuere. Quisque enim quam,"))),l.a.createElement("div",{className:m.a.block+" "+m.a.fl},l.a.createElement("p",{className:m.a.p},l.a.createElement("span",{className:""+m.a.circle}),l.a.createElement("h3",null,"company name"),l.a.createElement("p",{className:m.a.exp__subheadline},"Quisque enim quam, semp quis dui sed, pellentesque consectetur augue. Nam convallis diam lacus, vel posuere lacus adipiscing et. mauris dapibus, ut aliquet odio posuere. Quisque enim quam, mauris dapibus, ut aliquet odio posuere. Quisque enim quam,")))))))}},160:function(e,a,t){var n;e.exports=(n=t(163))&&n.default||n},161:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(4),r=t.n(l),s=t(33),c=t.n(s);t.d(a,"a",function(){return c.a});t(160),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Yashraj Basan",logo:"YB"}},allFile:{edges:[{node:{publicURL:"/dev-portfolio/static/yashraj-basan-full-stack-developer-PIET-69bbc8c81068a0125020daac5f13bc43.pdf"}}]}}}},163:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),i=t.n(n),l=t(4),r=t.n(l),s=t(55),c=t(2),m=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?i.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=m},164:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(162),r=t(161),s=t(149),c=t.n(s),m=function(e){e.siteTitle,e.header;var a=l.data;return i.a.createElement("nav",{className:"navbar navbar-expand-md "+c.a.navbar__purple},i.a.createElement(r.a,{className:"navbar-brand "+c.a.navbarBrand__white,to:"/"},a.site.siteMetadata.title),i.a.createElement("button",{className:"navbar-toggler "+c.a.navbar__toggle_button,type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},"menu"),i.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.a,{className:"nav-link "+c.a.navlink__purple,to:"/projects"},"projects")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.a,{className:"nav-link "+c.a.navlink__purple,to:"/experience"},"experience")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.a,{className:"nav-link "+c.a.navlink__purple,to:"/about"},"about")))))};a.a=function(e){var a=e.children,t=(e.comp,e.header);return i.a.createElement("div",null,i.a.createElement(m,{header:t}),a)}},165:function(e,a,t){"use strict";var n=t(166),i=t(0),l=t.n(i),r=t(4),s=t.n(r),c=t(167),m=function(e){var a=n.data.site.siteMetadata,t=a.title,i=a.description,r=a.host,s={title:e.title||t,description:e.description||i,image:""+r+(e.image||null),url:""+r+(e.pathname||null)};return l.a.createElement(c.Helmet,{title:s.title,titleTemplate:s.title},l.a.createElement("meta",{name:"description",content:s.description}),l.a.createElement("meta",{name:"image",content:s.image}),s.url&&l.a.createElement("meta",{property:"og:url",content:s.url}),!e.article?null:l.a.createElement("meta",{property:"og:type",content:"article"}),s.title&&l.a.createElement("meta",{property:"og:title",content:s.title}),s.description&&l.a.createElement("meta",{property:"og:description",content:s.description}),s.image&&l.a.createElement("meta",{property:"og:image",content:s.image}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),e.twitterUsername&&l.a.createElement("meta",{name:"twitter:creator",content:e.twitterUsername}),s.title&&l.a.createElement("meta",{name:"twitter:title",content:s.title}),s.description&&l.a.createElement("meta",{name:"twitter:description",content:s.description}),s.image&&l.a.createElement("meta",{name:"twitter:image",content:s.image}))};a.a=m,m.propTypes={title:s.a.string,description:s.a.string,image:s.a.string,article:s.a.bool},m.defaultProps={title:null,description:null,image:null,article:!1}},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Yashraj Basan",description:"Yashraj Basan is full stack developer"}}}}},179:function(e){e.exports={data:{site:{siteMetadata:{author:"Yashraj Basan"}}}}}}]);
//# sourceMappingURL=component---src-pages-experience-js-b244c996793a7c24bb6e.js.map
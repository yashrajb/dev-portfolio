(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,t,a){"use strict";a.r(t);var n=a(178),i=a(0),s=a.n(i),r=a(168),o=a(169),l=a(154),c=a.n(l);t.default=function(){var e=n.data;return s.a.createElement(r.a,{header:"white"},s.a.createElement(o.a,{title:"About "+e.site.siteMetadata.author,description:"About "+e.site.siteMetadata.author}),s.a.createElement("div",{className:"container "+c.a.about__main},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 col-xl-6 col-lg-6"},s.a.createElement("h1",{className:c.a.about__h1},"About me"),s.a.createElement("p",{className:c.a.about__text},"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is"),s.a.createElement("p",null,s.a.createElement("a",{href:""},s.a.createElement("img",{src:"/images/email.svg",className:c.a.about__social,alt:e.site.siteMetadata.author+" email"})),s.a.createElement("a",{href:""},s.a.createElement("img",{src:"/images/github.svg",className:c.a.about__social,alt:e.site.siteMetadata.author+" github"})),s.a.createElement("a",{href:""},s.a.createElement("img",{src:"/images/linkedin.svg",className:c.a.about__social,alt:e.site.siteMetadata.author+" linkedin"})))),s.a.createElement("div",{className:"col-md-6 col-xl-6 col-lg-6 d-none d-md-block"},s.a.createElement("img",{src:"/images/owner.png",alt:e.site.siteMetadata.author,className:"img-responsive "+c.a.about__image})))))}},164:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},165:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(4),r=a.n(s),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(164),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Yashraj Basan",logo:"YB"}},allFile:{edges:[{node:{publicURL:"/dev-portfolio/static/yashraj-basan-full-stack-developer-PIET-69bbc8c81068a0125020daac5f13bc43.pdf"}}]}}}},167:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),s=a(4),r=a.n(s),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},168:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(166),r=a(165),o=a(149),l=a.n(o),c=function(e){e.siteTitle,e.header;var t=s.data;return i.a.createElement("nav",{className:"navbar navbar-expand-md "+l.a.navbar__purple},i.a.createElement(r.a,{className:"navbar-brand "+l.a.navbarBrand__white,to:"/"},t.site.siteMetadata.title),i.a.createElement("button",{className:"navbar-toggler "+l.a.navbar__toggle_button,type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},"menu"),i.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.a,{className:"nav-link "+l.a.navlink__purple,to:"/projects"},"projects")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.a,{className:"nav-link "+l.a.navlink__purple,to:"/experience"},"experience")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.a,{className:"nav-link "+l.a.navlink__purple,to:"/blog"},"blog")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(r.a,{className:"nav-link "+l.a.navlink__purple,to:"/about"},"about")))))};t.a=function(e){var t=e.children,a=(e.comp,e.header);return i.a.createElement("div",null,i.a.createElement(c,{header:a}),t)}},169:function(e,t,a){"use strict";var n=a(170),i=a(0),s=a.n(i),r=a(4),o=a.n(r),l=a(171),c=function(e){var t=n.data.site.siteMetadata,a=t.title,i=t.description,r=t.host,o={title:e.title||a,description:e.description||i,image:""+r+(e.image||null),url:""+r+(e.pathname||null)};return s.a.createElement(l.Helmet,{title:o.title,titleTemplate:o.title},s.a.createElement("meta",{name:"description",content:o.description}),s.a.createElement("meta",{name:"image",content:o.image}),o.url&&s.a.createElement("meta",{property:"og:url",content:o.url}),!e.article?null:s.a.createElement("meta",{property:"og:type",content:"article"}),o.title&&s.a.createElement("meta",{property:"og:title",content:o.title}),o.description&&s.a.createElement("meta",{property:"og:description",content:o.description}),o.image&&s.a.createElement("meta",{property:"og:image",content:o.image}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),e.twitterUsername&&s.a.createElement("meta",{name:"twitter:creator",content:e.twitterUsername}),o.title&&s.a.createElement("meta",{name:"twitter:title",content:o.title}),o.description&&s.a.createElement("meta",{name:"twitter:description",content:o.description}),o.image&&s.a.createElement("meta",{name:"twitter:image",content:o.image}))};t.a=c,c.propTypes={title:o.a.string,description:o.a.string,image:o.a.string,article:o.a.bool},c.defaultProps={title:null,description:null,image:null,article:!1}},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Yashraj Basan",description:"Yashraj Basan is full stack developer"}}}}},178:function(e){e.exports={data:{site:{siteMetadata:{author:"Yashraj Basan"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-ace2f205eb8ede28b52e.js.map
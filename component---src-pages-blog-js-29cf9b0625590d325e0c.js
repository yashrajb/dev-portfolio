(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(e,t,a){"use strict";a.r(t);var n=a(183),i=a(0),o=a.n(i),s=a(168),r=a(169),l=a(165),c=a(156),p=a.n(c);t.default=function(){var e=n.data;return o.a.createElement(s.a,null,o.a.createElement(r.a,{title:"blog of "+e.site.siteMetadata.author,description:"blog on "+e.site.siteMetadata.author}),o.a.createElement("div",{className:"container"},e.allMarkdownRemark.edges.map(function(e){return/posts/.test(e.node.fileAbsolutePath)?o.a.createElement("div",{className:"row "+p.a.blog__element},o.a.createElement("div",{className:"col-md-12 col-xs-12 col-sm-12 col-lg-12 col-xl-12"},o.a.createElement("h2",null,e.node.frontmatter.title.toUpperCase()),o.a.createElement("p",null,e.node.frontmatter.date),o.a.createElement(l.a,{to:"/blog/"+e.node.fields.slug,className:"btn btn-default "+p.a.blog_readmore},"Read More"))):null})))}},164:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},165:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(4),s=a.n(o),r=a(33),l=a.n(r);a.d(t,"a",function(){return l.a});a(164),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Yashraj Basan",logo:"YB"}},allFile:{edges:[{node:{publicURL:"/dev-portfolio/static/yashraj-basan-full-stack-developer-PIET-69bbc8c81068a0125020daac5f13bc43.pdf"}}]}}}},167:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),o=a(4),s=a.n(o),r=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},168:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(166),s=a(165),r=a(149),l=a.n(r),c=function(e){e.siteTitle,e.header;var t=o.data;return i.a.createElement("nav",{className:"navbar navbar-expand-md "+l.a.navbar__purple},i.a.createElement(s.a,{className:"navbar-brand "+l.a.navbarBrand__white,to:"/"},t.site.siteMetadata.title),i.a.createElement("button",{className:"navbar-toggler "+l.a.navbar__toggle_button,type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},"menu"),i.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.a,{className:"nav-link "+l.a.navlink__purple,to:"/projects"},"projects")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.a,{className:"nav-link "+l.a.navlink__purple,to:"/experience"},"experience")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.a,{className:"nav-link "+l.a.navlink__purple,to:"/blog"},"blog")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.a,{className:"nav-link "+l.a.navlink__purple,to:"/about"},"about")))))};t.a=function(e){var t=e.children,a=(e.comp,e.header);return i.a.createElement("div",null,i.a.createElement(c,{header:a}),t)}},169:function(e,t,a){"use strict";var n=a(170),i=a(0),o=a.n(i),s=a(4),r=a.n(s),l=a(171),c=function(e){var t=n.data.site.siteMetadata,a=t.title,i=t.description,s=t.host,r={title:e.title||a,description:e.description||i,image:""+s+(e.image||null),url:""+s+(e.pathname||null)};return o.a.createElement(l.Helmet,{title:r.title,titleTemplate:r.title},o.a.createElement("meta",{name:"description",content:r.description}),o.a.createElement("meta",{name:"image",content:r.image}),r.url&&o.a.createElement("meta",{property:"og:url",content:r.url}),!e.article?null:o.a.createElement("meta",{property:"og:type",content:"article"}),r.title&&o.a.createElement("meta",{property:"og:title",content:r.title}),r.description&&o.a.createElement("meta",{property:"og:description",content:r.description}),r.image&&o.a.createElement("meta",{property:"og:image",content:r.image}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),e.twitterUsername&&o.a.createElement("meta",{name:"twitter:creator",content:e.twitterUsername}),r.title&&o.a.createElement("meta",{name:"twitter:title",content:r.title}),r.description&&o.a.createElement("meta",{name:"twitter:description",content:r.description}),r.image&&o.a.createElement("meta",{name:"twitter:image",content:r.image}))};t.a=c,c.propTypes={title:r.a.string,description:r.a.string,image:r.a.string,article:r.a.bool},c.defaultProps={title:null,description:null,image:null,article:!1}},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Yashraj Basan",description:"Yashraj Basan is full stack developer"}}}}},183:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Devblog",date:null},html:"",excerpt:"",fields:null,fileAbsolutePath:"C:/Users/yashraj/Desktop/dev-portfolio/content/projects/devblog/devblog.md"}},{node:{frontmatter:{title:"Node Chat",date:null},html:"",excerpt:"",fields:null,fileAbsolutePath:"C:/Users/yashraj/Desktop/dev-portfolio/content/projects/decentros/node chat.md"}},{node:{frontmatter:{title:"awesome post",date:"19-02-2019"},html:'<p>This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.</p>\n<p><span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 636px;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.37735849056604%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAAAtUlEQVQY043P0QqCMBiGYa+lRN3Urf1rTXHTzS3UTBECT4Lu/zLqIOjMhPf04eMLLHSPYhlhLG5X+Rq013NjTSWB8whdErxVkBPZ8k5Rq+veuzvQmrF22/zwifBDCMeYh58iiJCIsdiLsaoyp0WhKC1TotE+9sV0MfnTmc4KqDAxyXdWJDv2g3wy2doqr/qhbVzDmMyZp9xnRMdI/Ps8O7o6bVxdTVZP8qwIeBAdZRalBc7Kjd60FFIpnObrfgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    ></span>\n    <img\n        class="gatsby-resp-image-image"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;box-shadow:inset 0px 0px 0px 400px white;"\n        alt="Hero image"\n        title=""\n        src="/dev-portfolio/static/806198d1efec0d9f6c349b2202f5e95f/8a209/1.png"\n        srcset="/dev-portfolio/static/806198d1efec0d9f6c349b2202f5e95f/7b5b4/1.png 188w,\n/dev-portfolio/static/806198d1efec0d9f6c349b2202f5e95f/d266f/1.png 375w,\n/dev-portfolio/static/806198d1efec0d9f6c349b2202f5e95f/8a209/1.png 636w"\n        sizes="(max-width: 636px) 100vw, 636px"\n      />\n  </span></p>',excerpt:"This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and…",fields:{slug:"awesome"},fileAbsolutePath:"C:/Users/yashraj/Desktop/dev-portfolio/content/posts/awesome post/awesome.md"}},{node:{frontmatter:{title:"component and props",date:"19-02-2019"},html:'<p>This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.</p>\n<p><span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin-left: auto; margin-right: auto;  max-width: 636px;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.37735849056604%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAAAtUlEQVQY043P0QqCMBiGYa+lRN3Urf1rTXHTzS3UTBECT4Lu/zLqIOjMhPf04eMLLHSPYhlhLG5X+Rq013NjTSWB8whdErxVkBPZ8k5Rq+veuzvQmrF22/zwifBDCMeYh58iiJCIsdiLsaoyp0WhKC1TotE+9sV0MfnTmc4KqDAxyXdWJDv2g3wy2doqr/qhbVzDmMyZp9xnRMdI/Ps8O7o6bVxdTVZP8qwIeBAdZRalBc7Kjd60FFIpnObrfgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    ></span>\n    <img\n        class="gatsby-resp-image-image"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;box-shadow:inset 0px 0px 0px 400px white;"\n        alt="Hero image"\n        title=""\n        src="/dev-portfolio/static/806198d1efec0d9f6c349b2202f5e95f/8a209/1.png"\n        srcset="/dev-portfolio/static/806198d1efec0d9f6c349b2202f5e95f/7b5b4/1.png 188w,\n/dev-portfolio/static/806198d1efec0d9f6c349b2202f5e95f/d266f/1.png 375w,\n/dev-portfolio/static/806198d1efec0d9f6c349b2202f5e95f/8a209/1.png 636w"\n        sizes="(max-width: 636px) 100vw, 636px"\n      />\n  </span></p>',excerpt:"This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and…",fields:null,fileAbsolutePath:"C:/Users/yashraj/Desktop/dev-portfolio/content/posts/component and props/component and props.md"}}]},site:{siteMetadata:{author:"Yashraj Basan"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-29cf9b0625590d325e0c.js.map
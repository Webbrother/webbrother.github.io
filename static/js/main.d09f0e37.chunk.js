(this["webpackJsonpwebbrother.net-2.0"]=this["webpackJsonpwebbrother.net-2.0"]||[]).push([[0],{20:function(t,e,n){t.exports={link:"ContactLink_link__2n9WW"}},21:function(t,e,n){t.exports={logoContainer:"Home_logoContainer__1iqLD"}},31:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),a=n(14),r=n.n(a),s=n(19),c=n(9),l=n(10),h=n(13),u=n(12),b=n(22),j=n(2),d=(n(31),n(11)),p=n(42),f=n(20),m=n.n(f),v=n(1),O=function(t){return Object(v.jsx)("a",{className:m.a.link,href:t.url,children:t.label})},k=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(O,{label:"developer.komarov@gmail.com",url:"mailto:developer.komarov@gmail.com"}),Object(v.jsx)(O,{label:"Skype: v-a-komarov",url:"skype:v-a-komarov"}),Object(v.jsx)(O,{label:"Stackoverflow",url:"https://stackoverflow.com/users/2179748/webbrother"}),Object(v.jsx)(O,{label:"LinkedIn",url:"https://www.linkedin.com/in/vitaly-komarov/"}),Object(v.jsx)(O,{label:"Github",url:"https://github.com/Webbrother"})]})},x=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).pathRef=i.a.createRef(),o.onTransitionEnd=o.onTransitionEnd.bind(Object(d.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.animate&&this.drawLogo()}},{key:"onTransitionEnd",value:function(){this.props.animate&&this.props.onAnimationEnd()}},{key:"drawLogo",value:function(){if(this.pathRef&&this.pathRef.current){var t=this.pathRef.current.getTotalLength(),e=this.pathRef.current;e.style.transition="none",e.style.strokeDasharray="".concat(t," ").concat(t),e.style.strokeDashoffset="".concat(t),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset 1.5s cubic-bezier(.6,.05,.4,.95)",e.style.strokeDashoffset="0"}}},{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)("svg",{width:"100%",height:"100%",x:"0px",y:"0px",preserveAspectRatio:"xMidYMin slice",viewBox:"0 0 490 280",children:Object(v.jsx)("path",{ref:this.pathRef,fill:"none",stroke:"#000000",strokeWidth:"8",strokeLinecap:"round",strokeMiterlimit:"10",onTransitionEnd:this.onTransitionEnd,d:"M4.709,30.802 l30.583,218.397C37.385,263.998,50.053,275,65,275s27.615-11.002,29.709-25.802l30.583-218.397C127.385,16.002,140.053,5,155,5 s27.615,11.002,29.709,25.802l30.583,218.397C217.385,263.998,230.053,275,245,275c14.947,0,27.615-11.002,29.709-25.802 l30.583-218.397c2.205-15.597,16.097-26.833,31.811-25.728C352.816,6.179,364.999,19.248,365,35v60c0,16.569,13.431,30,30,30h60 c16.569,0,30,13.431,30,30v90c0,16.569-13.431,30-30,30h-60c-16.569,0-30-13.431-30-30v-45"})})})}}]),n}(o.Component);x.defaultProps={animate:!1,onAnimationEnd:function(){}};var g=x,w=n(21),y=n.n(w),L=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).state={showLogo:!0},o.hideLogo=o.hideLogo.bind(Object(d.a)(o)),o}return Object(l.a)(n,[{key:"hideLogo",value:function(){this.setState({showLogo:!1})}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:y.a.logoContainer,children:Object(v.jsx)(p.a,{appear:!0,in:this.state.showLogo,timeout:1e3,classNames:"fade",unmountOnExit:!0,children:Object(v.jsx)(g,{animate:!0,onAnimationEnd:this.hideLogo})})}),Object(v.jsx)(p.a,{appear:!0,in:!this.state.showLogo,timeout:1e3,classNames:"fade",unmountOnExit:!0,children:Object(v.jsx)(k,{})})]})}}]),n}(o.Component),C=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(b.a,{children:Object(v.jsxs)(j.d,{children:[Object(v.jsx)(j.b,{path:"/",exact:!0,component:L}),Object(v.jsx)(j.a,{to:"/"})]})})})}}]),n}(o.Component);n(39);s.a.initialize("UA-112676131-1"),s.a.pageview(window.location.pathname+window.location.search),r.a.render(Object(v.jsx)(C,{}),document.getElementById("root"))}},[[40,1,2]]]);
(window["webpackJsonpwebbrother.net-2.0"]=window["webpackJsonpwebbrother.net-2.0"]||[]).push([[0],{21:function(e,t,n){e.exports={about:"About_about__6ZqrC"}},22:function(e,t,n){e.exports={logoContainer:"Home_logoContainer__2Bhl1"}},29:function(e,t,n){e.exports=n(44)},36:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(14),r=n.n(i),c=n(18),s=n(7),l=n(8),m=n(11),u=n(10),h=n(12),p=n(25),d=n(6),f=n(21),b=n.n(f),v=function(){return o.a.createElement("div",{className:b.a.about},o.a.createElement("h1",null,"About me"),o.a.createElement("p",null,"I'm from"))},E=(n(36),n(9)),k=n(46),w=(n(37),function(){return o.a.createElement("div",null,o.a.createElement("a",{className:"link",href:"mailto:developer.komarov@gmail.com"},"developer.komarov@gmail.com"),o.a.createElement("a",{className:"link",href:"skype:v-a-komarov"},"Skype: v-a-komarov"),o.a.createElement("a",{className:"link",href:"https://stackoverflow.com/users/2179748/webbrother"},"Stackoverflow"),o.a.createElement("a",{className:"link",href:"https://www.linkedin.com/in/vitaly-komarov/"},"LinkedIn"),o.a.createElement("a",{className:"link",href:"https://github.com/Webbrother"},"Github"))}),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).pathRef=o.a.createRef(),n.onTransitionEnd=n.onTransitionEnd.bind(Object(E.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.animate&&this.drawLogo()}},{key:"onTransitionEnd",value:function(){this.props.animate&&this.props.onAnimationEnd()}},{key:"drawLogo",value:function(){if(this.pathRef&&this.pathRef.current){var e=this.pathRef.current.getTotalLength(),t=this.pathRef.current;t.style.transition="none",t.style.strokeDasharray="".concat(e," ").concat(e),t.style.strokeDashoffset="".concat(e),t.getBoundingClientRect(),t.style.transition="stroke-dashoffset 4s cubic-bezier(.6,.00,.4,1)",t.style.strokeDashoffset="0"}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("svg",{width:"100%",height:"100%",x:"0px",y:"0px",preserveAspectRatio:"xMidYMin slice",viewBox:"0 0 490 280"},o.a.createElement("path",{ref:this.pathRef,fill:"none",stroke:"#000000",strokeWidth:"8",strokeLinecap:"round",strokeMiterlimit:"10",onTransitionEnd:this.onTransitionEnd,d:"M4.709,30.802 l30.583,218.397C37.385,263.998,50.053,275,65,275s27.615-11.002,29.709-25.802l30.583-218.397C127.385,16.002,140.053,5,155,5 s27.615,11.002,29.709,25.802l30.583,218.397C217.385,263.998,230.053,275,245,275c14.947,0,27.615-11.002,29.709-25.802 l30.583-218.397c2.205-15.597,16.097-26.833,31.811-25.728C352.816,6.179,364.999,19.248,365,35v60c0,16.569,13.431,30,30,30h60 c16.569,0,30,13.431,30,30v90c0,16.569-13.431,30-30,30h-60c-16.569,0-30-13.431-30-30v-45"})))}}]),t}(a.Component);g.defaultProps={animate:!1,onAnimationEnd:function(){}};var y=g,O=n(22),j=n.n(O),L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={showLogo:!0},n.hideLogo=n.hideLogo.bind(Object(E.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"hideLogo",value:function(){this.setState({showLogo:!1})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:j.a.logoContainer},o.a.createElement(k.a,{appear:!0,in:this.state.showLogo,timeout:1e3,classNames:"fade",unmountOnExit:!0},o.a.createElement(y,{animate:!0,onAnimationEnd:this.hideLogo}))),o.a.createElement(k.a,{appear:!0,in:!this.state.showLogo,timeout:1e3,classNames:"fade",unmountOnExit:!0},o.a.createElement(w,null)))}}]),t}(a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,null,o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/",exact:!0,component:L}),o.a.createElement(d.b,{path:"/about",exact:!0,component:v}),o.a.createElement(d.a,{to:"/"}))))}}]),t}(a.Component);n(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.initialize("UA-112676131-1"),c.a.pageview(window.location.pathname+window.location.search),r.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.5dc82361.chunk.js.map
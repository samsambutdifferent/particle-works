(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],s[o]&&d.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},s={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ce94be56"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"3bf71e8b"}[t]+".css",s=c.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],f.parentNode.removeChild(f),n(r)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,n[1](r)}s[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"059e":function(t,e,n){"use strict";var a=n("91bc"),o=n.n(a);o.a},"0830":function(t,e,n){},1376:function(t,e,n){"use strict";var a=n("e74d"),o=n.n(a);o.a},"1cc1":function(t,e,n){},2451:function(t,e,n){},"27ef":function(t,e,n){},3367:function(t,e,n){"use strict";var a=n("27ef"),o=n.n(a);o.a},3484:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.contentProp&&t.sidebarProp?n("div",{staticClass:"container page-content"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8"},[n("div",{staticClass:"col",attrs:{id:"text-block-one"}},[n("span",{staticClass:"content-styles",domProps:{innerHTML:t._s(t.post_content)}})])]),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"col"},[t.sidebar.includes("SocialMedia")?n("div",{staticClass:"col right-row"},[n("social-media")],1):t._e(),t.sidebar.includes("Request a Demo")?n("div",{staticClass:"col right-row"},[n("SidebarA",{attrs:{nameValue:"Request a Demo"}})],1):t._e(),n("div",{staticClass:"col right-row"},[t.sidebar.includes("View Training Courses")?n("div",{staticClass:"form-row"},[n("SidebarButton",{attrs:{nameValue:"View Training Courses"}})],1):t._e()]),t.sidebar.includes("RequestCourse")?n("div",{staticClass:"col right-row"},[n("SidebarA",{attrs:{nameValue:"Request a Course"}})],1):t._e(),t.sidebar.includes("AboutEnginSoft")?n("div",{staticClass:"col right-row"},[n("about-enginsoft")],1):t._e(),t.sidebar.includes("ContactBox")?n("div",{staticClass:"col right-row"},[n("address-area")],1):t._e()])])]),n("div")]):t._e()},o=[],s=n("8097"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"form-row",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center",attrs:{id:"social-box"}},[n("AddThis",{attrs:{publicId:"ra-5d20c9b245909795"}})],1)])])])},i=[],c=n("91c5"),l=n.n(c),u={components:{AddThis:l.a}},d=u,f=(n("f600"),n("2877")),p=Object(f["a"])(d,r,i,!1,null,"1ceef73b",null),m=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.aboutEnginSoft?n("div",{staticClass:"form-row"},[n("div",{staticClass:"col-md",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[n("div",{staticClass:"banner-text",style:{"background-color":this.$store.state.primary_colour},attrs:{id:"top-bar"}},[n("font-awesome-icon",{attrs:{icon:"comments"}}),t._v("\n             "+t._s(t.aboutEnginSoft.acf.title)+"\n        ")],1),n("div",{staticClass:"col form-item text-one"},[n("p",[t._v(t._s(t.aboutEnginSoft.acf.text))])]),n("div",{staticClass:"col form-item"},[n("button",{staticClass:"flat-butt",staticStyle:{},style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"submit"},on:{click:function(e){return t.navigateTo(t.aboutEnginSoft.acf.link)}}},[t._v("\n            "+t._s(t.aboutEnginSoft.acf.buttontext)+"\n          ")])])])]):t._e()])},v=[],b=(n("7514"),n("77de")),_={mixins:[b["a"]],computed:{aboutEnginSoft:function(){return this.$store.state.posts.find(function(t){return"About EnginSoft"==t.post_title})}}},g=_,y=(n("1376"),Object(f["a"])(g,h,v,!1,null,"b5c353ec",null)),C=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.buttonValue?n("button",{staticClass:"flat-butt",style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){return t.routeTo("trainingcourses")}}},[n("font-awesome-icon",{staticClass:"btn-icon",attrs:{icon:t.buttonValue.acf.icon}}),n("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.buttonValue.acf.text))])],1):t._e()},x=[],P={mixins:[s["a"]],props:{nameValue:String},computed:{buttonValue:function(){var t=this;return this.$store.state.posts.find(function(e){return e.post_title==t.nameValue})}}},S=P,k=Object(f["a"])(S,w,x,!1,null,"5aac1607",null),$=k.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.value?n("div",{staticClass:"form-row title-text-alternative text-center"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact-area",expression:"'#contact-area'"}],staticClass:"flat-butt",style:{"background-color":this.$store.state.tertiary_colour}},[n("font-awesome-icon",{attrs:{icon:t.value.acf.icon}}),n("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.value.acf.text))])],1)]):t._e()},T=[],E={props:{nameValue:String},computed:{value:function(){var t=this;return this.$store.state.posts.find(function(e){return e.post_title==t.nameValue})}}},j=E,A=Object(f["a"])(j,q,T,!1,null,"77c8db34",null),B=A.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.$store.state.posts?n("div",[n("div",{staticClass:"form-row",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[n("div",{staticClass:"container"},[n("h4",{domProps:{innerHTML:t._s(t.ContactInfo.post_content)}}),n("hr"),n("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[n("div",{staticClass:"col-s marg"},[n("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.phone_icon}})],1),n("div",{staticClass:"col-s"},[t._v(t._s(t.ContactInfo.acf.phone_number))])]),n("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[n("div",{staticClass:"col-s marg"},[n("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.email_icon}})],1),n("div",{staticClass:"col-s content"},[t._v(t._s(t.ContactInfo.acf.email_address))])]),n("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[n("div",{staticClass:"col-s marg"},[n("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.address_icon}})],1),n("div",{staticClass:"col-s",domProps:{innerHTML:t._s(t.ContactInfo.acf.address)}})])])])]):t._e()},I=[],V=(n("28a5"),{computed:{ContactInfo:function(){var t=this.$store.state.posts.find(function(t){return"Contact Info"==t.post_title}),e=t.acf.address.split("\r").join(" <br/>");return t.acf.address=e,t}}}),N=V,R=(n("ded2"),Object(f["a"])(N,O,I,!1,null,"737043b8",null)),D=R.exports,M={mixins:[s["a"]],components:{SocialMedia:m,AboutEnginsoft:C,SidebarButton:$,SidebarA:B,AddressArea:D},props:{contentProp:String,sidebarProp:Array},computed:{post_content:function(){return this.contentProp},sidebar:function(){return this.sidebarProp}}},L=M,F=(n("b690"),Object(f["a"])(L,a,o,!1,null,"62fd1bb6",null));e["a"]=F.exports},3595:function(t,e,n){},"39ac":function(t,e,n){},"4b80":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("f13c"),s=n.n(o),r=n("ecee"),i=n("c074"),c=n("ad3d");r["c"].add(i["a"]),a["default"].component("font-awesome-icon",c["a"]);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),this.$store.state.posts.length>0&&this.$store.state.pages.length>0?n("div",[n("router-view",{attrs:{id:"displayed-page"}}),n("footer-area")],1):n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center",staticStyle:{"padding-top":"100px"}},[n("pulse-loader",{attrs:{color:"#003b7d"}})],1)])])],1)},u=[],d=(n("7514"),n("96cf"),n("3b8d")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view intro hm-purple-light"},[a("b-navbar",{staticClass:"bg-transparent",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{attrs:{id:"nav-logo-img",src:n("b640"),alt:"enginsoft-logo"}}),a("span",{attrs:{id:"nav-logo-text"}},[t._v("Tolerance Analysis")])]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/softwaresolutions"}},[t._v("Software Solutions")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/trainingcourses"}},[t._v("Training Courses")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/Resources"}},[t._v("Resources")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/Consultancy"}},[t._v("Consultancy")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/Contact"}},[t._v("Contact")])],1)],1)],1)],1),t._m(0)],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid banner",attrs:{id:"top"}},[n("div",{staticClass:"container",attrs:{id:"text"}},[n("div",{staticClass:"col-md-5"},[n("h1",[t._v("TOLERANCE ANALYSIS")]),n("hr"),n("p",[t._v("EnginSoft are experts in tolerance analysis for engineering design and manufacturing companies that assemble multi-component products.")])])])])}],m={name:"navbar"},h=m,v=(n("059e"),n("2877")),b=Object(v["a"])(h,f,p,!1,null,"8ee570ca",null),_=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("quote"),n("div",{staticClass:"view intro hm-purple-light"},[n("div",{staticClass:"container",attrs:{id:""}},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-8 mx-auto",attrs:{id:"contact-area"}},[n("div",[t._m(0),n("contact-form",{attrs:{formType:"Enquiry",location:"",enquiryPresent:!0,buttonText:"Submit Your Enquiry",isDownload:!1}})],1)])])])]),n("div",{staticClass:"container-fluid",attrs:{id:"contact-bar"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-start"},[n("div",{staticClass:"col content-styles"},[n("h2",[t._v("Contact")]),n("hr"),n("span",{domProps:{innerHTML:t._s(t.ContactInfo.acf.address)}}),n("div",{attrs:{id:"phone-email-section"}},[n("p",[n("font-awesome-icon",{attrs:{id:"icon",icon:t.ContactInfo.acf.phone_icon}}),t._v(t._s(t.ContactInfo.acf.phone_number)+"\n            ")],1),n("p",[n("font-awesome-icon",{attrs:{id:"icon",icon:t.ContactInfo.acf.email_icon}}),t._v(t._s(t.ContactInfo.acf.email_address)+"\n            ")],1)])])])])])],1)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center banner-text"},[n("p",[n("b",[t._v("Find the solution to meet your requirements or request a demo")])]),n("p",[t._v("Please call EnginSoft on +44 (0)2476 997160 or use the form below")])])}],C=(n("28a5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row",attrs:{id:"quote"}},[n("div",{staticClass:"col-12"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{key:t.quote},[n("h1",{staticClass:"text-center",domProps:{innerHTML:t._s(t.quote)}})])]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{key:t.author},[n("h3",{staticClass:"text-center"},[t._v(t._s(t.author))])])])],1)])])}),w=[],x=(n("ac6a"),{data:function(){return{quotes:[],quote:"",author:"",index:0}},mounted:function(){var t=this;this.$store.state.posts.forEach(function(e){e.categories.forEach(function(n){"Quote"==n.cat_name&&t.quotes.push(e)})}),this.quote=this.quotes[0].post_content,this.author=this.quotes[0].post_title,this.$nextTick(function(){var t=this;window.setInterval(function(){t.countDown()},3e4)})},methods:{countDown:function(){this.index>=this.quotes.length&&(this.index=0),this.quote=this.quotes[this.index].post_content,this.author=this.quotes[this.index].post_title,this.index++}}}),P=x,S=(n("e774"),Object(v["a"])(P,C,w,!1,null,null,null)),k=S.exports,$=n("5a93"),q={name:"FooterArea",components:{Quote:k,ContactForm:$["a"]},computed:{ContactInfo:function(){var t=this.$store.state.posts.find(function(t){return"Contact Info"==t.post_title}),e=t.acf.address.split("\r"),n="<p>"+e.join(" <p/> <p>")+"<g(p/>";return t.acf.address=n,t}}},T=q,E=(n("fbd2"),Object(v["a"])(T,g,y,!1,null,"bd86b61c",null)),j=E.exports,A=n("8a5d"),B={components:{NavBar:_,FooterArea:j,PulseLoader:A["a"]},beforeMount:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("PW"),t.next=3,this.$store.dispatch("getPosts");case 3:return t.next=5,this.$store.dispatch("getPages");case 5:e=this.$store.state.pages.find(function(t){return"Tolerance-Analysis"==t.post_title}),this.$store.state.primary_colour=e.acf.primary_colour,this.$store.state.secondary_colour=e.acf.secondary_colour,this.$store.state.tertiary_colour=e.acf.tertiary_colour,this.$store.state.quarternary_colour=e.acf.quarternary_colour;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},O=B,I=(n("034f"),Object(v["a"])(O,l,u,!1,null,null,null)),V=I.exports,N=n("8c4f"),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.homePage?n("div",[n("three-bar-banner",{staticStyle:{"padding-bottom":"3%"}}),n("page-content",{attrs:{contentProp:t.homePage.post_content,sidebarProp:t.homePage.acf.sidebar}})],1):t._e()},D=[],M=n("8097"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.$store.state.posts?n("div",[n("div",{staticClass:"container-fluid banner",attrs:{id:"three-bar"}},[n("div",{staticClass:"container"},[n("b-card-group",{attrs:{deck:""}},[n("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_one))])]),n("b-card-text",[n("h6",{staticStyle:{color:"white"}},[n("p",[t._v(t._s(t.threeBarBanner.acf.text_one))]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_one?n("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_one))]):t._e(),n("ul",{staticClass:"card-body"},[n("li",[t._v("Check the input data and create clear work process")]),n("li",[t._v("Develop a working model within the Tolerance Analysis software")]),n("li",[t._v("Identify the true cause of the problems")]),n("li",[t._v("Define failure conditions")])])])],1)])],1),n("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.primary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_two))])]),n("b-card-text",[n("h6",{staticStyle:{color:"white"}},[n("p",[t._v(t._s(t.threeBarBanner.acf.text_two))]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_two?n("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_two))]):t._e(),n("ul",{staticClass:"card-body"},[n("li",[t._v("The customer requirements")]),n("li",[t._v("The design intent was not understood or described correctly")]),n("li",[t._v("Manufacturers were not manufacturing to design")]),n("li",[t._v("Raw materials being supplied with incorrect tolerances")]),n("li",[t._v("Failure conditions defined")]),n("li",[t._v("Understanding consequences of variation")]),n("li",[t._v("Identify the sensitivities of the design to reduce tolerances")]),n("li",[t._v("Convert the requirements to product technical specification")]),n("li",[t._v("Convert these specifications into Assembly/Subassembly dimensional requirements")]),n("li",[t._v("Assign component dimensions to fit the Assembly/Subassembly requirements")])])])],1)])],1),n("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_three))])]),n("b-card-text",[n("h6",{staticStyle:{color:"white"}},[n("p",[t._v(t._s(t.threeBarBanner.acf.text_three))]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_three?n("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_three))]):t._e(),n("ul",{staticClass:"card-body"},[n("li",[t._v("Designing for intent")]),n("li",[t._v("Design for function and Manufacture to design")]),n("li",[t._v("Functional dimensioning defines a part based on how it functions in the final product")]),n("li",[t._v("Interruptions in manufacturing flows reduced")]),n("li",[t._v("Assemblies fitting together")]),n("li",[t._v("Massive savings in reduced scrap")]),n("li",[t._v("Clients receive their orders faster")]),n("li",[t._v("Reduced costs in all areas of the design and manufacturing process")]),n("li",[t._v("Provide solutions to the individual challenges")]),n("li",[t._v("Give the client a new discipline and route map to improve their design and simulation")])])])],1)])],1)],1)],1)])]):t._e()},F=[],H={data:function(){return{showCollapse:!1}},computed:{threeBarBanner:function(){return this.$store.state.posts.find(function(t){return t.categories.find(function(t){return"three-bar-banner"===t.cat_name})})}}},J=H,Y=(n("ed0e"),Object(v["a"])(J,L,F,!1,null,"b9985230",null)),z=Y.exports,Z=n("3484"),G={name:"home",mixins:[M["a"]],components:{ThreeBarBanner:z,PageContent:Z["a"]},computed:{homePage:function(){return this.$store.state.pages.find(function(t){return"Home"==t.post_title})}}},K=G,Q=Object(v["a"])(K,R,D,!1,null,"74578ffa",null),U=Q.exports;a["default"].use(N["a"]);var W=new N["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:U},{path:"/softwaresolutions",name:"softwaresolutions",component:function(){return n.e("about").then(n.bind(null,"a1594"))}},{path:"/trainingcourses",name:"trainingcourses",component:function(){return n.e("about").then(n.bind(null,"c3a6"))}},{path:"/Resources",name:"recources",component:function(){return n.e("about").then(n.bind(null,"93b9"))}},{path:"/Consultancy",name:"Consultancy",component:function(){return n.e("about").then(n.bind(null,"eb08"))}},{path:"/Contact",name:"contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}}]}),X=(n("55dd"),n("2f62")),tt=n("bc3a"),et=n.n(tt),nt="https://cms.tolerance-analysis.co.uk/wp-json/";a["default"].use(X["a"]);var at=new X["a"].Store({state:{pages:[],posts:[],primary_colour:"",secondary_colour:"",tertiary_colour:"",quarternary_colour:""},getters:{sortedPosts:function(t){return t.posts.sort(function(t,e){return t.acf.order-e.acf.order})}},mutations:{addPages:function(t,e){t.pages=e},addPosts:function(t,e){t.posts=e}},actions:{getPages:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,a={},t.next=4,et.a.get(nt+"getall/pages").then(function(t){a=t.data,n("addPages",a)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getPosts:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,a={},t.next=4,et.a.get(nt+"getall/posts").then(function(t){a=t.data,n("addPosts",a)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}}),ot=n("5f5b"),st=(n("f9e3"),n("2dd8"),n("755e"));a["default"].use(s.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),a["default"].use(ot["a"]),a["default"].use(st,{load:{key:"AIzaSyAa5TSKIY7nhJ0VZV8koYtxJeH8_Ia7Gi8"}}),a["default"].config.productionTip=!1,new a["default"]({router:W,store:at,render:function(t){return t(V)}}).$mount("#app")},"5a93":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("form",[n("div",{staticClass:"form-row justify-content-center"},[n("div",{staticClass:"col-md"},[n("div",{staticClass:"col form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"col form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Company"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}})]),n("div",{staticClass:"col form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.jobTitle,expression:"jobTitle"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Job Title"},domProps:{value:t.jobTitle},on:{input:function(e){e.target.composing||(t.jobTitle=e.target.value)}}})]),n("div",{staticClass:"col form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"col form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.number},on:{keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||(t.number=e.target.value)}}})])]),n("div",{staticClass:"col-md"},[t.enquiryPresent?n("div",{staticClass:"col form-item"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.enquiryArea,expression:"enquiryArea"}],staticClass:"form-control form-input",attrs:{placeholder:"Enquiry"},domProps:{value:t.enquiryArea},on:{input:function(e){e.target.composing||(t.enquiryArea=e.target.value)}}})]):t._e(),n("div",{staticClass:"col form-item"},[n("button",{staticClass:"flat-butt",style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"button"},on:{click:function(e){return t.postValue()}}},[t._v(t._s(t.buttonText))])]),t.errors?n("div",t._l(t.errors,function(e,a){return n("b-alert",{key:a,attrs:{variant:"danger",show:t.errors!=[]}},[t._v(t._s(e))])}),1):t._e()])])])])])},o=[],s=(n("7f7f"),n("77de")),r=n("bc3a"),i=n.n(r),c={mixins:[s["a"]],props:{formType:String,location:String,enquiryPresent:Boolean,buttonText:String,isDownload:Boolean},data:function(){return{name:"",company:"",jobTitle:"",email:"",number:"",enquiryArea:"",errors:[],reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{postValue:function(){var t=this;this.errors=[];var e=this.validateFormValues();if(""==e){var n=this.enquiryPresent?"\r\nEnquiry: ".concat(this.enquiryArea):"",a=""!=this.location?this.location:"https://tolerance-analysis.co.uk/#".concat(this.$route.path),o="Enquiry Type: ".concat(this.formType," form submission\r\nName :  ").concat(this.name,"\r\nEmail :  ").concat(this.email,"\r\nCompany :  ").concat(this.company,"\r\nJob Title: ").concat(this.jobTitle,"\r\nPhone Number: ").concat(this.number).concat(n,"\r\nLocation:/").concat(a),s={post:"19",author_email:this.email,content:o,author_name:this.name};i.a.post("https://cms.tolerance-analysis.co.uk/wp-json/wp/v2/comments",s).then(function(e){t.resetValues()}).catch(function(e){console.log(e),t.errors.push("Sorry, form not submitted. Possible double submission. Please try again")})}else this.errors.push(e)},validateFormValues:function(){return""==this.name?"Please enter name value":""==this.email?"Please enter an email":this.isEmailValid(this.email)?""==this.number?"Please enter a phone number":"":"Please enter a valid email format"},isEmailValid:function(t){return""==t?"":!!this.reg.test(this.email)},resetValues:function(){this.name="",this.company="",this.jobTitle="",this.email="",this.number="",this.enquiryArea="",this.isDownload&&this.navigateTo(this.location)},isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e&&43!=e))return!0;t.preventDefault()}}},l=c,u=(n("3367"),n("2877")),d=Object(u["a"])(l,a,o,!1,null,"620e0127",null);e["a"]=d.exports},"64a9":function(t,e,n){},"77de":function(t,e,n){"use strict";e["a"]={methods:{navigateTo:function(t){window.open(t,"_blank")}}}},8097:function(t,e,n){"use strict";e["a"]={methods:{routeTo:function(t){this.$router.push(t)}}}},"91bc":function(t,e,n){},b640:function(t,e,n){t.exports=n.p+"img/logo.e5ff8fc2.jpg"},b690:function(t,e,n){"use strict";var a=n("3595"),o=n.n(a);o.a},ded2:function(t,e,n){"use strict";var a=n("4b80"),o=n.n(a);o.a},e74d:function(t,e,n){},e774:function(t,e,n){"use strict";var a=n("1cc1"),o=n.n(a);o.a},ed0e:function(t,e,n){"use strict";var a=n("39ac"),o=n.n(a);o.a},f600:function(t,e,n){"use strict";var a=n("2451"),o=n.n(a);o.a},fbd2:function(t,e,n){"use strict";var a=n("0830"),o=n.n(a);o.a}});
//# sourceMappingURL=app.82e836d1.js.map
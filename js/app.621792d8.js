(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)r=i[d],n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,i=1;i<o.length;i++){var c=o[i];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=o[0]))}return t}var a={},n={app:0},s=[];function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=a,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var a=o("64a9"),n=o.n(a);n.a},"0a58":function(t,e,o){},1376:function(t,e,o){"use strict";var a=o("e74d"),n=o.n(a);n.a},"1c3e":function(t,e,o){"use strict";var a=o("0a58"),n=o.n(a);n.a},"1cc1":function(t,e,o){},2451:function(t,e,o){},"39ac":function(t,e,o){},"3bed":function(t,e,o){"use strict";var a=o("617d"),n=o.n(a);n.a},"40ee":function(t,e,o){},"4ebb":function(t,e,o){},"546f":function(t,e,o){"use strict";var a=o("9569"),n=o.n(a);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),n=o("f13c"),s=o.n(n),r=o("ecee"),i=o("c074"),c=o("ad3d");r["c"].add(i["a"]),a["default"].component("font-awesome-icon",c["a"]);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("nav-bar"),this.$store.state.posts.length>0&&this.$store.state.pages.length>0?o("div",[o("router-view",{attrs:{id:"displayed-page"}}),o("footer-area")],1):o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center",staticStyle:{"padding-top":"100px"}},[o("pulse-loader",{attrs:{color:"#003b7d"}})],1)])])],1)},u=[],d=(o("96cf"),o("3b8d")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view intro hm-purple-light",attrs:{id:t.isTA?"ta_view":"pw_view"}},[a("b-navbar",{staticClass:"bg-transparent",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{attrs:{id:"nav-logo-img",src:o("b640"),alt:"enginsoft-logo"}}),a("span",{attrs:{id:"nav-logo-text"}},[t._v("Tolerance Analysis")])]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[this.$store.getters.homePage?a("b-nav-item",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1):t._e(),t._l(this.routes,function(e,o){return a("span",{key:o},[e.acf.show_in_navbar?a("b-nav-item",[a("router-link",{attrs:{to:e.post_title.toLowerCase().replace(/\s/g,"")}},[t._v("\n              "+t._s(e.post_title)+"\n            ")])],1):t._e()],1)})],2)],1)],1),a("div",{staticClass:"container-fluid banner",attrs:{id:"top"}},[a("div",{staticClass:"container",attrs:{id:"text"}},[a("div",{staticClass:"col-md-5"},[a("h1",[t._v("\n          "+t._s(t.siteTitle)+"\n        ")]),a("hr"),a("p",[t._v(t._s(t.siteDescription))])])])])],1)},f=[],m=(o("a481"),o("17fb")),h=o.n(m),v={name:"navbar",data:function(){return{siteTitle:"PARTICLEWORKS",siteDescription:"EnginSoft are UK distributors for Particleworks, an advanced mesh-free CFD solution for complex and resource demanding designs.",isTA:!1}},computed:{routes:function(){var t=h.a.sortBy(this.$store.state.pages,"menu_order");return t.filter(function(t){return"home"!=t.post_title.toLowerCase().replace(/\s/g,"")})}}},_=v,b=(o("ab53"),o("2877")),g=Object(b["a"])(_,p,f,!1,null,"6c086d7a",null),w=g.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("quote"),o("div",{staticClass:"view intro hm-purple-light",style:{backgroundImage:"url('"+this.$store.state.contact_area_background_image.url+"')"}},[o("div",{staticClass:"container",attrs:{id:""}},[o("div",{staticClass:"row align-items-center"},[o("div",{staticClass:"col-8 mx-auto",attrs:{id:"contact-area"}},[o("div",[t._m(0),o("contact-form",{attrs:{formType:"Enquiry",location:"",enquiryPresent:!0,buttonText:"Submit Your Enquiry",isDownload:!1}})],1)])])])]),o("div",{staticClass:"container-fluid",style:{"background-color":this.$store.state.footer_area_colour},attrs:{id:"contact-bar"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-start"},[o("div",{staticClass:"col content-styles"},[o("h2",[t._v("Contact")]),o("hr"),o("span",{domProps:{innerHTML:t._s(t.ContactInfo.acf.address)}}),o("div",{attrs:{id:"phone-email-section"}},[o("p",[o("font-awesome-icon",{attrs:{id:"icon",icon:t.ContactInfo.acf.phone_icon}}),t._v(t._s(t.ContactInfo.acf.phone_number)+"\n            ")],1),o("p",[o("font-awesome-icon",{attrs:{id:"icon",icon:t.ContactInfo.acf.email_icon}}),t._v(t._s(t.ContactInfo.acf.email_address)+"\n            ")],1)])])])])])],1)},C=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-content-center banner-text"},[o("p",[o("b",[t._v("Find the solution to meet your requirements or request a demo")])]),o("p",[t._v("Please call EnginSoft on +44 (0)2476 997160 or use the form below")])])}],x=(o("28a5"),o("7514"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row",attrs:{id:"quote"}},[o("div",{staticClass:"col-12"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("div",{key:t.quote},[o("h1",{staticClass:"text-center",domProps:{innerHTML:t._s(t.quote)}})])]),o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("div",{key:t.author},[o("h3",{staticClass:"text-center"},[t._v(t._s(t.author))])])])],1)])])}),k=[],P=(o("ac6a"),{data:function(){return{quotes:[],quote:"",author:"",index:0}},mounted:function(){var t=this;this.$store.state.posts.forEach(function(e){e.categories.forEach(function(o){"Quote"==o.cat_name&&t.quotes.push(e)})}),this.quotes.length<1||(this.quote=this.quotes[0].post_content,this.author=this.quotes[0].post_title,this.$nextTick(function(){var t=this;window.setInterval(function(){t.countDown()},3e4)}))},methods:{countDown:function(){this.index>=this.quotes.length&&(this.index=0),this.quote=this.quotes[this.index].post_content,this.author=this.quotes[this.index].post_title,this.index++}}}),S=P,T=(o("e774"),Object(b["a"])(S,x,k,!1,null,null,null)),$=T.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("form",[o("div",{staticClass:"form-row justify-content-center"},[o("div",{staticClass:"col-md"},[o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Company"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}})]),o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.jobTitle,expression:"jobTitle"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Job Title"},domProps:{value:t.jobTitle},on:{input:function(e){e.target.composing||(t.jobTitle=e.target.value)}}})]),o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.number},on:{keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||(t.number=e.target.value)}}})])]),o("div",{staticClass:"col-md"},[t.enquiryPresent?o("div",{staticClass:"col form-item"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.enquiryArea,expression:"enquiryArea"}],staticClass:"form-control form-input",attrs:{placeholder:"Enquiry"},domProps:{value:t.enquiryArea},on:{input:function(e){e.target.composing||(t.enquiryArea=e.target.value)}}})]):t._e(),o("div",{staticClass:"col form-item"},[o("button",{staticClass:"flat-butt",style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"button"},on:{click:function(e){return t.postValue()}}},[t._v(t._s(t.buttonText))])]),t.errors?o("div",t._l(t.errors,function(e,a){return o("b-alert",{key:a,attrs:{variant:"danger",show:t.errors!=[]}},[t._v(t._s(e))])}),1):t._e()])])])])])},E=[],q=(o("7f7f"),{methods:{navigateTo:function(t){window.open(t,"_blank")}}}),B=o("bc3a"),A=o.n(B),O={mixins:[q],props:{formType:String,location:String,enquiryPresent:Boolean,buttonText:String,isDownload:Boolean},data:function(){return{name:"",company:"",jobTitle:"",email:"",number:"",enquiryArea:"",errors:[],reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{postValue:function(){var t=this;this.errors=[];var e=this.validateFormValues();if(""==e){var o=this.enquiryPresent?"\r\nEnquiry: ".concat(this.enquiryArea):"",a="";a=""!=this.location?"https://particleworks.co.uk/#".concat(this.location):"https://particleworks.co.uk/#".concat(this.$route.path);var n="Enquiry Type: ".concat(this.formType," form submission\r\nName :  ").concat(this.name,"\r\nEmail :  ").concat(this.email,"\r\nCompany :  ").concat(this.company,"\r\nJob Title: ").concat(this.jobTitle,"\r\nPhone Number: ").concat(this.number).concat(o,"\r\nLocation:/").concat(a),s={post:"578",author_email:this.email,content:n,author_name:this.name};A.a.post("https://cms.tolerance-analysis.co.uk/wp-json/wp/v2/comments",s).then(function(e){t.resetValues()}).catch(function(e){console.log(e),t.errors.push("Sorry, form not submitted. Possible double submission. Please try again")})}else this.errors.push(e)},validateFormValues:function(){return""==this.name?"Please enter name value":""==this.email?"Please enter an email":this.isEmailValid(this.email)?""==this.number?"Please enter a phone number":"":"Please enter a valid email format"},isEmailValid:function(t){return""==t?"":!!this.reg.test(this.email)},resetValues:function(){this.name="",this.company="",this.jobTitle="",this.email="",this.number="",this.enquiryArea="",this.isDownload&&this.navigateTo(this.location)},isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e&&43!=e))return!0;t.preventDefault()}}},I=O,D=(o("c9dc"),Object(b["a"])(I,j,E,!1,null,"96a371aa",null)),V=D.exports,R={name:"FooterArea",components:{Quote:$,ContactForm:V},computed:{ContactInfo:function(){var t=this.$store.state.posts.find(function(t){return"Contact Info"==t.post_title}),e=t.acf.address.split("\r"),o="<p>"+e.join(" <p/> <p>")+"<g(p/>";return t.acf.address=o,t}}},M=R,F=(o("f329"),Object(b["a"])(M,y,C,!1,null,"d51ee3b0",null)),N=F.exports,L=o("8a5d"),G={components:{NavBar:w,FooterArea:N,PulseLoader:L["a"]},beforeMount:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getSettings");case 2:return t.next=4,this.$store.dispatch("getPosts");case 4:return t.next=6,this.$store.dispatch("getPages");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},H=G,J=(o("034f"),Object(b["a"])(H,l,u,!1,null,null,null)),z=J.exports,Z=o("8c4f"),W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.pageContent?o("div",[o("page",{attrs:{pageProp:t.pageContent}})],1):t._e()},K=[],Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.pageProp.acf.three_bar_banner?o("three-bar-banner",{staticStyle:{"padding-bottom":"3%"}}):t._e(),this.$store.state.pages?o("div",{staticClass:"container page-content"},[o("div",{staticClass:"row"},[o("page-content",{attrs:{contentProp:t.pageProp.post_content,sidebarProp:t.pageProp.acf.sidebar,slideToTextProp:t.pageProp.acf.slide_to_button_text}})],1),t.productList.length>0?o("div",t._l(t.productList,function(t,e){return o("div",{key:e},[o("product-block",{attrs:{productName:t}})],1)}),0):t._e()]):t._e(),t.pageProp.acf.map_present?o("div",[o("Maps",{attrs:{id:"map-area"}})],1):t._e()],1)},Q=[],U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.contentProp&&t.sidebarProp?o("div",{staticClass:"container page-content"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg"},[o("div",{staticClass:"col",attrs:{id:"text-block-one"}},[o("GutenbergDisplay",{attrs:{blocksRaw:t.post_content}})],1)]),t.sidebar.length>0?o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"col"},[t.sidebar.includes("SocialMedia")?o("div",{staticClass:"col right-row"},[o("social-media")],1):t._e(),t.sidebar.includes("Slide to Contact")?o("div",{staticClass:"col right-row"},[o("SidebarA",{attrs:{nameValue:"Slide To",slideToTextProp:t.slideToTextProp}})],1):t._e(),o("div",{staticClass:"col right-row"},[t.sidebar.includes("Route To")?o("div",{staticClass:"form-row"},[o("SidebarButton",{attrs:{nameValue:"Route To"}})],1):t._e()]),t.sidebar.includes("AboutEnginSoft")?o("div",{staticClass:"col right-row"},[o("about-enginsoft")],1):t._e(),t.sidebar.includes("ContactBox")?o("div",{staticClass:"col right-row"},[o("address-area")],1):t._e()])]):t._e()]),o("div")]):t._e()},X=[],tt={methods:{routeTo:function(t){this.$router.push(t)}}},et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"form-row",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center",attrs:{id:"social-box"}},[o("AddThis",{attrs:{publicId:"ra-5d20c9b245909795"}})],1)])])])},ot=[],at=o("91c5"),nt=o.n(at),st={components:{AddThis:nt.a}},rt=st,it=(o("f600"),Object(b["a"])(rt,et,ot,!1,null,"1ceef73b",null)),ct=it.exports,lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.aboutEnginSoft?o("div",{staticClass:"form-row"},[o("div",{staticClass:"col-md",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[o("div",{staticClass:"banner-text",style:{"background-color":this.$store.state.primary_colour},attrs:{id:"top-bar"}},[o("font-awesome-icon",{attrs:{icon:"comments"}}),t._v("\n             "+t._s(t.aboutEnginSoft.acf.title)+"\n        ")],1),o("div",{staticClass:"col form-item text-one"},[o("p",[t._v(t._s(t.aboutEnginSoft.acf.text))])]),o("div",{staticClass:"col form-item"},[o("button",{staticClass:"flat-butt",staticStyle:{},style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"submit"},on:{click:function(e){return t.navigateTo(t.aboutEnginSoft.acf.link)}}},[t._v("\n            "+t._s(t.aboutEnginSoft.acf.buttontext)+"\n          ")])])])]):t._e()])},ut=[],dt={mixins:[q],computed:{aboutEnginSoft:function(){return this.$store.state.posts.find(function(t){return"About EnginSoft"==t.post_title})}}},pt=dt,ft=(o("1376"),Object(b["a"])(pt,lt,ut,!1,null,"b5c353ec",null)),mt=ft.exports,ht=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.buttonValue?o("button",{staticClass:"flat-butt",style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){return t.routeTo(t.buttonValue.acf.route_to_path)}}},[o("font-awesome-icon",{staticClass:"btn-icon",attrs:{icon:t.buttonValue.acf.icon}}),o("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.buttonValue.acf.text))])],1):t._e()},vt=[],_t={mixins:[tt],props:{nameValue:String},computed:{buttonValue:function(){var t=this;return this.$store.state.posts.find(function(e){return e.post_title==t.nameValue})}}},bt=_t,gt=Object(b["a"])(bt,ht,vt,!1,null,"f849c4b2",null),wt=gt.exports,yt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.value?o("div",{staticClass:"form-row title-text-alternative text-center"},[o("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact-area",expression:"'#contact-area'"}],staticClass:"flat-butt",style:{"background-color":this.$store.state.tertiary_colour}},[o("font-awesome-icon",{attrs:{icon:t.value.acf.icon}}),o("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.slideToText))])],1)]):t._e()},Ct=[],xt={props:{nameValue:String,slideToTextProp:String},computed:{value:function(){var t=this;return this.$store.state.posts.find(function(e){return e.post_title==t.nameValue})},slideToText:function(){return""!=this.slideToTextProp?this.slideToTextProp:this.value.acf.text}}},kt=xt,Pt=Object(b["a"])(kt,yt,Ct,!1,null,"4c9739f5",null),St=Pt.exports,Tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return this.$store.state.posts?o("div",[o("div",{staticClass:"form-row",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[o("div",{staticClass:"container"},[o("GutenbergDisplay",{attrs:{blocksRaw:t.ContactInfo.post_content}}),o("hr"),o("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[o("div",{staticClass:"col-s marg"},[o("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.phone_icon}})],1),o("div",{staticClass:"col-s"},[t._v(t._s(t.ContactInfo.acf.phone_number))])]),o("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[o("div",{staticClass:"col-s marg"},[o("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.email_icon}})],1),o("div",{staticClass:"col-s content"},[t._v(t._s(t.ContactInfo.acf.email_address))])]),o("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[o("div",{staticClass:"col-s marg"},[o("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.address_icon}})],1),o("div",{staticClass:"col-s",domProps:{innerHTML:t._s(t.ContactInfo.acf.address)}})])],1)])]):t._e()},$t=[],jt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-styles"},t._l(t.blocksFormatted,function(e,a){return o("div",{key:a},[o("span",{staticClass:"content-styles",domProps:{innerHTML:t._s(e)}})])}),0)},Et=[],qt=(o("6762"),o("2fdb"),o("4917"),{methods:{extract_gp_blocks:function(t,e){var o=this.split(t);return this.formatBlocks(o,e)},split:function(t){var e=t.replace(/(\r\n|\n|\r)/gm,""),o=/(?<=<!-- wp:[a-zA-Z-\/]*({? [\s\S]*})? -->)(.*?)(?=<!-- \/wp:[a-zA-Z-\/]* -->)/g;return e.match(o)},formatBlocks:function(t,e){return t.forEach(function(o,a){if(o.includes("wp-block-embed-youtube")){var n=/(?<=">https:\/\/)(.*?)(?=<\/div>)/g,s=o.match(n)[0],r=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,i=s.match(r),c=i&&11===i[2].length?i[2]:null;t[a]='<iframe  width="100%" height="315" src="//www.youtube.com/embed/'+c+'" frameborder="0" allowfullscreen></iframe>'}if(o.includes("wp-block-button")){var l=/(?<=href=")(.*?)(?=">)/g,u=o.match(l)[0],d=/(?<=href="[^]*">)(.*?)(?=<\/a><\/div>)/g,p=o.match(d)[0],f=o.includes("#")?"":'target="_blank" ';t[a]='<a class="flat-butt text-center" style="background-color: '+e+'" '+f+' href="'+u+'" ><span style="padding-left: 10px;"> '+p+"</span></a>",console.log(t[a])}}),t}}}),Bt={mixins:[qt],props:{blocksRaw:String},computed:{blocksFormatted:function(){return this.extract_gp_blocks(this.blocksRaw,this.$store.state.tertiary_colour)}}},At=Bt,Ot=(o("1c3e"),Object(b["a"])(At,jt,Et,!1,null,"2ac567ea",null)),It=Ot.exports,Dt={components:{GutenbergDisplay:It},computed:{ContactInfo:function(){var t=this.$store.state.posts.find(function(t){return"Contact Info"==t.post_title}),e=t.acf.address.split("\r").join(" <br/>");return t.acf.address=e,t}}},Vt=Dt,Rt=(o("647c"),Object(b["a"])(Vt,Tt,$t,!1,null,"89e5fe94",null)),Mt=Rt.exports,Ft={mixins:[tt],components:{SocialMedia:ct,AboutEnginsoft:mt,SidebarButton:wt,SidebarA:St,AddressArea:Mt,GutenbergDisplay:It},props:{contentProp:String,sidebarProp:Array,slideToTextProp:String},computed:{post_content:function(){return this.contentProp},sidebar:function(){return this.sidebarProp}}},Nt=Ft,Lt=(o("3bed"),Object(b["a"])(Nt,U,X,!1,null,"47024398",null)),Gt=Lt.exports,Ht=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container page-content"},[t.products[0]?o("div",{staticClass:"row"},[o("div",{staticClass:"col",attrs:{id:"text-block-one"}},[o("div",[o("h2",{staticClass:"title-text"},[t._v(t._s(t.products[0].product_name))]),o("hr",{staticClass:"line",style:{"background-color":this.$store.state.primary_colour}})]),t.products[0].product_description?o("div",[t._v("\n            "+t._s(t.products[0].product_description)+"\n          ")]):t._e()])]):t._e(),t._l(t.products,function(t,e){return o("div",{key:e,staticClass:"row"},[o("div",{staticClass:"container-fluid banner",attrs:{id:"three-bar"}},[o("div",{staticClass:"container page-content"},[o("product",{attrs:{product:t}})],1)])])})],2)])},Jt=[],zt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.product?o("div",[o("b-card-group",{attrs:{deck:""}},[o("b-card",{staticClass:"cardy",staticStyle:{"border-radius":"0px","border-width":"0px"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[t.product.post_title?o("h4",[t._v("\n              "+t._s(t.product.post_title)+"\n            ")]):t._e(),o("b-card-text",{staticClass:"card-text"},[t.product.acf.top_text?o("span",[t._v("\n                    "+t._s(t.product.acf.top_text)+"\n                ")]):t._e()])],1),o("div",{staticClass:"col-xs-3 mx-auto title-text-alternative text-center"},[t.product.acf.image?o("div",[o("img",{attrs:{src:t.product.acf.image.url}})]):t._e(),t.product.acf.collapsable?o("button",{staticClass:"flat-butt butt",style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"submit",id:"product-butt"},on:{click:function(e){t.showCollapse=!t.showCollapse,t.showForm=!1}}},[t._v("\n              "+t._s(t.product.acf.collapsable)+"\n            ")]):t._e(),t.product.acf.Scroll_contactform_button?o("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact-area",expression:"'#contact-area'"}],staticClass:"flat-butt butt",style:{"background-color":this.$store.state.tertiary_colour},attrs:{id:"product-butt"}},[o("font-awesome-icon",{attrs:{icon:"cogs"}}),o("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.product.acf.Scroll_contactform_button))])],1):t._e(),t.downloadPresent&&!t.cardIsCollapsable?o("button",{staticClass:"flat-butt butt",style:{"background-color":this.$store.state.tertiary_colour},on:{click:function(e){return t.handleDownload(t.product.acf.download_file)}}},[t._v("\n                    "+t._s(t.product.acf.download_button)+"\n            ")]):t._e()])]),o("div",[t.cardIsCollapsable?o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4 collapse-section"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[o("div",[o("div",{staticClass:"content-styles"},[o("GutenbergDisplay",{attrs:{blocksRaw:t.product.post_content}})],1),t.product.acf.collapse_span?o("b",{staticClass:"flat-butt text-center butt",style:{"background-color":this.$store.state.tertiary_colour}},[t._v("\n                  "+t._s(t.product.acf.collapse_span)+"\n                ")]):t._e(),t.downloadPresent?o("b",{staticClass:"flat-butt text-center butt",style:{"background-color":this.$store.state.tertiary_colour},on:{click:function(e){return t.handleDownload(t.product.acf.download_file)}}},[t._v("\n                        "+t._s(t.product.acf.download_button)+"\n                ")]):t._e()])]):t._e(),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4 collapse-section"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[o("div",{staticClass:"row justify-content-center"},[o("p",[o("b",[t._v("Please enter your details to download the file")])])]),o("contact-form",{attrs:{formType:"Download request",location:this.location,enquiryPresent:!1,buttonText:"Request Download",isDownload:!0}})],1)],1)])],1)],1):t._e()},Zt=[],Wt={mixins:[q],components:{ContactForm:V,GutenbergDisplay:It},props:{product:{type:Object}},computed:{cardIsCollapsable:function(){return""!=this.product.acf.collapsable},downloadPresent:function(){return""!=this.product.acf.download_button&&this.product.acf.download_file},location:function(){return 0!=this.product.acf.download_file?this.product.acf.download_file:""}},data:function(){return{showCollapse:!1,showForm:!1}},methods:{collapsableClick:function(){this.product.acf.download_file&&this.navigateTo(this.product.acf.download_file)},handleDownload:function(){this.product.acf.download_form?this.showForm=!this.showForm:this.navigateTo(this.product.acf.download_file)}}},Kt=Wt,Yt=(o("8ce5"),Object(b["a"])(Kt,zt,Zt,!1,null,"5225ffe0",null)),Qt=Yt.exports,Ut={name:"ProductBlock",components:{Product:Qt},props:{productName:{type:String}},computed:{title:function(){return"get the title"},text:function(){return"some text"},posts:function(){return this.$store.state.posts},products:function(){var t=this,e=this.$store.getters.sortedPosts,o=[];return e.forEach(function(e){e.categories.forEach(function(a){a.slug==t.productName&&(e.product_name=a.name,e.product_description=a.description,o.push(e))})}),o}}},Xt=Ut,te=Object(b["a"])(Xt,Ht,Jt,!1,null,"2d79ea77",null),ee=te.exports,oe=function(){var t=this,e=t.$createElement,o=t._self._c||e;return this.$store.state.posts?o("div",[o("div",{staticClass:"container-fluid banner",attrs:{id:"three-bar"}},[o("div",{staticClass:"container"},[o("b-card-group",{attrs:{deck:""}},[o("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[o("div",{staticClass:"text-center"},[o("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_one))])]),o("b-card-text",[o("h6",{staticStyle:{color:"white"}},[o("p",[t._v(t._s(t.threeBarBanner.acf.text_one))]),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_one?o("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_one))]):t._e(),o("ul",{staticClass:"card-body"},[o("li",[t._v("Check the input data and create clear work process")]),o("li",[t._v("Develop a working model within the Tolerance Analysis software")]),o("li",[t._v("Identify the true cause of the problems")]),o("li",[t._v("Define failure conditions")])])])],1)])],1),o("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.primary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[o("div",{staticClass:"text-center"},[o("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_two))])]),o("b-card-text",[o("h6",{staticStyle:{color:"white"}},[o("p",[t._v(t._s(t.threeBarBanner.acf.text_two))]),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_two?o("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_two))]):t._e(),o("ul",{staticClass:"card-body"},[o("li",[t._v("The customer requirements")]),o("li",[t._v("The design intent was not understood or described correctly")]),o("li",[t._v("Manufacturers were not manufacturing to design")]),o("li",[t._v("Raw materials being supplied with incorrect tolerances")]),o("li",[t._v("Failure conditions defined")]),o("li",[t._v("Understanding consequences of variation")]),o("li",[t._v("Identify the sensitivities of the design to reduce tolerances")]),o("li",[t._v("Convert the requirements to product technical specification")]),o("li",[t._v("Convert these specifications into Assembly/Subassembly dimensional requirements")]),o("li",[t._v("Assign component dimensions to fit the Assembly/Subassembly requirements")])])])],1)])],1),o("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[o("div",{staticClass:"text-center"},[o("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_three))])]),o("b-card-text",[o("h6",{staticStyle:{color:"white"}},[o("p",[t._v(t._s(t.threeBarBanner.acf.text_three))]),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_three?o("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_three))]):t._e(),o("ul",{staticClass:"card-body"},[o("li",[t._v("Designing for intent")]),o("li",[t._v("Design for function and Manufacture to design")]),o("li",[t._v("Functional dimensioning defines a part based on how it functions in the final product")]),o("li",[t._v("Interruptions in manufacturing flows reduced")]),o("li",[t._v("Assemblies fitting together")]),o("li",[t._v("Massive savings in reduced scrap")]),o("li",[t._v("Clients receive their orders faster")]),o("li",[t._v("Reduced costs in all areas of the design and manufacturing process")]),o("li",[t._v("Provide solutions to the individual challenges")]),o("li",[t._v("Give the client a new discipline and route map to improve their design and simulation")])])])],1)])],1)],1)],1)])]):t._e()},ae=[],ne={data:function(){return{showCollapse:!1}},computed:{threeBarBanner:function(){return this.$store.state.posts.find(function(t){return t.categories.find(function(t){return"three-bar-banner"===t.cat_name})})}}},se=ne,re=(o("ed0e"),Object(b["a"])(se,oe,ae,!1,null,"b9985230",null)),ie=re.exports,ce=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},le=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid",attrs:{id:"map"}},[o("div",{staticClass:"embed-responsive embed-responsive-21by9"},[o("iframe",{staticStyle:{border:"0"},attrs:{frameborder:"0",src:"https://www.google.com/maps/embed/v1/place?q=The%20Venture%20Centre%20%20Sir%20William%20Lyons%20Rd%20%20Coventry%20%20CV4%207EZ&key=AIzaSyBEVi8IMJaOP4MGM7vVGDcWG4SeESPB7E8",allowfullscreen:""}})])])])}],ue=[{position:{lat:52.385466,lng:-1.557249}}],de={data:function(){return{center:{lat:52.385466,lng:-1.557249},markers:ue,places:[]}},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}})}}},pe=de,fe=(o("d800"),Object(b["a"])(pe,ce,le,!1,null,"1896824c",null)),me=fe.exports,he={components:{ProductBlock:ee,PageContent:Gt,ThreeBarBanner:ie,Maps:me},props:{pageProp:Object},computed:{productList:function(){return this.pageProp.acf.products.split(" ")}}},ve=he,_e=(o("546f"),Object(b["a"])(ve,Y,Q,!1,null,"393df5a6",null)),be=_e.exports,ge={name:"home",props:["name"],components:{Page:be},computed:{pageContent:function(){var t=this;return this.$store.state.pages.find(function(e){return e.post_title.toLowerCase().replace(/\s/g,"")==t.componentName.toLowerCase()})},componentName:function(){return void 0==this.name?"home":this.name.toLowerCase().replace(/\s/g,"")}}},we=ge,ye=Object(b["a"])(we,W,K,!1,null,"5347d4a6",null),Ce=ye.exports;a["default"].use(Z["a"]);var xe=new Z["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:Ce},{path:"/:name",name:"home",props:!0,component:Ce}]}),ke=(o("55dd"),o("2f62")),Pe="https://cms.tolerance-analysis.co.uk/wp-json/",Se="PW";a["default"].use(ke["a"]);var Te=new ke["a"].Store({state:{pages:[],posts:[],primary_colour:"",secondary_colour:"",tertiary_colour:"",quarternary_colour:"",footer_area_colour:"",contact_area_background_image:{}},getters:{homePage:function(t){return t.pages.find(function(t){return"Home"==t.post_title})},sortedPosts:function(t){return t.posts.sort(function(t,e){return t.acf.order-e.acf.order})}},mutations:{addSettings:function(t,e){var o=e.find(function(t){return"settingspage.php"==t.template});t.primary_colour=o.acf.primary_colour,t.secondary_colour=o.acf.secondary_colour,t.tertiary_colour=o.acf.tertiary_colour,t.quarternary_colour=o.acf.quarternary_colour,t.footer_area_colour=o.acf.footer_area_colour,t.contact_area_background_image=o.acf.contact_area_background_image},addPages:function(t,e){t.pages=e},addPosts:function(t,e){t.posts=e}},actions:{getSettings:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,a={},t.next=4,A.a.get(Pe+Se+"/settings").then(function(t){a=t.data,o("addSettings",a)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getPages:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,a={},t.next=4,A.a.get(Pe+Se+"/pages").then(function(t){a=t.data,o("addPages",a)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getPosts:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,a={},t.next=4,A.a.get(Pe+Se+"/posts").then(function(t){a=t.data,o("addPosts",a)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}}),$e=o("5f5b"),je=(o("f9e3"),o("2dd8"),o("755e"));a["default"].use(s.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),a["default"].use($e["a"]),a["default"].use(je,{load:{key:"AIzaSyAa5TSKIY7nhJ0VZV8koYtxJeH8_Ia7Gi8"}}),a["default"].config.productionTip=!1,new a["default"]({router:xe,store:Te,render:function(t){return t(z)}}).$mount("#app")},"617d":function(t,e,o){},"647c":function(t,e,o){"use strict";var a=o("40ee"),n=o.n(a);n.a},"64a9":function(t,e,o){},7191:function(t,e,o){},8961:function(t,e,o){},"8b83":function(t,e,o){},"8ce5":function(t,e,o){"use strict";var a=o("c540"),n=o.n(a);n.a},9569:function(t,e,o){},ab53:function(t,e,o){"use strict";var a=o("8961"),n=o.n(a);n.a},b640:function(t,e,o){t.exports=o.p+"img/logo.e5ff8fc2.jpg"},c540:function(t,e,o){},c9dc:function(t,e,o){"use strict";var a=o("4ebb"),n=o.n(a);n.a},d800:function(t,e,o){"use strict";var a=o("8b83"),n=o.n(a);n.a},e74d:function(t,e,o){},e774:function(t,e,o){"use strict";var a=o("1cc1"),n=o.n(a);n.a},ed0e:function(t,e,o){"use strict";var a=o("39ac"),n=o.n(a);n.a},f329:function(t,e,o){"use strict";var a=o("7191"),n=o.n(a);n.a},f600:function(t,e,o){"use strict";var a=o("2451"),n=o.n(a);n.a}});
//# sourceMappingURL=app.621792d8.js.map
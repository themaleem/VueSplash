(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],d=0,m=[];d<s.length;d++)i=s[d],r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/VueSplash/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},1369:function(e,t,a){"use strict";var n=a("3689"),r=a.n(n);r.a},3689:function(e,t,a){},"38f0":function(e,t,a){},"418f":function(e,t,a){"use strict";var n=a("56b0"),r=a.n(n);r.a},"4ded":function(e,t,a){"use strict";var n=a("aaeb"),r=a.n(n);r.a},"56b0":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i={name:"app"},s=i,c=(a("034f"),a("2877")),u=Object(c["a"])(s,r,o,!1,null,null,null),l=u.exports,d=(a("4989"),a("ab8b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SearchBar"),a("ImageGallery",{attrs:{images:e.images}})],1)}),m=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"main"},[a("div",{staticClass:"search"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.Search(t)}}},[a("div",{staticClass:"form-group has-search"},[a("span",{staticClass:"fa fa-search form-control-feedback"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search for photo"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})])])])])])},f=[],g={name:"searchBar",data:function(){return{query:""}},methods:{Search:function(){this.$router.push("/search?q="+this.query)}}},h=g,v=(a("418f"),Object(c["a"])(h,p,f,!1,null,null,null)),b=v.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"gallery"},[a("div",{staticClass:"row"},e._l(e.images,function(t){return a("div",{key:t.id,staticClass:"col-md-4",on:{click:function(a){return e.showImage(t.urls.full,t.user.first_name+" "+t.user.last_name,t.user.location)}}},[a("ImageCard",{attrs:{name:e.getName(t.user),location:t.user.location,image:t.urls.regular,width:t.width,height:t.height}})],1)}),0)]),a("LightBox",{attrs:{currentImage:e.currentImage,imageName:e.imageName,imageLocation:e.imageLocation}})],1)},_=[],w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:e.loading,expression:"loading",arg:"on",modifiers:{progress:!0}},{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"imagecard",attrs:{"data-effect":"zoom"}},[a("figure",{staticClass:"card__image"},[a("img",{attrs:{src:e.image,alt:"Short description"}})]),a("div",{staticClass:"card__body"},[a("p",{staticClass:"card__bio"},[e._v(e._s(e.name))])]),a("div",{staticClass:"card__footer"},[a("br"),a("span",{staticClass:"card__date"},[e._v(e._s(e.location))])])]),a("Placeholder",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],attrs:{height:e.placeholderHeight}})],1)},O=[],x=(a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"skeleton-container"},[a("skeleton-loading",[a("row",{attrs:{gutter:{top:e.height}}},[a("square-skeleton",{attrs:{count:1,boxProperties:{bottom:"0px",width:"100px"}}}),a("square-skeleton",{attrs:{count:1,boxProperties:{top:"10px",bottom:"0px",width:"50px"}}})],1)],1)],1)}),C=[],L={name:"Placeholder",data:function(){return{}},props:{height:{type:String,required:!0,default:"130px"}}},j=L,q=(a("d647"),Object(c["a"])(j,x,C,!1,null,null,null)),S=q.exports,P=a("8ff0"),I=a.n(P),N={directives:{imagesLoaded:I.a},components:{Placeholder:S},data:function(){return{isLoading:!0}},name:"Gallery",props:{image:{type:String,required:!0},name:{type:String,required:!0},location:{type:String},height:{type:Number},width:{type:Number}},computed:{placeholderHeight:function(){var e=this.width/this.height*50;return console.log((this.height/e).toFixed(2)+"px"),(this.height/20).toFixed(2)+"px"}},methods:{loading:function(e,t){t.isLoaded&&(this.isLoading=!1)}}},E=N,$=(a("f7b7"),Object(c["a"])(E,w,O,!1,null,null,null)),k=$.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("modal",{attrs:{width:"1000px",height:"650px",name:"modal",clickToClose:!1},on:{opened:e.modalOpened,"before-close":e.beforeClose}},[n("loading",{attrs:{active:e.isLoading,"is-full-page":!1,color:"#2c3e50"},on:{"update:active":function(t){e.isLoading=t}}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("img",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:e.loading,expression:"loading",arg:"on",modifiers:{progress:!0}},{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"modal__image",attrs:{src:e.currentImage}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"modal__image"})]),n("div",{staticClass:"col-md-12"},[n("diV",{staticClass:"image__details"},[n("h1",[e._v(" "+e._s(e.imageName)+" ")]),n("p",[e._v(e._s(e.imageLocation))])])],1)])],1),n("img",{directives:[{name:"show",rawName:"v-show",value:e.modalOpen,expression:"modalOpen"}],staticClass:"closemodal",attrs:{src:a("b8a8"),width:"1%"},on:{click:function(t){return e.$modal.hide("modal")}}})],1)},G=[],B=a("9062"),D=a.n(B),A=(a("e40d"),{name:"LightBox",directives:{imagesLoaded:I.a},components:{Loading:D.a},data:function(){return{isLoading:!0,modalOpen:!1}},props:{currentImage:{type:String},imageName:{type:String},imageLocation:{type:String}},methods:{modalOpened:function(e){this.modalOpen=!0,this.isLoading=!0},beforeClose:function(e){this.modalOpen=!1},loading:function(e,t){t.isLoaded&&(this.isLoading=!1)}}}),M=A,R=(a("aa78"),Object(c["a"])(M,T,G,!1,null,null,null)),H=R.exports,U={name:"Gallery",components:{ImageCard:k,LightBox:H},data:function(){return{currentImage:"",imageName:"",imageLocation:""}},props:{images:{type:Array,required:!0,default:[]}},methods:{showImage:function(e,t,a){this.currentImage=e,this.imageName=t,this.imageLocation=a,this.$modal.show("modal")},getName:function(e){return e.first_name+" "+(e.last_name?e.last_name:"")}}},z=U,F=(a("4ded"),Object(c["a"])(z,y,_,!1,null,null,null)),J=F.exports,V={name:"Landing",components:{SearchBar:b,ImageGallery:J},data:function(){return{images:[]}},mounted:function(){this.getImages()},methods:{getImages:function(){var e=this;this.$api.GET("/search/photos?page=1&query=African&per_page=8").then(function(t){console.log(t),e.images=t.results}).catch(function(e){console.log(e.response)})}}},Q=V,K=(a("1369"),Object(c["a"])(Q,d,m,!1,null,null,null)),W=K.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ResultBar",{attrs:{query:e.query}}),a("ImageGallery",{attrs:{images:e.images}})],1)},Y=[],Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"main"},[a("div",{staticClass:"search"},[a("h1",{staticStyle:{"text-align":"left"}},[e._v("Searching for "),a("q",{staticClass:"query"},[e._v(e._s(e.query))])])])])])},ee=[],te={name:"searchBar",props:{query:{type:String}}},ae=te,ne=(a("8003"),Object(c["a"])(ae,Z,ee,!1,null,"4648297e",null)),re=ne.exports,oe={name:"Gallery",components:{ImageGallery:J,ResultBar:re},data:function(){return{images:[],query:this.$route.query.q,loading:!0,currentImage:"",imageName:"",imageLocation:"",modalOpen:!1}},mounted:function(){this.getImages()},methods:{modalOpened:function(e){this.modalOpen=!0},beforeClose:function(e){this.modalOpen=!1},showImage:function(e,t,a){this.currentImage=e,this.imageName=t,this.imageLocation=a,this.$modal.show("login-modal")},getImages:function(){var e=this;this.$api.GET("/search/photos?query="+this.query+"&per_page=20").then(function(t){console.log(t),e.images=t.results,e.loading=!1}).catch(function(e){console.log(e.data)})}}},ie=oe,se=Object(c["a"])(ie,X,Y,!1,null,null,null),ce=se.exports,ue=a("8c4f");n["default"].use(ue["a"]);var le=new ue["a"]({mode:"history",routes:[{path:"/",name:"home",component:W},{path:"/search",name:"search",component:ce}]}),de=a("1881"),me=a.n(de),pe=(a("8e6e"),a("ac6a"),a("456d"),a("7618")),fe=a("bd86"),ge=a("bc3a"),he=a.n(ge);function ve(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ve(a,!0).forEach(function(t){Object(fe["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ve(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ye={baseURL:"https://api.unsplash.com/",timeout:3e4,headers:{Accept:"application/json","Content-Type":"application/json"}},_e=function(e,t){return Le({method:"get",url:e,params:t})},we=function(e,t){return Le({method:"post",url:e,data:t})},Oe=function(e,t){return Le({method:"put",url:e,data:t})},xe=function(e,t){return Le({method:"patch",url:e,data:t})},Ce=function(e){return Le({method:"delete",url:e})},Le=function(e){return e=be({},e,{},ye),e=je(e),new Promise(function(t,a){he.a.request(e).then(function(e){t(e.data)}).catch(function(e){qe(e),a(e)})})};function je(e){var t="bb4b552fa6df0336cce8a2bcb5b4abdbcc4ca92b80082f1ac0e807e998e185c4";return t&&(e.headers.Authorization="Client-ID "+t),e}function qe(e){if(e.response){if(401===e.response.status)return void console.log(e.response.data);console.log(e.response.data);var t=e.response.data.error;Object(pe["a"])(t)}else e.request}var Se={GET:_e,POST:we,DELETE:Ce,PUT:Oe,PATCH:xe,REQUEST:Le},Pe=a("bce0"),Ie=a.n(Pe);Object.defineProperty(n["default"].prototype,"$api",{value:Se}),n["default"].use(Ie.a),n["default"].use(me.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(l)},router:le}).$mount("#app")},"64a9":function(e,t,a){},8003:function(e,t,a){"use strict";var n=a("e5a6"),r=a.n(n);r.a},8051:function(e,t,a){},aa78:function(e,t,a){"use strict";var n=a("f13d"),r=a.n(n);r.a},aaeb:function(e,t,a){},b8a8:function(e,t,a){e.exports=a.p+"img/cross-out.d474cb1a.svg"},d647:function(e,t,a){"use strict";var n=a("8051"),r=a.n(n);r.a},e5a6:function(e,t,a){},f13d:function(e,t,a){},f7b7:function(e,t,a){"use strict";var n=a("38f0"),r=a.n(n);r.a}});
//# sourceMappingURL=app.8a14ad5f.js.map
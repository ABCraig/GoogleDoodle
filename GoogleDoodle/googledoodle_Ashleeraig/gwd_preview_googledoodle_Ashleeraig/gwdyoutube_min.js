-function(){"use strict";var g;var h=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},l=function(a){if(h(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&h(a))return a;return null};var m=function(){var a=window.navigator.userAgent||"";return-1<a.indexOf("Trident")||-1<a.indexOf("MSIE")};var p=function(a,b){var d;d=document.createEvent("Event");d.initEvent(a,!0,!0);b.dispatchEvent(d)},t=function(a,b){var d=function(c){a.removeEventListener("load",d);b(c)};a.addEventListener("load",d)};function u(a,b){this.C=a;for(var d=b.split("."),c=window,e=0;c&&e<d.length;e++)c=c[d[e]];this.o=c?0:2;this.f=[]}u.prototype.J=function(){for(var a=this.o=0;a<this.f.length;a++)this.f[a]();this.f=[]};u.prototype.load=function(a){a&&(0==this.o?a():this.f.push(a));if(2==this.o){this.o=1;a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=this.C;t(a,this.J.bind(this));var b=document.getElementsByTagName("script")[0];b?b.parentNode.insertBefore(a,b):document.getElementsByTagName("head")[0].appendChild(a)}};function v(a,b){this.C=a;this.H=b;this.B=null;this.f=[];this.F=!1}v.prototype.load=function(a){this.F?a():(this.B||(this.B=new u(this.C,this.H)),this.B.load(),this.f.push(a))};var w=null;window.onYouTubeIframeAPIReady=function(){p("apiloaded",document);var a=w;a.F=!0;for(var b=0;b<a.f.length;b++)a.f[b]();a.f=[]};
var x=function(a){var b="https://www.youtube.com/embed/"+a.videoId,b=b+"?enablejsapi=1&html5=1";a.autoplay&&(b+="&autoplay=1");a.adformat&&(b+="&adformat="+a.adformat);m()&&(b+="&wmode=opaque");a.color&&(b+="&color="+a.color);b+="&controls=";switch(a.controls){case "none":b+="0";break;case "autohide":case void 0:b+="1"}a.annotations||(b+="&iv_load_policy=3");a.related||(b+="&rel=0");a.loop&&(b+="&loop=1&playlist="+a.videoId);a.title||(b+="&showinfo=0");a.startPosition&&(b+="&start="+a.startPosition);
a.extraPlayerArgs&&a.extraPlayerArgs.split("&").forEach(function(a){a&&(a=a.split("="),b+="&",b+=a[0],1<a.length&&(b+="="+encodeURIComponent(a[1])))});return b},y=function(a,b,d,c){w||(w=new v("https://www.youtube.com/iframe_api","YT"));b||(b=Date.now()+""+Math.floor(1E4*Math.random()));b="video"+b;var e=!1;w.load(function(){if(!e){var f;f=b;var q=d.width,n=d.height,r=x(d),F=d.allowfullscreen,k=a.querySelector("#"+f);k||(k=document.createElement("iframe"),k.id=f,k.frameBorder="0",k.type="text/html",
a.appendChild(k));r!=k.src&&(k.src=r);k.width=q;k.height=n;F?k.setAttribute("allowfullscreen",""):k.removeAttribute("allowfullscreen");f=new YT.Player(f,{events:d.events});c(f)}});return function(){e=!0}};var z=/^https:\/\/((?:www|m).)youtube.com(\/.*)?$/,A=function(a){a=a||"";var b=a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return b&&11==b[2].length?b[2]:a},B=function(){};goog.inherits(B,HTMLElement);B.prototype.createdCallback=function(){this.a=null;this.i=this.u=this.g=!1;this.l=null;this.D=this.A=!1;this.c=[];this.G=[];this.s=this.b=null;this.v=this.h=!1;this.m=-1};
var D=function(a,b){if(!a.b){a.style.position="relative";var d=window.getComputedStyle(a).height,c=window.getComputedStyle(a).width;a.b=document.createElement("div");a.b.className="youtube-overlay";a.b.style.height=d;a.b.style.width=c;if(b){a.b.className+=" youtube-play-button";a.b.style.backgroundImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4NCcgaGVpZ2h0PSc2MCc+PHBhdGggZD0nTTg0LjE1LDI2LjR2Ni4zNWMwLDIuODMzLTAuMTUsNS45NjctMC40NSw5LjRjLTAuMTMzLDEuNy0wLjI2NywzLjExNy0wLjQsNC4yNWwtMC4xNSwwLjk1Yy0wLjE2NywwLjc2Ny0wLjM2NywxLjUxNy0wLjYsMi4yNWMtMC42NjcsMi4zNjctMS41MzMsNC4wODMtMi42LDUuMTVjLTEuMzY3LDEuNC0yLjk2NywyLjM4My00LjgsMi45NWMtMC42MzMsMC4yLTEuMzE2LDAuMzMzLTIuMDUsMC40Yy0wLjc2NywwLjEtMS4zLDAuMTY3LTEuNiwwLjJjLTQuOSwwLjM2Ny0xMS4yODMsMC42MTctMTkuMTUsMC43NWMtMi40MzQsMC4wMzQtNC44ODMsMC4wNjctNy4zNSwwLjFoLTIuOTVDMzguNDE3LDU5LjExNywzNC41LDU5LjA2NywzMC4zLDU5Yy04LjQzMy0wLjE2Ny0xNC4wNS0wLjM4My0xNi44NS0wLjY1Yy0wLjA2Ny0wLjAzMy0wLjY2Ny0wLjExNy0xLjgtMC4yNWMtMC45LTAuMTMzLTEuNjgzLTAuMjgzLTIuMzUtMC40NWMtMi4wNjYtMC41MzMtMy43ODMtMS41LTUuMTUtMi45Yy0xLjAzMy0xLjA2Ny0xLjktMi43ODMtMi42LTUuMTVDMS4zMTcsNDguODY3LDEuMTMzLDQ4LjExNywxLDQ3LjM1TDAuOCw0Ni40Yy0wLjEzMy0xLjEzMy0wLjI2Ny0yLjU1LTAuNC00LjI1QzAuMTMzLDM4LjcxNywwLDM1LjU4MywwLDMyLjc1VjI2LjRjMC0yLjgzMywwLjEzMy01Ljk1LDAuNC05LjM1bDAuNC00LjI1YzAuMTY3LTAuOTY2LDAuNDE3LTIuMDUsMC43NS0zLjI1YzAuNy0yLjMzMywxLjU2Ny00LjAzMywyLjYtNS4xYzEuMzY3LTEuNDM0LDIuOTY3LTIuNDM0LDQuOC0zYzAuNjMzLTAuMTY3LDEuMzMzLTAuMywyLjEtMC40YzAuNC0wLjA2NiwwLjkxNy0wLjEzMywxLjU1LTAuMmM0LjktMC4zMzMsMTEuMjgzLTAuNTY3LDE5LjE1LTAuN0MzNS42NSwwLjA1LDM5LjA4MywwLDQyLjA1LDBMNDUsMC4wNWMyLjQ2NywwLDQuOTMzLDAuMDM0LDcuNCwwLjFjNy44MzMsMC4xMzMsMTQuMiwwLjM2NywxOS4xLDAuN2MwLjMsMC4wMzMsMC44MzMsMC4xLDEuNiwwLjJjMC43MzMsMC4xLDEuNDE3LDAuMjMzLDIuMDUsMC40YzEuODMzLDAuNTY2LDMuNDM0LDEuNTY2LDQuOCwzYzEuMDY2LDEuMDY2LDEuOTMzLDIuNzY3LDIuNiw1LjFjMC4zNjcsMS4yLDAuNjE3LDIuMjg0LDAuNzUsMy4yNWwwLjQsNC4yNUM4NCwyMC40NSw4NC4xNSwyMy41NjcsODQuMTUsMjYuNHogTTMzLjMsNDEuNEw1NiwyOS42TDMzLjMsMTcuNzVWNDEuNHonIGZpbGw9JyNDQzE4MUUnIGZpbGwtb3BhY2l0eT0nLjUnPjwvcGF0aD48cG9seWdvbiBwb2ludHM9JzMzLjMsNDEuNCAzMy4zLDE3Ljc1IDU2LDI5LjYnIGZpbGw9JyNGRkYnPjwvcG9seWdvbj48L3N2Zz4K')";
var e=document.createElement("div");e.className="youtube-thumbnail";a.b.appendChild(e);var f={videoId:C(a).videoId,width:c,height:d,thumbWidth:"100%",thumbHeight:"100%",thumbAlign:"tl",events:{onClick:a.N.bind(a)}};setTimeout(function(){this.s=new YT.Thumbnail(e,f)}.bind(a),0)}else m()&&(a.b.style.backgroundColor="rgba(0, 0, 0, 0)")}return a.b};g=B.prototype;
g.N=function(){this.detachedCallback();this.setAttribute("autoplay","standard");this.i=!0;var a=C(this);this.l=y(this,this.id,a,function(a){this.h=!1;this.a=a;p("ready",this)}.bind(this))};
g.attachedCallback=function(){if("function"==typeof this.gwdLoad&&"function"==typeof this.gwdIsLoaded&&!this.gwdIsLoaded()){var a=l(this),b=a&&"function"==typeof a.gwdIsLoaded;(!a||b&&a.gwdIsLoaded())&&this.gwdLoad()}if(null==this.gwdActivate||"function"==typeof this.gwdActivate)null!=this.gwdIsActive&&this.gwdIsActive()||(b=(a=l(this))&&null!=a.gwdIsActive&&"function"==typeof a.gwdIsActive,null==a&&this.gwdActivate(),b&&a.gwdIsActive()&&this.gwdActivate())};
g.detachedCallback=function(){this.a&&(this.a.destroy(),this.a=null);this.b&&this.b.parentElement&&(this.removeChild(this.b),this.b=null);this.s&&(this.s.destroy(),this.s=null);this.l&&this.l();this.i=this.g=!1;this.l=null};g.gwdLoad=function(){if(!this.i){this.i=!0;var a=C(this);this.l=y(this,this.id,a,function(b){this.a=b;if("preview"==a.preview||"intro"==a.preview)this.h=!0,this.appendChild(D(this,"preview"==a.preview));p("ready",this)}.bind(this))}};g.gwdIsLoaded=function(){return null!=this.a};
g.gwdActivate=function(){this.classList.remove("hidden");this.u=!0};g.gwdDeactivate=function(){this.classList.add("hidden");0!=this.getCurrentTime()&&this.seek(0);2!=this.m&&this.pause();this.u=!1};g.gwdIsActive=function(){return this.u};g.attributeChangedCallback=function(a){if("video-url"==a&&this.i){var b=C(this).autoplay;b&&(this.A=!1);this.setYouTubeId(A(this.getAttribute(a)),!b)}};g.play=function(){this.h||(this.g?this.a.playVideo():this.c.push({j:0}))};
g.pause=function(){this.g?5!=this.m&&this.a.pauseVideo():this.c.push({j:1})};g.replay=function(){this.h||(this.seek(0),this.play(),p("replayed",this))};g.seek=function(a){this.h||(this.g?this.a.seekTo(a,!0):this.c.push({j:2,w:a}))};g.getCurrentTime=function(){return this.g?this.a.getCurrentTime():0};g.setYouTubeId=function(a,b){this.h||(this.g?b?this.a.cueVideoById(a):this.a.loadVideoById(a):this.i?this.c.push({j:4,w:a,M:b}):this.setAttribute("video-url",a))};
g.toggleMute=function(){if(!this.h)if(this.g){var a=this.a;a.isMuted()?a.unMute():a.mute()}else this.c.push({j:3})};
var C=function(a){var b="none",d=!1,c=String(a.getAttribute("autoplay")).toLowerCase();"none"==c||"false"==c||"null"==c||"ontouchstart"in window||0<window.navigator.MaxTouchPoints||0<window.navigator.msMaxTouchPoints||(d=!0,b="true"==c||""==c?"standard":c);var c=window.getComputedStyle(a).width,e=window.getComputedStyle(a).height;0===parseFloat(c)||isNaN(parseInt(c,10))?c="100%":-1==c.indexOf("%")&&(c=parseInt(c,10));0===parseFloat(e)||isNaN(parseInt(e,10))?e="100%":-1==e.indexOf("%")&&(e=parseInt(e,
10));d={annotations:a.hasAttribute("annotations"),autoplay:d,events:{onReady:a.K.bind(a),onStateChange:a.L.bind(a),onCueRangeEnter:a.I.bind(a)},height:e,loop:a.hasAttribute("loop"),preview:b,related:a.hasAttribute("related"),title:a.hasAttribute("title"),videoId:A(a.getAttribute("video-url")),width:c};if(c=a.getAttribute("color"))d.color=c;if(c=a.getAttribute("controls"))d.controls=c;c=parseInt(a.getAttribute("start-position"),10);isNaN(c)||(d.startPosition=c);if(!(c=a.getAttribute("adformat"))){var c=
b,f;if(window.Enabler){e=studio.common.Environment;if(e.hasType(e.Type.CREATIVE_TOOLSET)){if("none"==c||"preview"==c)f="2_11";e=Enabler.getContainerState();e!=studio.sdk.ContainerState.EXPANDING&&e!=studio.sdk.ContainerState.EXPANDED&&e!=studio.sdk.ContainerState.FS_EXPANDING&&e!=studio.sdk.ContainerState.FS_EXPANDED||"standard"!=c&&"intro"!=c||(f="2_9")}else c=Enabler.getParameter("adSiteUrl")||"localhost",z.test(c)&&(f="1_8");f||(f="1_5");c=f}else c=""}d.adformat=c;if("intro"==b||"preview"==b)d.annotations=
!1,d.controls="none",d.loop=!1,d.related=!1,d.title=!1;if(b=a.getAttribute("extra-player-args"))d.extraPlayerArgs=b;d.allowfullscreen=a.hasAttribute("allowfullscreen");return d},E=function(a,b,d,c){a.a.addCueRange(b,d,c);a.G.push({id:b,start:String(d),end:String(c)})},G=function(a,b,d,c){for(var e=d/4,f=0,q=c.length;f<q;f++){var n=b+e*f,r=b+d;0===f?n+=.1:f===q-1&&--n;E(a,c[f],n,r)}},H=function(a,b,d){var c=parseInt(a.getAttribute("preview-duration"),10)||30;d&&b+c>d&&(c=d-b);G(a,b,c,["preview_q0",
"preview_q1","preview_q2","preview_q3","preview_q4"])};
B.prototype.K=function(){this.g=!0;for(var a=0,b=this.c.length;a<b;++a)switch(this.c[a].j){case 0:this.play();break;case 1:this.pause();break;case 2:this.seek(this.c[a].w);break;case 3:this.toggleMute();break;case 4:this.setYouTubeId(this.c[a].w,this.c[a].M)}this.c=[];b=C(this).preview;this.hasAttribute("muted")||"intro"==b||"preview"==b?this.a.mute():this.a.unMute();a=this.a.getDuration();switch(b){case "none":case "standard":G(this,0,a,["q0","q1","q2","q3","q4"]);break;case "intro":case "preview":a?
(b=C(this).startPosition,H(this,b&&b<a?b:0,a)):this.v=!0}this.hasAttribute("pause-on-end")&&E(this,"ending",a-1,a);this.a.addEventListener("seekto",function(){p("seekto",this)}.bind(this),!1);this.m=5};
B.prototype.L=function(a){a=parseInt(a.data,10);if(!isNaN(a)){var b="";switch(a){case 0:b="ended";this.hasAttribute("loop")&&this.replay();break;case 1:b="playing";if(!this.A&&C(this).autoplay)this.A=!0,this.v&&(H(this,this.a.getCurrentTime()),this.v=!1);else{var d=this.a;!d.isMuted()||this.hasAttribute("muted")||this.D||d.unMute();0==this.D&&(this.D=!0);0==this.m&&p("replayed",this);p("playpressed",this)}break;case 2:b="paused";break;case 3:b="buffering"}b&&p(b,this);this.m=a}};
B.prototype.I=function(a){"ending"==a.data?this.pause():this.a.removeCueRange(a.data);switch(a.data){case "q0":p("viewed0percent",this);break;case "q1":p("viewed25percent",this);break;case "q2":p("viewed50percent",this);break;case "q3":p("viewed75percent",this);break;case "q4":p("viewed100percent",this);break;case "preview_q0":p("previewed0percent",this);break;case "preview_q1":p("previewed25percent",this);break;case "preview_q2":p("previewed50percent",this);break;case "preview_q3":p("previewed75percent",
this);break;case "preview_q4":this.a.pauseVideo(),p("previewed100percent",this),this.removeAttribute("autoplay")}};document.registerElement("gwd-youtube",{prototype:B.prototype});}()

(this["webpackJsonpdyl-edit"]=this["webpackJsonpdyl-edit"]||[]).push([[0],{116:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var i,r=n(73),a=n(30),s=n.n(a),c=n(52),o=n(171),d=null,l=function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=Object(o.createFFmpeg)({logger:t,corePath:"https://unpkg.com/@ffmpeg/core@0.8.5/dist/ffmpeg-core.js"}),e.next=3,d.load();case 3:return i=t,e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function u(t){return fetch(t).then((function(e){return e.arrayBuffer()})).then((function(t){return e.from(t)}))}var j=function(){var e=Object(c.a)(s.a.mark((function e(t,n,a){var c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==d){e.next=2;break}throw new Error("FFMPEG not load!");case 2:if(i({type:"INFO",message:"Loading Audio And Video File... (it will take long time depend on the duration of video and audio and your internet connection)"}),null===t||null===n){e.next=11;break}return e.next=6,Promise.all([u(t),u(n)]);case 6:o=e.sent,d.FS("writeFile","srcVideo",o[0]),d.FS("writeFile","srcAudio",o[1]),e.next=23;break;case 11:if(null===t){e.next=17;break}return e.t0=d,e.next=15,u(t);case 15:e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","srcVideo",e.t1);case 17:if(null===n){e.next=23;break}return e.t2=d,e.next=21,u(n);case 21:e.t3=e.sent,e.t2.FS.call(e.t2,"writeFile","srcAudio",e.t3);case 23:return i({type:"INFO",message:"Start Rendering..."}),e.next=26,(c=d).run.apply(c,Object(r.a)(a).concat(["output.mp4"]));case 26:return e.abrupt("return",d.FS("readFile","output.mp4"));case 27:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}()}).call(this,n(243).Buffer)},219:function(e,t,n){},242:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(15),s=n.n(a),c=n(30),o=n.n(c),d=n(52),l=n(61),u=n(62),j=n(66),h=n(65),b=n(166),p=n.n(b),f=n(167),m=n.n(f);function x(e,t,n){var i,r;i=new Blob([e],{type:n}),function(e,t){var n;(n=document.createElement("a")).href=e,n.download=t,document.body.appendChild(n),n.click(),n.remove()}(r=window.URL.createObjectURL(i),t),setTimeout((function(){return window.URL.revokeObjectURL(r)}),1e3)}var O=n(327),y=n(350),g=n(339),v=n(343),w=n(351),C=n(293),k=n(184),A=n(329),V=n(342),T=n(176),R=n.n(T),D=n(344),S=n(178),F=n.n(S),E=n(174),L=n.n(E),Y=n(177),M=n.n(Y),I=n(294),N=n(347),P=n(2),U=Object(I.a)({headerH1:{color:"blue",fontWeight:"bold","&:hover":{color:"#2f17ad",cursor:"pointer"}}});function B(){var e=U();return Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsxs)(O.a,{container:!0,direction:"column",spacing:2,children:[Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)(N.a,{alt:"DYL Editor",src:"".concat("https://dim0147.github.io/dyl-editor","/logo512.png")})})}),Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(k.a,{onClick:function(){return window.open("https://chrome.google.com/webstore/detail/dyl-download-facebook-vid/honmapcmnfgjmahijdniaaollhhfpcnj","_blank")},align:"center",component:"h1",className:e.headerH1,children:"DYL Editor"})}),Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)(A.a,{onClick:function(){return window.open("https://dim0147.github.io/dyl-editor/en/update")},style:{margin:10},variant:"contained",color:"secondary",children:"About Extension"})})})]})})}n(219);var W=n(114),H=function(e){var t=e.src,n=e.refFn;return Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)("div",{children:Object(P.jsx)(W.Player,{ref:n,fluid:!1,width:400,height:300,src:t,children:Object(P.jsx)(W.BigPlayButton,{position:"center"})})})})})},_=Object(i.memo)(H),z=n(73),G=n(43),J=n(170),q=n.n(J),K=(n(242),n(116));function Q(e){var t=e.split(":");return t.length<3||Number(t[1])>=60||Number(t[2])>=60?null:60*+t[0]*60+60*+t[1]+ +t[2]}function X(e){return new Date(1e3*e).toISOString().substr(11,8)}function Z(e){var t=e.audioAction,n=e.startTrim,i=e.endTrim,r=[];if("undefined"!==typeof n&&n>0){var a=X(n);r.push("-ss",a)}if("undefined"!==typeof i&&i>0){var s=X(i-("undefined"!==typeof n&&n>0?n:0));r.push("-t",s)}return"add"===t?r.push("-map","0","-map","1:a"):"remove"===t&&r.push("-an"),r.push("-c","copy"),r}var $=Object(I.a)({renderBox:{maxHeight:250,overflowY:"auto",borderBottom:"1px solid #f44336","& ul":{color:"#949494",listStyleType:"none"}}}),ee=Object(i.memo)((function(e){var t=e.srcVideo,n=e.srcAudio,r=e.merge,a=e.audioAction,s=e.startTrim,c=e.endTrim,l=e.triggerChangeVideo,u=e.setCenterMessage,j=e.setIsRenderRing,h=$(),b=Object(i.useState)([]),p=Object(G.a)(b,2),f=p[0],m=p[1],x=Object(i.useState)(""),y=Object(G.a)(x,2),g=y[0],w=y[1],C=Object(i.useState)(!1),k=Object(G.a)(C,2),V=k[0],T=k[1],R=function(e){w("- [".concat(q()().format("LTS"),"] ").concat(e.type,": ").concat(e.message))};Object(i.useEffect)((function(){r&&D()}),[r]),Object(i.useEffect)((function(){m([g].concat(Object(z.a)(f)))}),[g]);var D=function(){var e=Object(d.a)(o.a.mark((function e(){var i,d,h,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),j(!0),u("Rendering video, scroll down to see the log..."),R({type:"INFO",message:"Loading ffmpeg..."}),e.next=6,Object(K.a)(R).catch((function(e){return console.log(e),null}));case 6:if(!0===e.sent){e.next=13;break}return R({type:"ERROR",message:"Cannot load ffmpeg"}),T(!1),j(!1),u("Cannot load ffmpeg core, scroll down to see the log output the error...."),e.abrupt("return");case 13:return i=[],r?i=["-i","srcVideo","-i","srcAudio","-map","0","-map","1:a","-c:v","copy"]:(d=[],"undefined"!==typeof t&&d.push("-i","srcVideo"),"undefined"!==typeof n&&d.push("-i","srcAudio"),h=Z({audioAction:a,startTrim:s,endTrim:c}),i=[].concat(d,Object(z.a)(h))),e.next=17,Object(K.b)(t,n,i).catch((function(e){return null}));case 17:if(null!==(b=e.sent)){e.next=24;break}return R({type:"ERROR",message:"Cannot convert video!!!"}),T(!1),j(!1),u("Error while convert video, scroll down to see the log output the error...."),e.abrupt("return");case 24:R({type:"RESULT",message:"Convert Video Success, You Can Now Preview Your Video And Start Download!"}),T(!1),j(!1),u("Convert video success, click play video below to preview and start download by pressing the button!"),l(b);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)(O.a,{item:!0,xs:12,children:[Object(P.jsx)(v.a,{m:3,display:"flex",justifyContent:"center",children:Object(P.jsx)(v.a,{className:h.renderBox,display:"div",children:Object(P.jsx)("ul",{children:f.map((function(e,t){return Object(P.jsx)("li",{children:e},t)}))})})}),Object(P.jsx)(v.a,{m:3,display:"flex",justifyContent:"center",children:Object(P.jsx)(A.a,{disabled:V,variant:"contained",color:"primary",onClick:D,children:V?"Rendering....":"Render"})})]})})),te=n(117),ne=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(P.jsx)(te.FacebookProvider,{appId:"243407530453003",children:Object(P.jsx)(te.Comments,{href:"https://dim0147.github.io/dyl-editor"})})}}]),n}(i.Component),ie=n(345),re=n(348),ae=n(331),se=n(330),ce=n(292),oe=Object(i.memo)((function(e){var t=e.isDashManifestVideo,n=e.setAudioAction,a=r.a.useState(t?"add":"none"),s=Object(G.a)(a,2),c=s[0],o=s[1];Object(i.useEffect)((function(){!0===t?o("add"):!1===t&&o("none")}),[t]);return Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",m:3,children:Object(P.jsxs)(se.a,{component:"fieldset",children:[Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)(ce.a,{component:"legend",children:"Audio"})}),Object(P.jsxs)(re.a,{row:!0,"aria-label":"action",name:"action",value:c,onChange:function(e){var t=e.target.value;o(t),n(t)},children:[Object(P.jsx)(ae.a,{value:"add",control:Object(P.jsx)(ie.a,{}),label:"Add"}),Object(P.jsx)(ae.a,{value:"remove",control:Object(P.jsx)(ie.a,{}),label:"Remove"}),Object(P.jsx)(ae.a,{value:"none",control:Object(P.jsx)(ie.a,{}),label:"None"})]})]})})})})),de=n(120),le=n(182),ue=n(172),je=n.n(ue),he=n(333),be=n(334);function pe(e){var t=e.inputRef,n=Object(le.a)(e,["inputRef"]);return Object(P.jsx)(je.a,Object(de.a)(Object(de.a)({},n),{},{ref:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){t(e?e.inputElement:null)})),mask:[/[0-9]/,/[0-9]/,":",/[0-9]/,/[0-9]/,":",/[0-9]/,/[0-9]/],placeholderChar:"\u2000",showMask:!0}))}var fe=Object(i.memo)((function(e){var t=e.setTrimTime,n=e.isRendering,i=r.a.useState("00:00:00"),a=Object(G.a)(i,2),s=a[0],c=a[1],o=r.a.useState("00:00:00"),d=Object(G.a)(o,2),l=d[0],u=d[1],j=r.a.useState(""),h=Object(G.a)(j,2),b=h[0],p=h[1];return Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsxs)(v.a,{display:"flex",flexDirection:"column",justifyContent:"center",children:[Object(P.jsx)(k.a,{align:"center",variant:"body2",children:"Trim Video"}),""!==b&&Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",m:1,children:Object(P.jsx)(D.a,{severity:"error",children:b})}),Object(P.jsxs)(v.a,{display:"flex",justifyContent:"center",m:1,children:[Object(P.jsx)(he.a,{style:{margin:10},htmlFor:"formatted-text-mask-input",children:"Start From"}),Object(P.jsx)(be.a,{value:s,onChange:function(e){c(e.target.value)},inputComponent:pe})]}),Object(P.jsxs)(v.a,{display:"flex",justifyContent:"center",m:1,children:[Object(P.jsx)(he.a,{style:{margin:10},htmlFor:"formatted-text-mask-input",children:"End At"}),Object(P.jsx)(be.a,{value:l,onChange:function(e){u(e.target.value)},inputComponent:pe})]}),Object(P.jsxs)(v.a,{display:"flex",justifyContent:"center",m:5,children:[Object(P.jsx)(A.a,{disabled:n,onClick:function(){if("00:00:00"!==s&&null===Q(s))return p("Invalid start time!!!");if("00:00:00"!==l&&null===Q(l))return p("Invalid end time!!!");var e=Q(s),n=Q(l);if(null!==e&&null!==n&&e>0&&n>0&&e>=n)return p("Invalid second start time and end time");p(""),t(e,n)},variant:"outlined",color:"secondary",style:{margin:3},children:"Apply Trim Video Effect"}),Object(P.jsx)(A.a,{disabled:n,onClick:function(){c("00:00:00"),u("00:00:00"),t(0,0)},variant:"outlined",color:"primary",style:{margin:3},children:"Remove Trim Video Effect"})]})]})})})),me=n(335),xe=n(349),Oe=n(346),ye=n(336),ge=n(337),ve=n(338),we=n(173),Ce=n.n(we),ke=n(118),Ae=n.n(ke),Ve=Object(me.a)((function(e){return Object(xe.a)({root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}})}));function Te(){var e=Ve();return Object(P.jsx)("div",{className:e.root,children:Object(P.jsxs)(Oe.a,{children:[Object(P.jsx)(ye.a,{expandIcon:Object(P.jsx)(Ce.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(P.jsxs)(k.a,{className:e.heading,children:[Object(P.jsx)(Ae.a,{})," Download DYL Editor App (Windows Only)"]})}),Object(P.jsx)(ge.a,{children:Object(P.jsxs)(O.a,{container:!0,children:[Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsxs)(ve.a,{href:"https://github.com/dim0147/DYLEditorApplication/releases/",target:"_blank",children:[Object(P.jsx)(Ae.a,{})," Download DYL Editor App"]})})}),Object(P.jsxs)(O.a,{item:!0,xs:12,children:[Object(P.jsx)(k.a,{children:"- This app is desktop application."}),Object(P.jsx)(k.a,{children:"- This app is under DYL Download Facebook Video extension on chrome store."}),Object(P.jsx)(k.a,{children:"- This will help you render video with duration bigger than 1 hour."})]}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Click download and goto the download page, click on 'DYL_setup.exe' and download the file:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"".concat("https://dim0147.github.io/dyl-editor","/images/AppDesktop/1.jpeg"),alt:"",width:"100%",height:"auto",crossOrigin:"anonymous"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- In some browser, it will show some message that said this file is virus, ignore it:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"".concat("https://dim0147.github.io/dyl-editor","/images/AppDesktop/2.png"),alt:"",width:"100%",height:"auto",crossOrigin:"anonymous"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Open and install the setup, it will display a screen like this notify you prevent install unknown app, skip it:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"".concat("https://dim0147.github.io/dyl-editor","/images/AppDesktop/3.png"),alt:"",width:"100%",height:"auto",crossOrigin:"anonymous"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"".concat("https://dim0147.github.io/dyl-editor","/images/AppDesktop/4.png"),alt:"",width:"100%",height:"auto",crossOrigin:"anonymous"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Run the setup and install, after install success run the application:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"".concat("https://dim0147.github.io/dyl-editor","/images/AppDesktop/5.png"),alt:"",width:"100%",height:"auto",crossOrigin:"anonymous"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- The app will be like this:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"".concat("https://dim0147.github.io/dyl-editor","/images/AppDesktop/6.png"),alt:"",width:"100%",height:"auto",crossOrigin:"anonymous"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Back to web page, copy DYL Editor URL From Web:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"".concat("https://dim0147.github.io/dyl-editor","/images/AppDesktop/7.png"),alt:"",width:"100%",height:"auto",crossOrigin:"anonymous"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Paste DYL Editor URL From Web To App:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"".concat("https://dim0147.github.io/dyl-editor","/images/AppDesktop/8.png"),alt:"",width:"100%",height:"auto",crossOrigin:"anonymous"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Name the file you want when render success and press 'START' button it will start download video and audio then render the video, NOTE: if the file render exist already it will ask you choose another name:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"".concat("https://dim0147.github.io/dyl-editor","/images/AppDesktop/9.png"),alt:"",width:"100%",height:"auto",crossOrigin:"anonymous"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsxs)(k.a,{children:["- Virus checking result by Virus Total:"," ",Object(P.jsx)(ve.a,{href:"                 \r https://www.virustotal.com/gui/file/4b8e8ce1875c4eab944b3b7b8dc1b3e3ef3e4996fa0670587bb12855000bec50/detection\r ",target:"_blank",children:"Virus Total"})]})}),Object(P.jsx)(O.a,{item:!0,xs:12})]})})]})})}var Re=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).player=null,e.outputFileRef=r.a.createRef(),e.state={centerMessage:"",merge:!1,isRendering:!1,isDashManifestVideo:!1,audioAction:"none",videoOutput:null},e.setCenterMessage=function(t){e.setState({centerMessage:t})},e.setIsRenderRing=function(t){e.setState({isRendering:t})},e.handleVideoStateChange=function(t){if(null!==e.player){var n=t.currentTime,i=e.state,r=i.startTrim,a=i.endTrim;("undefined"!==typeof r&&r>0&&n<r||"undefined"!==typeof a&&a>0&&n>a)&&e.player.seek(r)}},e.restartPlayer=function(){e.setMuted(!1),e.setTrimTime(0,0)},e.setMuted=function(t){null!==e.player&&(e.player.muted=t)},e.setAudioAction=function(t){"remove"===t?e.player.muted=!0:("add"===t||"none"===t)&&(e.player.muted=!1),e.setState({audioAction:t})},e.setTrimTime=function(t,n){e.setState({startTrim:t,endTrim:n})},e.setPlayer=function(t){e.player=t,null!==e.player&&e.player.subscribeToStateChange(e.handleVideoStateChange)},e.triggerChangeVideo=function(t){var n=URL.createObjectURL(new Blob([t.buffer]));e.setState({srcVideoPreview:n,videoOutput:t}),e.restartPlayer()},e.playerSourceVideo=function(){return"undefined"!==typeof e.state.srcVideoPreview?e.state.srcVideoPreview:"undefined"!==typeof e.state.srcVideo?e.state.srcVideo:"undefined"!==typeof e.state.srcAudio?e.state.srcAudio:null},e.displayTrimStatus=function(){if("undefined"!==typeof e.state.startTrim&&e.state.startTrim>0||"undefined"!==typeof e.state.endTrim&&e.state.endTrim>0)return Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(y.a,{size:"small",icon:Object(P.jsx)(L.a,{}),label:"Apply trim video",clickable:!1,color:"secondary"})})},e.handleUploadFile=function(){var t=Object(d.a)(o.a.mark((function t(n){var i,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===(i=n.target.files)||i.length>1)){t.next=3;break}return t.abrupt("return");case 3:r=i.item(0),a=URL.createObjectURL(r),e.setState({srcVideo:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.downloadVideo=function(){var t=e.outputFileRef.current.value;""===t&&(t="Video-DYL"),x(e.state.videoOutput,t+".mp4","application/octet-stream")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=p.a.parse(window.location.search),t={};void 0!==typeof e.srcVideo&&(t.srcVideo=e.srcVideo),void 0!==typeof e.srcAudio&&(t.srcAudio=e.srcAudio),void 0!==typeof e.isDashManifestVideo&&(t.isDashManifestVideo="true"===e.isDashManifestVideo),void 0!==typeof e.merge&&(t.merge=e.merge),this.setState(t)}},{key:"render",value:function(){return Object(P.jsx)(g.a,{children:Object(P.jsxs)(O.a,{container:!0,justify:"center",children:[Object(P.jsx)(B,{}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{m:2,display:"flex",justifyContent:"center",children:Object(P.jsxs)(D.a,{severity:"warning",children:["- Currently can handle video maximum 2 GB (1 hour video and below), video have more than one hour see 'Download DYL Editor App(Windows Only)' or scroll down the webpage to read the comment!",Object(P.jsx)("br",{}),"- Hi\u1ec7n t\u1ea1i c\xf3 th\u1ec3 x\u1eed l\xfd video t\u1ed1i \u0111a 2 GB (video 1 gi\u1edd tr\u1edf xu\u1ed1ng), video c\xf3 h\u01a1n m\u1ed9t gi\u1edd xem 'Download DYL Editor App(Windows Only)' ho\u1eb7c cu\u1ed9n xu\u1ed1ng trang web \u0111\u1ec3 \u0111\u1ecdc b\xecnh lu\u1eadn!"]})})}),Object(P.jsx)(O.a,{children:Object(P.jsxs)(v.a,{display:"flex",flexDirection:"row",children:[Object(P.jsx)(w.a,{title:"Copy this URL and paste to DYL Editor App",children:Object(P.jsx)(C.a,{onClick:function(){m()(window.location.href),alert("Copy success")},children:Object(P.jsx)(R.a,{})})}),Object(P.jsx)(D.a,{color:"success",icon:!1,style:{maxWidth:300},children:Object(P.jsxs)(k.a,{children:[window.location.href.substr(0,30),"..."]})})]})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(Te,{})}),this.state.centerMessage.length>0&&Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{m:2,display:"flex",justifyContent:"center",children:Object(P.jsx)(D.a,{severity:"info",children:this.state.centerMessage})})}),null!==this.state.videoOutput&&Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{m:2,children:Object(P.jsx)(k.a,{color:"secondary",align:"center",display:"block",variant:"subtitle1",children:"Preview Your Video"})})}),"undefined"===typeof this.state.srcVideo&&"undefined"===typeof this.state.srcAudio&&Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{m:2,display:"flex",justifyContent:"center",children:Object(P.jsxs)(A.a,{variant:"contained",component:"label",color:"primary",startIcon:Object(P.jsx)(M.a,{}),children:["Upload Media",Object(P.jsx)("input",{type:"file",hidden:!0,onChange:this.handleUploadFile})]})})}),null!==this.playerSourceVideo()&&Object(P.jsx)(_,{refFn:this.setPlayer,src:this.playerSourceVideo()}),null!==this.state.videoOutput&&Object(P.jsxs)(O.a,{item:!0,children:[Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",m:2,children:Object(P.jsx)(V.a,{inputRef:this.outputFileRef,label:"Name File",defaultValue:"Video-DYL",placeholder:"Enter Your File Name",required:!0})}),Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",m:3,children:Object(P.jsx)(A.a,{startIcon:Object(P.jsx)(F.a,{}),variant:"contained",color:"secondary",onClick:this.downloadVideo,children:"Download"})})]}),Object(P.jsx)(oe,{isDashManifestVideo:this.state.isDashManifestVideo,setAudioAction:this.setAudioAction}),Object(P.jsx)(fe,{isRendering:this.state.isRendering,setTrimTime:this.setTrimTime}),this.displayTrimStatus(),Object(P.jsx)(ee,{setIsRenderRing:this.setIsRenderRing,setCenterMessage:this.setCenterMessage,merge:this.state.merge,srcVideo:this.state.srcVideo,srcAudio:this.state.srcAudio,audioAction:this.state.audioAction,startTrim:this.state.startTrim,endTrim:this.state.endTrim,triggerChangeVideo:this.triggerChangeVideo}),Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)(ne,{})})})]})})}}]),n}(r.a.Component),De=n(119),Se=n(179);!function(){var e="UA-154355656-4";De.a.initialize(e),De.a.pageview(window.location.pathname+window.location.search)}();var Fe=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(P.jsx)("div",{className:"application",children:Object(P.jsxs)(Se.a,{children:[Object(P.jsx)("title",{children:"DYL Editor"}),Object(P.jsx)("meta",{name:"title",content:"DYL Editor - Edit Video And Audio"}),Object(P.jsx)("meta",{name:"description",content:"DYL Editor is a photo and video editing website under DYL Download Facebook Video Extension"})]})})}}]),n}(r.a.Component);s.a.render(Object(P.jsxs)(r.a.StrictMode,{children:[Object(P.jsx)(Fe,{}),Object(P.jsx)(Re,{})]}),document.getElementById("root"))}},[[290,1,2]]]);
//# sourceMappingURL=main.140613f3.chunk.js.map
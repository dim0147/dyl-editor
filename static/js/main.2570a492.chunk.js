(this["webpackJsonpdyl-edit"]=this["webpackJsonpdyl-edit"]||[]).push([[0],{218:function(e,t,n){},241:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(15),c=n.n(r),s=n(30),o=n.n(s),d=n(52),l=n(61),j=n(62),u=n(66),h=n(65),b=n(166),p=n.n(b),f=n(167),x=n.n(f);function m(e,t,n){var i,a;i=new Blob([e],{type:n}),function(e,t){var n;(n=document.createElement("a")).href=e,n.download=t,document.body.appendChild(n),n.click(),n.remove()}(a=window.URL.createObjectURL(i),t),setTimeout((function(){return window.URL.revokeObjectURL(a)}),1e3)}var O=n(322),y=n(345),g=n(334),v=n(338),w=n(346),C=n(288),k=n(183),A=n(324),T=n(337),V=n(175),R=n.n(V),D=n(339),S=n(177),E=n.n(S),F=n(173),L=n.n(F),Y=n(176),M=n.n(Y),I=n(289),N=n(342),U=n.p+"static/media/logo512.c49869f0.png",P=n(2),B=Object(I.a)({headerH1:{color:"blue",fontWeight:"bold","&:hover":{color:"#2f17ad",cursor:"pointer"}}});function W(){var e=B();return Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsxs)(O.a,{container:!0,direction:"column",spacing:2,children:[Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)(N.a,{alt:"DYL Editor",src:U})})}),Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(k.a,{onClick:function(){return window.open("https://chrome.google.com/webstore/detail/dyl-download-facebook-vid/honmapcmnfgjmahijdniaaollhhfpcnj","_blank")},align:"center",component:"h1",className:e.headerH1,children:"DYL Editor"})}),Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)(A.a,{onClick:function(){return window.open("https://dim0147.github.io/dyl-editor/en/update")},style:{margin:10},variant:"contained",color:"secondary",children:"About Extension"})})})]})})}n(218);var H,_=n(115),z=function(e){var t=e.src,n=e.refFn;return Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)("div",{children:Object(P.jsx)(_.Player,{ref:n,fluid:!1,width:400,height:300,src:t,children:Object(P.jsx)(_.BigPlayButton,{position:"center"})})})})})},G=Object(i.memo)(z),J=n(73),q=n(43),K=n(170),Q=n.n(K),X=(n(241),n(95)),Z=null,$=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z=Object(X.createFFmpeg)({logger:t,corePath:"https://unpkg.com/@ffmpeg/core@0.8.5/dist/ffmpeg-core.js"}),e.next=3,Z.load();case 3:return H=t,e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(d.a)(o.a.mark((function e(t,n,i){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==Z){e.next=2;break}throw new Error("FFMPEG not load!");case 2:if(H({type:"INFO",message:"Loading Audio And Video File... (it will take long time depend on the duration of video and audio)"}),null===t){e.next=9;break}return e.t0=Z,e.next=7,Object(X.fetchFile)(t);case 7:e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","srcVideo",e.t1);case 9:if(null===n){e.next=15;break}return e.t2=Z,e.next=13,Object(X.fetchFile)(n);case 13:e.t3=e.sent,e.t2.FS.call(e.t2,"writeFile","srcAudio",e.t3);case 15:return H({type:"INFO",message:"Start Rendering..."}),e.next=18,(a=Z).run.apply(a,Object(J.a)(i).concat(["output.mp4"]));case 18:return e.abrupt("return",Z.FS("readFile","output.mp4"));case 19:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}();function te(e){var t=e.split(":");return t.length<3||Number(t[1])>=60||Number(t[2])>=60?null:60*+t[0]*60+60*+t[1]+ +t[2]}function ne(e){return new Date(1e3*e).toISOString().substr(11,8)}function ie(e){var t=e.audioAction,n=e.startTrim,i=e.endTrim,a=[];if("undefined"!==typeof n&&n>0){var r=ne(n);a.push("-ss",r)}if("undefined"!==typeof i&&i>0){var c=ne(i-("undefined"!==typeof n&&n>0?n:0));a.push("-t",c)}return"add"===t?a.push("-map","0","-map","1:a"):"remove"===t&&a.push("-an"),a.push("-c","copy"),a}var ae=Object(I.a)({renderBox:{maxHeight:250,overflowY:"auto",borderBottom:"1px solid #f44336","& ul":{color:"#949494",listStyleType:"none"}}}),re=Object(i.memo)((function(e){var t=e.srcVideo,n=e.srcAudio,a=e.merge,r=e.audioAction,c=e.startTrim,s=e.endTrim,l=e.triggerChangeVideo,j=e.setCenterMessage,u=e.setIsRenderRing,h=ae(),b=Object(i.useState)([]),p=Object(q.a)(b,2),f=p[0],x=p[1],m=Object(i.useState)(""),y=Object(q.a)(m,2),g=y[0],w=y[1],C=Object(i.useState)(!1),k=Object(q.a)(C,2),T=k[0],V=k[1],R=function(e){w("- [".concat(Q()().format("LTS"),"] ").concat(e.type,": ").concat(e.message))};Object(i.useEffect)((function(){a&&D()}),[a]),Object(i.useEffect)((function(){x([g].concat(Object(J.a)(f)))}),[g]);var D=function(){var e=Object(d.a)(o.a.mark((function e(){var i,d,h,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),u(!0),j("Rendering video, scroll down to see the log..."),R({type:"INFO",message:"Loading ffmpeg..."}),e.next=6,$(R).catch((function(e){return console.log(e),null}));case 6:if(!0===e.sent){e.next=13;break}return R({type:"ERROR",message:"Cannot load ffmpeg"}),V(!1),u(!1),j("Cannot load ffmpeg core, scroll down to see the log output the error...."),e.abrupt("return");case 13:return i=[],a?i=["-i","srcVideo","-i","srcAudio","-map","0","-map","1:a","-c:v","copy"]:(d=[],"undefined"!==typeof t&&d.push("-i","srcVideo"),"undefined"!==typeof n&&d.push("-i","srcAudio"),h=ie({audioAction:r,startTrim:c,endTrim:s}),i=[].concat(d,Object(J.a)(h))),e.next=17,ee(t,n,i).catch((function(e){return null}));case 17:if(null!==(b=e.sent)){e.next=24;break}return R({type:"ERROR",message:"Cannot convert video!!!"}),V(!1),u(!1),j("Error while convert video, scroll down to see the log output the error...."),e.abrupt("return");case 24:R({type:"RESULT",message:"Convert Video Success, You Can Now Preview Your Video And Start Download!"}),V(!1),u(!1),j("Convert video success, click play video below to preview and start download by pressing the button!"),l(b);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)(O.a,{item:!0,xs:12,children:[Object(P.jsx)(v.a,{m:3,display:"flex",justifyContent:"center",children:Object(P.jsx)(v.a,{className:h.renderBox,display:"div",children:Object(P.jsx)("ul",{children:f.map((function(e,t){return Object(P.jsx)("li",{children:e},t)}))})})}),Object(P.jsx)(v.a,{m:3,display:"flex",justifyContent:"center",children:Object(P.jsx)(A.a,{disabled:T,variant:"contained",color:"primary",onClick:D,children:T?"Rendering....":"Render"})})]})})),ce=n(117),se=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(P.jsx)(ce.FacebookProvider,{appId:"243407530453003",children:Object(P.jsx)(ce.Comments,{href:"https://dim0147.github.io/dyl-editor"})})}}]),n}(i.Component),oe=n(340),de=n(343),le=n(326),je=n(325),ue=n(287),he=Object(i.memo)((function(e){var t=e.isDashManifestVideo,n=e.setAudioAction,r=a.a.useState(t?"add":"none"),c=Object(q.a)(r,2),s=c[0],o=c[1];Object(i.useEffect)((function(){!0===t?o("add"):!1===t&&o("none")}),[t]);return Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",m:3,children:Object(P.jsxs)(je.a,{component:"fieldset",children:[Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)(ue.a,{component:"legend",children:"Audio"})}),Object(P.jsxs)(de.a,{row:!0,"aria-label":"action",name:"action",value:s,onChange:function(e){var t=e.target.value;o(t),n(t)},children:[Object(P.jsx)(le.a,{value:"add",control:Object(P.jsx)(oe.a,{}),label:"Add"}),Object(P.jsx)(le.a,{value:"remove",control:Object(P.jsx)(oe.a,{}),label:"Remove"}),Object(P.jsx)(le.a,{value:"none",control:Object(P.jsx)(oe.a,{}),label:"None"})]})]})})})})),be=n(120),pe=n(181),fe=n(171),xe=n.n(fe),me=n(328),Oe=n(329);function ye(e){var t=e.inputRef,n=Object(pe.a)(e,["inputRef"]);return Object(P.jsx)(xe.a,Object(be.a)(Object(be.a)({},n),{},{ref:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){t(e?e.inputElement:null)})),mask:[/[0-9]/,/[0-9]/,":",/[0-9]/,/[0-9]/,":",/[0-9]/,/[0-9]/],placeholderChar:"\u2000",showMask:!0}))}var ge=Object(i.memo)((function(e){var t=e.setTrimTime,n=e.isRendering,i=a.a.useState("00:00:00"),r=Object(q.a)(i,2),c=r[0],s=r[1],o=a.a.useState("00:00:00"),d=Object(q.a)(o,2),l=d[0],j=d[1],u=a.a.useState(""),h=Object(q.a)(u,2),b=h[0],p=h[1];return Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsxs)(v.a,{display:"flex",flexDirection:"column",justifyContent:"center",children:[Object(P.jsx)(k.a,{align:"center",variant:"body2",children:"Trim Video"}),""!==b&&Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",m:1,children:Object(P.jsx)(D.a,{severity:"error",children:b})}),Object(P.jsxs)(v.a,{display:"flex",justifyContent:"center",m:1,children:[Object(P.jsx)(me.a,{style:{margin:10},htmlFor:"formatted-text-mask-input",children:"Start From"}),Object(P.jsx)(Oe.a,{value:c,onChange:function(e){s(e.target.value)},inputComponent:ye})]}),Object(P.jsxs)(v.a,{display:"flex",justifyContent:"center",m:1,children:[Object(P.jsx)(me.a,{style:{margin:10},htmlFor:"formatted-text-mask-input",children:"End At"}),Object(P.jsx)(Oe.a,{value:l,onChange:function(e){j(e.target.value)},inputComponent:ye})]}),Object(P.jsxs)(v.a,{display:"flex",justifyContent:"center",m:5,children:[Object(P.jsx)(A.a,{disabled:n,onClick:function(){if("00:00:00"!==c&&null===te(c))return p("Invalid start time!!!");if("00:00:00"!==l&&null===te(l))return p("Invalid end time!!!");var e=te(c),n=te(l);if(null!==e&&null!==n&&e>0&&n>0&&e>=n)return p("Invalid second start time and end time");p(""),t(e,n)},variant:"outlined",color:"secondary",style:{margin:3},children:"Apply Trim Video Effect"}),Object(P.jsx)(A.a,{disabled:n,onClick:function(){s("00:00:00"),j("00:00:00"),t(0,0)},variant:"outlined",color:"primary",style:{margin:3},children:"Remove Trim Video Effect"})]})]})})})),ve=n(330),we=n(344),Ce=n(341),ke=n(331),Ae=n(332),Te=n(333),Ve=n(172),Re=n.n(Ve),De=n(118),Se=n.n(De),Ee=Object(ve.a)((function(e){return Object(we.a)({root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}})}));function Fe(){var e=Ee();return Object(P.jsx)("div",{className:e.root,children:Object(P.jsxs)(Ce.a,{children:[Object(P.jsx)(ke.a,{expandIcon:Object(P.jsx)(Re.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(P.jsxs)(k.a,{className:e.heading,children:[Object(P.jsx)(Se.a,{})," Download DYL Editor App (Windows Only)"]})}),Object(P.jsx)(Ae.a,{children:Object(P.jsxs)(O.a,{container:!0,children:[Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsxs)(Te.a,{href:"https://github.com/dim0147/DYLEditorApplication/releases/",target:"_blank",children:[Object(P.jsx)(Se.a,{})," Download DYL Editor App"]})})}),Object(P.jsxs)(O.a,{item:!0,xs:12,children:[Object(P.jsx)(k.a,{children:"- This app is desktop application."}),Object(P.jsx)(k.a,{children:"- This app is under DYL Download Facebook Video extension on chrome store."}),Object(P.jsx)(k.a,{children:"- This will help you render video with duration bigger than 1 hour."})]}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Click download and goto the download page, click on 'DYL_setup.exe' and download the file:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"images/AppDesktop/1.jpeg",alt:"",width:"100%",height:"auto"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- In some browser, it will show some message that said this file is virus, ignore it:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"images/AppDesktop/2.png",alt:"",width:"100%",height:"auto"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Open and install the setup, it will display a screen like this notify you prevent install unknown app, skip it:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"images/AppDesktop/3.png",alt:"",width:"100%",height:"auto"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"images/AppDesktop/4.png",alt:"",width:"100%",height:"auto"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Run the setup and install, after install success run the application:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"images/AppDesktop/5.png",alt:"",width:"100%",height:"auto"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- The app will be like this:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"images/AppDesktop/6.png",alt:"",width:"100%",height:"auto"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Back to web page, copy DYL Editor URL From Web:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"images/AppDesktop/7.png",alt:"",width:"100%",height:"auto"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Paste DYL Editor URL From Web To App:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"images/AppDesktop/8.png",alt:"",width:"100%",height:"auto"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(k.a,{children:"- Name the file you want when render success and press 'START' button it will start download video and audio then render the video, NOTE: if the file render exist already it will ask you choose another name:"})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",mb:3,children:Object(P.jsx)("img",{src:"images/AppDesktop/9.png",alt:"",width:"100%",height:"auto"})})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsxs)(k.a,{children:["- Virus checking result by Virus Total:"," ",Object(P.jsx)(Te.a,{href:"                 \r https://www.virustotal.com/gui/file/4b8e8ce1875c4eab944b3b7b8dc1b3e3ef3e4996fa0670587bb12855000bec50/detection\r ",target:"_blank",children:"Virus Total"})]})}),Object(P.jsx)(O.a,{item:!0,xs:12})]})})]})})}var Le=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).player=null,e.outputFileRef=a.a.createRef(),e.state={centerMessage:"",merge:!1,isRendering:!1,isDashManifestVideo:!1,audioAction:"none",videoOutput:null},e.setCenterMessage=function(t){e.setState({centerMessage:t})},e.setIsRenderRing=function(t){e.setState({isRendering:t})},e.handleVideoStateChange=function(t){if(null!==e.player){var n=t.currentTime,i=e.state,a=i.startTrim,r=i.endTrim;("undefined"!==typeof a&&a>0&&n<a||"undefined"!==typeof r&&r>0&&n>r)&&e.player.seek(a)}},e.restartPlayer=function(){e.setMuted(!1),e.setTrimTime(0,0)},e.setMuted=function(t){null!==e.player&&(e.player.muted=t)},e.setAudioAction=function(t){"remove"===t?e.player.muted=!0:("add"===t||"none"===t)&&(e.player.muted=!1),e.setState({audioAction:t})},e.setTrimTime=function(t,n){e.setState({startTrim:t,endTrim:n})},e.setPlayer=function(t){e.player=t,null!==e.player&&e.player.subscribeToStateChange(e.handleVideoStateChange)},e.triggerChangeVideo=function(t){var n=URL.createObjectURL(new Blob([t.buffer]));e.setState({srcVideoPreview:n,videoOutput:t}),e.restartPlayer()},e.playerSourceVideo=function(){return"undefined"!==typeof e.state.srcVideoPreview?e.state.srcVideoPreview:"undefined"!==typeof e.state.srcVideo?e.state.srcVideo:"undefined"!==typeof e.state.srcAudio?e.state.srcAudio:null},e.displayTrimStatus=function(){if("undefined"!==typeof e.state.startTrim&&e.state.startTrim>0||"undefined"!==typeof e.state.endTrim&&e.state.endTrim>0)return Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(y.a,{size:"small",icon:Object(P.jsx)(L.a,{}),label:"Apply trim video",clickable:!1,color:"secondary"})})},e.handleUploadFile=function(){var t=Object(d.a)(o.a.mark((function t(n){var i,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===(i=n.target.files)||i.length>1)){t.next=3;break}return t.abrupt("return");case 3:a=i.item(0),r=URL.createObjectURL(a),e.setState({srcVideo:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.downloadVideo=function(){var t=e.outputFileRef.current.value;""===t&&(t="Video-DYL"),m(e.state.videoOutput,t+".mp4","application/octet-stream")},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=p.a.parse(window.location.search),t={};void 0!==typeof e.srcVideo&&(t.srcVideo=e.srcVideo),void 0!==typeof e.srcAudio&&(t.srcAudio=e.srcAudio),void 0!==typeof e.isDashManifestVideo&&(t.isDashManifestVideo="true"===e.isDashManifestVideo),void 0!==typeof e.merge&&(t.merge=e.merge),this.setState(t)}},{key:"render",value:function(){return Object(P.jsx)(g.a,{children:Object(P.jsxs)(O.a,{container:!0,justify:"center",children:[Object(P.jsx)(W,{}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{m:2,display:"flex",justifyContent:"center",children:Object(P.jsxs)(D.a,{severity:"warning",children:["- Currently can handle video maximum 2 GB (1 hour video and below), video have more than one hour see 'Download DYL Editor App(Windows Only)' or scroll down the webpage to read the comment!",Object(P.jsx)("br",{}),"- Hi\u1ec7n t\u1ea1i c\xf3 th\u1ec3 x\u1eed l\xfd video t\u1ed1i \u0111a 2 GB (video 1 gi\u1edd tr\u1edf xu\u1ed1ng), video c\xf3 h\u01a1n m\u1ed9t gi\u1edd xem 'Download DYL Editor App(Windows Only)' ho\u1eb7c cu\u1ed9n xu\u1ed1ng trang web \u0111\u1ec3 \u0111\u1ecdc b\xecnh lu\u1eadn!"]})})}),Object(P.jsx)(O.a,{children:Object(P.jsxs)(v.a,{display:"flex",flexDirection:"row",children:[Object(P.jsx)(w.a,{title:"Copy this URL and paste to DYL Editor App",children:Object(P.jsx)(C.a,{onClick:function(){x()(window.location.href),alert("Copy success")},children:Object(P.jsx)(R.a,{})})}),Object(P.jsx)(D.a,{color:"success",icon:!1,style:{maxWidth:300},children:Object(P.jsxs)(k.a,{children:[window.location.href.substr(0,30),"..."]})})]})}),Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(Fe,{})}),this.state.centerMessage.length>0&&Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{m:2,display:"flex",justifyContent:"center",children:Object(P.jsx)(D.a,{severity:"info",children:this.state.centerMessage})})}),null!==this.state.videoOutput&&Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{m:2,children:Object(P.jsx)(k.a,{color:"secondary",align:"center",display:"block",variant:"subtitle1",children:"Preview Your Video"})})}),"undefined"===typeof this.state.srcVideo&&"undefined"===typeof this.state.srcAudio&&Object(P.jsx)(O.a,{item:!0,xs:12,children:Object(P.jsx)(v.a,{m:2,display:"flex",justifyContent:"center",children:Object(P.jsxs)(A.a,{variant:"contained",component:"label",color:"primary",startIcon:Object(P.jsx)(M.a,{}),children:["Upload Media",Object(P.jsx)("input",{type:"file",hidden:!0,onChange:this.handleUploadFile})]})})}),null!==this.playerSourceVideo()&&Object(P.jsx)(G,{refFn:this.setPlayer,src:this.playerSourceVideo()}),null!==this.state.videoOutput&&Object(P.jsxs)(O.a,{item:!0,children:[Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",m:2,children:Object(P.jsx)(T.a,{inputRef:this.outputFileRef,label:"Name File",defaultValue:"Video-DYL",placeholder:"Enter Your File Name",required:!0})}),Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",m:3,children:Object(P.jsx)(A.a,{startIcon:Object(P.jsx)(E.a,{}),variant:"contained",color:"secondary",onClick:this.downloadVideo,children:"Download"})})]}),Object(P.jsx)(he,{isDashManifestVideo:this.state.isDashManifestVideo,setAudioAction:this.setAudioAction}),Object(P.jsx)(ge,{isRendering:this.state.isRendering,setTrimTime:this.setTrimTime}),this.displayTrimStatus(),Object(P.jsx)(re,{setIsRenderRing:this.setIsRenderRing,setCenterMessage:this.setCenterMessage,merge:this.state.merge,srcVideo:this.state.srcVideo,srcAudio:this.state.srcAudio,audioAction:this.state.audioAction,startTrim:this.state.startTrim,endTrim:this.state.endTrim,triggerChangeVideo:this.triggerChangeVideo}),Object(P.jsx)(O.a,{item:!0,children:Object(P.jsx)(v.a,{display:"flex",justifyContent:"center",children:Object(P.jsx)(se,{})})})]})})}}]),n}(a.a.Component),Ye=n(119),Me=n(178);!function(){var e="UA-154355656-4";Ye.a.initialize(e),Ye.a.pageview(window.location.pathname+window.location.search)}();var Ie=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(P.jsx)("div",{className:"application",children:Object(P.jsxs)(Me.a,{children:[Object(P.jsx)("title",{children:"DYL Editor"}),Object(P.jsx)("meta",{name:"title",content:"DYL Editor - Edit Video And Audio"}),Object(P.jsx)("meta",{name:"description",content:"DYL Editor is a photo and video editing website under DYL Download Facebook Video Extension"})]})})}}]),n}(a.a.Component);c.a.render(Object(P.jsxs)(a.a.StrictMode,{children:[Object(P.jsx)(Ie,{}),Object(P.jsx)(Le,{})]}),document.getElementById("root"))}},[[285,1,2]]]);
//# sourceMappingURL=main.2570a492.chunk.js.map
(this["webpackJsonpdyl-edit"]=this["webpackJsonpdyl-edit"]||[]).push([[0],{195:function(e,t,n){},218:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(17),c=n.n(a),o=n(34),s=n.n(o),d=n(48),l=n(55),u=n(56),j=n(60),f=n(59),p=n(145),h=n.n(p);function b(e,t,n){var i,r;i=new Blob([e],{type:n}),function(e,t){var n;(n=document.createElement("a")).href=e,n.download=t,document.body.appendChild(n),n.click(),n.remove()}(r=window.URL.createObjectURL(i),t),setTimeout((function(){return window.URL.revokeObjectURL(r)}),1e3)}var m=n(285),x=n(302),O=n(294),y=n(297),v=n(253),g=n(287),w=n(295),C=n(298),V=n(155),R=n.n(V),A=n(153),T=n.n(A),k=n(154),S=n.n(k),F=n(296),E=n(300),M=n.p+"static/media/logo512.c49869f0.png",D=n(3),L=Object(F.a)({headerH1:{color:"blue",fontWeight:"bold","&:hover":{color:"#2f17ad",cursor:"pointer"}}});function I(){var e=L();return Object(D.jsx)(m.a,{item:!0,xs:12,children:Object(D.jsxs)(m.a,{container:!0,direction:"column",spacing:2,children:[Object(D.jsx)(m.a,{item:!0,children:Object(D.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(D.jsx)(E.a,{alt:"DYL Editor",src:M})})}),Object(D.jsx)(m.a,{item:!0,children:Object(D.jsx)(v.a,{onClick:function(){return window.open("https://chrome.google.com/webstore/detail/dyl-download-facebook-vid/honmapcmnfgjmahijdniaaollhhfpcnj","_blank")},align:"center",component:"h1",className:e.headerH1,children:"DYL Editor"})}),Object(D.jsx)(m.a,{item:!0,children:Object(D.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(D.jsx)(g.a,{onClick:function(){return window.open("https://dim0147.github.io/dyl-editor/en/update")},style:{margin:10},variant:"contained",color:"secondary",children:"About Extension"})})})]})})}n(195);var P,U=n(102),Y=function(e){var t=e.src,n=e.refFn;return Object(D.jsx)(m.a,{item:!0,xs:12,children:Object(D.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(D.jsx)("div",{children:Object(D.jsx)(U.Player,{ref:n,fluid:!1,width:400,height:300,src:t,children:Object(D.jsx)(U.BigPlayButton,{position:"center"})})})})})},N=Object(i.memo)(Y),B=n(67),H=n(40),G=n(151),z=n.n(G),J=(n(218),window.FFmpeg),q=J.createFFmpeg,W=J.fetchFile,_=null,K=function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _=q({logger:t,corePath:"https://unpkg.com/@ffmpeg/core@0.8.5/dist/ffmpeg-core.js"}),e.next=3,_.load();case 3:return P=t,e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(d.a)(s.a.mark((function e(t,n,i){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==_){e.next=2;break}throw new Error("FFMPEG not load!");case 2:if(P({type:"INFO",message:"Loading Audio And Video File... (it will take long time depend on the duration of video and audio)"}),null===t){e.next=9;break}return e.t0=_,e.next=7,W(t);case 7:e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","srcVideo",e.t1);case 9:if(null===n){e.next=15;break}return e.t2=_,e.next=13,W(n);case 13:e.t3=e.sent,e.t2.FS.call(e.t2,"writeFile","srcAudio",e.t3);case 15:return P({type:"INFO",message:"Start Rendering..."}),e.next=18,(r=_).run.apply(r,Object(B.a)(i).concat(["output.mp4"]));case 18:return e.abrupt("return",_.FS("readFile","output.mp4"));case 19:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}();function X(e){var t=e.split(":");return t.length<3||Number(t[1])>=60||Number(t[2])>=60?null:60*+t[0]*60+60*+t[1]+ +t[2]}function Z(e){return new Date(1e3*e).toISOString().substr(11,8)}function $(e){var t=e.audioAction,n=e.startTrim,i=e.endTrim,r=[];if("undefined"!==typeof n&&n>0){var a=Z(n);r.push("-ss",a)}if("undefined"!==typeof i&&i>0){var c=Z(i-("undefined"!==typeof n&&n>0?n:0));r.push("-t",c)}return"add"===t?r.push("-map","0","-map","1:a"):"remove"===t&&r.push("-an"),r.push("-c","copy"),r}var ee=Object(F.a)({renderBox:{maxHeight:250,overflowY:"auto",borderBottom:"1px solid #f44336","& ul":{color:"#949494",listStyleType:"none"}}}),te=Object(i.memo)((function(e){var t=e.srcVideo,n=e.srcAudio,r=e.merge,a=e.audioAction,c=e.startTrim,o=e.endTrim,l=e.triggerChangeVideo,u=e.setCenterMessage,j=e.setIsRenderRing,f=ee(),p=Object(i.useState)([]),h=Object(H.a)(p,2),b=h[0],x=h[1],O=Object(i.useState)(""),v=Object(H.a)(O,2),w=v[0],C=v[1],V=Object(i.useState)(!1),R=Object(H.a)(V,2),A=R[0],T=R[1],k=function(e){C("- [".concat(z()().format("LTS"),"] ").concat(e.type,": ").concat(e.message))};Object(i.useEffect)((function(){r&&S()}),[r]),Object(i.useEffect)((function(){x([w].concat(Object(B.a)(b)))}),[w]);var S=function(){var e=Object(d.a)(s.a.mark((function e(){var i,d,f,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),j(!0),u("Rendering video, scroll down to see the log..."),k({type:"INFO",message:"Loading ffmpeg..."}),e.next=6,K(k).catch((function(e){return null}));case 6:if(!0===e.sent){e.next=13;break}return k({type:"ERROR",message:"Cannot load ffmpeg"}),T(!1),j(!1),u("Cannot load ffmpeg core, scroll down to see the log output the error...."),e.abrupt("return");case 13:return i=[],r?i=["-i","srcVideo","-i","srcAudio","-map","0","-map","1:a","-c:v","copy"]:(d=[],"undefined"!==typeof t&&d.push("-i","srcVideo"),"undefined"!==typeof n&&d.push("-i","srcAudio"),f=$({audioAction:a,startTrim:c,endTrim:o}),i=[].concat(d,Object(B.a)(f))),e.next=17,Q(t,n,i).catch((function(e){return null}));case 17:if(null!==(p=e.sent)){e.next=24;break}return k({type:"ERROR",message:"Cannot convert video!!!"}),T(!1),j(!1),u("Error while convert video, scroll down to see the log output the error...."),e.abrupt("return");case 24:k({type:"RESULT",message:"Convert Video Success, You Can Now Preview Your Video And Start Download!"}),T(!1),j(!1),u("Convert video success, click play video below to preview and start download by pressing the button!"),l(p);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)(m.a,{item:!0,xs:12,children:[Object(D.jsx)(y.a,{m:3,display:"flex",justifyContent:"center",children:Object(D.jsx)(y.a,{className:f.renderBox,display:"div",children:Object(D.jsx)("ul",{children:b.map((function(e,t){return Object(D.jsx)("li",{children:e},t)}))})})}),Object(D.jsx)(y.a,{m:3,display:"flex",justifyContent:"center",children:Object(D.jsx)(g.a,{disabled:A,variant:"contained",color:"primary",onClick:S,children:A?"Rendering....":"Render"})})]})})),ne=n(104),ie=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(D.jsx)(ne.FacebookProvider,{appId:"243407530453003",children:Object(D.jsx)(ne.Comments,{href:"https://dim0147.github.io/dyl-editor"})})}}]),n}(i.Component),re=n(299),ae=n(301),ce=n(289),oe=n(288),se=n(254),de=Object(i.memo)((function(e){var t=e.isDashManifestVideo,n=e.setAudioAction,a=r.a.useState(t?"add":"none"),c=Object(H.a)(a,2),o=c[0],s=c[1];Object(i.useEffect)((function(){!0===t?s("add"):!1===t&&s("none")}),[t]);return Object(D.jsx)(m.a,{item:!0,xs:12,children:Object(D.jsx)(y.a,{display:"flex",justifyContent:"center",m:3,children:Object(D.jsxs)(oe.a,{component:"fieldset",children:[Object(D.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(D.jsx)(se.a,{component:"legend",children:"Audio"})}),Object(D.jsxs)(ae.a,{row:!0,"aria-label":"action",name:"action",value:o,onChange:function(e){var t=e.target.value;s(t),n(t)},children:[Object(D.jsx)(ce.a,{value:"add",control:Object(D.jsx)(re.a,{}),label:"Add"}),Object(D.jsx)(ce.a,{value:"remove",control:Object(D.jsx)(re.a,{}),label:"Remove"}),Object(D.jsx)(ce.a,{value:"none",control:Object(D.jsx)(re.a,{}),label:"None"})]})]})})})})),le=n(106),ue=n(159),je=n(152),fe=n.n(je),pe=n(292),he=n(293);function be(e){var t=e.inputRef,n=Object(ue.a)(e,["inputRef"]);return Object(D.jsx)(fe.a,Object(le.a)(Object(le.a)({},n),{},{ref:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){t(e?e.inputElement:null)})),mask:[/[0-9]/,/[0-9]/,":",/[0-9]/,/[0-9]/,":",/[0-9]/,/[0-9]/],placeholderChar:"\u2000",showMask:!0}))}var me=Object(i.memo)((function(e){var t=e.setTrimTime,n=e.isRendering,i=r.a.useState("00:00:00"),a=Object(H.a)(i,2),c=a[0],o=a[1],s=r.a.useState("00:00:00"),d=Object(H.a)(s,2),l=d[0],u=d[1],j=r.a.useState(""),f=Object(H.a)(j,2),p=f[0],h=f[1];return Object(D.jsx)(m.a,{item:!0,xs:12,children:Object(D.jsxs)(y.a,{display:"flex",flexDirection:"column",justifyContent:"center",children:[Object(D.jsx)(v.a,{align:"center",variant:"body2",children:"Trim Video"}),""!==p&&Object(D.jsx)(y.a,{display:"flex",justifyContent:"center",m:1,children:Object(D.jsx)(C.a,{severity:"error",children:p})}),Object(D.jsxs)(y.a,{display:"flex",justifyContent:"center",m:1,children:[Object(D.jsx)(pe.a,{style:{margin:10},htmlFor:"formatted-text-mask-input",children:"Start From"}),Object(D.jsx)(he.a,{value:c,onChange:function(e){o(e.target.value)},inputComponent:be})]}),Object(D.jsxs)(y.a,{display:"flex",justifyContent:"center",m:1,children:[Object(D.jsx)(pe.a,{style:{margin:10},htmlFor:"formatted-text-mask-input",children:"End At"}),Object(D.jsx)(he.a,{value:l,onChange:function(e){u(e.target.value)},inputComponent:be})]}),Object(D.jsxs)(y.a,{display:"flex",justifyContent:"center",m:5,children:[Object(D.jsx)(g.a,{disabled:n,onClick:function(){if("00:00:00"!==c&&null===X(c))return h("Invalid start time!!!");if("00:00:00"!==l&&null===X(l))return h("Invalid end time!!!");var e=X(c),n=X(l);if(null!==e&&null!==n&&e>0&&n>0&&e>=n)return h("Invalid second start time and end time");h(""),t(e,n)},variant:"outlined",color:"secondary",style:{margin:3},children:"Apply Trim Video Effect"}),Object(D.jsx)(g.a,{disabled:n,onClick:function(){o("00:00:00"),u("00:00:00"),t(0,0)},variant:"outlined",color:"primary",style:{margin:3},children:"Remove Trim Video Effect"})]})]})})})),xe=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).player=null,e.outputFileRef=r.a.createRef(),e.state={centerMessage:"",merge:!1,isRendering:!1,isDashManifestVideo:!1,audioAction:"none",videoOutput:null},e.setCenterMessage=function(t){e.setState({centerMessage:t})},e.setIsRenderRing=function(t){e.setState({isRendering:t})},e.handleVideoStateChange=function(t){if(null!==e.player){var n=t.currentTime,i=e.state,r=i.startTrim,a=i.endTrim;("undefined"!==typeof r&&r>0&&n<r||"undefined"!==typeof a&&a>0&&n>a)&&e.player.seek(r)}},e.restartPlayer=function(){e.setMuted(!1),e.setTrimTime(0,0)},e.setMuted=function(t){null!==e.player&&(e.player.muted=t)},e.setAudioAction=function(t){"remove"===t?e.player.muted=!0:("add"===t||"none"===t)&&(e.player.muted=!1),e.setState({audioAction:t})},e.setTrimTime=function(t,n){e.setState({startTrim:t,endTrim:n})},e.setPlayer=function(t){e.player=t,null!==e.player&&e.player.subscribeToStateChange(e.handleVideoStateChange)},e.triggerChangeVideo=function(t){var n=URL.createObjectURL(new Blob([t.buffer]));e.setState({srcVideoPreview:n,videoOutput:t}),e.restartPlayer()},e.playerSourceVideo=function(){return"undefined"!==typeof e.state.srcVideoPreview?e.state.srcVideoPreview:"undefined"!==typeof e.state.srcVideo?e.state.srcVideo:"undefined"!==typeof e.state.srcAudio?e.state.srcAudio:null},e.displayTrimStatus=function(){if("undefined"!==typeof e.state.startTrim&&e.state.startTrim>0||"undefined"!==typeof e.state.endTrim&&e.state.endTrim>0)return Object(D.jsx)(m.a,{item:!0,children:Object(D.jsx)(x.a,{size:"small",icon:Object(D.jsx)(T.a,{}),label:"Apply trim video",clickable:!1,color:"secondary"})})},e.handleUploadFile=function(){var t=Object(d.a)(s.a.mark((function t(n){var i,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===(i=n.target.files)||i.length>1)){t.next=3;break}return t.abrupt("return");case 3:r=i.item(0),a=URL.createObjectURL(r),e.setState({srcVideo:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.downloadVideo=function(){var t=e.outputFileRef.current.value;""===t&&(t="Video-DYL"),b(e.state.videoOutput,t+".mp4","application/octet-stream")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=h.a.parse(window.location.search),t={};void 0!==typeof e.srcVideo&&(t.srcVideo=e.srcVideo),void 0!==typeof e.srcAudio&&(t.srcAudio=e.srcAudio),void 0!==typeof e.isDashManifestVideo&&(t.isDashManifestVideo="true"===e.isDashManifestVideo),void 0!==typeof e.merge&&(t.merge=e.merge),this.setState(t)}},{key:"render",value:function(){return Object(D.jsx)(O.a,{children:Object(D.jsxs)(m.a,{container:!0,justify:"center",children:[Object(D.jsx)(I,{}),Object(D.jsx)(m.a,{item:!0,xs:12,children:Object(D.jsx)(y.a,{m:2,display:"flex",justifyContent:"center",children:Object(D.jsxs)(C.a,{severity:"warning",children:["- Currently can handle video maximum 2 GB (1 hour video and below), video have more than one hour scroll down the webpage to read the comment!",Object(D.jsx)("br",{}),"- Hi\u1ec7n t\u1ea1i c\xf3 th\u1ec3 x\u1eed l\xfd video t\u1ed1i \u0111a 2 GB (video 1 gi\u1edd tr\u1edf xu\u1ed1ng), video c\xf3 h\u01a1n m\u1ed9t gi\u1edd cu\u1ed9n xu\u1ed1ng trang web \u0111\u1ec3 \u0111\u1ecdc b\xecnh lu\u1eadn!"]})})}),this.state.centerMessage.length>0&&Object(D.jsx)(m.a,{item:!0,xs:12,children:Object(D.jsx)(y.a,{m:2,display:"flex",justifyContent:"center",children:Object(D.jsx)(C.a,{severity:"info",children:this.state.centerMessage})})}),null!==this.state.videoOutput&&Object(D.jsx)(m.a,{item:!0,xs:12,children:Object(D.jsx)(y.a,{m:2,children:Object(D.jsx)(v.a,{color:"secondary",align:"center",display:"block",variant:"subtitle1",children:"Preview Your Video"})})}),"undefined"===typeof this.state.srcVideo&&"undefined"===typeof this.state.srcAudio&&Object(D.jsx)(m.a,{item:!0,xs:12,children:Object(D.jsx)(y.a,{m:2,display:"flex",justifyContent:"center",children:Object(D.jsxs)(g.a,{variant:"contained",component:"label",color:"primary",startIcon:Object(D.jsx)(S.a,{}),children:["Upload Media",Object(D.jsx)("input",{type:"file",hidden:!0,onChange:this.handleUploadFile})]})})}),null!==this.playerSourceVideo()&&Object(D.jsx)(N,{refFn:this.setPlayer,src:this.playerSourceVideo()}),null!==this.state.videoOutput&&Object(D.jsxs)(m.a,{item:!0,children:[Object(D.jsx)(y.a,{display:"flex",justifyContent:"center",m:2,children:Object(D.jsx)(w.a,{inputRef:this.outputFileRef,label:"Name File",defaultValue:"Video-DYL",placeholder:"Enter Your File Name",required:!0})}),Object(D.jsx)(y.a,{display:"flex",justifyContent:"center",m:3,children:Object(D.jsx)(g.a,{startIcon:Object(D.jsx)(R.a,{}),variant:"contained",color:"secondary",onClick:this.downloadVideo,children:"Download"})})]}),Object(D.jsx)(de,{isDashManifestVideo:this.state.isDashManifestVideo,setAudioAction:this.setAudioAction}),Object(D.jsx)(me,{isRendering:this.state.isRendering,setTrimTime:this.setTrimTime}),this.displayTrimStatus(),Object(D.jsx)(te,{setIsRenderRing:this.setIsRenderRing,setCenterMessage:this.setCenterMessage,merge:this.state.merge,srcVideo:this.state.srcVideo,srcAudio:this.state.srcAudio,audioAction:this.state.audioAction,startTrim:this.state.startTrim,endTrim:this.state.endTrim,triggerChangeVideo:this.triggerChangeVideo}),Object(D.jsx)(m.a,{item:!0,children:Object(D.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(D.jsx)(ie,{})})})]})})}}]),n}(r.a.Component),Oe=n(105),ye=n(156);!function(){var e="UA-154355656-4";Oe.a.initialize(e),Oe.a.pageview(window.location.pathname+window.location.search)}();var ve=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(D.jsx)("div",{className:"application",children:Object(D.jsxs)(ye.a,{children:[Object(D.jsx)("title",{children:"DYL Editor"}),Object(D.jsx)("meta",{name:"title",content:"DYL Editor - Edit Video And Audio"}),Object(D.jsx)("meta",{name:"description",content:"DYL Editor is a photo and video editing website under DYL Download Facebook Video Extension"})]})})}}]),n}(r.a.Component);c.a.render(Object(D.jsxs)(r.a.StrictMode,{children:[Object(D.jsx)(ve,{}),Object(D.jsx)(xe,{})]}),document.getElementById("root"))}},[[251,1,2]]]);
//# sourceMappingURL=main.2341fd73.chunk.js.map
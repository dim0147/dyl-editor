(this["webpackJsonpdyl-edit"]=this["webpackJsonpdyl-edit"]||[]).push([[0],{195:function(e,t,n){},218:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(17),c=n.n(a),o=n(34),s=n.n(o),d=n(48),l=n(55),u=n(56),j=n(60),f=n(59),p=n(145),b=n.n(p);function m(e,t,n){var i,r;i=new Blob([e],{type:n}),function(e,t){var n;(n=document.createElement("a")).href=e,n.download=t,document.body.appendChild(n),n.click(),n.remove()}(r=window.URL.createObjectURL(i),t),setTimeout((function(){return window.URL.revokeObjectURL(r)}),1e3)}var h=n(285),O=n(302),x=n(294),y=n(297),v=n(253),g=n(287),w=n(295),C=n(298),V=n(155),A=n.n(V),T=n(153),k=n.n(T),S=n(154),F=n.n(S),R=n(296),D=n(300),E=n.p+"static/media/logo512.c49869f0.png",L=n(3),M=Object(R.a)({headerH1:{color:"blue",fontWeight:"bold","&:hover":{color:"#2f17ad",cursor:"pointer"}}});function P(){var e=M();return Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsxs)(h.a,{container:!0,direction:"column",spacing:2,children:[Object(L.jsx)(h.a,{item:!0,children:Object(L.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(L.jsx)(D.a,{alt:"DYL Editor",src:E})})}),Object(L.jsx)(h.a,{item:!0,children:Object(L.jsx)(v.a,{onClick:function(){return window.open("https://chrome.google.com/webstore/detail/dyl-download-facebook-vid/honmapcmnfgjmahijdniaaollhhfpcnj","_blank")},align:"center",component:"h1",className:e.headerH1,children:"DYL Editor"})}),Object(L.jsx)(h.a,{item:!0,children:Object(L.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(L.jsx)(g.a,{onClick:function(){return window.open("https://dim0147.github.io/dyl-editor/en/update")},style:{margin:10},variant:"contained",color:"secondary",children:"About Extension"})})})]})})}n(195);var U,Y=n(102),N=function(e){var t=e.src,n=e.refFn;return Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(L.jsx)("div",{children:Object(L.jsx)(Y.Player,{ref:n,fluid:!1,width:400,height:300,src:t,children:Object(L.jsx)(Y.BigPlayButton,{position:"center"})})})})})},I=Object(i.memo)(N),B=n(67),G=n(40),H=n(151),z=n.n(H),J=(n(218),window.FFmpeg),W=J.createFFmpeg,q=J.fetchFile,_=null,K=function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _=W({logger:t,corePath:"https://unpkg.com/@ffmpeg/core@0.8.5/dist/ffmpeg-core.js"}),e.next=3,_.load();case 3:return U=t,e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(d.a)(s.a.mark((function e(t,n,i){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==_){e.next=2;break}throw new Error("FFMPEG not load!");case 2:if(U({type:"INFO",message:"Loading Audio And Video File..."}),null===t){e.next=9;break}return e.t0=_,e.next=7,q(t);case 7:e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","srcVideo",e.t1);case 9:if(null===n){e.next=15;break}return e.t2=_,e.next=13,q(n);case 13:e.t3=e.sent,e.t2.FS.call(e.t2,"writeFile","srcAudio",e.t3);case 15:return U({type:"INFO",message:"Start Rendering..."}),e.next=18,(r=_).run.apply(r,Object(B.a)(i).concat(["output.mp4"]));case 18:return e.abrupt("return",_.FS("readFile","output.mp4"));case 19:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}();function X(e){var t=e.split(":");return t.length<3||Number(t[1])>=60||Number(t[2])>=60?null:60*+t[0]*60+60*+t[1]+ +t[2]}function Z(e){return new Date(1e3*e).toISOString().substr(11,8)}function $(e){var t=e.audioAction,n=e.startTrim,i=e.endTrim,r=[];if("undefined"!==typeof n&&n>0){var a=Z(n);r.push("-ss",a)}if("undefined"!==typeof i&&i>0){var c=Z(i-("undefined"!==typeof n&&n>0?n:0));r.push("-t",c)}return"add"===t?r.push("-map","0","-map","1:a"):"remove"===t&&r.push("-an"),r.push("-c","copy"),r}var ee=Object(R.a)({renderBox:{maxHeight:250,overflowY:"auto",borderBottom:"1px solid #f44336","& ul":{color:"#949494",listStyleType:"none"}}}),te=Object(i.memo)((function(e){var t=e.srcVideo,n=e.srcAudio,r=e.merge,a=e.audioAction,c=e.startTrim,o=e.endTrim,l=e.triggerChangeVideo,u=ee(),j=Object(i.useState)([]),f=Object(G.a)(j,2),p=f[0],b=f[1],m=Object(i.useState)(""),O=Object(G.a)(m,2),x=O[0],v=O[1],w=Object(i.useState)(!1),C=Object(G.a)(w,2),V=C[0],A=C[1],T=function(e){v("- [".concat(z()().format("LTS"),"] ").concat(e.type,": ").concat(e.message))};Object(i.useEffect)((function(){r&&k()}),[r]),Object(i.useEffect)((function(){b([x].concat(Object(B.a)(p)))}),[x]);var k=function(){var e=Object(d.a)(s.a.mark((function e(){var i,d,u,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),T({type:"INFO",message:"Loading ffmpeg..."}),e.next=4,K(T).catch((function(e){return null}));case 4:if(!0===e.sent){e.next=9;break}return T({type:"ERROR",message:"Cannot load ffmpeg"}),A(!1),e.abrupt("return");case 9:return i=[],r?i=["-i","srcVideo","-i","srcAudio","-map","0","-map","1:a","-c:v","copy"]:(d=[],"undefined"!==typeof t&&d.push("-i","srcVideo"),"undefined"!==typeof n&&d.push("-i","srcAudio"),u=$({audioAction:a,startTrim:c,endTrim:o}),i=[].concat(d,Object(B.a)(u))),e.next=13,Q(t,n,i).catch((function(e){return null}));case 13:if(null!==(j=e.sent)){e.next=18;break}return T({type:"ERROR",message:"Cannot convert video!!!"}),A(!1),e.abrupt("return");case 18:T({type:"RESULT",message:"Convert Video Success, You Can Now Preview Your Video And Start Download!"}),A(!1),l(j);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)(h.a,{item:!0,xs:12,children:[Object(L.jsx)(y.a,{m:3,display:"flex",justifyContent:"center",children:Object(L.jsx)(y.a,{className:u.renderBox,display:"div",children:Object(L.jsx)("ul",{children:p.map((function(e,t){return Object(L.jsx)("li",{children:e},t)}))})})}),Object(L.jsx)(y.a,{m:3,display:"flex",justifyContent:"center",children:Object(L.jsx)(g.a,{disabled:V,variant:"contained",color:"primary",onClick:k,children:"Render"})})]})})),ne=n(104),ie=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(L.jsx)(ne.FacebookProvider,{appId:"243407530453003",children:Object(L.jsx)(ne.Comments,{href:"https://dim0147.github.io/dyl-editor"})})}}]),n}(i.Component),re=n(299),ae=n(301),ce=n(289),oe=n(288),se=n(254),de=Object(i.memo)((function(e){var t=e.isDashManifestVideo,n=e.setAudioAction,a=r.a.useState(t?"add":"none"),c=Object(G.a)(a,2),o=c[0],s=c[1];Object(i.useEffect)((function(){!0===t?s("add"):!1===t&&s("none")}),[t]);return Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(y.a,{display:"flex",justifyContent:"center",m:3,children:Object(L.jsxs)(oe.a,{component:"fieldset",children:[Object(L.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(L.jsx)(se.a,{component:"legend",children:"Audio"})}),Object(L.jsxs)(ae.a,{row:!0,"aria-label":"action",name:"action",value:o,onChange:function(e){var t=e.target.value;s(t),n(t)},children:[Object(L.jsx)(ce.a,{value:"add",control:Object(L.jsx)(re.a,{}),label:"Add"}),Object(L.jsx)(ce.a,{value:"remove",control:Object(L.jsx)(re.a,{}),label:"Remove"}),Object(L.jsx)(ce.a,{value:"none",control:Object(L.jsx)(re.a,{}),label:"None"})]})]})})})})),le=n(106),ue=n(159),je=n(152),fe=n.n(je),pe=n(292),be=n(293);function me(e){var t=e.inputRef,n=Object(ue.a)(e,["inputRef"]);return Object(L.jsx)(fe.a,Object(le.a)(Object(le.a)({},n),{},{ref:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){t(e?e.inputElement:null)})),mask:[/[0-9]/,/[0-9]/,":",/[0-9]/,/[0-9]/,":",/[0-9]/,/[0-9]/],placeholderChar:"\u2000",showMask:!0}))}var he=Object(i.memo)((function(e){var t=e.setTrimTime,n=r.a.useState("00:00:00"),i=Object(G.a)(n,2),a=i[0],c=i[1],o=r.a.useState("00:00:00"),s=Object(G.a)(o,2),d=s[0],l=s[1],u=r.a.useState(""),j=Object(G.a)(u,2),f=j[0],p=j[1];return Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsxs)(y.a,{display:"flex",flexDirection:"column",justifyContent:"center",children:[Object(L.jsx)(v.a,{align:"center",variant:"body2",children:"Trim"}),""!==f&&Object(L.jsx)(y.a,{display:"flex",justifyContent:"center",m:1,children:Object(L.jsx)(C.a,{severity:"error",children:f})}),Object(L.jsxs)(y.a,{display:"flex",justifyContent:"center",m:1,children:[Object(L.jsx)(pe.a,{style:{margin:10},htmlFor:"formatted-text-mask-input",children:"Start From"}),Object(L.jsx)(be.a,{value:a,onChange:function(e){c(e.target.value)},inputComponent:me})]}),Object(L.jsxs)(y.a,{display:"flex",justifyContent:"center",m:1,children:[Object(L.jsx)(pe.a,{style:{margin:10},htmlFor:"formatted-text-mask-input",children:"End At"}),Object(L.jsx)(be.a,{value:d,onChange:function(e){l(e.target.value)},inputComponent:me})]}),Object(L.jsxs)(y.a,{display:"flex",justifyContent:"center",m:5,children:[Object(L.jsx)(g.a,{onClick:function(){if("00:00:00"!==a&&null===X(a))return p("Invalid start time!!!");if("00:00:00"!==d&&null===X(d))return p("Invalid end time!!!");var e=X(a),n=X(d);if(null!==e&&null!==n&&e>0&&n>0&&e>=n)return p("Invalid second start time and end time");p(""),t(e,n)},variant:"outlined",color:"secondary",style:{margin:3},children:"Apply"}),Object(L.jsx)(g.a,{onClick:function(){c("00:00:00"),l("00:00:00"),t(0,0)},variant:"outlined",color:"primary",style:{margin:3},children:"Remove"})]})]})})})),Oe=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).player=null,e.outputFileRef=r.a.createRef(),e.state={merge:!1,isDashManifestVideo:!1,audioAction:"none",videoOutput:null},e.handleVideoStateChange=function(t){if(null!==e.player){var n=t.currentTime,i=e.state,r=i.startTrim,a=i.endTrim;("undefined"!==typeof r&&r>0&&n<r||"undefined"!==typeof a&&a>0&&n>a)&&e.player.seek(r)}},e.restartPlayer=function(){e.setMuted(!1),e.setTrimTime(0,0)},e.setMuted=function(t){null!==e.player&&(e.player.muted=t)},e.setAudioAction=function(t){"remove"===t?e.player.muted=!0:("add"===t||"none"===t)&&(e.player.muted=!1),e.setState({audioAction:t})},e.setTrimTime=function(t,n){e.setState({startTrim:t,endTrim:n})},e.setPlayer=function(t){e.player=t,null!==e.player&&e.player.subscribeToStateChange(e.handleVideoStateChange)},e.triggerChangeVideo=function(t){var n=URL.createObjectURL(new Blob([t.buffer]));e.setState({srcVideoPreview:n,videoOutput:t}),e.restartPlayer()},e.playerSourceVideo=function(){return"undefined"!==typeof e.state.srcVideoPreview?e.state.srcVideoPreview:"undefined"!==typeof e.state.srcVideo?e.state.srcVideo:"undefined"!==typeof e.state.srcAudio?e.state.srcAudio:null},e.displayTrimStatus=function(){if("undefined"!==typeof e.state.startTrim&&e.state.startTrim>0||"undefined"!==typeof e.state.endTrim&&e.state.endTrim>0)return Object(L.jsx)(h.a,{item:!0,children:Object(L.jsx)(O.a,{size:"small",icon:Object(L.jsx)(k.a,{}),label:"Apply trim video",clickable:!1,color:"secondary"})})},e.handleUploadFile=function(){var t=Object(d.a)(s.a.mark((function t(n){var i,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===(i=n.target.files)||i.length>1)){t.next=3;break}return t.abrupt("return");case 3:r=i.item(0),a=URL.createObjectURL(r),e.setState({srcVideo:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.downloadVideo=function(){var t=e.outputFileRef.current.value;""===t&&(t="Video-DYL"),m(e.state.videoOutput,t+".mp4","application/octet-stream")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=b.a.parse(window.location.search),t={};void 0!==typeof e.srcVideo&&(t.srcVideo=e.srcVideo),void 0!==typeof e.srcAudio&&(t.srcAudio=e.srcAudio),void 0!==typeof e.isDashManifestVideo&&(t.isDashManifestVideo="true"===e.isDashManifestVideo),void 0!==typeof e.merge&&(t.merge=e.merge),this.setState(t)}},{key:"render",value:function(){return Object(L.jsx)(x.a,{children:Object(L.jsxs)(h.a,{container:!0,justify:"center",children:[Object(L.jsx)(P,{}),Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(y.a,{m:2,display:"flex",justifyContent:"center",children:Object(L.jsx)(C.a,{severity:"warning",children:"Currently can handle video maximum 2 GB, which is a hard limit in WebAssembly. Might become 4 GB in the future!"})})}),null!==this.state.videoOutput&&Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(y.a,{m:2,children:Object(L.jsx)(v.a,{color:"secondary",align:"center",display:"block",variant:"subtitle1",children:"Preview Your Video"})})}),"undefined"===typeof this.state.srcVideo&&"undefined"===typeof this.state.srcAudio&&Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(y.a,{m:2,display:"flex",justifyContent:"center",children:Object(L.jsxs)(g.a,{variant:"contained",component:"label",color:"primary",startIcon:Object(L.jsx)(F.a,{}),children:["Upload Media",Object(L.jsx)("input",{type:"file",hidden:!0,onChange:this.handleUploadFile})]})})}),null!==this.playerSourceVideo()&&Object(L.jsx)(I,{refFn:this.setPlayer,src:this.playerSourceVideo()}),null!==this.state.videoOutput&&Object(L.jsxs)(h.a,{item:!0,children:[Object(L.jsx)(y.a,{display:"flex",justifyContent:"center",m:2,children:Object(L.jsx)(w.a,{inputRef:this.outputFileRef,label:"Name File",defaultValue:"Video-DYL",placeholder:"Enter Your File Name",required:!0})}),Object(L.jsx)(y.a,{display:"flex",justifyContent:"center",m:3,children:Object(L.jsx)(g.a,{startIcon:Object(L.jsx)(A.a,{}),variant:"contained",color:"secondary",onClick:this.downloadVideo,children:"Download"})})]}),Object(L.jsx)(de,{isDashManifestVideo:this.state.isDashManifestVideo,setAudioAction:this.setAudioAction}),Object(L.jsx)(he,{setTrimTime:this.setTrimTime}),this.displayTrimStatus(),Object(L.jsx)(te,{merge:this.state.merge,srcVideo:this.state.srcVideo,srcAudio:this.state.srcAudio,audioAction:this.state.audioAction,startTrim:this.state.startTrim,endTrim:this.state.endTrim,triggerChangeVideo:this.triggerChangeVideo}),Object(L.jsx)(h.a,{item:!0,children:Object(L.jsx)(y.a,{display:"flex",justifyContent:"center",children:Object(L.jsx)(ie,{})})})]})})}}]),n}(r.a.Component),xe=n(105),ye=n(156);!function(){var e="UA-154355656-4";xe.a.initialize(e),xe.a.pageview(window.location.pathname+window.location.search)}();var ve=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(L.jsx)("div",{className:"application",children:Object(L.jsxs)(ye.a,{children:[Object(L.jsx)("title",{children:"DYL Editor"}),Object(L.jsx)("meta",{name:"title",content:"DYL Editor - Edit Video And Audio"}),Object(L.jsx)("meta",{name:"description",content:"DYL Editor is a photo and video editing website under DYL Download Facebook Video Extension"})]})})}}]),n}(r.a.Component);c.a.render(Object(L.jsxs)(r.a.StrictMode,{children:[Object(L.jsx)(ve,{}),Object(L.jsx)(Oe,{})]}),document.getElementById("root"))}},[[251,1,2]]]);
//# sourceMappingURL=main.8f3cc45e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports=[{slug:"a_quiet_forest",descriptions:[{text:"it is early morning",timer:100},{text:"cold rain is melting the remaining snow hanging from the boughs of the surround trees",timer:1500},{text:"you are surrounded by evergreens.",timer:500},{text:"douglas fir",timer:1e3},{text:"you can make out a path heading into the fog",timer:1500}]},{slug:"a_cold_cabin",descriptions:[{text:"it is a cold cabin"},{text:"someone somebody once loved, probably, is here"},{text:"sitting alone at a table set for two,"},{text:"dead."},{text:"diffuse light flows and pools and illuminates"}]},{slug:"somebody_once_loved",descriptions:[{text:"They are an adult, but beyond that you struggle to make out anything about them. The stench is magnificent."}]}]},21:function(e){e.exports=[["a_quiet_forest","a_cold_cabin"],["a_cold_cabin","somebody_once_loved"]]},25:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),a=n(18),i=n.n(a),c=(n(30),n(0)),s=n(1),u=n(4),l=n(3),h=n(5),f=n(8),p=n(19),m=n(24);function d(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,d)}var O=function(){function e(){Object(c.a)(this,e),this.command="",this.helpDescription=""}return Object(s.a)(e,[{key:"run",value:function(e){throw"not implemented"}}]),e}(),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).command="echo",n.helpDescription="Use echo to say something out loud. Example:\n\necho Is anyone there?",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"run",value:function(e){var t=e.args;return(0,e.writeToConsole)(t.join(" ")),Promise.resolve(null)}}]),t}(O),b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).command="help",n.helpDescription="Use help to make sense of the world.",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"run",value:function(e){var t=e.writeToConsole,n=e.args;if(n.length>=1){var o=W[n[0]];t(o?o.helpDescription:"I don't know much about ".concat(n.join(" "),"."))}else t("The following utilities are available: ".concat(Object.keys(W).join(", "),'.\n\nFor help with any particular utility, write "help <utility name>".'));return Promise.resolve(null)}}]),t}(O),y=n(7),g=n(12),w=function(){function e(t){var n=t.descriptions,o=t.slug;Object(c.a)(this,e),this.neighborSlugs=[],this.descriptions=n,this.slug=o}return Object(s.a)(e,[{key:"neighbors",get:function(){return this.neighborSlugs.map(function(e){return k[e]})}}]),e}(),j=n(20),C=n(21),E=new w({slug:"loading",descriptions:[{text:"loading"}]}),S={loading:E},T=!1;var _,k=S;!function(e){e.SET_LOCATION="SET_LOCATION",e.POP_LOCATION_STACK="POP_LOCATION_STACK",e.PUSH_LOCATION_STACK="PUSH_LOCATION_STACK",e.LOCK_CONSOLE="LOCK_CONSOLE",e.RELEASE_CONSOLE="RELEASE_CONSOLE"}(_||(_={}));var I={location:E.slug,previousLocationStack:[],consoleInteractive:!0};var L=Object(g.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.SET_LOCATION:return Object(y.a)({},e,{location:t.value});case _.PUSH_LOCATION_STACK:return Object(y.a)({},e,{previousLocationStack:[t.value].concat(Object(f.a)(e.previousLocationStack))});case _.POP_LOCATION_STACK:return Object(y.a)({},e,{previousLocationStack:e.previousLocationStack.slice(1)});case _.LOCK_CONSOLE:return Object(y.a)({},e,{consoleInteractive:!1});case _.RELEASE_CONSOLE:return Object(y.a)({},e,{consoleInteractive:!0});default:return e}}),A=L;function P(){return k[L.getState().location]}var H=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).command="ls",n.helpDescription="ls lists the locations and objects you can reach from where you are now.",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"run",value:function(e){return(0,e.writeToConsole)(P().neighborSlugs.sort().join(B)),Promise.resolve(null)}}]),t}(O),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).responses=["I don't remember","But I am glad you asked. I am glad you are here.","I don't know who you are","You are an echo of an echo","You are a grease smudge on a screen","You were a mistake","You are a dog lover","Or you were a dog lover"],n.command="whoami",n.helpDescription="Ask a difficult question. Get a difficult response",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"run",value:function(e){var t=this,n=e.writeToConsole;return new Promise(function(e){t.responses.forEach(function(o,r){window.setTimeout(function(){n(o),r===t.responses.length-1&&e()},1e3+2500*r)})})}}]),t}(O),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).command="look",n.helpDescription="Use look to take some time, to see where you are. Some things take longer to see than others.",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"run",value:function(e){var t=e.writeToConsole;return new Promise(function(e){var n=0,o=P().descriptions;o.forEach(function(r,a){n+="undefined"===typeof r.timer?1500:r.timer,window.setTimeout(function(){t(r.text),a===o.length-1&&e()},n)})})}}]),t}(O),D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).command="cd",n.helpDescription="Use cd to move to a new location. For example:\n\ncd a_cold_cabin",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"goToPreviousLocation",value:function(){var e=A.getState().previousLocationStack[0];A.dispatch({type:_.POP_LOCATION_STACK}),e&&A.dispatch({type:_.SET_LOCATION,value:e})}},{key:"run",value:function(e){var t=e.args,n=e.writeToConsole,o=Promise.resolve(null);if(".."==t[0])return this.goToPreviousLocation(),o;var r=P().neighbors.find(function(e){return e.slug===t[0]});return r?(A.dispatch({type:_.PUSH_LOCATION_STACK,value:A.getState().location}),A.dispatch({type:_.SET_LOCATION,value:r.slug})):n("invalid location ".concat(t[0])),o}}]),t}(O),K=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).command="time",n.helpDescription="time tells you the time",n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"run",value:function(e){return(0,e.writeToConsole)((new Date).getTime().toString()),Promise.resolve(null)}}]),t}(O),U={},V=!1;var W=U,R=n(13);function q(){return"~/".concat(A.getState().location," > ")}var B="    ",F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={terminalHistory:[{content:"you are in a cold and quiet forest",id:d()},{content:"rain has recently fallen",id:d()},{content:'type "help", then press enter, to get started',id:d()}],commandHistory:[],currentPlaceInHistory:-1},n.inputEl=null,n.consoleWriters=[],n.handleKeyDown=function(e){switch(n.revokeConsoleWriters(),e.key){case"ArrowUp":n.goBackInHistory(),n.moveCursorToEnd();break;case"ArrowDown":n.goForwardInHistory(),n.moveCursorToEnd();break;case"Tab":e.preventDefault(),n.tabComplete()}},n.tabComplete=function(){if(""!==n.inputValue){var e=n.inputValue.split(" "),t=Object(m.a)(e,2),o=t[0],r=t[1];"undefined"===typeof r&&(r="");var a=P().neighborSlugs.filter(function(e){return 0===e.indexOf(r)});0!==a.length&&(1!==a.length?n.writeToConsole(a.reduce(function(e,t){return"".concat(e).concat(B).concat(t)})):n.inputValue="".concat(o," ").concat(a[0]))}},n.goBackInHistory=function(){n.setState(function(e){return e.currentPlaceInHistory===e.commandHistory.length+1?null:{currentPlaceInHistory:e.currentPlaceInHistory+1}},function(){var e=n.state.commandHistory[n.state.currentPlaceInHistory];e&&(n.inputValue=e.content)})},n.moveCursorToEnd=function(){window.setTimeout(function(){n.inputEl&&(n.inputEl.selectionStart=1e3)},0)},n.goForwardInHistory=function(){n.setState(function(e){return-1===e.currentPlaceInHistory?null:{currentPlaceInHistory:e.currentPlaceInHistory-1}},function(){-1===n.state.currentPlaceInHistory&&(n.inputValue="");var e=n.state.commandHistory[n.state.currentPlaceInHistory];e&&(n.inputValue=e.content)})},n.getRevocableConsoleWriter=function(){var e=!1;return{revoke:function(){e=!0},writeToConsole:function(t){e||n.writeToConsole(t)}}},n.revokeConsoleWriters=function(){n.consoleWriters.forEach(function(e){e.revoke()}),n.consoleWriters=[],A.dispatch({type:_.RELEASE_CONSOLE})},n.handleSubmit=function(e){e.preventDefault();var t=n.inputValue;n.inputValue="",n.addToCommandHistory(t);var o=t.split(" "),r=Object(p.a)(o),a=r[0],i=r.slice(1),c=W[a];if(n.writeToConsole("".concat(q()).concat(t)),c){var s=n.getRevocableConsoleWriter();n.consoleWriters.push(s),A.dispatch({type:_.LOCK_CONSOLE}),c.run({args:i,writeToConsole:s.writeToConsole}).then(function(){A.dispatch({type:_.RELEASE_CONSOLE})})}else n.writeToConsole("I don't know how to ".concat(a))},n.addToCommandHistory=function(e){n.setState(function(t){return{commandHistory:[{content:e,id:d()}].concat(Object(f.a)(t.commandHistory)),currentPlaceInHistory:-1}})},n.writeToConsole=function(e){n.setState(function(t){return{terminalHistory:Object(f.a)(t.terminalHistory).concat([{content:e,id:d()}])}})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"terminal",onClick:function(){e.inputEl&&e.inputEl.focus()},onKeyDown:this.handleKeyDown},r.a.createElement("pre",{className:"terminal-buffer"},this.state.terminalHistory.reduce(function(e,t){return"".concat(e,"\n").concat(t.content)},"")),this.props.consoleInteractive&&r.a.createElement("form",{className:"input-form",onSubmit:this.handleSubmit},r.a.createElement("span",{className:"input-prompt"},q()),r.a.createElement("input",{className:"input",type:"text",ref:function(t){e.inputEl=t,e.inputEl&&e.inputEl.focus()}})))}},{key:"inputValue",get:function(){return this.inputEl?this.inputEl.value:""},set:function(e){this.inputEl&&(this.inputEl.value=e)}}]),t}(r.a.Component);var Y=Object(R.b)(function(e){return{consoleInteractive:e.consoleInteractive}})(F),J="a_quiet_forest",G=function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this,e)),T||(T=!0,j.forEach(function(e){S[e.slug]=new w(e)}),C.forEach(function(e){S[e[0]].neighborSlugs.push(e[1]),S[e[1]].neighborSlugs.push(e[0])})),V||(V=!0,[new v,new b,new H,new N,new D,new x,new K].forEach(function(e){U[e.command]=e})),A.dispatch({type:_.SET_LOCATION,value:J}),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(Y,null))}}]),t}(r.a.Component);i.a.render(r.a.createElement(R.a,{store:A},r.a.createElement(G,null)),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.d36eb567.chunk.js.map
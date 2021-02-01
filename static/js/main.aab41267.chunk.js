(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(1),r=n.n(s),o=n(9),a=n.n(o),u=(n(15),n(16),n(8)),c=n(2),l=n(3),d=n(5),f=n(4),h=(n(17),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.col,n=t.isFinish,s=t.isStart,r=t.isWall,o=t.onMouseDown,a=t.onMouseEnter,u=t.onMouseUp,c=t.row,l=n?"node-finish":s?"node-start":r?"node-wall":"";return Object(i.jsx)("div",{id:"node-".concat(c,"-").concat(e),className:"node ".concat(l),onMouseDown:function(){return o(c,e)},onMouseEnter:function(){return a(c,e)},onMouseUp:function(){return u()}})}}]),n}(s.Component)),v=n(6);function j(t,e,n){var i=[];e.distance=0;for(var s=function(t){var e,n=[],i=Object(v.a)(t);try{for(i.s();!(e=i.n()).done;){var s,r=e.value,o=Object(v.a)(r);try{for(o.s();!(s=o.n()).done;){var a=s.value;n.push(a)}}catch(u){o.e(u)}finally{o.f()}}}catch(u){i.e(u)}finally{i.f()}return n}(t);s.length;){p(s);var r=s.shift();if(!r.isWall){if(r.distance===1/0)return i;if(r.isVisited=!0,i.push(r),r===n)return i;m(r,t)}}}function p(t){t.sort((function(t,e){return t.distance-e.distance}))}function m(t,e){var n,i=function(t,e){var n=[],i=t.col,s=t.row;s>0&&n.push(e[s-1][i]);s<e.length-1&&n.push(e[s+1][i]);i>0&&n.push(e[s][i-1]);i<e[0].length-1&&n.push(e[s][i+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),s=Object(v.a)(i);try{for(s.s();!(n=s.n()).done;){var r=n.value;r.distance=t.distance+1,r.previousNode=t}}catch(o){s.e(o)}finally{s.f()}}n(18);var b=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={grid:[],mouseIsPressed:!1},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=g();this.setState({grid:t})}},{key:"handleMouseDown",value:function(t,e){var n=y(this.state.grid,t,e);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(t,e){if(this.state.mouseIsPressed){var n=y(this.state.grid,t,e);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateDijkstra",value:function(t,e){for(var n=this,i=function(i){if(i===t.length)return setTimeout((function(){n.animateShortestPath(e)}),10*i),{v:void 0};setTimeout((function(){var e=t[i];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited"}),10*i)},s=0;s<=t.length;s++){var r=i(s);if("object"===typeof r)return r.v}}},{key:"animateShortestPath",value:function(t){for(var e=function(e){setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),50*e)},n=0;n<t.length;n++)e(n)}},{key:"visualizeDijkstra",value:function(){var t=this.state.grid,e=t[10][15],n=t[10][35],i=j(t,e,n),s=function(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}(n);this.animateDijkstra(i,s)}},{key:"render",value:function(){var t=this,e=this.state,n=e.grid,s=e.mouseIsPressed;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{onClick:function(){return t.visualizeDijkstra()},children:"Visualize Dijkstra's Algorithm"}),Object(i.jsx)("div",{className:"grid",children:n.map((function(e,n){return Object(i.jsx)("div",{children:e.map((function(e,n){var r=e.row,o=e.col,a=e.isFinish,u=e.isStart,c=e.isWall;return Object(i.jsx)(h,{col:o,isFinish:a,isStart:u,isWall:c,mouseIsPressed:s,onMouseDown:function(e,n){return t.handleMouseDown(e,n)},onMouseEnter:function(e,n){return t.handleMouseEnter(e,n)},onMouseUp:function(){return t.handleMouseUp()},row:r},n)}))},n)}))})]})}}]),n}(s.Component),g=function(){for(var t=[],e=0;e<20;e++){for(var n=[],i=0;i<50;i++)n.push(O(i,e));t.push(n)}return t},O=function(t,e){return{col:t,row:e,isStart:10===e&&15===t,isFinish:10===e&&35===t,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},y=function(t,e,n){var i=t.slice(),s=i[e][n],r=Object(u.a)(Object(u.a)({},s),{},{isWall:!s.isWall});return i[e][n]=r,i};var k=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(b,{})})},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),i(t),s(t),r(t),o(t)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),M()}},[[19,1,2]]]);
//# sourceMappingURL=main.aab41267.chunk.js.map
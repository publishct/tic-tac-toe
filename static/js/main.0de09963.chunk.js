(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(1),s=a(2),c=a(4),l=a(3),i=a(0),u=a.n(i),o=a(6),d=a.n(o);function m(e){return u.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var h=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},r}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext})}},{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(m,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],c=n[1],l=n[2];if(e[s]&&e[s]===e[c]&&e[s]===e[l])return e[s]}return null}(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),u.a.createElement("div",null,u.a.createElement("div",{className:"status"},e),u.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),u.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),u.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(u.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(h,null)),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null),u.a.createElement("ol",null)))}}]),a}(u.a.Component);d.a.render(u.a.createElement(v,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.0de09963.chunk.js.map
webpackJsonp([1],{0:function(n,l,t){n.exports=t("cDNt")},cDNt:function(n,l,t){"use strict";function i(n){return d._18(0,[(n()(),d._4(0,0,null,null,0,"span",[],[[2,"glyphicon",null],[2,"glyphicon-remove",null],[2,"comp",null]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,0,0,t.isActive,t.isActive,t.isCompActive)})}function o(n){return d._18(0,[(n()(),d._4(0,0,null,null,1,"app-cross",[],null,null,null,i,A)),d._2(1,114688,null,0,w,[],null,null)],function(n,l){n(l,1,0)},null)}function e(n,l){for(var t=!0,i=0;i<9;i++)if(!n[i]&&!l[i]){t=!1;break}return t}function u(n,l){return n[0]&&n[4]&&n[8]?{flag:1,position:[0,4,8]}:n[2]&&n[4]&&n[6]?{flag:1,position:[2,4,6]}:n[0]&&n[1]&&n[2]?{flag:1,position:[0,1,2]}:n[3]&&n[4]&&n[5]?{flag:1,position:[3,4,5]}:n[6]&&n[7]&&n[8]?{flag:1,position:[6,7,8]}:n[0]&&n[3]&&n[6]?{flag:1,position:[0,3,6]}:n[1]&&n[4]&&n[7]?{flag:1,position:[1,4,7]}:n[2]&&n[5]&&n[8]?{flag:1,position:[2,5,8]}:l[0]&&l[4]&&l[8]?{flag:2,position:[0,4,8]}:l[2]&&l[4]&&l[6]?{flag:2,position:[2,4,6]}:l[0]&&l[1]&&l[2]?{flag:2,position:[0,1,2]}:l[3]&&l[4]&&l[5]?{flag:2,position:[3,4,5]}:l[6]&&l[7]&&l[8]?{flag:2,position:[6,7,8]}:l[0]&&l[3]&&l[6]?{flag:2,position:[0,3,6]}:l[1]&&l[4]&&l[7]?{flag:2,position:[1,4,7]}:l[2]&&l[5]&&l[8]?{flag:2,position:[2,5,8]}:e(n,l)?{flag:-1,position:[-1]}:{flag:0,position:[-1]}}function s(n){return 2==n?10:1==n?-10:-1==n?0:683}function r(n,l,t){var i,o=s(u(n,l).flag);if(10==o||-10==o||0==o)return o;if(t){i=1e3;for(var e=0;e<9;e++)n[e]||l[e]||(n[e]=!0,i=Math.min(i,r(n,l,!t)),n[e]=!1);return i}i=-1e3;for(var e=0;e<9;e++)n[e]||l[e]||(l[e]=!0,i=Math.max(i,r(n,l,!t)),l[e]=!1);return i}function c(n,l){for(var t,i,o=-1e3,e=0;e<9;e++)n[e]||l[e]||(l[e]=!0,t=r(n,l,!0),l[e]=!1,t>o&&(i=e,o=t));return i}function a(n,l){for(var t=0;t<3;t++)l[n[t]]=!0}function p(n){return d._18(0,[(n()(),d._4(0,0,[["e",1]],null,4,"div",[],[[8,"id",0],[24,"@blink",0]],[[null,"click"]],function(n,l,t){var i=!0,o=n.component;if("click"===l){i=!1!==o.onClick(d._15(n,0))&&i}return i},null,null)),(n()(),d._17(-1,null,["\n    "])),(n()(),d._4(2,0,null,null,1,"app-cross",[],null,null,null,i,A)),d._2(3,114688,null,0,w,[],{isActive:[0,"isActive"],isCompActive:[1,"isCompActive"]},null),(n()(),d._17(-1,null,["\n  "]))],function(n,l){var t=l.component;n(l,3,0,t.isClick[l.context.$implicit],t.isCompSelected[l.context.$implicit])},function(n,l){var t=l.component;n(l,0,0,l.context.$implicit,t.blink[l.context.$implicit]?"flash":"normal")})}function f(n){return d._18(0,[(n()(),d._4(0,0,null,null,4,"div",[["class","container"]],[[24,"@boardTrig",0]],null,null,null,null)),(n()(),d._17(-1,null,["\n  "])),(n()(),d.Y(16777216,null,null,1,null,p)),d._2(3,802816,null,0,O.c,[d.N,d.K,d.t],{ngForOf:[0,"ngForOf"]},null),(n()(),d._17(-1,null,["\n"])),(n()(),d._17(-1,null,["\n"]))],function(n,l){n(l,3,0,l.component.boardArray)},function(n,l){n(l,0,0,void 0)})}function _(n){return d._18(0,[(n()(),d._4(0,0,null,null,1,"app-board",[],null,null,null,f,M)),d._2(1,114688,null,0,P,[],null,null)],function(n,l){n(l,1,0)},null)}function m(n){return d._18(0,[(n()(),d._4(0,0,null,null,6,"app-board",[],null,null,null,f,M)),d._2(1,114688,null,0,P,[],null,null),(n()(),d._17(-1,null,["\n  "])),(n()(),d._4(3,0,null,null,2,null,null,null,null,null,null,null)),(n()(),d._4(4,0,null,null,1,"app-cross",[],null,null,null,i,A)),d._2(5,114688,null,0,w,[],null,null),(n()(),d._17(-1,null,["\n"]))],function(n,l){n(l,1,0),n(l,5,0)},null)}function h(n){return d._18(0,[(n()(),d._4(0,0,null,null,1,"app-root",[],null,null,null,m,F)),d._2(1,49152,null,0,b,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var d=t("/oeL"),g={production:!0},y=function(){function n(){}return n}(),b=function(){function n(){this.title="app"}return n}(),C=["h3[_ngcontent-%COMP%]{font-family:Azo Sans Bold}"],v=[".container[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;height:555px;width:593px;background-color:snow;top:46px}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#d3d3d3;height:181px;width:180px;margin:2px}app-cross[_ngcontent-%COMP%]{position:relative;left:65px;top:65px}.alert.alert-danger[_ngcontent-%COMP%]{position:relative;width:200px;left:167px}"],k=[".glyphicon.glyphicon-remove[_ngcontent-%COMP%]{color:red;font-size:40px}.comp[_ngcontent-%COMP%]{border:2px solid blue;border-radius:100%;position:absolute;height:47px;width:47px}"],w=function(){function n(){this.isActive=!1,this.isCompActive=!1}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}(),x=[k],A=d._1({encapsulation:0,styles:x,data:{}}),O=(d.Z("app-cross",w,o,{isActive:"isActive",isCompActive:"isCompActive"},{},[]),t("qbdv")),P=function(){function n(){this.isClick=[!1,!1,!1,!1,!1,!1,!1,!1,!1],this.isCompSelected=[!1,!1,!1,!1,!1,!1,!1,!1,!1],this.gameComplete=!1,this.wait=!1,this.blink=[!1,!1,!1,!1,!1,!1,!1,!1,!1]}return n.prototype.ngOnInit=function(){this.boardArray=new Array(9),this.boardArray=[0,1,2,3,4,5,6,7,8]},n.prototype.onClick=function(n){var l=this;if(!(this.gameComplete||this.isCompSelected[n.id]||this.isClick[n.id]||this.wait)){if(this.isClick[n.id]=!0,this.flag=u(this.isClick,this.isCompSelected).flag)return a(u(this.isClick,this.isCompSelected).position,this.blink),this.gameComplete=!0,void setTimeout(function(){1==l.flag?alert("You won"):alert("Draw"),l.clear()},1e3);this.wait=!0,setTimeout(function(){l.compPlay()},1e3),u(this.isClick,this.isCompSelected).flag&&(a(u(this.isClick,this.isCompSelected).position,this.blink),this.gameComplete=!0,setTimeout(function(){1==l.flag?alert("You won"):alert("Draw"),l.clear()},1e3))}},n.prototype.compPlay=function(){var n=this;if(this.wait=!1,!this.gameComplete){var l;l=c(this.isClick,this.isCompSelected),this.isCompSelected[l]=!0,(this.flag=u(this.isClick,this.isCompSelected).flag)&&(a(u(this.isClick,this.isCompSelected).position,this.blink),this.gameComplete=!0,setTimeout(function(){2==n.flag?alert("Computer won"):alert("Draw"),n.clear()},1e3))}},n.prototype.clear=function(){for(var n=0;n<this.isClick.length;n++)this.isClick[n]=!1,this.isCompSelected[n]=!1,this.blink[n]=!1;this.gameComplete=!1},n.ctorParameters=function(){return[]},n}(),S=[v],M=d._1({encapsulation:0,styles:S,data:{animation:[{type:7,name:"boardTrig",definitions:[{type:1,expr:"void=>*",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:1e3}],options:null}],options:{}},{type:7,name:"blink",definitions:[{type:0,name:"flash",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"normal",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:"normal=>flash",animation:[{type:6,styles:{},offset:null},{type:4,styles:null,timings:300},{type:6,styles:{backgroundColor:"snow"},offset:null},{type:4,styles:null,timings:300}],options:null}],options:{}}]}}),z=(d.Z("app-board",P,_,{},{},[]),[C]),F=d._1({encapsulation:0,styles:z,data:{}}),T=d.Z("app-root",b,h,{},{},[]),j=t("fc+i"),D=t("f9zQ"),Y=t("fL27"),I=t("EyWH"),L=d._0(y,[b],function(n){return d._13([d._14(512,d.i,d.W,[[8,[T]],[3,d.i],d.x]),d._14(5120,d.v,d._12,[[3,d.v]]),d._14(4608,O.e,O.d,[d.v]),d._14(4608,d.h,d.h,[]),d._14(5120,d.a,d._5,[]),d._14(5120,d.t,d._10,[]),d._14(5120,d.u,d._11,[]),d._14(4608,j.c,j.t,[O.b]),d._14(6144,d.H,null,[j.c]),d._14(4608,j.f,j.g,[]),d._14(5120,j.d,function(n,l,t,i){return[new j.l(n),new j.p(l),new j.o(t,i)]},[O.b,O.b,O.b,j.f]),d._14(4608,j.e,j.e,[j.d,d.z]),d._14(135680,j.n,j.n,[O.b]),d._14(4608,j.m,j.m,[j.e,j.n]),d._14(5120,D.a,Y.d,[]),d._14(5120,D.c,Y.e,[]),d._14(4608,D.b,Y.c,[D.a,D.c]),d._14(5120,d.F,Y.f,[j.m,D.b,d.z]),d._14(6144,j.q,null,[j.n]),d._14(4608,d.L,d.L,[d.z]),d._14(4608,j.h,j.h,[O.b]),d._14(4608,j.j,j.j,[O.b]),d._14(4608,I.b,Y.b,[d.F,j.b]),d._14(512,O.a,O.a,[]),d._14(1024,d.l,j.r,[]),d._14(1024,d.b,function(n,l){return[j.s(n,l)]},[[2,j.i],[2,d.y]]),d._14(512,d.c,d.c,[[2,d.b]]),d._14(131584,d._3,d._3,[d.z,d.X,d.r,d.l,d.i,d.c]),d._14(2048,d.e,null,[d._3]),d._14(512,d.d,d.d,[d.e]),d._14(512,j.a,j.a,[[3,j.a]]),d._14(512,Y.a,Y.a,[]),d._14(512,y,y,[])])});g.production&&Object(d.R)(),Object(j.k)().bootstrapModuleFactory(L).catch(function(n){return console.log(n)})},gFIY:function(n,l){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="gFIY"}},[0]);
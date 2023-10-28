"use strict";(self.webpackChunkrxjs_maps_visualization=self.webpackChunkrxjs_maps_visualization||[]).push([[640],{2968:(Z,x,n)=>{n.d(x,{N:()=>A});var p=n(6895),a=n(8256),c=n(433),O=n(3531);const e=function(m){return{disabled:m}};let A=(()=>{class m{constructor(){this.message=null,this.messageCount=0,this.sendMessage=new a.vpe}clickSendMessage(){this.sendMessage.emit(this.message)}}return m.\u0275fac=function(M){return new(M||m)},m.\u0275cmp=a.Xpm({type:m,selectors:[["app-message-form"]],inputs:{messageCount:"messageCount"},outputs:{sendMessage:"sendMessage"},standalone:!0,features:[a.jDz],decls:7,vars:7,consts:[[1,"row","col-12","col-lg-9","col-xxl-6","m-0","mb-3","p-0"],[1,"col-12","col-md-9","m-0","mb-3","mb-md-0","p-0","pe-md-2"],["placeholder","Enter message","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-md-3","m-0","p-0","ps-md-2"],["type","button",1,"btn","btn-dark","w-100",3,"ngClass","click"]],template:function(M,g){1&M&&(a.TgZ(0,"div",0)(1,"div",1)(2,"input",2),a.NdJ("ngModelChange",function(I){return g.message=I}),a.qZA()(),a.TgZ(3,"div",3)(4,"button",4),a.NdJ("click",function(){return g.clickSendMessage()}),a._uU(5),a.ALo(6,"ordinalNumber"),a.qZA()()()),2&M&&(a.xp6(2),a.Q6J("ngModel",g.message),a.xp6(2),a.Q6J("ngClass",a.VKq(5,e,!g.message)),a.xp6(1),a.hij(" Send ",a.lcZ(6,3,g.messageCount+1)," message "))},dependencies:[O.e,p.ez,p.mk,c.u5,c.Fj,c.JJ,c.On],encapsulation:2,changeDetection:0}),m})()},2633:(Z,x,n)=>{n.d(x,{$:()=>D});var p=n(6895),a=n(7340),c=n(5026),O=n(3531),e=n(8256);let A=(()=>{class r{transform(u,v){return`${u||0}${v}`}}return r.\u0275fac=function(u){return new(u||r)},r.\u0275pipe=e.Yjl({name:"unitNumber",type:r,pure:!0,standalone:!0}),r})();var m=n(8789),h=n(8195);function M(r,C){1&r&&(e.TgZ(0,"h6",5),e._uU(1," The stream is empty. "),e.qZA())}const g=function(r){return{processingTime:r}},b=function(r,C){return{value:r,params:C}};function I(r,C){if(1&r&&(e.TgZ(0,"div",6),e._UZ(1,"div",7),e.ALo(2,"unitNumber"),e.TgZ(3,"div",8),e._uU(4),e.ALo(5,"ordinalNumber"),e.ALo(6,"processedTime"),e.qZA()()),2&r){const u=C.$implicit;e.xp6(1),e.Q6J("@dataProgress",e.WLB(12,b,u.status,e.VKq(10,g,e.xi3(2,3,u.processingTime,"ms")))),e.xp6(3),e.AsE(" ",e.lcZ(5,6,u.position),": ",e.lcZ(6,8,u.processingTime)," ")}}function y(r,C){if(1&r&&(e.TgZ(0,"div",2),e.YNc(1,M,2,0,"h6",3),e.YNc(2,I,7,15,"div",4),e.qZA()),2&r){const u=C.ngIf;e.xp6(1),e.Q6J("ngIf",!u.length),e.xp6(1),e.Q6J("ngForOf",u)}}let D=(()=>{class r{constructor(u){this.message$=u.loading$.pipe((0,c.R)((v,P)=>{const E=v.findIndex(F=>F.position===P.value);let T;switch(P.operation){case"add":T=[...v,{position:P.value,status:"waiting",processingTime:P.processingTime}];break;case"addSwitchMap":T=[...v.slice(1),{position:P.value,status:"waiting",processingTime:P.processingTime}];break;case"addExhaustMap":T=v.length?v:[{position:P.value,status:"waiting",processingTime:P.processingTime}];break;case"remove":T=[...v.slice(0,E),...v.slice(E+1)];break;case"process":T=[...v.slice(0,E),{position:P.value,status:"processed",processingTime:P.processingTime},...v.slice(E+1)];break;default:T=[...v]}return T},[]))}}return r.\u0275fac=function(u){return new(u||r)(e.Y36(h.a2))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-message-stream"]],standalone:!0,features:[e.jDz],decls:4,vars:3,consts:[[1,"p-2"],["class","pipeline mb-3 ps-2",4,"ngIf"],[1,"pipeline","mb-3","ps-2"],["class","empty-text text-secondary",4,"ngIf"],["class","progress data",4,"ngFor","ngForOf"],[1,"empty-text","text-secondary"],[1,"progress","data"],[1,"progress-bar","bg-secondary"],[1,"data-text"]],template:function(u,v){1&u&&(e.TgZ(0,"h5",0),e._uU(1,"Stream pipeline"),e.qZA(),e.YNc(2,y,3,2,"div",1),e.ALo(3,"async")),2&u&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,v.message$)))},dependencies:[O.e,A,m.U,p.ez,p.sg,p.O5,p.Ov],styles:[".pipeline[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;row-gap:.5rem;column-gap:.5rem}.empty-text[_ngcontent-%COMP%]{height:2rem;margin:0rem}.data[_ngcontent-%COMP%]{position:relative;width:6rem;height:2rem}.data-text[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}"],data:{animation:[(0,a.X$)("dataProgress",[(0,a.SB)("*",(0,a.oB)({width:"0%"})),(0,a.SB)("waiting",(0,a.oB)({width:"0%"})),(0,a.SB)("processed",(0,a.oB)({width:"100%"})),(0,a.eR)("* => processed",[(0,a.jt)("{{ processingTime }} linear")])])]},changeDetection:0}),r})()},6842:(Z,x,n)=>{n.d(x,{U:()=>m});var p=n(6895),a=n(7340),c=n(3531),O=n(8789),e=n(8256);function A(h,M){if(1&h&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"ordinalNumber"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"processedTime"),e.qZA()()),2&h){const g=M.$implicit;e.Q6J("@row",void 0),e.xp6(2),e.Oqu(g.value),e.xp6(2),e.Oqu(e.lcZ(5,4,g.sentOrder)),e.xp6(3),e.Oqu(e.lcZ(8,6,g.processingTime))}}let m=(()=>{class h{constructor(){this.messages=null}}return h.\u0275fac=function(g){return new(g||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-message-table"]],inputs:{messages:"messages"},standalone:!0,features:[e.jDz],decls:14,vars:1,consts:[[1,"p-2","m-0"],[1,"overflow-hidden"],[1,"table","table-hover","fixed"],[1,"col"],[4,"ngFor","ngForOf"]],template:function(g,b){1&g&&(e.TgZ(0,"h5",0),e._uU(1,"Processed messages"),e.qZA(),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th",3),e._uU(7,"Message"),e.qZA(),e.TgZ(8,"th",3),e._uU(9,"Position"),e.qZA(),e.TgZ(10,"th",3),e._uU(11,"Elapsed time"),e.qZA()()(),e.TgZ(12,"tbody"),e.YNc(13,A,9,8,"tr",4),e.qZA()()()),2&g&&(e.xp6(13),e.Q6J("ngForOf",b.messages))},dependencies:[c.e,O.U,p.ez,p.sg],styles:[".fixed[_ngcontent-%COMP%]{table-layout:fixed}"],data:{animation:[(0,a.X$)("row",[(0,a.eR)("void => *",[(0,a.jt)("1s ease-out",(0,a.F4)([(0,a.oB)({transform:"translateX(100%)"}),(0,a.oB)({transform:"translateX(0%)"})]))])])]},changeDetection:0}),h})()},3531:(Z,x,n)=>{n.d(x,{e:()=>a});var p=n(8256);let a=(()=>{class c{transform(e){if(!e||e<1)return"No";const A=e%10;let m="th";return 1===A&&(m="st"),2===A&&(m="nd"),3===A&&(m="rd"),`${e}${m}`}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275pipe=p.Yjl({name:"ordinalNumber",type:c,pure:!0,standalone:!0}),c})()},8789:(Z,x,n)=>{n.d(x,{U:()=>a});var p=n(8256);let a=(()=>{class c{transform(e){return`${(e/1e3).toFixed(3)}s`}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275pipe=p.Yjl({name:"processedTime",type:c,pure:!0,standalone:!0}),c})()},8195:(Z,x,n)=>{n.d(x,{z$:()=>_,VP:()=>G,a2:()=>k});var p=n(8256),a=n(3900),c=n(5577),O=n(4351),e=n(4004),A=n(8421),m=n(4482),h=n(5403),g=n(1135),b=n(9300),I=n(1365),y=n(8505),D=n(9646),r=n(727);class C extends r.w0{constructor(s,t){super()}schedule(s,t=0){return this}}const u={setInterval(o,s,...t){const{delegate:i}=u;return i?.setInterval?i.setInterval(o,s,...t):setInterval(o,s,...t)},clearInterval(o){const{delegate:s}=u;return(s?.clearInterval||clearInterval)(o)},delegate:void 0};var v=n(8737);const E={now:()=>(E.delegate||Date).now(),delegate:void 0};class T{constructor(s,t=T.now){this.schedulerActionCtor=s,this.now=t}schedule(s,t=0,i){return new this.schedulerActionCtor(this,s).schedule(i,t)}}T.now=E.now;const S=new class F extends T{constructor(s,t=T.now){super(s,t),this.actions=[],this._active=!1}flush(s){const{actions:t}=this;if(this._active)return void t.push(s);let i;this._active=!0;do{if(i=s.execute(s.state,s.delay))break}while(s=t.shift());if(this._active=!1,i){for(;s=t.shift();)s.unsubscribe();throw i}}}(class P extends C{constructor(s,t){super(s,t),this.scheduler=s,this.work=t,this.pending=!1}schedule(s,t=0){var i;if(this.closed)return this;this.state=s;const d=this.id,l=this.scheduler;return null!=d&&(this.id=this.recycleAsyncId(l,d,t)),this.pending=!0,this.delay=t,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(l,this.id,t),this}requestAsyncId(s,t,i=0){return u.setInterval(s.flush.bind(s,this),i)}recycleAsyncId(s,t,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return t;null!=t&&u.clearInterval(t)}execute(s,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(s,t);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(s,t){let d,i=!1;try{this.work(s)}catch(l){i=!0,d=l||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),d}unsubscribe(){if(!this.closed){const{id:s,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,v.P)(i,this),null!=s&&(this.id=this.recycleAsyncId(t,s,null)),this.delay=null,super.unsubscribe()}}}),B=S;var L=n(7272),w=n(5698),R=n(5032),W=n(9718);function N(o,s){return s?t=>(0,L.z)(s.pipe((0,w.q)(1),function $(){return(0,m.e)((o,s)=>{o.subscribe((0,h.x)(s,R.Z))})}()),t.pipe(N(o))):(0,c.z)((t,i)=>o(t,i).pipe((0,w.q)(1),(0,W.h)(t)))}var K=n(9751),X=n(3532);var Y=n(5026);class Q{constructor(s,t,i){this.value=s,this.sentOrder=t,this.processingTime=i}}var V=n(2545);const H={SWITCH_MAP:a.w,MERGE_MAP:c.z,CONCAT_MAP:O.b,EXHAUST_MAP:function M(o,s){return s?t=>t.pipe(M((i,d)=>(0,A.Xf)(o(i,d)).pipe((0,e.U)((l,f)=>s(i,l,d,f))))):(0,m.e)((t,i)=>{let d=0,l=null,f=!1;t.subscribe((0,h.x)(i,U=>{l||(l=(0,h.x)(i,void 0,()=>{l=null,f&&i.complete()}),(0,A.Xf)(o(U,d++)).subscribe(l))},()=>{f=!0,!l&&i.complete()}))})}},_=new p.OlP("observable-map.config");function G(o){return{map:o}}let k=(()=>{class o{constructor(t,i){this.messages=new g.X(null),this._emittedCount=0,this._processedCount=0;const d=new g.X({value:0,operation:"noOp",processingTime:0});this.loading$=d.asObservable(),this.message$=this.messages.asObservable().pipe((0,b.h)(l=>!!l),(0,I.M)(i.processingTime$),(0,y.b)(()=>i.generateNewRandomProcessingTime()),(0,y.b)(()=>this._emittedCount++),(0,y.b)(([l,f])=>{d.next("SWITCH_MAP"===t.map?{value:this._emittedCount,operation:"addSwitchMap",processingTime:f}:"EXHAUST_MAP"===t.map?{value:this._emittedCount,operation:"addExhaustMap",processingTime:f}:{value:this._emittedCount,operation:"add",processingTime:f})}),H[t.map](([l,f])=>(0,D.of)(new Q(l,++this._processedCount,f)).pipe((0,y.b)(U=>d.next({value:U.sentOrder,operation:"process",processingTime:f})),function J(o,s=S){const t=function z(o=0,s,t=B){let i=-1;return null!=s&&((0,X.K)(s)?t=s:i=s),new K.y(d=>{let l=function j(o){return o instanceof Date&&!isNaN(o)}(o)?+o-t.now():o;l<0&&(l=0);let f=0;return t.schedule(function(){d.closed||(d.next(f++),0<=i?this.schedule(void 0,i):d.complete())},l)})}(o,s);return N(()=>t)}(f),(0,y.b)(U=>d.next({value:U.sentOrder,operation:"remove",processingTime:f})))),(0,y.b)(()=>{"EXHAUST_MAP"===t.map&&(this._processedCount=this._emittedCount)}),(0,Y.R)((l,f)=>[f,...l],[]))}get emittedCount(){return this._emittedCount}get processedCount(){return this._processedCount}sendMessage(t){this.messages.next(t)}}return o.\u0275fac=function(t){return new(t||o)(p.LFG(_,2),p.LFG(V.e))},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac}),o})()}}]);
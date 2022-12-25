import{u as b,o as c,c as u,a as o,t as r,n as D,p as T,e as $,f as p,g as I,h as v,F as y,i as f,j as S,k as w,v as C,d as L,r as F,b as x,w as B}from"./index-6f2e6fc4.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const E="/assets/logo-558e4f32.svg",R="/assets/trash-186466c4.svg";const q=["for"],N=["checked","id"],j={class:"todo-content"},A={class:"todo-deadline"},H={__name:"TodoItem",props:["item","id"],setup(e){const t=b(),d=s=>{t.markTodo(s)},n=s=>{t.deleteTodo(s)};return(s,l)=>(c(),u("div",{class:D(["todo-item",{mark:e.item.status}])},[o("label",{for:e.id},[o("input",{type:"checkbox",checked:e.item.status,id:e.id,onClick:l[0]||(l[0]=m=>d(e.item.id))},null,8,N)],8,q),o("div",null,[o("p",j,r(e.item.content),1),o("p",A,r(e.item.deadline),1)]),o("img",{src:R,alt:"trash icon",onClick:l[1]||(l[1]=m=>n(e.item.id))})],2))}},M=h(H,[["__scopeId","data-v-c8d99b93"]]),P="/assets/clipboard-41a0281e.svg";const Y={},k=e=>(T("data-v-1da36192"),e=e(),$(),e),G={class:"todo-empty"},J=k(()=>o("img",{src:P,alt:"clipboard-icon"},null,-1)),K=k(()=>o("h2",null,"You have no tasks registered yet",-1)),O=k(()=>o("p",null,"Create tasks and organize your To-Dos",-1)),Q=[J,K,O];function W(e,t){return c(),u("div",G,Q)}const X=h(Y,[["render",W],["__scopeId","data-v-1da36192"]]);const V=e=>(T("data-v-49fb6b25"),e=e(),$(),e),Z={class:"todo"},ee={class:"todo-header"},te={class:"todo-stat"},oe=V(()=>o("p",null,"Created",-1)),se={class:"todo-stat"},ne=V(()=>o("p",null,"Completed",-1)),de={key:0,class:"todo-items"},ae={__name:"TodoList",setup(e){const t=b();let d=p(0),n=p(0),s=p([]);return d.value=t.todoSize,n.value=t.todoCompletedSize,s.value=t.todos,I(()=>t.todoSize,l=>{d.value=l},{deep:!0}),I(()=>t.todoCompletedSize,l=>{n.value=l},{deep:!0}),(l,m)=>(c(),u("section",Z,[o("div",ee,[o("div",te,[oe,o("p",null,[o("span",null,r(v(d)),1)])]),o("div",se,[ne,o("p",null,[o("span",null,r(v(n))+" of "+r(v(d)),1)])])]),v(d)>0?(c(),u("div",de,[(c(!0),u(y,null,f(v(s),(_,i)=>(c(),S(M,{key:i,item:_,id:i},null,8,["item","id"]))),128))])):(c(),S(X,{key:1}))]))}},le=h(ae,[["__scopeId","data-v-49fb6b25"]]),ce="/assets/plus-icon-1ceda644.svg";let g;const ie=new Uint8Array(16);function ue(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(ie)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function _e(e,t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}const re=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),U={randomUUID:re};function pe(e,t,d){if(U.randomUUID&&!t&&!e)return U.randomUUID();e=e||{};const n=e.random||(e.rng||ue)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){d=d||0;for(let s=0;s<16;++s)t[d+s]=n[s];return t}return _e(n)}const me=e=>(T("data-v-75de72b6"),e=e(),$(),e),ve={class:"todo-input"},he=me(()=>o("img",{src:ce,alt:"plus icon"},null,-1)),ge={__name:"TodoForm",setup(e){const t=b(),d=p(""),n=p(""),s=p([]),l=()=>{if(s.value.length=0,n.value.length===0&&s.value.push("Content can not be empty"),d.value.length===0&&s.value.push("Please specify deadline date"),new Date(d.value).getTime()<new Date().getTime()){s.value.push("Deadline can not be set to the past");return}if(s.value.length>0){const m=document.querySelector(".todo-error");setTimeout(()=>{m.classList.add("hide"),s.value.length=0},3e3)}n.value.length>0&&s.value.length===0&&(t.addTodo({deadline:d.value,content:n.value,id:pe(),status:!1}),d.value="",n.value="")};return(m,_)=>(c(),u(y,null,[o("div",ve,[w(o("input",{type:"text",placeholder:"Add a new task",required:"","onUpdate:modelValue":_[0]||(_[0]=i=>n.value=i)},null,512),[[C,n.value,void 0,{trim:!0}]]),w(o("input",{type:"date",placeholder:"Deadline",required:"","onUpdate:modelValue":_[1]||(_[1]=i=>d.value=i)},null,512),[[C,d.value,void 0,{trim:!0}]]),o("button",{onClick:_[2]||(_[2]=i=>l())},[L("Create "),he])]),o("ul",{class:D(["todo-error",{visible:s.value.length}])},[(c(!0),u(y,null,f(s.value,(i,z)=>(c(),u("li",{key:z},r(i),1))),128))],2)],64))}},ye=h(ge,[["__scopeId","data-v-75de72b6"]]);const Te=e=>(T("data-v-1dc11059"),e=e(),$(),e),$e={class:"header"},xe=Te(()=>o("img",{src:E,alt:"logo"},null,-1)),be={class:"main"},ke={__name:"Todo",setup(e){return(t,d)=>{const n=F("router-link");return c(),u(y,null,[o("header",$e,[x(n,{to:"/"},{default:B(()=>[xe]),_:1}),x(ye)]),o("main",be,[x(le)])],64)}}},we=h(ke,[["__scopeId","data-v-1dc11059"]]);export{we as default};

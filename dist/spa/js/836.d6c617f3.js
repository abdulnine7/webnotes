"use strict";(self["webpackChunkwebnotes"]=self["webpackChunkwebnotes"]||[]).push([[836],{1726:(e,t,n)=>{n.d(t,{D:()=>d});var o=n(499),l=n(9835);const s=(e,t)=>{const n=(0,o.iH)(t),s=()=>{const t=window.localStorage.getItem(e);null!=t&&(n.value=JSON.parse(t))};s(),(0,l.bv)((()=>{window.addEventListener("storage",s)})),(0,l.Ah)((()=>{window.removeEventListener("storage",s)}));const d=()=>{window.localStorage.setItem(e,JSON.stringify(n.value))};return(0,l.YP)([n],d,{deep:!0}),n},d=()=>s("notes",[])},3394:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(9835);const l={class:"q-mr-auto q-ml-auto",style:{"max-width":"700px"}};function s(e,t){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.WI)(e.$slots,"default")])}var d=n(1639);const i={},a=(0,d.Z)(i,[["render",s]]),r=a},1836:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var o=n(9835),l=n(6970);const s={key:0},d={class:"q-mt-md"},i=(0,o.Uk)(" Done "),a={key:1},r={class:"row items-center justify-between"},m={class:"q-mx-sm q-mb-md q-mt-md text-red-1"},u={class:""},c={class:"text-h6 text-red-1 q-mx-sm q-my-none"},p=["innerHTML"];function v(e,t,n,v,w,g){const q=(0,o.up)("q-input"),b=(0,o.up)("q-editor"),f=(0,o.up)("q-card"),h=(0,o.up)("q-btn"),_=(0,o.up)("NotesContainer"),k=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(k,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[v.editing?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("form",{onSubmit:t[3]||(t[3]=e=>v.editing=!1)},[(0,o.Wm)(q,{modelValue:v.note.title,"onUpdate:modelValue":t[0]||(t[0]=e=>v.note.title=e),label:"Title",class:"bg-white rounded-borders",filled:""},null,8,["modelValue"]),(0,o.Wm)(q,{modelValue:v.note.description,"onUpdate:modelValue":t[1]||(t[1]=e=>v.note.description=e),label:"Description",filled:"",class:"q-mt-sm bg-white rounded-borders",dense:""},null,8,["modelValue"]),(0,o.Wm)(f,{flat:"",bordered:"",class:"q-mt-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{modelValue:v.note.content,"onUpdate:modelValue":t[2]||(t[2]=e=>v.note.content=e),"min-height":"20rem"},null,8,["modelValue"])])),_:1}),(0,o._)("div",d,[(0,o.Wm)(h,{class:"q-ml-sm",color:"positive",type:"submit"},{default:(0,o.w5)((()=>[i])),_:1})])],32)])):((0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",r,[(0,o._)("h3",m,(0,l.zw)(v.note.title),1),(0,o._)("div",u,[(0,o.Wm)(h,{class:"q-ma-sm",round:"",color:"info",icon:"edit",title:"Edit",onClick:t[4]||(t[4]=e=>v.editing=!0)}),(0,o.Wm)(h,{class:"q-ma-sm",round:"",color:"red",icon:"delete",title:"Delete",onClick:v.remove},null,8,["onClick"])])]),(0,o._)("div",c,(0,l.zw)(v.note.description),1),(0,o._)("div",{class:"q-mx-sm q-mt-md text-red-1",innerHTML:v.note.content},null,8,p)]))])),_:1})])),_:1})}var w=n(499),g=n(8910),q=n(1726),b=n(3394);const f={components:{NotesContainer:b.Z},setup(){const e=(0,q.D)(),t=(0,g.yj)(),n=(0,o.Fl)((()=>parseInt(t.params.id))),l=(0,o.Fl)((()=>e.value[n.value])),s=(0,g.tv)(),d=()=>{e.value.splice(n.value,1),s.push("/")},i=(0,w.iH)(!1);return{note:l,editing:i,remove:d}}};var h=n(1639),_=n(9885),k=n(3777),x=n(4458),V=n(9099),W=n(2150),Z=n(9984),y=n.n(Z);const C=(0,h.Z)(f,[["render",v]]),D=C;y()(f,"components",{QPage:_.Z,QInput:k.Z,QCard:x.Z,QEditor:V.Z,QBtn:W.Z})}}]);
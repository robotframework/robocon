import{_ as k,o as e,c as s,a as t,F as r,r as m,b as u,t as a,n as _,d as T}from"./index-BV5t7kmq.js";const C={name:"PreviousTalks",data:()=>({activeTalk:null,showAll:{2021:!1,2020:!1,2019:!1,2018:!1}}),mounted(){this.activeTalk=this.$tm("archive.previousTalks.talks")[0].list[0].url}},A={class:"col-sm-12 row card p-xsmall"},x={class:"col-sm-12 col-md-3 pr-3xsmall"},B={class:"list"},M={class:"yearTitle pb-small border-bottom-theme mb-small type-center"},N=["onClick"],V=["href"],F=["href"],P={class:"yearTitle bg-background pb-small border-bottom-theme mb-small type-center"},S=["onClick"],z=["onClick"],D={class:"theme ml-2xsmall mt-xsmall mb-medium"},E={key:0,class:"col-sm-9 pl-3xsmall"},I=["src"];function L(l,b,f,$,y,w){return e(),s("div",A,[t("div",x,[t("div",B,[(e(!0),s(r,null,m(l.$tm("archive.previousTalks.talks"),({year:o,list:d,playlistLink:g})=>(e(),s("div",{key:o,class:"mb-medium"},[l.$store.state.isMobile?(e(),s(r,{key:0},[t("h3",M,a(o),1),(e(!0),s(r,null,m(l.showAll[o]?d:d.slice(0,3),({authors:i,title:p,url:n})=>(e(),s("div",{key:n,class:"pt-small pb-small",onClick:c=>l.activeTalk=n},[t("div",null,[(e(!0),s(r,null,m(i,(c,h)=>(e(),s("span",{key:c,class:"type-small"},a(c)+a(h!==i.length-1?", ":""),1))),128))]),t("a",{href:`https://www.youtube.com/watch?v=${n.split("/embed/")[1]}`,class:"mt-3xsmall"},a(p),9,V)],8,N))),128))],64)):(e(),s(r,{key:1},[t("a",{href:g,target:"_blank"},[t("h3",P,a(o),1)],8,F),(e(!0),s(r,null,m(d,({authors:i,title:p,url:n})=>(e(),s("button",{key:n,class:_(["p-small pl-2xsmall pr-2xsmall rounded",l.activeTalk===n?"bg-theme color-white":""]),onClick:c=>l.activeTalk=n},[(e(!0),s(r,null,m(i,(c,h)=>(e(),s("span",{key:c,class:"type-small"},a(c)+a(h!==i.length-1?", ":""),1))),128)),t("div",{class:_(["mt-3xsmall",l.activeTalk===n?"color-white":"color-theme"])},a(p),3)],10,S))),128))],64)),l.$store.state.isMobile&&!l.showAll[o]?(e(),s("div",{key:2,class:"flex center",onClick:i=>l.showAll[o]=!0},[t("button",D," Show all ("+a(d.length)+") ",1)],8,z)):u("",!0)]))),128))])]),l.$store.state.isMobile?u("",!0):(e(),s("div",E,[t("iframe",{class:"rounded",width:"100%",height:"100%",src:l.activeTalk,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,I)]))])}const v=k(C,[["render",L],["__scopeId","data-v-6eaa87f0"]]),Y={name:"Archive",components:{PreviousTalks:v}},j={class:"container"};function q(l,b,f,$,y,w){const o=v;return e(),s("div",j,[T(o,{class:"mt-xlarge mb-xlarge"})])}const H=k(Y,[["render",q]]);export{H as default};
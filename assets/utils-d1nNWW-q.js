import{r as a,j as t,c as q,g as ge,b as ye,_ as E}from"./index-ZVYxoX19.js";import{e as Q,a as ve,p as je,g as we}from"./viewport-1IkFLRB6.js";import{o as f,p as I,M as F,N as Ce,O as be,a as x,P as Me,j as b,R as _e,w as L,T as _,k as Pe,v as D,U as ke,V as Ne}from"./request-MvzBsxCw.js";import{u as Le,c as W,a as Z,d as Re}from"./Gallery-vzSRe3eA.js";import{$ as Se,c as Ee,D as Ie,d as Be,e as Te}from"./provider-exUE4N1l.js";import{A as G,m as Ye,s as K,a as $e}from"./spring-vvIC2hCq.js";import{m as B,c as k,a as P}from"./motion-minimal-jJCu8YKk.js";import{L as De,g as X,c as J,M as Ae,d as T,e as ze}from"./alert-xRT6btXA.js";import{S as He,M as Ve}from"./StyledButton-BX-nC1hJ.js";import{Q as Fe,a as Oe,u as Ue}from"./useQuery-P1_Gzg00.js";import{E as qe}from"./react-error-boundary.esm-fuoQe1J8.js";import{u as Qe}from"./image-6-GkjZDO.js";import{u as ee}from"./use-is-dark-tNK75MAG.js";import{T as We,G as Ze}from"./SocialSourceLink-EW2h1RVe.js";import{H as Ge,A as $}from"./CodeHighlighter-ruaKOT_-.js";import{F as te}from"./FloatPopover-0WBOZP5i.js";import{T as Ke}from"./FormInput-WOYGzdyc.js";import{p as Xe}from"./dom-NuJWIaAq.js";import"./LinkCard-XjNcERaX.js";import{c as Je}from"./customParseFormat-JucLWOvd.js";import{s as et}from"./lodash-lrAbnKsZ.js";const tt=e=>f(a.useMemo(()=>I(Q,n=>n[e]),[e])),Tn=e=>f(a.useMemo(()=>I(Q,n=>Object.values(n).filter(r=>r.roomName===e).length),[e]));var nt=class extends Fe{constructor(e,n){super(e,n)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,n){super.setOptions({...e,behavior:F()},n)}getOptimisticResult(e){return e.behavior=F(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,n){const{state:r}=e,o=super.createResult(e,n),{isFetching:s,isRefetching:c}=o,i=s&&r.fetchMeta?.fetchMore?.direction==="forward",l=s&&r.fetchMeta?.fetchMore?.direction==="backward";return{...o,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Ce(n,r.data),hasPreviousPage:be(n,r.data),isFetchingNextPage:i,isFetchingPreviousPage:l,isRefetching:c&&!i&&!l}}};function rt(e,n){return Oe(e,nt,n)}const st=e=>{const n=a.useRef(!1);n.current||(n.current=!0,e?.())};function Yn(e){return t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:t.jsx("path",{fill:"currentColor",d:"M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"})})}const ne=x(""),re=x("");x("");x(!0);x(e=>{const n=e(ne),r=e(re);return n!==""&&r!==""});x(e=>{const n=e(ne),r=e(re);return n!==""&&r!==""});const at=a.createContext(!1),$n=e=>{const[n,r]=a.useState(!1),o=a.useRef(null);return a.useEffect(()=>{if(!o.current)return;const s=o.current;return s.oncopy=c=>{Me()||(c.preventDefault(),r(!0))},()=>{s.oncopy=null}},[]),a.useEffect(()=>{if(n){const s=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(s)}}},[n]),t.jsxs(at.Provider,{value:!0,children:[t.jsx("div",{ref:o,children:e.children}),t.jsx(Se,{open:!0,children:t.jsx(G,{children:n&&t.jsxs(Ee,{children:[t.jsx(Ie,{}),t.jsx(Be,{asChild:!0,children:t.jsxs(B.div,{className:"fixed inset-0 z-[11] flex flex-col gap-4 center",exit:{opacity:0},onClick:()=>{r(!1)},children:[t.jsx("div",{className:"pointer-events-none mt-0 text-3xl font-medium text-red-400 dark:text-orange-500",children:"注意："}),t.jsx("div",{className:"pointer-events-none my-3 text-lg text-neutral-900 text-opacity-80 dark:text-zinc-100",children:t.jsx("p",{children:"本文章为站长原创，保留版权所有，禁止复制。"})})]})})]})})})]})},ot=()=>t.jsxs("div",{className:"flex w-full flex-col py-6 center",children:["Something went wrong. Please contract to"," ",t.jsx("a",{href:"mailto:i@innei.ren",className:"shiro-link--underline",children:"i@innei.ren"}),".",t.jsx(He,{onClick:()=>{window.location.reload()},children:"Reload Page"})]}),it=({children:e})=>t.jsx(qe,{FallbackComponent:ot,onError:n=>{console.error(n)},children:e}),lt=({text:e})=>t.jsx("div",{className:"flex h-[100px] items-center justify-center text-lg font-medium",children:e||"您当前所在地区暂不支持此功能"}),ct=x(!1),ut=()=>b.get(ct),se=e=>{const{from:n,to:r,initial:o,preset:s}=e,c=a.forwardRef((l,u)=>{const{timeout:m={},duration:d=.5,animation:v={},as:p="div",delay:g=0,lcpOptimization:C=!1,...h}=l,{enter:y=g,exit:R=g}=m,M=B[p];return t.jsx(M,{initial:a.useMemo(()=>C?ut()?o||n:!0:o||n,[]),ref:u,animate:{...r,transition:{duration:d,...s||Ye,...v.enter,delay:y/1e3}},exit:{...n,transition:{duration:d,...v.exit,delay:R/1e3}},transition:{duration:d},...h,children:l.children})});c.displayName="forwardRef(TransitionView)";const i=a.memo(c);return i.displayName="MemoedTransitionView",i},mt=se({from:{opacity:1e-5,scale:.96,y:10},to:{y:0,scale:1,opacity:1},preset:K}),dt=({onLoading:e,children:n,className:r})=>{const{ref:o}=Qe({rootMargin:"1px",onChange(s){s&&e()}});return t.jsx("div",{className:r,ref:o,children:n??t.jsx(De,{})})},ae=a.memo(e=>{const n=a.useRef(null),[r,o]=a.useState(!1);return a.useEffect(()=>{if(!n.current)return;const s=n.current,c=s.parentElement;let i;return c&&(i=new ResizeObserver(()=>{const{width:l}=c.getBoundingClientRect();s.style.fontSize=`${l/e.text.length*e.scale}px`,o(!0)}),i.observe(c)),()=>{i&&i.disconnect()}},[e.scale]),t.jsx("span",{ref:n,className:r?"":"invisible",children:e.text})});ae.displayName="FlexText";const xt=e=>{const{shadow:n=!0,lazy:r=!0,wrapperProps:o={},size:s,imageUrl:c,text:i,url:l,randomColor:u,radius:m,...d}=e,v=a.useRef(null),[p,g]=a.useState(!r),[C,h]=a.useState(!1),{className:y,...R}=o,M=a.useMemo(()=>(i||c)&&u&&X(J(i||c)),[i,c,u]),V=ee()?M?.dark.background:M?.light.background;return t.jsx("div",{className:k("box-border backface-hidden",n&&"shadow-sm",y),ref:v,style:{...s?{height:`${s||80}px`,width:`${s||80}px`}:void 0,...V?{backgroundColor:V}:void 0,...m?{borderRadius:m==="full"?"100%":`${m}px`}:void 0},...R,children:a.createElement(l?"a":"div",{className:"relative inline-block h-full w-full",...l?{href:l,target:"_blank",rel:"noreferrer"}:{}},c&&!C?t.jsx("div",{className:k("h-full w-full bg-cover bg-center bg-no-repeat transition-opacity duration-300",y),children:t.jsx("img",{src:c,style:{opacity:p?1:0,...m?{borderRadius:m==="full"?"100%":`${m}px`}:void 0},height:s,width:s,onLoad:()=>g(!0),onError:()=>h(!0),loading:r?"lazy":"eager",...d,className:k("aspect-square duration-200",d.className)})}):i?t.jsx("div",{className:"relative flex h-full w-full flex-grow select-none items-center justify-center",children:t.jsx(ae,{scale:.5,text:i})}):null)})};var ht={exports:{}};(function(e,n){(function(r,o){e.exports=o(_e)})(q,function(r){function o(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var s=o(r),c={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(i,l){return l==="W"?i+"周":i+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(i,l){var u=100*i+l;return u<600?"凌晨":u<900?"早上":u<1100?"上午":u<1300?"中午":u<1800?"下午":"晚上"}};return s.default.locale(c,null,!0),c})})(ht);var oe={exports:{}};(function(e,n){(function(r,o){e.exports=o()})(q,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(o,s,c){var i=s.prototype,l=i.format;c.en.formats=r,i.format=function(u){u===void 0&&(u="YYYY-MM-DDTHH:mm:ssZ");var m=this.$locale().formats,d=function(v,p){return v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(g,C,h){var y=h&&h.toUpperCase();return C||p[h]||r[h]||p[y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(R,M,H){return M||H.slice(1)})})}(u,m===void 0?{}:m);return l.call(this,d)}}})})(oe);var ft=oe.exports;const pt=ge(ft);L.extend(Je);L.extend(pt);L.locale("zh-cn");const gt=(e,n)=>L(e).format(n),Y=(e,n=new Date)=>{if(!e)return"";e=new Date(e);const r=60*1e3,o=r*60,s=o*24,c=s*30,i=s*365,l=+n-+e;if(l<r){const u=Math.ceil(l/1e3);return u<=0?"刚刚":`${u} 秒前`}else return l<o?`${Math.round(l/r)} 分钟前`:l<s?`${Math.round(l/o)} 小时前`:l<c?`${Math.round(l/s)} 天前`:l<i?`${Math.round(l/c)} 个月前`:`${Math.round(l/i)} 年前`};function yt(e){const n=Math.floor(e/86400);e-=n*3600*24;const r=Math.floor(e/3600);e-=r*3600;const o=Math.floor(e/60);let s="";return n>0&&(s+=`${n} 天 `),r>0&&(s+=`${r} 小时 `),o>0&&(s+=`${o} 分钟`),s.trim()}const vt=e=>{const[n,r]=a.useState(Y(e.date)),{displayAbsoluteTimeAfterDay:o=29}=e;return a.useEffect(()=>{r(Y(e.date));let s=setInterval(()=>{r(Y(e.date))},1e3);return Math.abs(L(e.date).diff(new Date,"d"))>o&&(s=clearInterval(s),r(gt(e.date,"YY 年 M 月 D 日"))),()=>{s=clearInterval(s)}},[e.date,o]),t.jsx(t.Fragment,{children:n})};function jt(e){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:t.jsx("path",{className:"fill-black dark:fill-white",d:"M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25z"})})}function wt(e){return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:[t.jsx("path",{fill:"#1877F2",d:"M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"}),t.jsx("path",{fill:"#FFF",d:"m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"})]})}function Ct(e){return t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",...e,children:[t.jsx("path",{d:"M14.3392 7.95965C14.3392 7.49715 14.3017 7.03215 14.2217 6.57715H7.8042V9.19715H11.4792C11.3267 10.0421 10.8367 10.7896 10.1192 11.2646V12.9646H12.3117C13.5992 11.7796 14.3392 10.0296 14.3392 7.95965Z",fill:"#4285F4"}),t.jsx("path",{d:"M7.80412 14.6074C9.63912 14.6074 11.1866 14.0049 12.3141 12.9649L10.1216 11.2649C9.51162 11.6799 8.72412 11.9149 7.80662 11.9149C6.03162 11.9149 4.52662 10.7174 3.98662 9.10742H1.72412V10.8599C2.87912 13.1574 5.23162 14.6074 7.80412 14.6074Z",fill:"#34A853"}),t.jsx("path",{d:"M3.98375 9.1075C3.69875 8.2625 3.69875 7.3475 3.98375 6.5025V4.75H1.72375C0.75875 6.6725 0.75875 8.9375 1.72375 10.86L3.98375 9.1075Z",fill:"#FBBC04"}),t.jsx("path",{d:"M7.80412 3.69296C8.77412 3.67796 9.71162 4.04296 10.4141 4.71296L12.3566 2.77046C11.1266 1.61546 9.49412 0.980458 7.80412 1.00046C5.23162 1.00046 2.87912 2.45046 1.72412 4.75046L3.98412 6.50296C4.52162 4.89046 6.02912 3.69296 7.80412 3.69296Z",fill:"#EA4335"})]})}function bt(e){return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:[t.jsx("path",{fill:"#F1511B",d:"M121.666 121.666H0V0h121.666z"}),t.jsx("path",{fill:"#80CC28",d:"M256 121.666H134.335V0H256z"}),t.jsx("path",{fill:"#00ADEF",d:"M121.663 256.002H0V134.336h121.663z"}),t.jsx("path",{fill:"#FBBC09",d:"M256 256.002H134.335V134.336H256z"})]})}const Mt=({strategy:e,className:n})=>{const r=ie(e);return!e||!r?null:t.jsx(r,{className:n})},ie=e=>{switch(e){case"from_oauth_github":return Ze;case"from_oauth_google":return Ct;case"from_oauth_apple":return jt;case"from_oauth_microsoft":return bt;case"from_oauth_facebook":return wt;case"from_oauth_twitter":return We;default:return null}},_t="_comment__message_1lfmp_1",Pt={comment__message:_t},kt=["footnote","footnoteReference","image","htmlComment","htmlSelfClosing","htmlBlock"],Nt=({children:e})=>t.jsx(Ae,{disabledTypes:kt,disableParsingRawHTML:!0,forceBlock:!0,value:e,extendsRules:{codeBlock:{react(n,r,o){return t.jsx(Ge,{content:n.content,lang:n.lang},o?.key)}}}}),Lt=se({from:{opacity:.001},to:{opacity:1}}),Rt=e=>{const{currentState:n,regularIcon:r,solidIcon:o}=e,s={solid:o,regular:r},[c,i]=a.useState(s[n]),l=Te();return a.useEffect(()=>{l.start({opacity:.001}).then(()=>{i(s[n]),requestAnimationFrame(()=>{l.start({opacity:1})})})},[n]),t.jsx(Lt,{initial:!0,animate:l,transition:{duration:.2},children:c},n)},St=({className:e,pin:n,onPinChange:r})=>{const o=ve(),s=async c=>{c.preventDefault(),c.stopPropagation(),r(!n)};return t.jsx(Ve,{"aria-label":"Pin this post",className:k("absolute bottom-0 right-0 top-[4px] z-[10] -m-5 box-content hidden h-5 w-5 items-center p-5",o&&"inline-flex cursor-pointer opacity-50 transition-opacity hover:opacity-100",!o&&n&&"pointer-events-none",n&&"!inline-flex text-uk-red-light opacity-100",e),onClick:s,children:t.jsx(Rt,{currentState:n?"solid":"regular",regularIcon:t.jsx(It,{}),solidIcon:t.jsx(Et,{})})})};function Et(e){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:t.jsx("path",{fill:"currentColor",d:"m232 107.3l-58.5 58.5c4.5 12.7 6.4 33.9-13.2 60a16.3 16.3 0 0 1-11.7 6.4h-1.1a16.1 16.1 0 0 1-11.3-4.7L88 179.3l-34.3 34.4a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L76.7 168l-48.4-48.4a15.9 15.9 0 0 1 1.3-23.8C55 75.3 79.3 79.4 90 82.7L148.7 24a16.1 16.1 0 0 1 22.6 0L232 84.7a15.9 15.9 0 0 1 0 22.6Z"})})}function It(e){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:t.jsx("path",{fill:"currentColor",d:"M236.7 96a15.9 15.9 0 0 0-4.7-11.3L171.3 24a16.1 16.1 0 0 0-22.6 0L90 82.7c-10.7-3.3-35-7.4-60.4 13.1a15.9 15.9 0 0 0-1.3 23.8L76.7 168l-34.4 34.3a8.1 8.1 0 0 0 0 11.4a8.2 8.2 0 0 0 11.4 0L88 179.3l48.2 48.2a16.1 16.1 0 0 0 11.3 4.7h1.1a16.3 16.3 0 0 0 11.7-6.4c19.6-26.1 17.7-47.3 13.2-60l58.5-58.5a15.9 15.9 0 0 0 4.7-11.3Zm-78.4 62.3a8.2 8.2 0 0 0-1.5 9.3c9.5 18.9-1.8 38.6-9.3 48.6L39.6 108.3C51.7 98.5 63.3 96 72.1 96s15.9 2.9 16.3 3.2a8.2 8.2 0 0 0 9.3-1.5L160 35.3L220.7 96Z"})})}const Bt=["在这里说点什么呢。","小可爱，你想说点什么呢？","或许此地可以留下足迹","你的留言是我前进的动力！","说点什么吧，我会好好听的。","来一发评论，送你一个小星星！","你的评论会让我更加努力哦！","留下你的足迹，让我知道你来过。","我在这里等你的留言呢！","你的评论是我最大的动力！","来一发评论，让我知道你的想法吧！"],Tt=()=>et(Bt),Yt=500,N="comment-",$t=()=>({refId:x(""),text:x(""),author:_(`${N}author`,""),mail:_(`${N}mail`,""),url:_(`${N}url`,""),avatar:x(""),source:x(""),isWhisper:_(`${N}is-whisper`,!1),syncToRecently:_(`${N}sync-to-recently`,!0)}),w=a.createContext(null),le=a.createContext(null),Dt=e=>{const{refId:n,children:r,afterSubmit:o,initialValue:s}=e,c=a.useMemo(()=>({...$t(),refId:x(n)}),[n]);return st(()=>{s&&b.set(c.text,s)}),t.jsx(w.Provider,{value:c,children:t.jsx(le.Provider,{value:a.useMemo(()=>({afterSubmit:o}),[o]),children:r})},n)},ce=a.createContext(!1),ue=a.createContext(""),me=a.createContext(null),At=e=>{const{isReply:n,originalRefId:r,onCompleted:o,children:s}=e;return t.jsx(ue.Provider,{value:r,children:t.jsx(ce.Provider,{value:n,children:t.jsx(me.Provider,{value:o||null,children:s})})})},de=a.memo(e=>{const{children:n}=e;return a.useEffect(()=>(O(n),()=>{O(null)}),[n]),null}),zt=a.memo(()=>Vt());zt.displayName="CommentBoxSlotProvider";de.displayName="CommentBoxSlotPortal";const Dn=()=>a.useContext(ce),An=()=>{const e=f(a.useContext(w).refId);return a.useContext(ue)||e},zn=()=>a.useContext(me),Ht=()=>f(a.useContext(w).text),xe=()=>f(a.useContext(w).refId),Hn=()=>a.useContext(w),Vn=()=>a.useContext(le),he=x(null),Vt=()=>f(he),O=e=>b.set(he,e),Fn=()=>f(I(a.useContext(w).text,a.useCallback(e=>e.length>0,[]))),On=()=>f(I(a.useContext(w).text,a.useCallback(e=>e.length>Yt,[]))),Ft=()=>{const e=a.useContext(w);return a.useCallback((n,r)=>{const o=e[n];if(!o)throw new Error(`atom ${n} not found`);b.set(o,r)},[e])};var Ot=(e=>(e[e.legacy=0]="legacy",e[e["with-auth"]=1]="with-auth",e))(Ot||{});const fe=_("comment-mode",1),Un=()=>f(fe),qn=e=>b.set(fe,e),Ut=({comment:e})=>{const n=Pe(),r=xe();return t.jsx(St,{pin:!!e.pin,onPinChange:async o=>{n.setQueryData(z(r),s=>je(s,c=>{if(!c)return c;let i=null;return c.pages.forEach(l=>l.data.forEach(u=>{e.id===u.id&&(i=u)})),i&&(i.pin=o),c})),await D.comment.proxy(e.id).patch({data:{pin:o}})}})};function qt(e){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.88em",height:"1em",viewBox:"0 0 14 16",...e,children:t.jsx("path",{fillRule:"evenodd",d:"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3L5 2L4 5h6L9 2zm4.03 7.75L10 9l1 2l-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3l1-2z",fill:"currentColor"})})}const Qt=({commentId:e})=>{const[n,r]=a.useState(!1),o=xe(),s=a.useCallback(()=>{r(!1)},[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{"aria-label":"回复",className:P("absolute bottom-0 right-0 translate-x-2/3 translate-y-1/4 text-xs opacity-90","aspect-square rounded-full","box-content flex h-6 w-6 p-[2px] center","border border-slate-200 bg-zinc-100 dark:border-neutral-700 dark:bg-gray-800","invisible cursor-pointer opacity-0","group-[:hover]:visible group-[:hover]:opacity-70"),onClick:()=>{r(c=>!c)},children:t.jsx("i",{className:"icon-[mingcute--comment-line]"})}),t.jsx(Gt,{children:t.jsx(At,{isReply:!0,originalRefId:o,onCompleted:s,children:t.jsx($,{duration:.2,children:n&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"h-6"}),t.jsx(ln,{refId:e}),t.jsx("div",{className:"h-6"})]})})})})]})},Wt=a.memo(function e(n){const{comment:r,className:o}=n,s=a.useMemo(()=>x(null),[]);if(typeof r=="string")return null;const{id:c,avatar:i,author:l,text:u,key:m,location:d,isWhispers:v,url:p,source:g}=r,C=typeof r.parent=="string"?r.parent:r.parent?.id,h=p?t.jsx("a",{href:p,className:"ml-2 max-w-full flex-shrink-0 break-all",target:"_blank",rel:"noreferrer",children:l}):t.jsx("span",{className:"ml-2 max-w-full flex-shrink-0 break-all",children:l});return t.jsxs(t.Fragment,{children:[t.jsxs(A.Provider,{value:s,children:[t.jsx(B.li,{initial:r.new?{opacity:0,scale:.93,y:20}:!0,transition:K,animate:r.new?{opacity:1,y:0,scale:1}:void 0,"data-comment-id":c,"data-parent-id":C,className:P("relative my-2",o),children:t.jsxs("div",{className:"group flex w-full items-stretch gap-4",children:[t.jsxs("div",{className:"relative flex w-9 shrink-0 self-end",children:[t.jsx(xt,{shadow:!1,imageUrl:i,alt:`${l}'s avatar`,className:"h-9 w-9 select-none rounded-full bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-800",width:24,height:24}),g&&!!ie(g)&&t.jsx("div",{className:"absolute -right-1.5 bottom-1 flex h-3.5 w-3.5 rounded-full bg-white ring-[1.5px] ring-zinc-200 center dark:bg-zinc-800 dark:ring-black",children:t.jsx(Mt,{strategy:g,className:"h-3 w-3"})})]}),t.jsxs("div",{className:P("flex flex-1 flex-col","w-full min-w-0 items-start"),children:[t.jsxs("span",{className:P("flex items-center gap-2 font-semibold text-zinc-800 dark:text-zinc-200","relative mb-2 w-full min-w-0 justify-center"),children:[t.jsxs("span",{className:"flex flex-grow flex-wrap items-center gap-2",children:[h,t.jsxs("span",{className:"flex min-w-0 flex-shrink select-none flex-wrap items-center space-x-2 self-end",children:[t.jsx("span",{className:"inline-flex flex-shrink-0 text-[0.71rem] font-medium opacity-40",children:t.jsx(vt,{date:r.created})}),t.jsx("span",{className:"break-all text-[0.71rem] opacity-30",children:m}),!!d&&t.jsxs("span",{className:"min-w-0 max-w-full truncate break-all text-[0.71rem] opacity-[0.35]",children:["来自：",d]}),!!v&&t.jsx(qt,{})]})]}),t.jsx("span",{className:"flex-shrink-0",children:t.jsx(Ut,{comment:r})})]}),t.jsxs("div",{className:P(Pt.comment__message,"relative inline-block rounded-xl px-2 py-1 text-zinc-800 dark:text-zinc-200","rounded-bl-sm bg-zinc-600/5 dark:bg-zinc-500/20","max-w-[calc(100%-3rem)]"),children:[t.jsx(Nt,{children:u}),t.jsx(Qt,{commentId:r.id})]})]})]})}),t.jsx(Zt,{})]}),r.children&&r.children.length>0&&t.jsx("ul",{className:"my-2 space-y-2",children:r.children.map(y=>t.jsx(e,{comment:y,className:"ml-9"},y.id))})]})}),A=a.createContext(x(null)),Zt=()=>{const e=a.useRef(null),n=a.useContext(A);return a.useLayoutEffect(()=>(b.set(n,e.current),()=>{b.set(n,null)}),[n]),t.jsx("div",{ref:e})},Gt=e=>{const n=f(a.useContext(A));return n?ye.createPortal(e.children,n):null},S=()=>t.jsxs("li",{className:"relative animate-pulse list-none",children:[t.jsxs("div",{className:"group flex w-full items-stretch gap-2",children:[t.jsx("div",{className:"flex w-9 shrink-0 items-end",children:t.jsx("div",{className:"h-9 w-9 rounded-full bg-gray-300 dark:bg-neutral-600"})}),t.jsxs("div",{className:"flex w-full min-w-0 flex-1 flex-col items-start",children:[t.jsx("span",{className:"relative mb-2 flex w-full min-w-0 items-center justify-center gap-2",children:t.jsxs("span",{className:"flex flex-grow items-center gap-2",children:[t.jsx("span",{className:"ml-2 h-4 w-20 bg-gray-300 dark:bg-neutral-600"}),t.jsxs("span",{className:"flex select-none items-center space-x-2",children:[t.jsx("span",{className:"inline-flex h-4 w-20 bg-gray-300 text-[0.71rem] font-medium opacity-40 dark:bg-neutral-600"}),t.jsx("span",{className:"h-4 w-20 bg-gray-300 text-[0.71rem] opacity-30 dark:bg-neutral-600"})]})]})}),t.jsxs("div",{className:"relative flex w-full flex-col gap-2",children:[t.jsx("div",{className:"relative ml-2 inline-block h-4 w-[calc(100%-3rem)] rounded-xl bg-gray-300 px-2 py-1 dark:bg-neutral-600"}),t.jsx("div",{className:"relative ml-2 inline-block h-4 w-[120px] rounded-xl bg-gray-300 px-2 py-1 dark:bg-neutral-600"})]})]})]}),t.jsx("span",{className:"sr-only",children:"Loading..."})]}),U=()=>t.jsxs("div",{className:"flex min-h-[400px] flex-col space-y-4",children:[t.jsx(S,{}),t.jsx(S,{}),t.jsx(S,{}),t.jsx(S,{})]}),z=e=>["comments",e],Kt=({refId:e})=>{const n=a.useMemo(()=>z(e),[e]),{data:r,isLoading:o,fetchNextPage:s,hasNextPage:c}=rt({queryKey:n,queryFn:async({queryKey:i,pageParam:l})=>{const u=l,[,m]=i;return(await D.comment.getByRefId(m,{page:u})).$serialized},meta:{persist:!1},getNextPageParam:i=>i.pagination.hasNextPage?i.pagination.currentPage+1:void 0,getPreviousPageParam:i=>i.pagination.currentPage-1,initialPageParam:1});return o?t.jsx(U,{}):!r||!r.pages.length||!r.pages[0].data.length?t.jsx("div",{className:"flex min-h-[400px] center",children:t.jsx(lt,{text:"这里还没有评论呢"})}):t.jsxs(it,{children:[t.jsx("ul",{className:"min-h-[400px] list-none space-y-4",children:r?.pages.map((i,l)=>t.jsx(mt,{children:i.data.map(u=>t.jsx(Xt,{comment:u,refId:e},u.id))},l))}),c&&t.jsx(dt,{onLoading:s,children:t.jsx(U,{})})]})},Xt=a.memo(function({comment:n,refId:r}){return t.jsx(Dt,{refId:r,children:t.jsx(Wt,{comment:n})})}),Jt=Object.freeze(Object.defineProperty({__proto__:null,Comments:Kt,buildQueryKey:z},Symbol.toStringTag,{value:"Module"})),en=T(()=>E(()=>import("./EmojiPicker-Bc8p5Isj.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>e.EmojiPicker)),Qn=({className:e})=>{const n=Le(()=>Tt()),r=Ft(),o=Ht(),s=a.useRef(null),c=a.useCallback(i=>{if(!s.current)return;const l=s.current,u=l.selectionStart,m=l.selectionEnd;l.value=`${l.value.substring(0,u)} ${i} ${l.value.substring(m,l.value.length)}`,r("text",l.value),requestAnimationFrame(()=>{const d=u+i.length+2;l.selectionStart=d,l.selectionEnd=d,l.focus()})},[]);return a.useEffect(()=>{const i=s.current;i&&o!==i.value&&(i.value=o)},[o]),a.useLayoutEffect(()=>{const i=s.current;i&&(i.selectionStart=i.selectionEnd=i.value.length,i.focus())},[]),t.jsx(Ke,{wrapperClassName:e,ref:s,defaultValue:o,onChange:i=>r("text",i.target.value),placeholder:n,children:t.jsx(de,{children:t.jsx(te,{trigger:"click",TriggerComponent:tn,headless:!0,children:t.jsx(en,{onEmojiSelect:c})})})})},tn=()=>t.jsxs("button",{className:"ml-0 inline-flex h-5 w-5 translate-y-1 text-base center md:ml-4",onClick:Xe,children:[t.jsx("i",{className:"icon-[mingcute--emoji-2-line]"}),t.jsx("span",{className:"sr-only",children:"表情"})]});function nn(e=""){return new URL(e,ke()?.url.webUrl)}function rn(e){return j(e.title)&&j(e.slug)&&!j(e.order)}function sn(e){return j(e.title)&&j(e.slug)&&j(e.order)}function an(e){return j(e.title)&&j(e.nid)}function on(e){return rn(e)?e.category?`/posts/${e.category.slug}/${encodeURIComponent(e.slug)}`:(console.error("PostModel.category is missing!!!!!"),"#"):sn(e)?`/${e.slug}`:an(e)?`/notes/${e.nid}`:"/"}function j(e){return e!=null}nn.build=on;T(()=>E(()=>Promise.resolve().then(()=>Jt),void 0,import.meta.url).then(e=>e.Comments));const ln=T(()=>E(()=>import("./index-1X1ycEJb.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,3,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]),import.meta.url).then(e=>e.CommentBoxRoot)),cn=(e,n)=>{a.useEffect(()=>{Ne.fetchQuery({queryKey:["ack-read-count",e,n],queryFn:async()=>D.ack.read(e,n)})},[])},Wn=e=>(cn(e.type,e.id),null),Zn=({children:e,className:n,as:r="main"})=>t.jsx(r,{className:k("relative bg-white dark:bg-zinc-900 md:col-start-1 lg:col-auto","-m-4 p-[2rem_1rem] md:m-0 lg:p-[30px_45px]","rounded-[0_6px_6px_0] border-zinc-200/70 shadow-sm dark:border-neutral-800 dark:shadow-[#333] lg:border","note-layout-main","min-w-0","print:!border-none print:!bg-transparent print:!shadow-none",n),children:e});function un(e,n){const[r,o]=a.useState(e);return a.useEffect(()=>{const s=setTimeout(()=>{o(e)},n);return()=>{clearTimeout(s)}},[e,n]),r}const Gn=e=>{const{children:n}=e,r=un(n,300);return t.jsx(G,{mode:"popLayout",initial:!1,children:t.jsx(B.span,{initial:{opacity:0,y:-16},animate:{opacity:1,y:0},exit:{opacity:0,y:-16,position:"absolute"},transition:$e,children:r},r)})};x({x:0,y:0});x(!1);T(()=>E(()=>import("./index-bXTr1jpP.js"),__vite__mapDeps([35,1,2]),import.meta.url).then(e=>e.QRCodeSVG));const mn=()=>{const{y:e}=W(),{h:n}=Z();return Re(o=>{const s=we().h,c=o>=s?s:o/s*s;return Math.floor(Math.min(Math.max(0,(o-e+c)/n*100),100))||0},[e,n])},dn=a.createContext(null),Kn=()=>a.useContext(dn),xn=a.memo(({type:e,identity:n})=>{const r=tt(n),o=mn(),s=e==="current",c=a.useDeferredValue(s?o:r?.position),i=ee(),l=a.useMemo(()=>e==="current"||!r?"":X(J(r.identity))[i?"dark":"light"].accent,[i,r,e]);if(!r&&s||typeof c!="number")return null;const u=r?yt((r.operationTime-r.joinedAt)/1e3):"";return t.jsxs(te,{asChild:!0,placement:"right",offset:30,strategy:"fixed",type:"tooltip",triggerElement:t.jsx(pe,{bgColor:l,isCurrent:s,position:c}),children:[s?t.jsx("p",{children:"你在这里。"}):t.jsxs("p",{children:["读者"," ",r?.displayName||r?.identity.slice(0,2).toUpperCase()," ","在这里。"]}),t.jsxs("p",{children:["阅读进度 ",c,"%"]}),u&&t.jsxs("p",{children:["阅读了 ",u]})]})});xn.displayName="TimelineItem";const pe=a.forwardRef(({bgColor:e,isCurrent:n,position:r,...o},s)=>{const c=a.useRef(null),[i]=a.useState(r);a.useLayoutEffect(()=>{const d=c.current;d&&(d.style.top=`${i}%`)},[i]);const l=a.useRef(null);a.useEffect(()=>{if(n)return;const d=c.current;d&&(l.current&&l.current.finish(),l.current=d.animate([{filter:"blur(5px)"},{top:`${r}%`,filter:"blur(0px)"}],{duration:200,fill:"forwards",easing:"ease-in-out"}))},[n,r]);const{y:u}=W(),{h:m}=Z();return a.useImperativeHandle(s,()=>c.current),t.jsx("button",{onClick:()=>{ze(u+r/100*m)},"aria-label":n?"你在这里":`读者在这里 - ${r}%`,ref:c,className:P("absolute h-2 -translate-x-4 rounded-full bg-accent duration-200 group-hover:opacity-80 hover:-translate-x-2 hover:opacity-100",n?"w-9 opacity-40 group-hover:opacity-100":"w-8 opacity-30"),style:{top:n?`${r}%`:void 0,backgroundColor:e},...o})});pe.displayName="MoitonBar";const Xn=e=>{const{cid:n}=e,{data:r,isLoading:o,error:s}=Ue({queryKey:["getSummary",n],queryFn:async({queryKey:i})=>{const[,l]=i,u=await fetch(`/api/xlog/summary?cid=${l}`,{next:{revalidate:60*10}}).then(m=>m.json());if(!u)throw new Error("请求错误");if(!u.data)throw new Error("内容暂时无法获取");return u},enabled:!!n,staleTime:1e3*60*60*24*7,retryDelay:5e3});let c=t.jsxs("div",{className:k("space-y-2 rounded-xl border border-slate-200 p-4 dark:border-neutral-800",e.className),children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("i",{className:"icon-[mingcute--sparkles-line] mr-2 text-lg"}),"AI 生成的摘要"]}),t.jsxs($,{duration:.3,children:[t.jsx("div",{className:"!m-0 text-sm leading-loose text-base-content/85",children:o?t.jsxs("div",{className:"space-y-2",children:[t.jsx("span",{className:"block h-5 w-full animate-pulse rounded-xl bg-zinc-200 dark:bg-neutral-800"}),t.jsx("span",{className:"block h-5 w-full animate-pulse rounded-xl bg-zinc-200 dark:bg-neutral-800"}),t.jsx("span",{className:"block h-5 w-full animate-pulse rounded-xl bg-zinc-200 dark:bg-neutral-800"})]}):r?.data}),o&&t.jsxs("p",{className:"border-slate-200 text-right text-sm dark:border-slate-800 ",children:["(此服务由"," ",t.jsx("a",{href:"https://xlog.app",target:"_blank",rel:"noreferrer",children:"xLog"})," ","驱动)"]})]})]});return(!n||s)&&(c=null),t.jsx($,{duration:.2,className:"mt-4 print:hidden",children:c})},Jn=e=>e?.meta?.xLog?.cid;export{Wn as A,$n as B,zt as C,it as E,Yn as M,Gn as N,St as P,vt as R,Qn as U,Xn as X,Tn as a,Zn as b,Fn as c,xe as d,Hn as e,Vn as f,Jn as g,Dn as h,An as i,zn as j,On as k,Ht as l,Yt as m,Ft as n,z as o,Ot as p,nn as q,Un as r,qn as s,Dt as t,Kn as u,gt as v,st as w,se as x};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./EmojiPicker-Bc8p5Isj.js","./index-ZVYxoX19.js","./index-Y_bLMXYg.css","./use-is-dark-tNK75MAG.js","./index-1X1ycEJb.js","./viewport-1IkFLRB6.js","./request-MvzBsxCw.js","./env-y9k74Ds6.js","./motion-minimal-jJCu8YKk.js","./StyledButton-BX-nC1hJ.js","./CodeHighlighter-ruaKOT_-.js","./CodeHighlighter-hcFZa2QO.css","./Gallery-vzSRe3eA.js","./image-6-GkjZDO.js","./lodash-lrAbnKsZ.js","./use-is-unmounted-kDYnHtGR.js","./Gallery-cCMf-PmV.css","./useQuery-P1_Gzg00.js","./alert-xRT6btXA.js","./FloatPopover-0WBOZP5i.js","./spring-vvIC2hCq.js","./use-event-callback-tu2pR-Vc.js","./use-is-client-50HaPOXu.js","./visual-element-FhNWhN2c.js","./LinkCard-XjNcERaX.js","./provider-exUE4N1l.js","./dom-NuJWIaAq.js","./LinkCard-YJIkKfPg.css","./SocialSourceLink-EW2h1RVe.js","./Collapse-A6mBdkLj.js","./alert-B8lEAZHM.css","./Form-YXyYGCsV.js","./FormInput-WOYGzdyc.js","./react-error-boundary.esm-fuoQe1J8.js","./customParseFormat-JucLWOvd.js","./index-bXTr1jpP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

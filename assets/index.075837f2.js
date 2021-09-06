var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,s=(t,e)=>{for(var a in e||(e={}))l.call(e,a)&&d(t,a,e[a]);if(n)for(var a of n(e))r.call(e,a)&&d(t,a,e[a]);return t},o=(t,n)=>e(t,a(n));import{o as i,c as u,a as c,d as p,m as g,r as m,b as f,p as b,e as v,f as y,g as h,t as _,h as x,w,i as C,j as P,k,F as A,l as q,n as T,q as S,s as B,u as D,v as L,x as I,y as $,z as O,T as j,A as M,B as N,C as R}from"./vendor.c3056e86.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const a of t)if("childList"===a.type)for(const t of a.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const F={},z={class:"dt-h-6 dt-w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},W=[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)];F.render=function(t,e){return i(),u("svg",z,W)};const H={},G={class:"dt-h-6 dt-w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},U=[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)];H.render=function(t,e){return i(),u("svg",G,U)};var E=p({name:"SearchIcon"});const V={xmlns:"http://www.w3.org/2000/svg",class:"dt-h-5 dt-w-5",viewBox:"0 0 20 20",fill:"currentColor"},Q=[c("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"},null,-1)];E.render=function(t,e,a,n,l,r){return i(),u("svg",V,Q)};var K=p({name:"SearchInput",props:{value:{type:String,required:!0}}});const J=["value"];K.render=function(t,e,a,n,l,r){return i(),u("input",g({value:t.value,type:"search",name:"search",class:"dt__filter__search dt-block dt-border dt-border-gray-300 dt-pr-10 dt-px-2 dt-py-2\n                                    dt-rounded-md dt-w-full dt-outline-none focus:dt-ring-1 focus:dt-ring-inset sm:dt-text-sm"},t.$attrs),null,16,J)};var X=p({name:"Filter",components:{SearchInput:K,SearchIcon:E},props:{search:{type:String,required:!0}},emits:["input"]});const Y={class:"dt__filter dt-mb-3 dt-w-full"},Z={class:"dt-w-64"},tt=c("label",{for:"email",class:"dt-sr-only"},"Search",-1),et={class:"dt-relative dt-rounded-md dt-shadow-sm"},at={class:"dt-absolute dt-inset-y-0 dt-right-0 dt-pr-3 dt-flex dt-items-center dt-pointer-events-none"};X.render=function(t,e,a,n,l,r){const d=m("SearchInput"),s=m("SearchIcon");return i(),u("div",Y,[c("div",Z,[tt,c("div",et,[f(d,{value:t.search,onInput:e[0]||(e[0]=e=>t.$emit("input",e.target.value))},null,8,["value"]),c("div",at,[f(s,{class:"dt-text-gray-400"})])])])])};var nt=p({name:"Loading"});b("data-v-685865e4");const lt={class:"dt__loading dt-absolute dt-h-full dt-w-full"},rt=[c("div",{class:"dt-flex dt-justify-center dt-items-center"},[c("div",{class:"dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"}),c("div",{class:"dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"})],-1)];v(),nt.render=function(t,e,a,n,l,r){return i(),u("div",lt,rt)},nt.__scopeId="data-v-685865e4";var dt=p({name:"BottomPaginationWrapper"});const st={class:"dt__pagination_wrapper--bottom dt-bg-white dt-shadow-inner"},ot={class:"dt-px-4 sm:dt-px-6 dt-py-4"};dt.render=function(t,e,a,n,l,r){return i(),u("div",st,[c("div",ot,[y(t.$slots,"default")])])};var it=p({name:"PaginationButtons"});const ut={class:"dt__pagination__nav dt-relative dt-z-0 dt-inline-flex dt-rounded-md dt-shadow-sm dt--space-x-px","aria-label":"Pagination"};it.render=function(t,e,a,n,l,r){return i(),u("nav",ut,[y(t.$slots,"default")])};var ct=p({name:"PaginationInfo"});const pt={class:"dt__pagination__info"},gt={class:"dt-text-sm dt-text-gray-700"};ct.render=function(t,e,a,n,l,r){return i(),u("div",pt,[c("p",gt,[y(t.$slots,"default")])])};var mt=p({name:"PaginationLink",props:{active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},setup:t=>({linkClasses:h((()=>t.active?"dt-bg-gray-200 dt-border-gray-300 dt-text-gray-800 hover:dt-bg-gray-200":t.disabled?"dt-cursor-not-allowed dt-text-gray-400":"dt-border-gray-300 dt-bg-white dt-text-gray-500 hover:dt-bg-gray-50"))})});mt.render=function(t,e,a,n,l,r){return i(),u("a",g({href:"#",class:["dt__pagination__link dt-relative dt-inline-flex dt-items-center dt-px-4 dt-py-2 dt-border dt-text-sm dt-font-medium",t.linkClasses]},_(s({},t.$attrs))),[y(t.$slots,"default")],16)};var ft=p({name:"Pagination",components:{PaginationButtons:it,PaginationInfo:ct,PaginationLink:mt},props:{total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!1,default:1},maxVisibleButtons:{type:Number,required:!1,default:5}},emits:["changed"],setup(t,{emit:e}){const a=h((()=>(t.currentPage-1)*t.perPage+1)),n=h((()=>t.total>t.currentPage*t.perPage?t.currentPage*t.perPage:t.total)),l=h((()=>Math.ceil(t.total/t.perPage))),r=h((()=>1===t.currentPage?1:t.currentPage===l.value?l.value-t.maxVisibleButtons+1:t.currentPage-1)),d=h((()=>Math.min(r.value+t.maxVisibleButtons-1,l.value))),s=h((()=>{const t=[];for(let e=r.value;e<=d.value;e+=1)e>0&&t.push(e);return t})),o=h((()=>1===t.currentPage)),i=h((()=>t.currentPage===l.value)),u=t=>{e("changed",t)};return{currentStart:a,currentEnd:n,totalPages:l,pages:s,isInFirstPage:o,isInLastPage:i,goToPageNumber:u,gotoFirstPage:()=>u(1),gotoLastPage:()=>u(l.value),gotoNextPage:()=>u(t.currentPage>=l.value?l.value:t.currentPage+1),gotoPreviousPage:()=>u(t.currentPage<=1?1:t.currentPage-1),showDots:(t="left")=>{const e="left"===t?1:l.value,a="left"===t?2:l.value-1;return!s.value.includes(e)||!s.value.includes(a)}}}});const bt={key:0,class:"dt__pagination dt-bg-white dt-flex dt-items-center dt-justify-between"},vt={class:"dt-hidden sm:dt-flex-1 sm:dt-flex sm:dt-items-center sm:dt-justify-between"},yt=T(" Showing "),ht=["textContent"],_t=T(" to "),xt=["textContent"],wt=T(" of "),Ct=["textContent"],Pt=T(" results. "),kt=c("span",{class:"dt-sr-only"},"Go to first",-1),At=T(" « "),qt=c("span",{class:"dt-sr-only"},"Previous",-1),Tt=T(" ‹ "),St=T(" 1 "),Bt=T(" ... "),Dt=T(" ... "),Lt=c("span",{class:"dt-sr-only"},"Next",-1),It=T(" › "),$t=c("span",{class:"dt-sr-only"},"Go to Last",-1),Ot=T(" » ");ft.render=function(t,e,a,n,l,r){const d=m("PaginationInfo"),s=m("pagination-link"),o=m("PaginationButtons");return t.totalPages?(i(),u("div",bt,[c("div",vt,[t.total?(i(),x(d,{key:0},{default:w((()=>[y(t.$slots,"pagination-info",{start:t.currentStart,end:t.currentEnd,total:t.total},(()=>[yt,c("span",{class:"dt-font-medium",textContent:P(t.currentStart)},null,8,ht),_t,c("span",{class:"dt-font-medium",textContent:P(t.currentEnd)},null,8,xt),wt,c("span",{class:"dt-font-medium",textContent:P(t.total)},null,8,Ct),Pt]))])),_:3})):C("",!0),t.totalPages>1?(i(),x(o,{key:1},{default:w((()=>[f(s,{key:"page_first",disabled:t.isInFirstPage,class:"dt-rounded-l-md",onClick:k(t.gotoFirstPage,["prevent"])},{default:w((()=>[kt,At])),_:1},8,["disabled","onClick"]),f(s,{key:"page_previous",disabled:t.isInFirstPage,onClick:k(t.gotoPreviousPage,["prevent"])},{default:w((()=>[qt,Tt])),_:1},8,["disabled","onClick"]),t.showDots("left")?(i(),u(A,{key:0},[f(s,{key:"page_1",class:"dt-block sm:dt-hidden",disabled:t.isInFirstPage,active:t.isInFirstPage,onClick:k(t.gotoFirstPage,["prevent"])},{default:w((()=>[St])),_:1},8,["disabled","active","onClick"]),f(s,{key:"page_divider_left",class:"sm:dt-hidden"},{default:w((()=>[Bt])),_:1})],64)):C("",!0),(i(!0),u(A,null,q(t.pages,(e=>(i(),x(s,{key:`pages_${e}`,class:"dt-hidden md:dt-inline-block",active:e===t.currentPage,disabled:e===t.currentPage,onClick:k((a=>t.goToPageNumber(e)),["prevent"])},{default:w((()=>[T(P(e),1)])),_:2},1032,["active","disabled","onClick"])))),128)),t.showDots("right")?(i(),u(A,{key:1},[f(s,{key:"page_divider_right",class:"sm:dt-hidden"},{default:w((()=>[Dt])),_:1}),f(s,{key:`page_${t.totalPages}`,class:"sm:dt-hidden",disabled:t.isInLastPage,active:t.isInLastPage,onClick:k(t.gotoLastPage,["prevent"])},{default:w((()=>[T(P(t.totalPages),1)])),_:1},8,["disabled","active","onClick"])],64)):C("",!0),f(s,{key:"page_next",disabled:t.isInLastPage,onClick:k(t.gotoNextPage,["prevent"])},{default:w((()=>[Lt,It])),_:1},8,["disabled","onClick"]),f(s,{key:"page_last",disabled:t.isInLastPage,class:"dt-rounded-r-md",onClick:k(t.gotoLastPage,["prevent"])},{default:w((()=>[$t,Ot])),_:1},8,["disabled","onClick"])])),_:1})):C("",!0)])])):C("",!0)};var jt=p({name:"PaginationSize",props:{value:{type:[Number,String],required:!0},options:{type:Array,required:!0}},emits:["input"]});const Mt={class:"dt__pagination_size_wrapper dt-w-full dt-flex dt-justify-end sm:dt-w-auto"},Nt=c("label",{for:"location",class:"dt-sr-only"},"Per page",-1),Rt=["value"],Ft=["value","selected","textContent"];jt.render=function(t,e,a,n,l,r){return i(),u("div",Mt,[c("div",null,[Nt,c("select",{value:t.value,name:"per_page",class:"dt__pagination_size dt-block dt-w-full dt-pl-3 dt-pr-5 dt-py-2 dt-text-base dt-border\n                        dt-border-gray-300 sm:dt-text-sm dt-rounded-md dt-outline-none focus:dt-ring-1 focus:dt-ring-inset",onInput:e[0]||(e[0]=e=>t.$emit("input",e.target.value))},[(i(!0),u(A,null,q(t.options,(e=>(i(),u("option",{key:`per_page_${e}`,value:e,selected:e===t.value,textContent:P(e)},null,8,Ft)))),128))],40,Rt)])])};var zt=p({name:"TopPaginationWrapper",props:{withPagination:{type:Boolean,required:!1,default:!1}}});zt.render=function(t,e,a,n,l,r){return i(),u("div",{class:S(["dt__pagination_wrapper--top md:dt-flex xs:dt-flex-col dt-items-center",{"dt-bg-white dt-py-4 dt-px-4 sm:dt-px-6":t.withPagination}])},[y(t.$slots,"default")],2)};var Wt=p({name:"TableBodyCell"});const Ht={class:"dt__table__tbody_td dt-px-6 dt-py-4 dt-whitespace-nowrap dt-text-sm dt-font-medium dt-text-gray-500"};Wt.render=function(t,e,a,n,l,r){return i(),u("td",Ht,[y(t.$slots,"default")])};var Gt=p({name:"TableHeadCell"});const Ut={scope:"col",class:"dt__table__thead__th dt-px-6 dt-py-3 dt-text-left dt-text-xs dt-font-medium dt-text-gray-500 dt-uppercase dt-tracking-wider"};Gt.render=function(t,e,a,n,l,r){return i(),u("th",Ut,[y(t.$slots,"default")])};var Et=p({name:"TableRow",props:{rowIndex:{type:Number,required:!0},striped:{type:Boolean,required:!1,default:!1}}});Et.render=function(t,e,a,n,l,r){return i(),u("tr",{class:S(["dt__table__row",t.striped&&t.rowIndex%2?"dt-bg-gray-50":"dt-bg-white"])},[y(t.$slots,"default")],2)};var Vt=p({name:"TableWrapper"});const Qt={class:"dt__table_wrapper dt-overflow-auto"},Kt={class:"dt__table dt-min-w-full dt-divide-y dt-divide-gray-200"};Vt.render=function(t,e,a,n,l,r){return i(),u("div",Qt,[c("table",Kt,[y(t.$slots,"default")])])};var Jt=p({name:"TBody"});const Xt={class:"dt__table__tbody"};Jt.render=function(t,e,a,n,l,r){return i(),u("tbody",Xt,[y(t.$slots,"default")])};var Yt=p({name:"THead"});const Zt={class:"dt__table__thead dt-bg-gray-50"},te={class:"dt__table__thead__tr"};Yt.render=function(t,e,a,n,l,r){return i(),u("thead",Zt,[c("tr",te,[y(t.$slots,"default")])])};const ee=[5,10,15,25,50,75,100],ae=p({name:"DataTable",components:{TableHeadCell:Gt,TableBodyCell:Wt,TBody:Jt,TableRow:Et,THead:Yt,BottomPaginationWrapper:dt,TableWrapper:Vt,PaginationSize:jt,TopPaginationWrapper:zt,Filter:X,Loading:nt,Pagination:ft},props:{rows:{type:Array,required:!0},columns:{type:Object,required:!1,default:null},pagination:{type:Object,required:!1,default:null},striped:{type:Boolean,required:!1,default:!1},sn:{type:Boolean,required:!1,default:!1},filter:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},perPageOptions:{type:Array,required:!1,default:()=>ee},query:{type:Object,required:!1,default:()=>({})},topPagination:{type:Boolean,required:!1,default:!1},bottomPagination:{type:Boolean,required:!1,default:!0}},emits:["loadData"],setup(t,{emit:e}){var a,n;const l=B({page:(null==(a=t.pagination)?void 0:a.page)||1,search:t.query.search||"",per_page:(null==(n=t.pagination)?void 0:n.per_page)||10}),r=h((()=>!!t.pagination)),d=h((()=>{var e;return(null==(e=t.pagination)?void 0:e.total)||t.rows.length})),i=h((()=>t.rows)),u=h((()=>t.columns?t.columns:0===t.rows.length?{}:Object.keys(t.rows[0]).reduce(((t,e)=>{return o(s({},t),{[e]:(a=e,a.toLowerCase().replace(/[-_]/g," ").split(" ").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(" "))});var a}),{}))),c=h((()=>r.value?l.value.per_page*(l.value.page-1):0));D((()=>s({},l.value)),(()=>{e("loadData",l.value)}),{deep:!0,immediate:!0});const p=((t,e=400)=>{let a;return(...n)=>{clearTimeout(a),a=setTimeout((()=>t(...n)),e)}})((t=>{l.value=o(s({},l.value),{page:1,search:t})}));return{tableQuery:l,showPagination:r,totalData:d,tableRows:i,tableColumns:u,paginatedRowIndex:c,uniqueId:()=>Math.floor(100*Math.random()),handlePageChange:t=>{l.value.page=t},handleOnSearchChange:p,handleOnPaginationSizeChange:t=>{l.value=o(s({},l.value),{page:1,per_page:t})}}}});const ne={class:"data-table dt-flex dt-flex-col"},le={class:"dt-align-middle dt-min-w-full"},re={class:"dt__wrapper dt-relative dt-overflow-hidden sm:dt-rounded-lg"};ae.render=function(t,e,a,n,l,r){const d=m("Filter"),s=m("Loading"),o=m("Pagination"),p=m("PaginationSize"),g=m("TopPaginationWrapper"),b=m("TableHeadCell"),v=m("THead"),h=m("TableBodyCell"),_=m("TableRow"),k=m("TBody"),T=m("TableWrapper"),S=m("pagination"),B=m("BottomPaginationWrapper");return i(),u("div",ne,[c("div",le,[t.filter&&t.topPagination?(i(),x(d,{key:0,search:t.tableQuery.search,onInput:t.handleOnSearchChange},null,8,["search","onInput"])):C("",!0),c("div",re,[t.loading?y(t.$slots,"loading",{key:0},(()=>[f(s)])):C("",!0),t.showPagination?(i(),x(g,{key:1,"with-pagination":t.topPagination},{default:w((()=>[t.topPagination?(i(),x(o,{key:0,class:"dt-flex-1 dt-pr-4",total:t.totalData,"current-page":t.tableQuery.page,"per-page":parseInt(t.tableQuery.per_page.toString()),onChanged:t.handlePageChange},null,8,["total","current-page","per-page","onChanged"])):C("",!0),t.filter&&!t.topPagination?(i(),x(d,{key:1,search:t.tableQuery.search,onInput:t.handleOnSearchChange},null,8,["search","onInput"])):C("",!0),f(p,{value:t.tableQuery.per_page,options:t.perPageOptions,onInput:t.handleOnPaginationSizeChange},null,8,["value","options","onInput"])])),_:1},8,["with-pagination"])):C("",!0),f(T,null,{default:w((()=>[f(v,null,{default:w((()=>[t.sn?y(t.$slots,"thead-sn",{key:0},(()=>[f(b,{textContent:P("S.N.")},null,8,["textContent"])])):C("",!0),y(t.$slots,"thead",{column:t.tableColumns},(()=>[(i(!0),u(A,null,q(t.tableColumns,((t,e)=>(i(),x(b,{key:`datatable-thead-th-${e}`,textContent:P(t)},null,8,["textContent"])))),128))]))])),_:3}),f(k,null,{default:w((()=>[(i(!0),u(A,null,q(t.tableRows,((e,a)=>(i(),x(_,{key:`datatable-row-${t.uniqueId()}-${a}`,"row-index":a,striped:t.striped},{default:w((()=>[t.sn?y(t.$slots,"tbody-sn",{key:0,sn:a+1},(()=>[f(h,{textContent:P(a+1+t.paginatedRowIndex)},null,8,["textContent"])])):C("",!0),y(t.$slots,"tbody",{index:a,row:e},(()=>[(i(!0),u(A,null,q(t.tableColumns,((a,n)=>(i(),x(h,{key:`datatable-tbody-td-${t.uniqueId()}-${n}`,name:a,textContent:P(e[n])},null,8,["name","textContent"])))),128))]))])),_:2},1032,["row-index","striped"])))),128))])),_:3})])),_:3}),t.showPagination&&t.bottomPagination?(i(),x(B,{key:2},{default:w((()=>[f(S,{total:t.totalData,"current-page":t.tableQuery.page,"per-page":parseInt(t.tableQuery.per_page.toString()),onChanged:t.handlePageChange},null,8,["total","current-page","per-page","onChanged"])])),_:1})):C("",!0)])])])};const de=p({components:{DataTable:ae},props:{data:{type:Array,required:!0}}});de.render=function(t,e,a,n,l,r){const d=m("data-table");return i(),x(d,{rows:t.data},null,8,["rows"])};const se=p({components:{TableBody:Wt,TableHead:Gt,DataTable:ae},setup(){const t=B([]),e=B({}),a=B({search:"test"}),n=B(!1);return{tableData:t,pagination:e,query:a,isLoading:n,loadData:async a=>{n.value=!0;const{data:{data:l,totalPassengers:r}}=await L.get("https://api.instantwebtools.net/v1/passenger",{params:{page:a.page-1<0?0:a.page-1,size:a.per_page,search:a.search}});t.value=l,e.value=o(s({},e.value),{page:a.page,total:r}),n.value=!1},formatAirline:t=>Array.isArray(t)?t[0]:t,formatUrl:t=>t.startsWith("http")?t:`http://${t}`}}}),oe=c("div",{class:"dt-absolute dt-w-full dt-h-full dt-flex dt-justify-center dt-z-10 dt-py-12"},"Loading....",-1),ie=T("Full Name"),ue=T("Trips"),ce=T("Airline"),pe={class:"dt-flex dt-items-center"},ge={class:"dt-flex-shrink-0 dt-h-16 dt-w-16 dt-inline-flex dt-items-center"},me=["src","alt"],fe={class:"dt-ml-4"},be=["href"],ve=["textContent"],ye=["textContent"],he=["textContent"];se.render=function(t,e,a,n,l,r){const d=m("table-head"),s=m("table-body"),o=m("data-table");return i(),x(o,{rows:t.tableData,pagination:t.pagination,query:t.query,loading:t.isLoading,striped:"",sn:"",filter:"",onLoadData:t.loadData},{loading:w((()=>[oe])),thead:w((()=>[f(d,null,{default:w((()=>[ie])),_:1}),f(d,null,{default:w((()=>[ue])),_:1}),f(d,null,{default:w((()=>[ce])),_:1})])),tbody:w((({row:e})=>[f(s,{textContent:P(e.name)},null,8,["textContent"]),f(s,{textContent:P(e.trips?e.trips.toLocaleString():"")},null,8,["textContent"]),f(s,null,{default:w((()=>[c("div",pe,[c("div",ge,[c("img",{class:"dt-rounded-full",src:t.formatAirline(e.airline).logo,alt:t.formatAirline(e.airline).name},null,8,me)]),c("div",fe,[c("a",{href:t.formatUrl(t.formatAirline(e.airline).website)},[c("p",{class:"dt-text-sm dt-font-medium dt-text-gray-900",textContent:P(t.formatAirline(e.airline).name)},null,8,ve)],8,be),c("p",{class:"dt-text-sm dt-text-gray-400",textContent:P(t.formatAirline(e.airline).slogan)},null,8,ye),c("p",{class:"dt-text-sm dt-text-gray-500",textContent:P(t.formatAirline(e.airline).head_quaters)},null,8,he)])])])),_:2},1024)])),_:1},8,["rows","pagination","query","loading","onLoadData"])};const _e=p({components:{TableBody:Wt,TableHead:Gt,DataTable:ae},props:{data:{type:Array,required:!0}}}),xe=T("SN"),we=T("Full Name"),Ce=T("Account"),Pe=T("Gender"),ke=T(" Edit ");_e.render=function(t,e,a,n,l,r){const d=m("table-head"),s=m("table-body"),o=m("data-table");return i(),x(o,{rows:t.data,striped:"",sn:""},{"thead-sn":w((()=>[f(d,null,{default:w((()=>[xe])),_:1})])),thead:w((()=>[f(d,null,{default:w((()=>[we])),_:1}),f(d,null,{default:w((()=>[Ce])),_:1}),f(d,null,{default:w((()=>[Pe])),_:1}),f(d)])),"tbody-sn":w((({sn:t})=>[f(d,{textContent:P(t.toString().padStart(2,"0"))},null,8,["textContent"])])),tbody:w((({row:t})=>[f(s,{textContent:P(`${t.first_name} ${t.last_name}`)},null,8,["textContent"]),f(s,null,{default:w((()=>[c("p",null,P(t.email),1),c("p",null,P(t.ip_address),1)])),_:2},1024),f(s,{textContent:P(t.gender)},null,8,["textContent"]),f(s,null,{default:w((()=>[ke])),_:1})])),_:1},8,["rows"])};const Ae=p({components:{TableBody:Wt,TableHead:Gt,DataTable:ae},setup(){const t=B([]),e=B({}),a=B({search:"test"}),n=B(!1);return{tableData:t,pagination:e,query:a,isLoading:n,loadData:async a=>{n.value=!0;const{data:{data:l,totalPassengers:r}}=await L.get("https://api.instantwebtools.net/v1/passenger",{params:{page:a.page-1<0?0:a.page-1,size:a.per_page,search:a.search}});t.value=l,e.value=o(s({},e.value),{page:a.page,total:r}),n.value=!1},formatAirline:t=>Array.isArray(t)?t[0]:t,formatUrl:t=>t.startsWith("http")?t:`http://${t}`}}}),qe=T("Full Name"),Te=T("Trips"),Se=T("Airline"),Be={class:"dt-flex dt-items-center"},De={class:"dt-flex-shrink-0 dt-h-16 dt-w-16 dt-inline-flex dt-items-center"},Le=["src","alt"],Ie={class:"dt-ml-4"},$e=["href"],Oe=["textContent"],je=["textContent"],Me=["textContent"];Ae.render=function(t,e,a,n,l,r){const d=m("table-head"),s=m("table-body"),o=m("data-table");return i(),x(o,{rows:t.tableData,pagination:t.pagination,query:t.query,loading:t.isLoading,"top-pagination":"",striped:"",sn:"",filter:"",onLoadData:t.loadData},{thead:w((()=>[f(d,null,{default:w((()=>[qe])),_:1}),f(d,null,{default:w((()=>[Te])),_:1}),f(d,null,{default:w((()=>[Se])),_:1})])),tbody:w((({row:e})=>[f(s,{textContent:P(e.name)},null,8,["textContent"]),f(s,{textContent:P(e.trips?e.trips.toLocaleString():"")},null,8,["textContent"]),f(s,null,{default:w((()=>[c("div",Be,[c("div",De,[c("img",{class:"dt-rounded-full",src:t.formatAirline(e.airline).logo,alt:t.formatAirline(e.airline).name},null,8,Le)]),c("div",Ie,[c("a",{href:t.formatUrl(t.formatAirline(e.airline).website)},[c("p",{class:"dt-text-sm dt-font-medium dt-text-gray-900",textContent:P(t.formatAirline(e.airline).name)},null,8,Oe)],8,$e),c("p",{class:"dt-text-sm dt-text-gray-400",textContent:P(t.formatAirline(e.airline).slogan)},null,8,je),c("p",{class:"dt-text-sm dt-text-gray-500",textContent:P(t.formatAirline(e.airline).head_quaters)},null,8,Me)])])])),_:2},1024)])),_:1},8,["rows","pagination","query","loading","onLoadData"])};const Ne=p({components:{TableBody:Wt,TableHead:Gt,DataTable:ae},setup(){const t=B([]),e=B({});return{tableData:t,pagination:e,loadData:async a=>{const{data:{data:n,totalPassengers:l}}=await L.get("https://api.instantwebtools.net/v1/passenger",{params:{page:a.page-1<0?0:a.page-1,size:a.per_page}});t.value=n,e.value=o(s({},e.value),{page:a.page,total:l})},formatAirline:t=>Array.isArray(t)?t[0]:t,formatUrl:t=>t.startsWith("http")?t:`http://${t}`}}}),Re=T("Full Name"),Fe=T("Trips"),ze=T("Airline"),We={class:"dt-flex dt-items-center"},He={class:"dt-flex-shrink-0 dt-h-16 dt-w-16 dt-inline-flex dt-items-center"},Ge=["src","alt"],Ue={class:"dt-ml-4"},Ee=["href"],Ve=["textContent"],Qe=["textContent"],Ke=["textContent"];Ne.render=function(t,e,a,n,l,r){const d=m("table-head"),s=m("table-body"),o=m("data-table");return i(),x(o,{rows:t.tableData,pagination:t.pagination,striped:"",sn:"",onLoadData:t.loadData},{thead:w((()=>[f(d,null,{default:w((()=>[Re])),_:1}),f(d,null,{default:w((()=>[Fe])),_:1}),f(d,null,{default:w((()=>[ze])),_:1})])),tbody:w((({row:e})=>[f(s,{textContent:P(e.name)},null,8,["textContent"]),f(s,{textContent:P(e.trips.toLocaleString())},null,8,["textContent"]),f(s,null,{default:w((()=>[c("div",We,[c("div",He,[c("img",{class:"dt-rounded-full",src:t.formatAirline(e.airline).logo,alt:t.formatAirline(e.airline).name},null,8,Ge)]),c("div",Ue,[c("a",{href:t.formatUrl(t.formatAirline(e.airline).website)},[c("p",{class:"dt-text-sm dt-font-medium dt-text-gray-900",textContent:P(t.formatAirline(e.airline).name)},null,8,Ve)],8,Ee),c("p",{class:"dt-text-sm dt-text-gray-400",textContent:P(t.formatAirline(e.airline).slogan)},null,8,Qe),c("p",{class:"dt-text-sm dt-text-gray-500",textContent:P(t.formatAirline(e.airline).head_quaters)},null,8,Ke)])])])),_:2},1024)])),_:1},8,["rows","pagination","onLoadData"])};const Je=p({components:{TableBody:Wt,TableHead:Gt,DataTable:ae},setup(){const t=B([]),e=B({}),a=B({search:"test"}),n=B(!1);return{tableData:t,pagination:e,query:a,isLoading:n,loadData:async a=>{n.value=!0;const{data:{data:l,totalPassengers:r}}=await L.get("https://api.instantwebtools.net/v1/passenger",{params:{page:a.page-1<0?0:a.page-1,size:a.per_page,search:a.search}});t.value=l,e.value=o(s({},e.value),{page:a.page,total:r}),n.value=!1},formatAirline:t=>Array.isArray(t)?t[0]:t,formatUrl:t=>t.startsWith("http")?t:`http://${t}`}}}),Xe={class:"dt-w-1/2 sm:dt-w-full overflow-hidden"},Ye=T("Full Name"),Ze=T("Trips"),ta=T("Airline"),ea={class:"dt-flex dt-items-center"},aa={class:"dt-flex-shrink-0 dt-h-16 dt-w-16 dt-inline-flex dt-items-center"},na=["src","alt"],la={class:"dt-ml-4"},ra=["href"],da=["textContent"],sa=["textContent"],oa=["textContent"];Je.render=function(t,e,a,n,l,r){const d=m("table-head"),s=m("table-body"),o=m("data-table");return i(),u("div",Xe,[f(o,{rows:t.tableData,pagination:t.pagination,query:t.query,loading:t.isLoading,striped:"",sn:"",filter:"",onLoadData:t.loadData},{thead:w((()=>[f(d,null,{default:w((()=>[Ye])),_:1}),f(d,null,{default:w((()=>[Ze])),_:1}),f(d,null,{default:w((()=>[ta])),_:1})])),tbody:w((({row:e})=>[f(s,{textContent:P(e.name)},null,8,["textContent"]),f(s,{textContent:P(e.trips?e.trips.toLocaleString():"")},null,8,["textContent"]),f(s,null,{default:w((()=>[c("div",ea,[c("div",aa,[c("img",{class:"dt-rounded-full",src:t.formatAirline(e.airline).logo,alt:t.formatAirline(e.airline).name},null,8,na)]),c("div",la,[c("a",{href:t.formatUrl(t.formatAirline(e.airline).website)},[c("p",{class:"dt-text-sm dt-font-medium dt-text-gray-900",textContent:P(t.formatAirline(e.airline).name)},null,8,da)],8,ra),c("p",{class:"dt-text-sm dt-text-gray-400",textContent:P(t.formatAirline(e.airline).slogan)},null,8,sa),c("p",{class:"dt-text-sm dt-text-gray-500",textContent:P(t.formatAirline(e.airline).head_quaters)},null,8,oa)])])])),_:2},1024)])),_:1},8,["rows","pagination","query","loading","onLoadData"])])};const ia=p({components:{DataTable:ae},props:{data:{type:Array,required:!0}}});ia.render=function(t,e,a,n,l,r){const d=m("data-table");return i(),x(d,{rows:t.data,striped:"",sn:""},null,8,["rows"])};const ua={"/":{title:"Basic",component:de},"/table/basic":{title:"Basic",group:"table",component:de},"/table/striped":{title:"Striped",group:"table",component:ia},"/table/custom":{title:"Custom Row & Column",group:"table",component:_e},"/table/paginated":{title:"Paginated",group:"table",component:Ne},"/table/filter":{title:"Filter",group:"table",component:Ae},"/table/loading":{title:"Custom Loader",group:"table",component:se},"/table/responsive":{title:"Responsive",group:"table",component:Je}};var ca=p({name:"VLink",props:{href:{type:String,required:!0}},setup(){const{setRoute:t}=I("route");return{setRoute:t}}});const pa=["href"];ca.render=function(t,e,a,n,l,r){return i(),u("a",{href:t.href,onClick:e[0]||(e[0]=k((e=>t.setRoute(t.href)),["prevent"]))},[y(t.$slots,"default")],8,pa)};var ga=p({name:"Menus",components:{VLink:ca},setup(){const t=[{group:"Tables",items:[...Object.entries(ua).map((([t,e])=>({url:t,label:e.title,group:e.group}))).filter((t=>"table"===t.group))]}],{isActive:e}=I("route"),a=["dt-bg-black","dt-bg-gray-500","dt-bg-red-500","dt-bg-yellow-500","dt-bg-green-500","dt-bg-blue-500","dt-bg-indigo-500","dt-bg-purple-500","dt-bg-pink-500"];return{menus:t,getRandomColor:()=>a[Math.floor(Math.random()*(a.length-1))],isActive:e}}});const ma={class:"dt-flex-1 dt-px-2 dt-bg-white dt-space-y-1"},fa={class:"dt-mt-8"},ba=["textContent"],va={class:"dt-mt-1 dt-space-y-1",role:"group"},ya=["textContent"];ga.render=function(t,e,a,n,l,r){const d=m("v-link");return i(),u("nav",ma,[c("div",fa,[(i(!0),u(A,null,q(t.menus,((e,a)=>(i(),u("div",{key:a},[c("h3",{class:"dt-px-3 dt-text-xs dt-font-semibold dt-text-gray-500 dt-uppercase dt-tracking-wider",textContent:P(e.group)},null,8,ba),c("div",va,[(i(!0),u(A,null,q(e.items,((e,a)=>(i(),x(d,{key:a,href:e.url,class:S([t.isActive(e.url)?"dt-bg-gray-100 dt-text-gray-900":"dt-text-gray-700 hover:dt-text-gray-900 hover:dt-bg-gray-50","dt-group dt-flex dt-items-center dt-px-3 dt-py-2 dt-text-sm dt-font-medium dt-rounded-md"])},{default:w((()=>[c("span",{class:S(["dt-w-2.5 dt-h-2.5 dt-mr-4 dt-rounded-full",t.getRandomColor()]),"aria-hidden":"true"},null,2),c("span",{class:"dt-truncate",textContent:P(e.label)},null,8,ya)])),_:2},1032,["href","class"])))),128))])])))),128))])])};var ha=p({name:"OffCanvas",components:{Menus:ga,OutlineCloseIcon:H},props:{show:{type:Boolean,required:!0}},emits:["close"]});const _a={class:"dt-fixed dt-inset-0 dt-flex dt-z-40 md:dt-hidden",role:"dialog","aria-modal":"true"},xa={class:"dt-fixed dt-inset-0 dt-bg-gray-600 dt-bg-opacity-75","aria-hidden":"true"},wa={class:"dt-relative dt-flex-1 dt-flex dt-flex-col dt-max-w-xs dt-w-full dt-bg-white"},Ca={class:"dt-absolute dt-top-0 dt-right-0 dt--mr-12 dt-pt-2"},Pa=c("span",{class:"dt-sr-only"},"Close sidebar",-1),ka={class:"dt-flex-1 dt-h-0 dt-pt-5 dt-pb-4 dt-overflow-y-auto"},Aa=c("div",{class:"dt-flex-shrink-0 dt-flex dt-items-center dt-px-4"},[c("img",{class:"dt-h-8 dt-w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg",alt:"Workflow"})],-1),qa=c("div",{class:"dt-flex-shrink-0 dt-w-14"},null,-1);ha.render=function(t,e,a,n,l,r){const d=m("outline-close-icon"),s=m("menus");return $((i(),u("div",_a,[f(j,{"enter-active-class":"dt-transition-opacity dt-ease-linear dt-duration-300","enter-from-class":"dt-opacity-0","enter-to-class":"dt-opacity-100","leave-active-class":"dt-transition-opacity dt-ease-linear dt-duration-300","leave-from-class":"dt-opacity-100","leave-to-class":"dt-opacity-0"},{default:w((()=>[$(c("div",xa,null,512),[[O,t.show]])])),_:1}),f(j,{"enter-active-class":"dt-transition dt-ease-in-out dt-duration-300 dt-transform","enter-from-class":"dt--translate-x-full","enter-to-class":"dt-translate-x-0","leave-active-class":"dt-transition dt-ease-in-out dt-duration-300 dt-transform","leave-from-class":"dt-translate-x-0","leave-to-class":"dt--translate-x-full"},{default:w((()=>[$(c("div",wa,[f(j,{"enter-active-class":"dt-ease-in-out dt-duration-300","enter-from-class":"dt-opacity-0","enter-to-class":"dt-opacity-100","leave-active-class":"dt-ease-in-out dt-duration-300","leave-from-class":"dt-opacity-100","leave-to-class":"dt-opacity-0"},{default:w((()=>[$(c("div",Ca,[c("button",{class:"dt-ml-1 dt-flex dt-items-center dt-justify-center dt-h-10 dt-w-10 dt-rounded-full\n                                        focus:dt-outline-none focus:dt-ring-2 focus:dt-ring-inset focus:dt-ring-white",onClick:e[0]||(e[0]=k((e=>t.$emit("close")),["prevent"]))},[Pa,f(d,{class:"dt-text-white"})])],512),[[O,t.show]])])),_:1}),c("div",ka,[Aa,f(s)])],512),[[O,t.show]])])),_:1}),qa],512)),[[O,t.show]])};var Ta=p({name:"Sidebar",components:{Menus:ga}});const Sa={class:"dt-hidden md:dt-flex md:dt-flex-shrink-0"},Ba={class:"dt-flex dt-flex-col dt-w-64"},Da={class:"dt-flex dt-flex-col dt-h-0 dt-flex-1 dt-border-r dt-border-gray-200 dt-bg-white"},La={class:"dt-flex-1 dt-flex dt-flex-col dt-pt-5 dt-pb-4 dt-overflow-y-auto"},Ia=c("div",{class:"dt-flex dt-items-center dt-flex-shrink-0 dt-px-4"},[c("h1",{class:"dt-text-3xl dt-font-extralight"},[T("Vue3 "),c("span",{class:"dt-font-light"},"DataTable")])],-1);Ta.render=function(t,e,a,n,l,r){const d=m("menus");return i(),u("div",Sa,[c("div",Ba,[c("div",Da,[c("div",La,[Ia,f(d)])])])])};var $a=p({name:"Layout",components:{OutlineHamburgerIcon:F,OffCanvas:ha,Sidebar:Ta},props:{title:{type:String,required:!0}},setup(){const t=B(!1);return{showSideBar:t,toggleSidebar:()=>{t.value=!t.value}}}});const Oa={class:"dt-h-screen dt-flex dt-overflow-hidden dt-bg-blue-50"},ja={class:"dt-flex dt-flex-col dt-w-0 dt-flex-1 dt-overflow-hidden"},Ma={class:"md:dt-hidden dt-pl-1 dt-pt-1 sm:dt-pl-3 sm:dt-pt-3"},Na=c("span",{class:"dt-sr-only"},"Open sidebar",-1),Ra={class:"dt-flex-1 dt-relative dt-z-0 dt-overflow-y-auto focus:dt-outline-none",tabindex:"0"},Fa={class:"dt-py-6"},za={class:"dt-max-w-full dt-px-4 sm:dt-px-6 md:dt-px-8"},Wa=["textContent"],Ha={class:"dt-max-w-full dt-px-4 sm:dt-px-6 md:dt-px-8"},Ga={class:"dt-py-8"};$a.render=function(t,e,a,n,l,r){const d=m("off-canvas"),s=m("sidebar"),o=m("OutlineHamburgerIcon");return i(),u("div",Oa,[f(d,{show:t.showSideBar,onClose:t.toggleSidebar},null,8,["show","onClose"]),f(s),c("div",ja,[c("div",Ma,[c("button",{class:"dt--ml-0.5 dt--mt-0.5 dt-h-12 dt-w-12 dt-inline-flex dt-items-center dt-justify-center\n                            dt-rounded-md dt-text-gray-500 hover:dt-text-gray-900 focus:dt-outline-none focus:dt-ring-2\n                            focus:dt-ring-inset focus:dt-ring-indigo-500",onClick:e[0]||(e[0]=k(((...e)=>t.toggleSidebar&&t.toggleSidebar(...e)),["prevent"]))},[Na,f(o)])]),c("main",Ra,[c("div",Fa,[c("div",za,[c("h1",{class:"dt-text-2xl dt-font-semibold dt-text-gray-900",textContent:P(t.title)},null,8,Wa)]),c("div",Ha,[c("div",Ga,[y(t.$slots,"default")])])])])])])};const Ua={};Ua.render=function(t,e){return i(),u("div")};var Ea=[{id:1,first_name:"Misti",last_name:"Strase",email:"mstrase0@instagram.com",gender:"Non-binary",ip_address:"151.38.32.165"},{id:2,first_name:"Valentina",last_name:"Bonas",email:"vbonas1@is.gd",gender:"Agender",ip_address:"103.10.225.246"},{id:3,first_name:"Harriot",last_name:"Sperski",email:"hsperski2@intel.com",gender:"Male",ip_address:"129.200.82.11"},{id:4,first_name:"Egbert",last_name:"Fogden",email:"efogden3@si.edu",gender:"Genderqueer",ip_address:"12.0.191.150"},{id:5,first_name:"Robenia",last_name:"Lilliman",email:"rlilliman4@cmu.edu",gender:"Bigender",ip_address:"201.9.121.182"},{id:6,first_name:"Norby",last_name:"Tamburi",email:"ntamburi5@sakura.ne.jp",gender:"Agender",ip_address:"135.122.0.176"},{id:7,first_name:"Genovera",last_name:"Rodwell",email:"grodwell6@youtube.com",gender:"Non-binary",ip_address:"20.253.81.95"},{id:8,first_name:"Sinclair",last_name:"Showell",email:"sshowell7@imdb.com",gender:"Genderqueer",ip_address:"240.214.146.150"},{id:9,first_name:"Timothee",last_name:"Oger",email:"toger8@cnbc.com",gender:"Genderqueer",ip_address:"134.79.160.170"},{id:10,first_name:"Cosetta",last_name:"Cousen",email:"ccousen9@oaic.gov.au",gender:"Bigender",ip_address:"159.26.98.195"},{id:11,first_name:"Eward",last_name:"Sole",email:"esolea@histats.com",gender:"Female",ip_address:"61.99.245.53"},{id:12,first_name:"Alastair",last_name:"Bello",email:"abellob@blogger.com",gender:"Male",ip_address:"4.84.129.207"},{id:13,first_name:"Velvet",last_name:"Odom",email:"vodomc@digg.com",gender:"Polygender",ip_address:"111.3.168.1"},{id:14,first_name:"Diannne",last_name:"Bloxland",email:"dbloxlandd@google.com.au",gender:"Agender",ip_address:"153.65.158.248"},{id:15,first_name:"Rubia",last_name:"Cobson",email:"rcobsone@goodreads.com",gender:"Male",ip_address:"27.229.201.137"},{id:16,first_name:"Grange",last_name:"Waleran",email:"gwaleranf@sitemeter.com",gender:"Genderfluid",ip_address:"137.50.247.251"},{id:17,first_name:"Natty",last_name:"Seller",email:"nsellerg@dagondesign.com",gender:"Male",ip_address:"117.100.214.219"},{id:18,first_name:"Gerhard",last_name:"Fetherstone",email:"gfetherstoneh@e-recht24.de",gender:"Bigender",ip_address:"160.126.243.174"},{id:19,first_name:"Broddie",last_name:"Roper",email:"broperi@nature.com",gender:"Male",ip_address:"32.174.131.236"},{id:20,first_name:"Violette",last_name:"Maudett",email:"vmaudettj@scientificamerican.com",gender:"Agender",ip_address:"234.158.45.215"},{id:21,first_name:"Ingmar",last_name:"Kyme",email:"ikymek@a8.net",gender:"Polygender",ip_address:"246.220.100.50"},{id:22,first_name:"Rosalie",last_name:"Meo",email:"rmeol@answers.com",gender:"Male",ip_address:"163.164.249.16"},{id:23,first_name:"Cammi",last_name:"Whitwell",email:"cwhitwellm@bloglovin.com",gender:"Genderfluid",ip_address:"136.205.204.225"},{id:24,first_name:"Taryn",last_name:"Gerardi",email:"tgerardin@usnews.com",gender:"Female",ip_address:"245.66.226.113"},{id:25,first_name:"Ettie",last_name:"Brunskill",email:"ebrunskillo@japanpost.jp",gender:"Polygender",ip_address:"141.71.5.149"},{id:26,first_name:"Jena",last_name:"Mingardo",email:"jmingardop@ucla.edu",gender:"Polygender",ip_address:"44.110.135.50"},{id:27,first_name:"Hyatt",last_name:"Paunton",email:"hpauntonq@smugmug.com",gender:"Bigender",ip_address:"150.253.235.13"}],Va=p({name:"App",components:{Layout:$a},setup(){const t=Ea,e=(()=>{const t=B(window.location.pathname),e=h((()=>ua[t.value]||{title:"Not found!",component:Ua}));return{setRoute:e=>{t.value=e,window.history.pushState(null,ua[e].title,e)},isActive:e=>t.value===e,routeUrl:t,currentRoute:e}})();return M("route",e),{tableData:t,currentRoute:e.currentRoute}}});Va.render=function(t,e,a,n,l,r){const d=m("layout");return i(),x(d,{title:t.currentRoute.title},{default:w((()=>[(i(),x(N(t.currentRoute.component),{data:t.tableData},null,8,["data"]))])),_:1},8,["title"])};R(Va).mount("#app");

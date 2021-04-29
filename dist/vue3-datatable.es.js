var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&l(e,s,r[s]);if(a)for(var s of a(r))n.call(r,s)&&l(e,s,r[s]);return e};import{defineComponent as s,pushScopeId as o,popScopeId as i,openBlock as d,createBlock as u,withScopeId as g,createVNode as c,computed as p,mergeProps as v,toHandlers as b,renderSlot as y,resolveComponent as m,withDirectives as f,toDisplayString as h,vShow as x,withModifiers as P,withCtx as w,Fragment as C,createCommentVNode as k,renderList as _,createTextVNode as I,ref as q,watch as O}from"vue";var $=s({name:"Loading"});const L=g("data-v-561e1d5a");o("data-v-561e1d5a");const S={class:"spinner absolute h-full w-full flex justify-center"},B=c("div",{class:"spinner-item absolute w-20 h-20 rounded-full"},null,-1),j=c("div",{class:"spinner-item absolute w-20 h-20 rounded-full"},null,-1);i();const N=L(((e,t,a,n,l,r)=>(d(),u("div",S,[B,j]))));$.render=N,$.__scopeId="data-v-561e1d5a";var D=s({name:"PaginationLink",props:{active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},setup:e=>({linkClasses:p((()=>e.active?"bg-gray-200 border-gray-300 text-gray-800 hover:bg-gray-200":e.disabled?"cursor-not-allowed text-gray-400":"border-gray-300 bg-white text-gray-500 hover:bg-gray-50"))})});D.render=function(e,t,a,n,l,s){return d(),u("a",v({href:"#",class:["relative inline-flex items-center px-4 py-2 border text-sm font-medium",e.linkClasses]},b(r({},e.$attrs))),[y(e.$slots,"default")],16)};var F=s({name:"Pagination",components:{PaginationLink:D},props:{total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!1,default:1},maxVisibleButtons:{type:Number,required:!1,default:5}},emits:["changed"],setup(e,{emit:t}){const a=p((()=>(e.currentPage-1)*e.perPage+1)),n=p((()=>e.total>e.currentPage*e.perPage?e.currentPage*e.perPage:e.total)),l=p((()=>Math.ceil(e.total/e.perPage))),r=p((()=>1===e.currentPage?1:e.currentPage===l.value?l.value-e.maxVisibleButtons+1:e.currentPage-1)),s=p((()=>Math.min(r.value+e.maxVisibleButtons-1,l.value))),o=p((()=>{const e=[];for(let t=r.value;t<=s.value;t+=1)t>0&&e.push(t);return e})),i=p((()=>1===e.currentPage)),d=p((()=>e.currentPage===l.value)),u=e=>{t("changed",e)};return{currentStart:a,currentEnd:n,totalPages:l,pages:o,isInFirstPage:i,isInLastPage:d,goToPageNumber:u,gotoFirstPage:()=>u(1),gotoLastPage:()=>u(l.value),gotoNextPage:()=>u(e.currentPage>=l.value?l.value:e.currentPage+1),gotoPreviousPage:()=>u(e.currentPage<=1?1:e.currentPage-1),showDots:(e="left")=>{const t="left"===e?1:l.value,a="left"===e?2:l.value-1;return!o.value.includes(t)||!o.value.includes(a)}}}});const Q={key:0,class:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"},T={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},M={class:"text-sm text-gray-700"},E=I(" Showing "),R=I(" to "),z=I(" of "),A=I(" results. "),V={key:0},G={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},H=c("span",{class:"sr-only"},"Go to first",-1),J=I(" « "),K=c("span",{class:"sr-only"},"Previous",-1),U=I(" ‹ "),W=I(" 1 "),X=I(" ... "),Y=I(" ... "),Z=c("span",{class:"sr-only"},"Next",-1),ee=I(" › "),te=c("span",{class:"sr-only"},"Go to Last",-1),ae=I(" » ");F.render=function(e,t,a,n,l,r){const s=m("pagination-link");return e.totalPages?(d(),u("div",Q,[c("div",T,[f(c("div",null,[c("p",M,[y(e.$slots,"pagination-info",{currentStart:e.currentStart,currentEnd:e.currentEnd,total:e.total},(()=>[E,c("span",{class:"font-medium",textContent:h(e.currentStart)},null,8,["textContent"]),R,c("span",{class:"font-medium",textContent:h(e.currentEnd)},null,8,["textContent"]),z,c("span",{class:"font-medium",textContent:h(e.total)},null,8,["textContent"]),A]))])],512),[[x,e.total]]),e.totalPages>1?(d(),u("div",V,[c("nav",G,[c(s,{disabled:e.isInFirstPage,class:"rounded-l-md",onClick:P(e.gotoFirstPage,["prevent"])},{default:w((()=>[H,J])),_:1},8,["disabled","onClick"]),c(s,{disabled:e.isInFirstPage,onClick:P(e.gotoPreviousPage,["prevent"])},{default:w((()=>[K,U])),_:1},8,["disabled","onClick"]),e.showDots("left")?(d(),u(C,{key:0},[c(s,{disabled:e.isInFirstPage,active:e.isInFirstPage,onClick:P(e.gotoFirstPage,["prevent"])},{default:w((()=>[W])),_:1},8,["disabled","active","onClick"]),c(s,null,{default:w((()=>[X])),_:1})],64)):k("",!0),(d(!0),u(C,null,_(e.pages,((t,a)=>(d(),u(s,{key:`pages_${a}`,active:t===e.currentPage,disabled:t===e.currentPage,onClick:P((a=>e.goToPageNumber(t)),["prevent"])},{default:w((()=>[I(h(t),1)])),_:2},1032,["active","disabled","onClick"])))),128)),e.showDots("right")?(d(),u(C,{key:1},[c(s,null,{default:w((()=>[Y])),_:1}),c(s,{disabled:e.isInLastPage,active:e.isInLastPage,onClick:P(e.gotoLastPage,["prevent"])},{default:w((()=>[I(h(e.totalPages),1)])),_:1},8,["disabled","active","onClick"])],64)):k("",!0),c(s,{disabled:e.isInLastPage,onClick:P(e.gotoNextPage,["prevent"])},{default:w((()=>[Z,ee])),_:1},8,["disabled","onClick"]),c(s,{disabled:e.isInLastPage,class:"rounded-r-md",onClick:P(e.gotoLastPage,["prevent"])},{default:w((()=>[te,ae])),_:1},8,["disabled","onClick"])])])):k("",!0)])])):k("",!0)};const ne={},le={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"};ne.render=function(e,t){return d(),u("td",le,[y(e.$slots,"default")])};const re={},se={scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"};re.render=function(e,t){return d(),u("th",se,[y(e.$slots,"default")])};const oe=[5,10,15,25,50,75,100],ie=s({components:{Loading:$,Pagination:F,TableBody:ne,TableHead:re},props:{rows:{type:Array,required:!0},columns:{type:Object,required:!1,default:null},pagination:{type:Object,required:!1,default:null},striped:{type:Boolean,required:!1,default:!1},sn:{type:Boolean,required:!1,default:!1},filter:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},perPageOptions:{type:Array,required:!1,default:()=>oe},query:{type:Object,required:!1,default:()=>({})}},emits:["loadData"],setup(e,{emit:t}){var a,n;const l=q({page:(null==(a=e.pagination)?void 0:a.page)||1,search:e.query.search||"",per_page:(null==(n=e.pagination)?void 0:n.per_page)||10}),s=p((()=>!!e.pagination)),o=p((()=>{var t;return(null==(t=e.pagination)?void 0:t.total)||e.rows.length})),i=p((()=>e.rows)),d=p((()=>e.columns?e.columns:0===e.rows.length?{}:Object.keys(e.rows[0]).reduce(((e,t)=>r(r({},e),{[t]:t})),{}))),u=p((()=>s.value?l.value.per_page*(l.value.page-1):0));O((()=>r({},l.value)),(()=>{t("loadData",l.value)}),{deep:!0,immediate:!0});const g=((e,t=400)=>{let a;return(...n)=>{clearTimeout(a),a=setTimeout((()=>e(...n)),t)}})((e=>{l.value=r(r({},l.value),{page:1,search:e.target.value})}));return{tableQuery:l,showPagination:s,totalData:o,tableRows:i,tableColumns:d,paginatedRowIndex:u,uniqueId:()=>Math.floor(100*Math.random()),handlePageChange:e=>{l.value.page=e},handleOnSearchChange:g,handleOnChange:e=>{const{name:t,value:a}=e.target;l.value=r(r({},l.value),{page:1,[t]:a})}}}});const de=g("data-v-e0ec4574");o("data-v-e0ec4574");const ue={class:"data-table flex flex-col"},ge={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},ce={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},pe={key:0,class:"filter-wrapper mb-2.5 w-full"},ve={class:"w-64"},be=c("label",{for:"email",class:"sr-only"},"Search",-1),ye={class:"relative rounded-md shadow-sm"},me=c("div",{class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},[c("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[c("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),fe={class:"table-wrapper relative shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},he={key:1,class:"pagination-wrapper flex bg-white items-center"},xe={class:"pr-4"},Pe=c("label",{for:"location",class:"sr-only"},"Per page",-1),we={class:"min-w-full divide-y divide-gray-200"},Ce={class:"bg-gray-50"},ke={key:2,class:"pagination-wrapper"};i();const _e=de(((e,t,a,n,l,r)=>{const s=m("Loading"),o=m("pagination"),i=m("table-head"),g=m("table-body");return d(),u("div",ue,[c("div",ge,[c("div",ce,[e.filter?(d(),u("div",pe,[c("div",ve,[be,c("div",ye,[c("input",{value:e.tableQuery.search,type:"search",name:"search",class:"focus:ring-0 block w-full pr-10 sm:text-sm border-gray-300 rounded-md",onInput:t[1]||(t[1]=(...t)=>e.handleOnSearchChange&&e.handleOnSearchChange(...t))},null,40,["value"]),me])])])):k("",!0),c("div",fe,[e.loading?y(e.$slots,"loading",{key:0},(()=>[c(s)]),{},!0):k("",!0),e.showPagination?(d(),u("div",he,[c(o,{class:"flex-1",total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},null,8,["total","current-page","per-page","onChanged"]),c("div",xe,[Pe,c("select",{value:e.tableQuery.per_page,name:"per_page",class:"block w-full pl-3 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md",onInput:t[2]||(t[2]=(...t)=>e.handleOnChange&&e.handleOnChange(...t))},[(d(!0),u(C,null,_(e.perPageOptions,(t=>(d(),u("option",{key:`per_page_${t}`,value:t,selected:t===e.tableQuery.per_page,textContent:h(t)},null,8,["value","selected","textContent"])))),128))],40,["value"])])])):k("",!0),c("table",we,[c("thead",Ce,[c("tr",null,[e.sn?y(e.$slots,"thead-sn",{key:0},(()=>[c(i,{textContent:h("S.N.")},null,8,["textContent"])]),{},!0):k("",!0),y(e.$slots,"thead",{column:e.tableColumns},(()=>[(d(!0),u(C,null,_(e.tableColumns,((e,t)=>(d(),u(i,{key:`datatable-thead-th-${t}`,textContent:h(e)},null,8,["textContent"])))),128))]),!0)])]),c("tbody",null,[(d(!0),u(C,null,_(e.tableRows,((t,a)=>(d(),u("tr",{key:`datatable-tbody-${e.uniqueId()}-${a}`,class:e.striped&&a%2?"bg-gray-50":"bg-white"},[e.sn?y(e.$slots,"tbody-sn",{key:0,sn:a+1},(()=>[c(g,{textContent:h(a+1+e.paginatedRowIndex)},null,8,["textContent"])]),!0):k("",!0),y(e.$slots,"tbody",{index:a,row:t},(()=>[(d(!0),u(C,null,_(e.tableColumns,((a,n)=>(d(),u(g,{key:`datatable-tbody-td-${e.uniqueId()}-${n}`,name:a,textContent:h(t[n])},null,8,["name","textContent"])))),128))]),!0)],2)))),128))])]),e.showPagination?(d(),u("div",ke,[c(o,{total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},null,8,["total","current-page","per-page","onChanged"])])):k("",!0)])])])])}));ie.render=_e,ie.__scopeId="data-v-e0ec4574";export{ie as DataTable,ne as TableBody,re as TableHead};
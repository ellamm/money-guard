"use strict";(self.webpackChunkmoney_guard=self.webpackChunkmoney_guard||[]).push([[417],{5417:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var i=a(9264),n=a(2119);const r=n.Ay.div`
  width: 100%;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`,d=n.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);

  padding: 16px 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 16px 28px;
    margin-bottom: 0;
  }
`,o=n.Ay.div`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,s=n.Ay.div`
  margin-bottom: 16px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`,c=n.Ay.div`
  font-weight: bold;
  .income {
    color: var(--yellow);
  }

  .expenses {
    color: var(--dashboard-text);
  }
`,l=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 28px;
  }
`,p=n.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 28px;
  }
`,x=n.Ay.div`
  display: block;
  min-width: 24px;
  min-height: 24px;
  background-color: ${e=>e.color};
  border-radius: 2px;
`,m=n.Ay.div`
  display: flex;
  align-items: center;
`,h=n.Ay.div`
  text-align: end;
`,g=n.Ay.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px 16px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
    padding: 16px 28px;
  }
`,b=(n.Ay.div`
  text-align: start;
`,n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 16px;
`),u=(n.Ay.div`
  text-align: end;
`,n.Ay.div`
  text-align: end;
`),w=[{name:"Main expenses",color:"#FED057"},{name:"Products",color:"#FFD8D0"},{name:"Car",color:"#FD9498"},{name:"Self care",color:"#C5BAFF"},{name:"Child care",color:"#6E78E8"},{name:"Household products",color:"#4A56E2"},{name:"Education",color:"#81E1FF"},{name:"Leisure",color:"#24CCA7"},{name:"Other expenses",color:"#00AD84"},{name:"Entertainment",color:"#FF69B4"},{name:"Income",color:"#FFB627"}];var f=a(579);const y=e=>{let{reduxData:t}=e;return(0,f.jsxs)(r,{children:[(0,f.jsxs)(d,{children:[(0,f.jsx)(o,{children:(0,f.jsx)("span",{children:"Category"})}),(0,f.jsx)(o,{children:(0,f.jsx)("span",{children:"Sum"})})]}),(0,f.jsx)(s,{children:t.categoryExpenses.filter((e=>"0.00"!==e.total)).map((e=>{const t=w.find((t=>t.name===e.name));return(0,f.jsx)(g,{children:(0,f.jsxs)(m,{children:[(0,f.jsx)(x,{color:t.color}),(0,f.jsxs)(b,{children:[(0,f.jsx)("span",{children:e.name}),(0,f.jsx)(h,{children:e.total})]})]})},e.name)}))}),(0,f.jsxs)(c,{children:[(0,f.jsxs)(l,{children:[(0,f.jsx)("span",{children:"Expenses:"}),(0,f.jsx)(u,{className:"expenses",children:t.totalExpenses.toFixed(2)})]}),(0,f.jsxs)(p,{children:[(0,f.jsx)("span",{children:"Income:"}),(0,f.jsx)(u,{className:"income",children:t.totalIncome.toFixed(2)})]})]})]})};var j=a(5043),v=(a(823),a(7290)),S=a(1154),A=a(8750);const D=(0,n.Ay)(A.Ay)`
  font-size: 18px;
  width: 280px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 158px;
  }
  @media screen and (min-width: 1280px) {
    width: 181px;
  }

  .Select__control {
    background-color: transparent;
    height: 50px;
    width: 100%;
    border: 0;
    box-shadow: none;
    cursor: pointer;
    color: rgba(251, 251, 251, 1);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background: rgba(74, 86, 226, 0.1);

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.6);
    }
  }

  .Select__placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .Select__single-value {
    color: rgba(251, 251, 251, 1);
  }

  .Select__control--is-focused {
    border: 0;
    outline: none;
    box-shadow: 5px 0px 50px 10px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.6);
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    color: rgba(255, 255, 255, 0.1);
    width: auto;
  }

  .Select__menu {
    background: linear-gradient(
      210deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 43.14%,
      rgba(106, 70, 165, 1) 73.27%,
      rgba(133, 93, 175, 0.9) 120.03%
    );
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    color: rgba(251, 251, 251, 1);
    font-size: 16px;
    border-radius: 8px;
    max-height: 352px;
  }

  .Select__menu-list {
    height: 100%;
  }

  .css-t3ipsp-control {
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
  .Select__option--is-focused {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
  .Select__option--is-selected {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
  }

  .Select__dropdown-indicator {
    color: rgba(251, 251, 251, 1);

    &:hover {
      color: rgba(251, 251, 251, 1);
    }
  }
`,_=e=>e.isF?(0,f.jsx)(v.c.DropdownIndicator,{...e,children:(0,f.jsx)(S.prc,{})}):(0,f.jsx)(v.c.DropdownIndicator,{...e,children:(0,f.jsx)(S.KZO,{})}),k={menuList:e=>({...e,"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#BFB4DD",borderRadius:"12px"}})},F=e=>{let{onChange:t,options:a,value:i,className:n}=e;return(0,f.jsx)("div",{className:n,children:(0,f.jsx)(D,{value:((e,t)=>e?e.find((e=>e.value===t)):"")(a,i),placeholder:"Select a category",components:{DropdownIndicator:_},onChange:e=>t(e),options:a,classNamePrefix:"Select",styles:k})})};const C=function(e){let{getYear:t,getMonth:a,selectedMonth:i,selectedYear:n}=e;const r=["January","February","March","April","May","June","July","August","September","October","November","December"].map(((e,t)=>({value:t+1,label:e}))),d=(new Date).getFullYear(),o=Array.from({length:10},((e,t)=>({value:d-t,label:String(d-t)})));return(0,f.jsxs)(j.Fragment,{children:[(0,f.jsx)(F,{options:r,value:i,onChange:a,className:"selectMonth",name:"selectMonth"}),(0,f.jsx)(F,{options:o,value:n,onChange:t,className:"selectYear",name:"selectYear",styles:{menuList:e=>({...e,"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#BFB4DD",borderRadius:"12px"}})}})]})};var E=a(461),M=a(6058);const W=n.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--dashboard-text);

  font-size: 18px;
  font-weight: 600;
`,B=n.Ay.div`
  max-width: 100%;
  /* width: auto; */
  /* height: auto; */
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1267px) {
    margin-top: 20px;
    //max-width: 100%;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`,N=(0,n.Ay)(M.nu)``;E.t1.register(E.Bs,E.m_,E.s$);const Y=e=>{let{reduxData:t,categories:a}=e;const i={labels:a,datasets:[{data:t.categoryExpenses.map((e=>e.total)),backgroundColor:a.map((e=>{const t=w.find((t=>t.name===e));return t?t.color:"#ffff"})),borderWidth:.5,cutout:"60%"}]};return(0,f.jsxs)(B,{children:[(0,f.jsxs)(W,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:["\u20b4 ",t.totalExpenses.toFixed(2)]}),(0,f.jsx)(N,{data:i,options:{borderRadius:2,hoverBorderWidth:1,plugins:{legend:{display:!1},tooltip:{enabled:!0}}}})]})};var P=a(9490),z=a(2166),I=a(9340);const L=e=>e.statistics.statisticsData,R=e=>e.statistics.categories,{StatSection:J,RightSideStatWrapper:O,DatePickerWrapper:T,DataWrapper:$,TitleStyled:H,LeftSideWrapper:K}=a(4448),U=()=>{const e=(0,z.useDispatch)(),[t,a]=(0,j.useState)((new Date).getFullYear()),[n,r]=(0,j.useState)((new Date).getMonth()+1),[d,o]=(0,j.useState)(s(t,n));function s(e,t){const a=new URLSearchParams;return a.append("year",e),a.append("month",t),a.toString()}(0,j.useEffect)((()=>{e((0,I.b)())}),[e]),(0,j.useEffect)((()=>{const e=s(t,n);o(e)}),[t,n,d]),(0,j.useEffect)((()=>{e((0,I.m)(d))}),[d,e]);const c=(0,z.useSelector)(L),l=(0,z.useSelector)(R);return(0,f.jsxs)(J,{children:[(0,f.jsx)(P.mg,{children:(0,f.jsx)("title",{children:"Statisctics"})}),(0,f.jsxs)(O,{children:[(0,f.jsxs)(K,{children:[(0,f.jsx)(H,{children:"Statistics"}),l&&c?(0,f.jsx)(Y,{reduxData:c,categories:l,style:{boxSizing:"border-box",display:"block",height:"100%",width:"100%"}}):(0,f.jsx)(i.x,{})]}),(0,f.jsxs)($,{children:[(0,f.jsx)(T,{children:(0,f.jsx)(C,{getYear:e=>{a(e.value)},getMonth:e=>{r(e.value)},selectedMonth:n,selectedYear:t})}),l&&c?(0,f.jsx)(y,{reduxData:c}):(0,f.jsx)(i.x,{})]})]})]})}},4448:(e,t,a)=>{a.r(t),a.d(t,{DataWrapper:()=>s,DatePickerWrapper:()=>o,LeftSideWrapper:()=>d,RightSideStatWrapper:()=>r,StatSection:()=>n,TitleStyled:()=>c});var i=a(2119);const n=i.Ay.div`
  color: var(--white);
  margin-top: 40px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  max-width: 100%;
  padding: 0px 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin: 0 0 0 -444px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    margin: 40px 0 0 0;
    padding: 0;
  }
`,r=i.Ay.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`,d=i.Ay.div`
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 68px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
    margin-left: 69px;
  }
`,o=i.Ay.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 10px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
  }
`,s=i.Ay.div`
  width: 100%;
  padding-bottom: 45px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
  }
`,c=i.Ay.h1`
  color: var(--white, #fbfbfb);
  text-align: start;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`}}]);
//# sourceMappingURL=417.ccec0f3b.chunk.js.map
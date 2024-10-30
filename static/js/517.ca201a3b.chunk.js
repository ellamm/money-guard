"use strict";(self.webpackChunkmoney_guard=self.webpackChunkmoney_guard||[]).push([[517],{155:(e,t,n)=>{n.d(t,{A:()=>i});n(5043);const i=n.p+"static/media/logo.dce3145872188e100148c46882b30412.svg"},4706:(e,t,n)=>{n.d(t,{S:()=>c});var i=n(5475),o=n(2119),r=n(2553),a=n(579);const d=o.AH`
  width: 300px;
  height: 50px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,l=(0,o.Ay)(r.A)`
  && {
    ${d}
    color: white;
    background: var(
      --button-gradient,
      linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
    );
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

    &:hover {
      color: #3a2f43;
    }
  }
`,s=(0,o.Ay)(i.k2)`
  && {
    ${d}
    background-color: #ffffff;
    color: #623f8b;
  }
`,c=e=>{let{isNavLink:t,customStyles:n,...i}=e;const o=t?s:l;return(0,a.jsx)(o,{...i})}},8224:(e,t,n)=>{n.d(t,{A:()=>x});var i=n(155),o=n(2166),r=n(2119);const a=r.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 12px 68px;
  margin-bottom: 20px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  line-height: 1.5;
  font-size: 18px;
  color: rgba(251, 251, 251, 1);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;
`,d=r.Ay.h3`
  margin-bottom: 52px;
  color: var(--white);
  font-size: 27px;
  font-weight: 400;
  line-height: 1.5;
`,l=r.Ay.p`
  font-size: 18px;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 52px;
`;var s=n(700),c=n(5166),p=n(579);function x(){const e=(0,o.useDispatch)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("img",{src:i.A,alt:"Logo MoneyGuard",width:"36px",height:"36px"}),(0,p.jsx)(d,{children:"Money Guard"}),(0,p.jsx)(l,{children:"Are you sure you want to log out?"}),(0,p.jsx)(a,{type:"submit",onClick:()=>{e((0,s.logOut)()),e((0,c.YK)())},children:"Logout"})]})}},7835:(e,t,n)=>{n.d(t,{A:()=>g});var i=n(5043),o=n(7950),r=n(2119);const a=r.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;

  @media screen and (min-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  }
`,d=r.Ay.div`
  width: 511px;
  padding: 41px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, var(--purple), #623f8b);
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }
`,l=r.Ay.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0;
  line-height: 0;
  border: none;
  cursor: pointer;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`,s=r.Ay.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 13px 68px;
  background-color: rgba(251, 251, 251, 1);
  border-radius: 20px;
  border: none;
  line-height: 1.5;
  font-size: 18px;
  letter-spacing: 1.8px;
  color: rgba(98, 63, 139, 1);
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
`;var c=n(2166),p=n(5166),x=n(579);const h=document.querySelector("#modal-root");function g(e){let{children:t,showCloseIcon:n=!0}=e;const r=(0,c.useDispatch)();(0,i.useEffect)((()=>{const e=e=>{"Escape"===e.code&&r((0,p.YK)())};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[r]);const g=e=>{"cancel"!==e.target.name&&"closeSvg"!==e.currentTarget.name||r((0,p.YK)())};return(0,o.createPortal)((0,x.jsx)(a,{onClick:e=>{e.currentTarget===e.target&&r((0,p.YK)())},children:(0,x.jsxs)(d,{children:[n&&(0,x.jsx)(l,{type:"button",name:"closeSvg",onClick:g,children:(0,x.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,x.jsx)("path",{d:"M1 1L17 17",stroke:"#FBFBFB"}),(0,x.jsx)("path",{d:"M1 17L17 0.999999",stroke:"#FBFBFB"})]})}),t,(0,x.jsx)(s,{type:"button",name:"cancel",onClick:g,children:"Cancel"})]})}),h)}},2517:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ve});var i=n(5043),o=n(5237),r=n(1434),a=n(2119);const d=a.Ay.div`
  width: 100%;
  height: 100%;
  max-width: 320px;
  min-height: 568px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 768px;
    width: unset;
  }
  @media screen and (min-width: 1280px) {
    width: 715px;
    height: 308px;
    margin: 40px 0 0 69px;
  }
`,l=a.Ay.div`
  width: 704px;
  height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 1280px) {
    width: 715px;
    height: 67px;
  }
`,s=a.Ay.div`
  color: var(--white);
  width: 543px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-left: 20px;
  align-items: center;
  height: 100%;

  @media screen and (min-width: 1280px) {
    width: 565px;
  }
`,c=a.Ay.div`
  color: var(--white);
`,p=a.Ay.div`
  color: var(--white);
  width: 684px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  align-items: center;
  margin-left: 20px;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }
`,x=a.Ay.div`
  width: 63px;
`,h=a.Ay.div`
  width: 11px;
  margin-left: 60px;
`,g=a.Ay.div`
  width: 70px;
  margin-left: 70px;
`,m=a.Ay.div`
  width: 114px;
  margin-left: 50px;

  @media screen and (min-width: 1280px) {
    margin-left: 90px;
  }
`,b=a.Ay.div`
  width: 70px;
  margin-right: 35px;
  color: ${e=>"expense"===e.type?"#ff868d":"var(--yellow)"};
  text-align: end;
`,u=a.Ay.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 91px;
`,f=a.Ay.div`
  height: 29px;
  display: flex;
  padding: 4px 12px;
  align-items: center;
  border-radius: 20px;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`,y=a.Ay.button`
  position: absolute;
  display: flex;
  bottom: 40px;
  right: 40px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  line-height: 1.5;
  font-size: 0;
  color: rgba(251, 251, 251, 1);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    bottom: 10px;
    right: 137.5px;
  }
`,w=a.Ay.div`
  width: 70px;
  margin-left: 70px;
`,j=(0,a.Ay)(r.tNe)`
  width: 24px;
  height: 24px;
`;var v=n(6314),k=n(7835),A=n(3892),S=(n(5015),n(899)),_=n(8750);const C=a.Ay.h2`
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: var(--white);

  @media screen and (min-width: 768px) {
    margin-bottom: 41px;
    font-size: 30px;
  }
`,z=a.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 12px 68px;
  margin-bottom: 20px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  line-height: 1.5;
  font-size: 18px;
  color: rgba(251, 251, 251, 1);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;
`,D=a.Ay.label`
  margin-bottom: 40px;
  width: 100%;
`,F=(0,a.Ay)(A.lV)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Select {
    width: 100%;
    margin-bottom: 42px;
  }

  .custom-input {
    box-sizing: border-box;
    display: inherit;
    width: 181px;
    background-color: transparent;
    border: none;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    padding-bottom: 8px;
    padding-top: 5px;
    padding-left: 21px;
  }

  .react-datepicker-wrapper {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .react-datepicker__input-container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    display: flex;
  }

  .date-icon {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    fill: var(--purple);

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`,N=(0,a.Ay)(A.D0)`
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  width: 181px;
  padding-bottom: 8px;
  padding-top: 5px;

  &::placeholder {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
    padding-left: 21px;

    &::placeholder {
      text-align: left;
    }
  }
`,I=(0,a.Ay)(_.Ay)`
  font-size: 18px;
  width: 100%;

  .Select__control {
    background-color: transparent;
    height: 35px;
    width: 100%;
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
    color: rgba(251, 251, 251, 1);
  }

  .Select__placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .Select__single-value {
    color: rgba(251, 251, 251, 1);
  }

  .Select__control:hover {
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .Select__control--is-focused {
    border: 0;
    box-shadow: none;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
      0deg,
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

  .Select__option--is-focused {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }

  .Select__option--is-selected {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 134, 141, 1);
  }

  .Select__dropdown-indicator {
    color: rgba(251, 251, 251, 1);

    &:hover {
      color: rgba(251, 251, 251, 1);
    }
  }

  @media screen and (max-width: 767px) {
    .Select__value-container {
      padding-left: 21px;
    }

    .Select__menu-list {
      max-height: 352px;
    }
  }
`,$=(0,a.Ay)(A.D0)`
  display: inherit;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 5px 5px 8px 10px;

  &::placeholder {
    text-align: left;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 767px) {
    padding-left: 21px;
    padding-bottom: 52px;
  }
`,E=a.Ay.label`
  width: 254px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 42px;
`,M=a.Ay.label`
  width: 181px;
  &:not(:last-child) {
    margin-right: 32px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }
`,L=a.Ay.div`
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,O=(0,a.Ay)(A.Kw)`
  color: #ff868d;
  font-size: 14px;
  margin-top: 2px;
`;var T=n(2166),Y=n(5166);const B=a.Ay.div`
  position: relative;
  width: 80px;
  height: 40px;
  background-color: var(--white);
  border-radius: 30px;
  cursor: pointer;
`,K=a.Ay.span`
  position: absolute;
  right: 100px;
  font-weight: 600;
  color: ${e=>{let{checked:t}=e;return t?"rgba(255, 255, 255, 0.60)":"var(--yellow)"}};
`,V=(0,a.Ay)(K)`
  left: 100px;
  color: ${e=>{let{checked:t}=e;return t?"#FF868D":"rgba(255, 255, 255, 0.60)"}};
`,q=a.Ay.div`
  position: absolute;
  top: 50%;
  transform: ${e=>{let{checked:t}=e;return`translateY(-50%) translateX(${t?"40px":"0"})`}};
  width: 44px;
  height: 44px;
  background-color: ${e=>{let{checked:t}=e;return t?"#FF868D":"var(--yellow)"}};
  box-shadow: ${e=>{let{checked:t}=e;return t?"0px 6px 15px 0px rgba(255, 134, 141, 0.50)":"0px 6px 15px 0px rgba(255, 199, 39, 0.50)"}};
  border-radius: 50%;
  transition: 0.3s;
  margin-left: ${e=>{let{checked:t}=e;return t?"0":"-4px"}};
`,P=a.Ay.div`
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: var(--white);
  top: 50%;
  left: 50%;
  transform: ${e=>{let{checked:t}=e;return`translate(-50%, -50%) rotate(${t?"0deg":"90deg"})`}};
  transition: 0.3s;
`,J=a.Ay.div`
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: var(--white);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  transition: 0.3s;
`;var H=n(579);const R=e=>{let{checked:t,onChange:n}=e;return(0,H.jsxs)(B,{onClick:()=>{n(!t)},children:[(0,H.jsx)(K,{checked:t,children:"Income"}),(0,H.jsx)(V,{checked:t,children:"Expense"}),(0,H.jsxs)(q,{checked:t,children:[(0,H.jsx)(P,{checked:t}),(0,H.jsx)(J,{checked:t})]})]})};var G=n(5912),W=n(2285),Q=n(7290),X=n(1154);const Z=e=>e.isFocused?(0,H.jsx)(Q.c.DropdownIndicator,{...e,children:(0,H.jsx)(X.prc,{})}):(0,H.jsx)(Q.c.DropdownIndicator,{...e,children:(0,H.jsx)(X.KZO,{})}),U={menuList:e=>({...e,"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#BFB4DD",borderRadius:"12px"}})},ee=e=>{let{onChange:t,options:n,value:i,className:o}=e;return(0,H.jsx)("div",{className:o,children:(0,H.jsx)(I,{value:((e,t)=>e?e.find((e=>e.value===t)):"")(n,i),placeholder:"Select a category",components:{DropdownIndicator:Z},onChange:e=>t(e),options:n,classNamePrefix:"Select",styles:U})})};var te=n(1899),ne=n.n(te),ie=n(6213);const oe=(0,S.Ik)({value:(0,S.ai)().positive().required("Amount is required"),comment:(0,S.Yj)().max(30,"Maximum must be 30 characters").required("Please fill in comment"),category:(0,S.Yj)().min(3).oneOf(["Main expenses","Products","Car","Self care","Child care","Household products","Education","Leisure","Other expenses","Entertainment"])}),re={type:"expense",category:"",value:"",date:new Date,comment:""},ae=(0,i.forwardRef)(((e,t)=>{let{value:n,onClick:i}=e;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("button",{type:"button",className:"custom-input",onClick:i,ref:t,children:n}),(0,H.jsx)(W.TDs,{className:"date-icon",onClick:i})]})}));function de(){const e=(0,T.useDispatch)(),[t,n]=(0,i.useState)((()=>{var e;return null!==(e=JSON.parse(window.localStorage.getItem("categories")))&&void 0!==e?e:[]}));(0,i.useEffect)((()=>{0===t.length&&(async()=>{try{const e=await ie.A.get("/transactions/categories");n(e.data)}catch(e){return e.message}})(),localStorage.setItem("categories",JSON.stringify(t))}),[t]);const o=t.map((e=>({value:e,label:e})));return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(C,{children:"Add transaction"}),(0,H.jsx)(A.l1,{initialValues:re,validationSchema:oe,onSubmit:(t,n)=>{let{resetForm:i}=n;e((0,G.addTransaction)(t)),i(),e((0,Y.YK)())},children:e=>{let{values:t,setFieldValue:n,validate:i,...r}=e;return(0,H.jsxs)(F,{autoComplete:"off",children:[(0,H.jsx)(E,{children:(0,H.jsx)(R,{checked:"expense"===t.type,onChange:e=>{n("type",e?"expense":"income")}})}),"expense"===t.type?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(ee,{options:o,value:t.category,onChange:e=>n("category",e.value),className:"Select",name:"category"}),(0,H.jsx)(O,{name:"category",component:"div"})]}):t.category="",(0,H.jsxs)(L,{children:[(0,H.jsxs)(M,{children:[(0,H.jsx)(N,{type:"number",name:"value",placeholder:"0.00"}),(0,H.jsx)(O,{name:"value",component:"div"})]}),(0,H.jsx)(M,{children:(0,H.jsx)(A.D0,{name:"date",validate:i,children:e=>{let{field:i,form:o,meta:r}=e;return(0,H.jsx)(ne(),{name:"date",dateFormat:"dd.MM.yyyy",maxDate:new Date,selected:t.date||null,onChange:e=>n("date",e),shouldCloseOnSelect:!0,customInput:(0,H.jsx)(ae,{})})}})})]}),(0,H.jsxs)(D,{children:[(0,H.jsx)($,{type:"textarea",name:"comment",placeholder:"Comment"}),(0,H.jsx)(O,{name:"comment",component:"div"})]}),(0,H.jsx)(z,{type:"submit",children:"Add"})]})}})]})}const le=a.Ay.h2`
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: var(--white);

  @media screen and (min-width: 768px) {
    margin-bottom: 41px;
    font-size: 30px;
  }
`,se=a.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 12px 68px;
  margin-bottom: 20px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  line-height: 1.5;
  font-size: 18px;
  color: rgba(251, 251, 251, 1);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;
`,ce=a.Ay.label`
  margin-bottom: 40px;
  width: 100%;
`,pe=(0,a.Ay)(A.lV)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Select {
    width: 100%;
    margin-bottom: 42px;
  }

  .custom-input {
    box-sizing: border-box;
    display: inherit;
    width: 181px;
    background-color: transparent;
    border: none;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    padding-bottom: 8px;
    padding-top: 5px;
    padding-left: 21px;
  }

  .react-datepicker-wrapper {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .react-datepicker__input-container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    display: flex;
  }

  .date-icon {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    fill: var(--purple);

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`,xe=(0,a.Ay)(A.D0)`
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  width: 181px;
  padding-bottom: 8px;
  padding-top: 5px;

  &::placeholder {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
    padding-left: 21px;

    &::placeholder {
      text-align: left;
    }
  }
`,he=((0,a.Ay)(_.Ay)`
  font-size: 18px;
  width: 100%;

  .Select__control {
    background-color: transparent;
    height: 35px;
    width: 100%;
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
    color: rgba(251, 251, 251, 1);
  }

  .Select__placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .Select__single-value {
    color: rgba(251, 251, 251, 1);
  }

  .Select__control:hover {
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .Select__control--is-focused {
    border: 0;
    box-shadow: none;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
      0deg,
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
    overflow: hidden;
  }

  .Select__option--is-focused {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }

  .Select__option--is-selected {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 134, 141, 1);
  }

  .Select__dropdown-indicator {
    color: rgba(251, 251, 251, 1);

    &:hover {
      color: rgba(251, 251, 251, 1);
    }
  }

  @media screen and (max-width: 767px) {
    .Select__value-container {
      padding-left: 21px;
    }

    .Select__menu-list {
      max-height: 352px;
    }
  }
`,(0,a.Ay)(A.D0)`
  display: inherit;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 5px 5px 8px 10px;

  &::placeholder {
    text-align: left;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 767px) {
    padding-left: 21px;
    padding-bottom: 52px;
  }
`),ge=a.Ay.label`
  width: 254px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 42px;
`,me=a.Ay.label`
  width: 181px;
  &:not(:last-child) {
    margin-right: 32px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }
`,be=a.Ay.div`
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,ue=(0,a.Ay)(A.Kw)`
  color: #ff868d;
  font-size: 14px;
  margin-top: 2px;
`,fe=(0,S.Ik)({value:(0,S.ai)().positive().required("Amount is required"),comment:(0,S.Yj)().max(30,"Maximum must be 30 characters").required("Please fill in comment"),category:(0,S.Yj)().min(3).oneOf(["Main expenses","Products","Car","Self care","Child care","Household products","Education","Leisure","Other expenses","Entertainment"])}),ye=(0,i.forwardRef)(((e,t)=>{let{value:n,onClick:i}=e;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("button",{type:"button",className:"custom-input",onClick:i,ref:t,children:n}),(0,H.jsx)(W.TDs,{className:"date-icon",onClick:i})]})}));function we(e){let{id:t}=e;const n=(0,T.useDispatch)(),o=(0,T.useSelector)(v.NS),[r,a]=(0,i.useState)((()=>{var e;return null!==(e=JSON.parse(window.localStorage.getItem("categories")))&&void 0!==e?e:[]})),d=o.find((e=>e._id===t)),l={type:d.type,category:d.category?d.category:"",value:d.value,date:new Date(d.date),comment:d.comment};(0,i.useEffect)((()=>{0===r.length&&(async()=>{try{const e=await ie.A.get("/transactions/categories");a(e.data)}catch(e){return e.message}})(),localStorage.setItem("categories",JSON.stringify(r))}),[r,o]);const s=r.map((e=>({value:e,label:e})));return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(le,{children:"Edit transaction"}),(0,H.jsx)(A.l1,{initialValues:l,validationSchema:fe,onSubmit:e=>{n((0,G.editItem)({id:t,values:e})),n((0,Y.YK)())},children:e=>{let{values:t,setFieldValue:n,validate:i}=e;return(0,H.jsxs)(pe,{autoComplete:"off",children:[(0,H.jsx)(ge,{children:(0,H.jsx)(R,{checked:"expense"===t.type,onChange:e=>{n("type",e?"expense":"income")}})}),"expense"===t.type?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(ee,{options:s,value:t.category,onChange:e=>n("category",e.value),className:"Select",name:"category"}),(0,H.jsx)(ue,{name:"category",component:"div"})]}):t.category="",(0,H.jsxs)(be,{children:[(0,H.jsxs)(me,{children:[(0,H.jsx)(xe,{type:"number",name:"value"}),(0,H.jsx)(ue,{name:"value",component:"div"})]}),(0,H.jsx)(me,{children:(0,H.jsx)(A.D0,{name:"date",validate:i,children:e=>{let{field:i,form:o,meta:r}=e;return(0,H.jsx)(ne(),{name:"date",dateFormat:"dd.MM.yyyy",maxDate:new Date,selected:t.date||null,onChange:e=>n("date",e),shouldCloseOnSelect:!0,customInput:(0,H.jsx)(ye,{})})}})})]}),(0,H.jsxs)(ce,{children:[(0,H.jsx)(he,{type:"textarea",name:"comment"}),(0,H.jsx)(ue,{name:"comment",component:"div"})]}),(0,H.jsx)(se,{type:"submit",children:"Save"})]})}})]})}var je=n(8224),ve=n(9653),ke=n(7805),Ae=n(5440),Se=n(4706);const _e=a.Ay.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0 52px 0;
`,Ce=a.Ay.li`
  width: 280px;
  margin-bottom: 10px;
  background: linear-gradient(
    220deg,
    rgba(82, 59, 126, 0.6) 28.31%,
    #652392 66.76%
  );
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  border-radius: 10px;
  border-left: ${e=>"expense"===e.type?"5px solid #ff868d":"5px solid var(--yellow)"};
`,ze=a.Ay.span`
  font-weight: 600;
  color: ${e=>"expense"===e.type?"#ff868d":"var(--yellow)"};
`,De=a.Ay.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: #776289 1px solid;
`,Fe=a.Ay.p`
  color: white;
  font-weight: 600;
`,Ne=a.Ay.p`
  color: white;
  font-weight: 400;
  padding-left: 30px;
`,Ie=a.Ay.p`
  color: white;
  font-weight: 400;
  padding-left: 74px;
`,$e=a.Ay.span`
  color: white;
  font-weight: 400;
`,Ee=(0,a.Ay)(Se.S)`
  && {
    margin: 0;
    width: 69px;
    height: 29px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
  }
`,Me=a.Ay.li`
  display: flex;
  align-items: center;
  color: #c2b1d6;
  cursor: pointer;
`,Le=(0,a.Ay)(ke.z$h)`
  && {
    margin-right: 5px;
  }
`,Oe=a.Ay.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
`,Te=e=>{let{transactions:t,handleEditClick:n,deleteTransactions:i}=e;return(0,H.jsx)(_e,{children:t.map((e=>{let{createdAt:t,type:o,category:r,comment:a,value:d,_id:l}=e;const s=(e=>{const t=new Date(e);return`${t.getDate().toString().padStart(2,"0")}.${(t.getMonth()+1).toString().padStart(2,"0")}.${t.getFullYear()}`})(t),c="expense"===o?"-":"+";return(0,H.jsx)(Ce,{type:o,children:(0,H.jsxs)("ul",{children:[(0,H.jsxs)(De,{children:[(0,H.jsx)(Fe,{children:"Date"}),(0,H.jsx)($e,{children:s})]}),(0,H.jsxs)(De,{children:[(0,H.jsx)(Fe,{children:"Type"}),(0,H.jsx)(ze,{type:o,children:c})]}),(0,H.jsxs)(De,{children:[(0,H.jsx)(Fe,{children:"Category"}),(0,H.jsx)(Ie,{type:o,children:"income"===o?"Income":r})]}),(0,H.jsxs)(De,{children:[(0,H.jsx)(Fe,{children:"Comment"}),(0,H.jsx)(Ne,{children:a})]}),(0,H.jsxs)(De,{children:[(0,H.jsx)(Fe,{children:"Sum"}),(0,H.jsx)(ze,{type:o,children:d})]}),(0,H.jsxs)(Oe,{children:[(0,H.jsx)("li",{children:(0,H.jsx)(Ee,{onClick:()=>{i(l)},children:"Delete"})}),(0,H.jsxs)(Me,{children:[(0,H.jsx)(Le,{onClick:()=>n(l)}),"Edit"]})]})]})},l)}))})};var Ye=n(406);const Be=a.Ay.div`
  display: ${e=>e.isVisible?"block":"none"};
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: 1.5px solid #bfaed3;
  color: #bfaed3;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;

  line-height: 40px;
  font-size: 24px;
  cursor: pointer;
  z-index: 999;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #734aef;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,Ke=((0,a.Ay)(r.TN$)``,()=>{const[e,t]=(0,i.useState)(!1),n=()=>{window.scrollY>100?t(!0):t(!1)};return(0,i.useEffect)((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[]),(0,H.jsx)(Be,{isVisible:e,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,H.jsx)(r.TN$,{})})}),Ve=()=>{const{useDispatch:e,useSelector:t}=n(2166),{fetchTransactions:r,deleteItem:a}=n(5912),A=e(),[S,_]=(0,i.useState)(null),C=t(ve.v),z=t(ve.d),D=(0,o.useMediaQuery)({minWidth:240,maxWidth:767}),F=t(v.Di),N=e=>{A(a(e)).then((()=>{A(r())}))},I=e=>{_(e),A((0,Y.if)())};(0,i.useEffect)((()=>{A(r())}),[A,r]);const $=t((e=>e[Ye.p.name].transactions)).slice().sort(((e,t)=>new Date(t.createdAt)-new Date(e.createdAt))).slice(0,5);return(0,H.jsxs)(d,{children:[D?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Ke,{}),(0,H.jsx)(Te,{transactions:$,handleEditClick:I,deleteTransactions:N})]}):(0,H.jsxs)(l,{children:[(0,H.jsxs)(s,{children:[(0,H.jsx)("div",{children:"Date"}),(0,H.jsx)("div",{children:"Type"}),(0,H.jsx)("div",{children:"Category"}),(0,H.jsx)("div",{children:"Comment"}),(0,H.jsx)("div",{children:"Sum"})]}),(0,H.jsx)(c,{children:F?(0,H.jsx)(p,{children:(0,H.jsx)("div",{children:(0,H.jsx)(Ae.IN,{visible:!0,height:"80",width:"80"})})}):$.map((e=>{let{createdAt:t,type:n,category:i,comment:o,value:r,_id:a}=e,d=new Date(t).toLocaleDateString(),l="+",s="colorIncome";return"expense"===n&&(l="-",s="colorExpense"),(0,H.jsxs)(p,{className:"data",children:[(0,H.jsx)(x,{children:d}),(0,H.jsx)(h,{children:l}),"income"===n?(0,H.jsx)(w,{children:"Income"}):(0,H.jsx)(g,{children:i}),(0,H.jsx)(m,{children:o}),(0,H.jsx)(b,{type:n,className:s,children:r}),(0,H.jsxs)(u,{children:[(0,H.jsx)(ke.z$h,{onClick:()=>I(a)}),(0,H.jsx)(f,{style:{},className:"deleteItem",onClick:()=>{N(a)},children:"Delete"})]})]},a)}))})]}),(0,H.jsx)(y,{className:"addItem",type:"button",onClick:()=>A((0,Y.xe)()),children:(0,H.jsx)(j,{})}),"modal/toggleAddModal"===C&&z&&(0,H.jsx)(k.A,{children:(0,H.jsx)(de,{})}),"modal/toggleEditModal"===C&&z&&(0,H.jsx)(k.A,{children:(0,H.jsx)(we,{id:S})}),"modal/toggleLogOutModal"===C&&z&&(0,H.jsx)(k.A,{children:(0,H.jsx)(je.A,{}),showCloseIcon:!1})]})}},9653:(e,t,n)=>{n.d(t,{d:()=>o,v:()=>i});const i=e=>e.modal.modalType,o=e=>e.modal.isModalOpen},6314:(e,t,n)=>{n.d(t,{Di:()=>o,NS:()=>i});const i=e=>e.transactions.transactions,o=e=>e.transactions.isLoading}}]);
//# sourceMappingURL=517.ca201a3b.chunk.js.map
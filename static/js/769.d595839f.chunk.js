"use strict";(self.webpackChunkmoney_guard=self.webpackChunkmoney_guard||[]).push([[769],{155:(e,i,t)=>{t.d(i,{A:()=>n});t(5043);const n=t.p+"static/media/logo.dce3145872188e100148c46882b30412.svg"},8224:(e,i,t)=>{t.d(i,{A:()=>l});var n=t(155),d=t(2166),a=t(2119);const r=a.Ay.button`
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
`,x=a.Ay.h3`
  margin-bottom: 52px;
  color: var(--white);
  font-size: 27px;
  font-weight: 400;
  line-height: 1.5;
`,s=a.Ay.p`
  font-size: 18px;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 52px;
`;var o=t(700),p=t(5166),c=t(579);function l(){const e=(0,d.useDispatch)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:n.A,alt:"Logo MoneyGuard",width:"36px",height:"36px"}),(0,c.jsx)(x,{children:"Money Guard"}),(0,c.jsx)(s,{children:"Are you sure you want to log out?"}),(0,c.jsx)(r,{type:"submit",onClick:()=>{e((0,o.logOut)()),e((0,p.YK)())},children:"Logout"})]})}},7835:(e,i,t)=>{t.d(i,{A:()=>g});var n=t(5043),d=t(7950),a=t(2119);const r=a.Ay.div`
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
`,x=a.Ay.div`
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
`,s=a.Ay.button`
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
`,o=a.Ay.button`
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
`;var p=t(2166),c=t(5166),l=t(579);const h=document.querySelector("#modal-root");function g(e){let{children:i,showCloseIcon:t=!0}=e;const a=(0,p.useDispatch)();(0,n.useEffect)((()=>{const e=e=>{"Escape"===e.code&&a((0,c.YK)())};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[a]);const g=e=>{"cancel"!==e.target.name&&"closeSvg"!==e.currentTarget.name||a((0,c.YK)())};return(0,d.createPortal)((0,l.jsx)(r,{onClick:e=>{e.currentTarget===e.target&&a((0,c.YK)())},children:(0,l.jsxs)(x,{children:[t&&(0,l.jsx)(s,{type:"button",name:"closeSvg",onClick:g,children:(0,l.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M1 1L17 17",stroke:"#FBFBFB"}),(0,l.jsx)("path",{d:"M1 17L17 0.999999",stroke:"#FBFBFB"})]})}),i,(0,l.jsx)(o,{type:"button",name:"cancel",onClick:g,children:"Cancel"})]})}),h)}},1201:(e,i,t)=>{t.r(i),t.d(i,{default:()=>we});var n=t(2119);const d=n.Ay.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;

  background: radial-gradient(
      circle at 9% 90%,
      rgba(55, 15, 99, 0.7) 4%,
      rgba(20, 5, 89, 0.03) 26%
    ),
    radial-gradient(
      circle at 6% 18%,
      rgba(55, 15, 99, 0.8) 3%,
      rgba(7, 0, 42, 0.4) 14%
    ),
    linear-gradient(190deg, rgba(67, 4, 91, 0.9) 10%, rgba(9, 0, 49, 0.2) 26%),
    radial-gradient(
      circle at 75% 99%,
      rgba(140, 15, 95, 0.99) 15%,
      rgba(9, 0, 49, 0.99) 41%
    );

  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`,a=n.Ay.div`
  display: flex;
  width: 100%;
  height: auto;
  max-width: 320px;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 768px;
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    flex-direction: row;
  }
`;var r=t(5043),x=t(3216),s=t(5166),o=t(7835),p=t(8224),c=t(221);const l=n.Ay.header`
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
`,h=n.Ay.div`
  max-width: 320px;
  width: 100%;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`,g=(0,n.Ay)(h)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  max-width: 1280px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 20px;
    height: 60px;
  }

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    padding: 0 32px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
    width: 100%;
    margin: 0 auto;
  }
`,m=n.Ay.button`
  padding: 16px 16px 16px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  transition: all 400ms;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    padding: 12px 0;
    margin-right: auto;
  }
`,w=n.Ay.img`
  width: 17px;
  height: 21px;
  margin-bottom: 3px;
`,u=n.Ay.span`
  color: #fbfbfb;
  font-size: 12px;
`,b=n.Ay.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    margin-left: auto;
  }
`,f=n.Ay.p`
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
  font-size: 16px;
  margin: 0;
  margin-right: 12px;

  @media (max-width: 767px) {
    margin-right: 8px;
  }
`,v=n.Ay.div`
  height: 30px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.6);
  margin-right: 12px;

  @media (max-width: 767px) {
    display: none;
  }
`,y=n.Ay.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 100%;
  transition: all 400ms;
  padding: 0;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 767px) {
    padding: 28px 0;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`,j=(0,n.Ay)(c.xsM)`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 0.6);

  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`,A=n.Ay.p`
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
  @media (max-width: 767px) {
    display: none;
  }
`;const k=t.p+"static/media/logo.ffeeeefcbe61417cbb56220cd92da552.svg";var z=t(4022),M=t(9653),S=t(579);const R=()=>{const e=(0,x.Zp)(),{useDispatch:i,useSelector:n}=t(2166),d=i(),a=n(M.v),c=n(M.d),R=(0,r.useRef)(null),C=n(z.mB),F=C.email?C.email.split("@")[0]:"";return(0,S.jsxs)(h,{children:[(0,S.jsx)(l,{children:(0,S.jsxs)(g,{children:[(0,S.jsxs)(m,{onClick:()=>{e("/home")},ref:R,children:[(0,S.jsx)(w,{src:k,alt:"logo"}),(0,S.jsx)(u,{children:"Money Guard"})]}),(0,S.jsxs)(b,{children:[(0,S.jsx)(f,{children:F}),(0,S.jsx)(v,{}),(0,S.jsxs)(y,{id:"exit",type:"button",onClick:()=>d((0,s.Mf)()),children:[(0,S.jsx)(j,{}),(0,S.jsx)(A,{children:"Exit"})]})]})]})}),"modal/toggleLogOutModal"===a&&c&&(0,S.jsx)(o.A,{children:(0,S.jsx)(p.A,{})})]})},C=n.Ay.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-grow: 1;
  max-width: 320px;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: column;
    max-width: 769px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    flex-direction: row;
  }
`,F=n.Ay.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 214px;
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    max-width: 480px;
    align-items: unset;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`,B=n.Ay.div`


  
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
  
  }
`;var D=t(5237),E=t(5475);const L=n.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.gap||"12px"};

  margin: 0;

  list-style: none;
  padding: 0;
  padding-left: 19px;
  padding-top: 42px;

  @media screen and (min-width: 768px) {
    padding-left: 35px;
    padding-top: 40px;
  }
`,U=(0,n.Ay)(E.k2)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  color: var(--white, #fbfbfb);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(27 / 18);

  svg {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    path {
      fill: rgb(255, 255, 255);
      fill-opacity: 0.4;
    }
  }

  &:active,
  &:hover {
    font-weight: 700;
    svg {
      background-color: rgba(255, 255, 255, 1);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      path {
        fill: #4a56e2;
        fill-opacity: 1;
      }
    }
  }
`,$=n.Ay.ul`
  gap: 32px;
  padding: 0;
  display: inline-block;
  max-width: max-content;

  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  list-style: none;

  @media (max-width: 767px) {
    margin-top: 12px;
  }
`,O=(0,n.Ay)(E.k2)`
  width: 44px;
  height: 44px;

  svg {
    width: 44px;
    height: 44px;
    border-radius: 8px;
  }
  path {
    fill: rgba(255, 255, 255, 0.4);
  }

  &:active,
  &:hover {
    svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      background-color: rgba(255, 255, 255, 1);
      path {
        fill: rgba(115, 74, 239, 1);
      }
    }
  }
`,W=(0,n.Ay)(U)`
  &.active {
    font-weight: 800;
    svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      background-color: rgba(255, 255, 255, 1);
      path {
        fill: #4a56e2;
        fill-opacity: 1;
      }
    }
  }
`,Y=(0,n.Ay)(O)`
  &.active {
    svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      background-color: rgba(255, 255, 255, 1);
      path {
        fill: rgba(115, 74, 239, 1);
      }
    }
  }
`,K=()=>{const e=(0,D.useMediaQuery)({minWidth:240,maxWidth:767}),i=(0,D.useMediaQuery)({minWidth:768});return(0,S.jsx)("nav",{children:(0,S.jsxs)("div",{children:[i&&(0,S.jsxs)(L,{children:[(0,S.jsx)("li",{children:(0,S.jsxs)(W,{to:"/home",children:[(0,S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"none",children:(0,S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.054-0c-2.792 0-5.054 2.262-5.054 5.054v21.892c0 2.792 2.262 5.054 5.054 5.054h21.892c2.792 0 5.054-2.262 5.054-5.054v-21.892c0-2.792-2.262-5.054-5.054-5.054zM13.419 17.984v6.905h-5.753v-9.203h-3.456l11.507-10.355 11.513 10.355h-3.456v9.203h-5.753v-6.905z"})}),"Home"]})}),(0,S.jsx)("li",{children:(0,S.jsxs)(W,{to:"/statistics",children:[(0,S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"none",children:(0,S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.946 0c2.792 0 5.054 2.262 5.054 5.054v21.892c0 2.792-2.262 5.054-5.054 5.054h-21.892c-2.792 0-5.054-2.262-5.054-5.054v-21.892c0-2.792 2.262-5.054 5.054-5.054zM24.841 13.943c1.080 0 1.966-0.929 1.966-2.063 0-1.128-0.887-2.057-1.966-2.057s-1.966 0.929-1.966 2.057c0 0.187 0.024 0.362 0.072 0.525l-3.492 3.667c-0.157-0.054-0.332-0.072-0.507-0.072-0.181 0-0.356 0.018-0.513 0.072l-2.503-2.623c0.048-0.169 0.066-0.35 0.066-0.537 0-1.134-0.887-2.057-1.966-2.057s-1.966 0.923-1.966 2.057c0 0.187 0.024 0.368 0.072 0.537l-4.481 4.68c-0.157-0.048-0.326-0.072-0.501-0.072-1.080 0-1.966 0.929-1.966 2.063 0 1.128 0.887 2.057 1.966 2.057s1.966-0.929 1.966-2.057c0-0.187-0.024-0.362-0.072-0.525l4.469-4.698c0.163 0.054 0.338 0.072 0.513 0.072s0.356-0.018 0.513-0.072l2.503 2.63c-0.048 0.163-0.066 0.35-0.066 0.531 0 1.134 0.887 2.063 1.966 2.063s1.966-0.929 1.966-2.063c0-0.181-0.024-0.368-0.072-0.531l3.498-3.655c0.157 0.048 0.326 0.072 0.501 0.072z"})}),"Statistics"]})})]}),e&&(0,S.jsxs)($,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(Y,{to:"/home",children:(0,S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.054-0c-2.792 0-5.054 2.262-5.054 5.054v21.892c0 2.792 2.262 5.054 5.054 5.054h21.892c2.792 0 5.054-2.262 5.054-5.054v-21.892c0-2.792-2.262-5.054-5.054-5.054zM13.419 17.984v6.905h-5.753v-9.203h-3.456l11.507-10.355 11.513 10.355h-3.456v9.203h-5.753v-6.905z"})})})}),(0,S.jsx)("li",{children:(0,S.jsx)(Y,{to:"/statistics",children:(0,S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.946 0c2.792 0 5.054 2.262 5.054 5.054v21.892c0 2.792-2.262 5.054-5.054 5.054h-21.892c-2.792 0-5.054-2.262-5.054-5.054v-21.892c0-2.792 2.262-5.054 5.054-5.054zM24.841 13.943c1.080 0 1.966-0.929 1.966-2.063 0-1.128-0.887-2.057-1.966-2.057s-1.966 0.929-1.966 2.057c0 0.187 0.024 0.362 0.072 0.525l-3.492 3.667c-0.157-0.054-0.332-0.072-0.507-0.072-0.181 0-0.356 0.018-0.513 0.072l-2.503-2.623c0.048-0.169 0.066-0.35 0.066-0.537 0-1.134-0.887-2.057-1.966-2.057s-1.966 0.923-1.966 2.057c0 0.187 0.024 0.368 0.072 0.537l-4.481 4.68c-0.157-0.048-0.326-0.072-0.501-0.072-1.080 0-1.966 0.929-1.966 2.063 0 1.128 0.887 2.057 1.966 2.057s1.966-0.929 1.966-2.057c0-0.187-0.024-0.362-0.072-0.525l4.469-4.698c0.163 0.054 0.338 0.072 0.513 0.072s0.356-0.018 0.513-0.072l2.503 2.63c-0.048 0.163-0.066 0.35-0.066 0.531 0 1.134 0.887 2.063 1.966 2.063s1.966-0.929 1.966-2.063c0-0.181-0.024-0.368-0.072-0.531l3.498-3.655c0.157 0.048 0.326 0.072 0.501 0.072z"})})})}),(0,S.jsx)("li",{children:(0,S.jsx)(Y,{to:"/currency",children:(0,S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:(0,S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.054-0c-2.792 0-5.054 2.262-5.054 5.054v21.892c0 2.792 2.262 5.054 5.054 5.054h21.892c2.792 0 5.054-2.262 5.054-5.054v-21.892c0-2.792-2.262-5.054-5.054-5.054zM13.268 13.135c0 0.995 0.76 1.634 3.142 2.255 2.376 0.615 4.921 1.634 4.921 4.608 0 2.147-1.622 3.335-3.667 3.721v2.25h-3.142v-2.274c-2.014-0.428-3.733-1.719-3.854-4.011h2.304c0.114 1.236 0.965 2.201 3.124 2.201 2.316 0 2.829-1.152 2.829-1.876 0-0.977-0.525-1.9-3.148-2.527-2.919-0.699-4.921-1.906-4.921-4.324 0-2.026 1.634-3.347 3.667-3.788v-2.262h3.142v2.298c2.189 0.531 3.293 2.189 3.365 3.992h-2.316c-0.060-1.315-0.754-2.201-2.618-2.201-1.773 0-2.829 0.796-2.829 1.936z"})})})})]})]})})};var N=t(2166),T=t(4294),q=t(6314);const G=e=>e.balance.balance,I=n.Ay.div`
  height: 80px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 100%;
  margin-top: 12px;
  max-width: 280px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    min-width: 336px;
    margin: 28px 32px 0;
  }

  @media screen and (min-width: 1280px) {
    border-radius: 0;
    max-width: 479px;
    margin: 28px 0 32px 0;
    backdrop-filter: none;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  }
`,Q=n.Ay.div`
  text-transform: uppercase;
  padding-top: 8px;
  margin-bottom: 12px;
  margin-left: 32px;
  font-size: 12px;
  color: var(--transp-40);

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 56px;
  }
`,J=n.Ay.div`
  display: flex;
  align-items: center;
`,P=n.Ay.div`
  font-size: 30px;
  color: var(--white);
  margin-left: 32px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 40px;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 56px;
  }
`,Z=n.Ay.div`
  font-size: 30px;
  color: var(--white);
  margin-left: 10px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 240px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 12px;
  }
`,_=()=>{const e=(0,N.useDispatch)(),i=(0,N.useSelector)(q.NS),t=(0,N.useSelector)(G);return(0,r.useEffect)((()=>{const t=i.reduce(((e,i)=>{let t=parseFloat(i.value),n=1;return"expense"===i.type&&(n=-1),e+n*t}),0);e((0,T.Z)(t))}),[e,i]),(0,S.jsxs)(I,{children:[(0,S.jsx)(Q,{children:"Your balance"}),(0,S.jsxs)(J,{children:[(0,S.jsx)(P,{children:"\u20b4"}),(0,S.jsx)(Z,{children:t})]})]})},H=n.Ay.div`
  position: relative;
  background: rgba(74, 86, 226, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  img {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 40px;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
  }
`,V=n.Ay.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 55px;
    left: 46px;
    color: rgba(255, 134, 141, 1);
    font-size: 12px;
  }
`,X=n.Ay.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 20px;
    right: 94px;
    color: rgba(255, 134, 141, 1);
    font-size: 12px;
  }
`,ee=n.Ay.div`
  background: rgba(74, 86, 226, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  width: 320px;
  margin-top: 24px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    margin-top: 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    margin-top: 0px;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
  }
`,ie=n.Ay.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-radius: 0px, 0px, 8px, 8px;
  color: var(--white);
  background: rgba(74, 86, 226, 0.1);

  @media screen and (min-width: 1280px) {
    width: 480px;
    border-radius: 0;
  }

  th,
  td {
    text-align: center;
    line-height: 1.5;
  }

  th {
    font-weight: 600;
    line-height: 1.5;
    padding: 12px;

    @media screen and (min-width: 1280px) {
      padding: 16px;
    }
  }

  thead th:nth-child(1) {
    width: 33%;
    padding-left: 20px;
    text-align: left;

    @media screen and (min-width: 1280px) {
      padding-left: 62px;
    }
  }

  thead th:nth-child(2) {
    width: 34%;
  }

  thead th:nth-child(3) {
    width: 33%;
    padding-right: 20px;
    text-align: right;

    @media screen and (min-width: 1280px) {
      padding-right: 130px;
    }
  }

  td {
    padding: 8px 8px 4px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
    }

    @media screen and (min-width: 1280px) {
      padding: 24px 8px 0px;
    }
  }

  tbody td:nth-child(1) {
    padding-left: 20px;
    text-align: left;

    @media screen and (min-width: 1280px) {
      padding-left: 84px;
    }
  }

  tbody td:nth-child(3) {
    padding-right: 20px;
    text-align: right;

    @media screen and (min-width: 1280px) {
      padding-right: 130px;
    }
  }
  tbody tr:nth-child(2) {
    td {
      padding-bottom: 0px;
    }
  }

  thead {
    background: rgba(255, 255, 255, 0.2);
  }
`,te=e=>e.currency.data;var ne=t(4930),de=t(9264);const ae=t.p+"static/media/chart-tablet.6fa2624dedd57a709426.png",re=t.p+"static/media/chart-tablet@2x.9ebd085a89384842679e.png",xe=t.p+"static/media/chart-tablet@3x.26caba169e25234e1a0b.png",se=t.p+"static/media/chart-web.181fdd0a7d3dcaa073e4.png",oe=t.p+"static/media/chart-web@2x.4de90a2ca885a9a51296.png",pe=t.p+"static/media/chart-web@3x.d2c37af9205516154898.png";const ce=()=>{const e=(0,N.useDispatch)();(0,r.useEffect)((()=>{const i=localStorage.getItem("persist:currency");"null"!==JSON.parse(i).data?function(){const e=localStorage.getItem("persist:currency"),i=JSON.parse(e);if(i){const e=Date.parse(i.fetchingTime);return new Date-e>=36e5}return!1}()&&e((0,ne.q)()):e((0,ne.q)())}),[e]);const i=(0,N.useSelector)(te);return(0,S.jsx)("div",{children:i?(0,S.jsxs)(ee,{children:[(0,S.jsxs)(ie,{children:[(0,S.jsx)("thead",{children:(0,S.jsxs)("tr",{children:[(0,S.jsx)("th",{children:"Currency"}),(0,S.jsx)("th",{children:"Purchase"}),(0,S.jsx)("th",{children:"Sale"})]})}),(0,S.jsxs)("tbody",{children:[(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{children:"USD"}),(0,S.jsx)("td",{children:i.USD.buy.toFixed(2)}),(0,S.jsx)("td",{children:i.USD.sale.toFixed(2)})]}),(0,S.jsxs)("tr",{children:[(0,S.jsx)("td",{children:"EUR"}),(0,S.jsx)("td",{children:i.EUR.buy.toFixed(2)}),(0,S.jsx)("td",{children:i.EUR.sale.toFixed(2)})]})]})]}),(0,S.jsxs)(H,{children:[(0,S.jsx)("source",{srcSet:`${ae} 1x, ${re} 2x, ${xe} 3x`,alt:"Currency",media:"(min-width: 768px) and (max-width: 1023px)"}),(0,S.jsx)("source",{srcSet:`${se} 1x, ${oe} 2x, ${pe} 3x`,alt:"Currency",media:"(min-width: 1024px)"}),(0,S.jsx)("img",{src:ae,alt:"Currency",draggable:"false"}),(0,S.jsx)(V,{children:i.USD.buy.toFixed(2)}),(0,S.jsx)(X,{children:i.EUR.buy.toFixed(2)})]})]}):(0,S.jsx)(de.x,{})})},le=()=>{const e=(0,x.zy)(),i=(0,D.useMediaQuery)({minWidth:240,maxWidth:767}),t=e.pathname.includes("/currency"),n=e.pathname.includes("/home");return i?(0,S.jsxs)(F,{children:[(0,S.jsx)(K,{}),n&&(0,S.jsx)(_,{}),t&&(0,S.jsx)(ce,{})]}):(0,S.jsxs)(F,{children:[(0,S.jsxs)(B,{children:[(0,S.jsx)(K,{}),(0,S.jsx)(_,{})]}),(0,S.jsx)(ce,{})]})},he=n.Ay.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 320px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    max-width: 800px;
    width: 100%;
    margin-right: auto;
  }
`,ge=()=>(0,S.jsx)(he,{children:(0,S.jsx)(r.Suspense,{fallback:(0,S.jsx)("div",{children:"Loading..."}),children:(0,S.jsx)(x.sv,{})})}),me=()=>(0,S.jsxs)(C,{children:[(0,S.jsx)(le,{}),(0,S.jsx)(ge,{})]}),we=()=>(0,S.jsxs)(d,{children:[(0,S.jsx)(R,{}),(0,S.jsx)(a,{children:(0,S.jsx)(me,{})})]})},9653:(e,i,t)=>{t.d(i,{d:()=>d,v:()=>n});const n=e=>e.modal.modalType,d=e=>e.modal.isModalOpen},6314:(e,i,t)=>{t.d(i,{Di:()=>d,NS:()=>n});const n=e=>e.transactions.transactions,d=e=>e.transactions.isLoading}}]);
//# sourceMappingURL=769.d595839f.chunk.js.map
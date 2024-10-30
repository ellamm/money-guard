"use strict";(self.webpackChunkmoney_guard=self.webpackChunkmoney_guard||[]).push([[426],{155:(e,i,r)=>{r.d(i,{A:()=>a});r(5043);const a=r.p+"static/media/logo.dce3145872188e100148c46882b30412.svg"},4706:(e,i,r)=>{r.d(i,{S:()=>c});var a=r(5475),n=r(2119),t=r(2553),o=r(579);const s=n.AH`
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
`,d=(0,n.Ay)(t.A)`
  && {
    ${s}
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
`,l=(0,n.Ay)(a.k2)`
  && {
    ${s}
    background-color: #ffffff;
    color: #623f8b;
  }
`,c=e=>{let{isNavLink:i,customStyles:r,...a}=e;const n=i?l:d;return(0,o.jsx)(n,{...a})}},1669:(e,i,r)=>{r.d(i,{BG:()=>c,DN:()=>p,Ow:()=>h,Tu:()=>x,aC:()=>m,aZ:()=>l,c$:()=>s,eb:()=>d,ng:()=>g});var a=r(3892),n=r(2119),t=r(7149),o=r(5369);const s=(0,n.Ay)(a.lV)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`,d=(0,n.Ay)("label")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`,l=(0,n.Ay)(t.mm2)`
  color: rgba(255, 255, 255, 0.6);
`,c=(0,n.Ay)(t.VyH)`
  color: rgba(255, 255, 255, 0.6);
`,p=((0,n.Ay)(o.x$1)`
  color: rgba(255, 255, 255, 0.6);
`,n.Ay.div`
  display: flex;
  align-items: center;
`),x=n.Ay.div`
  position: absolute;
`,g=(n.Ay.div`
  position: absolute;
  left: 5px;
  fill: rgba(255, 255, 255, 0.9);
`,n.Ay.span`
  color: #ff868d;
  font-size: 14px;
  margin-top: 2px;
`),m=(0,n.Ay)(a.D0)`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 0 35px;
  margin: 0;
  position: relative;

  &::placeholder {
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus,
  &:hover,
  &:active,
  &:visited {
    outline: none;
  }

  &:focus::placeholder,
  &:active::placeholder {
    transform: translateY(-100%);
    opacity: 1;
  }
`,h=n.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`},3688:(e,i,r)=>{r.d(i,{xI:()=>c,KE:()=>p,J3:()=>l});var a=r(2119);const n=r.p+"static/media/bg-login-web.20b913d3ca3801ec00e3.jpg",t=r.p+"static/media/bg-register-desktop.5d1aec93106f96a70e08.jpg",o=r.p+"static/media/bg-login-web@2x.9522df4284cf229cb617.jpg",s=r.p+"static/media/bg-register-desktop@2x.1006452c317b60d35d26.jpg",d=(a.AH`
  @media screen and (max-width: 767px) {
  }
`,a.AH`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`,a.AH`
  @media screen and (min-width: 1280px) {
    background-image: url(${e=>e.isRegister?t:n});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 1/2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${e=>e.isRegister?s:o});
    }
  }
`),l=a.Ay.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${e=>e.isRegister?t:n});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;

  ${d}

  @media screen and (min-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  }
`,c=a.Ay.div`
  width: 400px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Form-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }
`,p=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0 auto 52px;
    color: var(--white);
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 26px;
    }
  }
`},7834:(e,i,r)=>{r.r(i),r.d(i,{default:()=>h});var a=r(4706),n=r(2166),t=r(899),o=r(700),s=r(3892),d=r(155),l=r(1669),c=r(7503),p=r(3688),x=r(579);const g=t.Ik().shape({email:t.Yj().email("Invalid email address").required("Required"),password:t.Yj().required("Required")}),m=()=>{const e=(0,n.useDispatch)();return(0,x.jsx)(s.l1,{initialValues:{email:"",password:""},validationSchema:g,onSubmit:async(i,r)=>{let{resetForm:a}=r;const n=i.email.split("@")[0],t={email:i.email.trim(),password:i.password.trim()};(await e((0,o.logIn)(t))).error?c.oR.error("Login failed. Please check your credentials.",{autoClose:1200}):(c.oR.success(`You have successfully logged in ${n}.`,{autoClose:1200}),a())},children:(0,x.jsxs)(l.c$,{children:[(0,x.jsxs)(p.KE,{children:[(0,x.jsx)("img",{src:d.A,alt:"Logo MoneyGuard",width:"36px",height:"36px",draggable:"false"}),(0,x.jsx)("h3",{children:"MoneyGuard"})]}),(0,x.jsx)(l.eb,{children:(0,x.jsxs)(l.DN,{children:[(0,x.jsx)(l.Tu,{children:(0,x.jsx)(l.aZ,{})}),(0,x.jsx)(l.aC,{name:"email",type:"email",placeholder:"E-mail"})]})}),(0,x.jsx)(l.eb,{children:(0,x.jsxs)(l.DN,{children:[(0,x.jsx)(l.Tu,{children:(0,x.jsx)(l.BG,{})}),(0,x.jsx)(l.aC,{name:"password",type:"password",placeholder:"Password"})]})}),(0,x.jsx)(a.S,{type:"submit",children:"Log In"}),(0,x.jsx)(a.S,{isNavLink:!0,to:"/register",children:"Register"})]})})},h=()=>(0,x.jsx)(p.J3,{children:(0,x.jsx)(p.xI,{children:(0,x.jsx)(m,{})})})}}]);
//# sourceMappingURL=426.b80bdc06.chunk.js.map
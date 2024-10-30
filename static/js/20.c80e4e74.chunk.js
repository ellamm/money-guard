"use strict";(self.webpackChunkmoney_guard=self.webpackChunkmoney_guard||[]).push([[20],{155:(e,i,r)=>{r.d(i,{A:()=>n});r(5043);const n=r.p+"static/media/logo.dce3145872188e100148c46882b30412.svg"},4706:(e,i,r)=>{r.d(i,{S:()=>c});var n=r(5475),a=r(2119),t=r(2553),s=r(579);const o=a.AH`
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
`,d=(0,a.Ay)(t.A)`
  && {
    ${o}
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
`,l=(0,a.Ay)(n.k2)`
  && {
    ${o}
    background-color: #ffffff;
    color: #623f8b;
  }
`,c=e=>{let{isNavLink:i,customStyles:r,...n}=e;const a=i?l:d;return(0,s.jsx)(a,{...n})}},1669:(e,i,r)=>{r.d(i,{BG:()=>c,DN:()=>p,Ow:()=>h,Tu:()=>x,aC:()=>m,aZ:()=>l,c$:()=>o,eb:()=>d,ng:()=>g});var n=r(3892),a=r(2119),t=r(7149),s=r(5369);const o=(0,a.Ay)(n.lV)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`,d=(0,a.Ay)("label")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`,l=(0,a.Ay)(t.mm2)`
  color: rgba(255, 255, 255, 0.6);
`,c=(0,a.Ay)(t.VyH)`
  color: rgba(255, 255, 255, 0.6);
`,p=((0,a.Ay)(s.x$1)`
  color: rgba(255, 255, 255, 0.6);
`,a.Ay.div`
  display: flex;
  align-items: center;
`),x=a.Ay.div`
  position: absolute;
`,g=(a.Ay.div`
  position: absolute;
  left: 5px;
  fill: rgba(255, 255, 255, 0.9);
`,a.Ay.span`
  color: #ff868d;
  font-size: 14px;
  margin-top: 2px;
`),m=(0,a.Ay)(n.D0)`
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
`,h=a.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`},3688:(e,i,r)=>{r.d(i,{xI:()=>c,KE:()=>p,J3:()=>l});var n=r(2119);const a=r.p+"static/media/bg-login-web.20b913d3ca3801ec00e3.jpg",t=r.p+"static/media/bg-register-desktop.5d1aec93106f96a70e08.jpg",s=r.p+"static/media/bg-login-web@2x.9522df4284cf229cb617.jpg",o=r.p+"static/media/bg-register-desktop@2x.1006452c317b60d35d26.jpg",d=(n.AH`
  @media screen and (max-width: 767px) {
  }
`,n.AH`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`,n.AH`
  @media screen and (min-width: 1280px) {
    background-image: url(${e=>e.isRegister?t:a});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 1/2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${e=>e.isRegister?o:s});
    }
  }
`),l=n.Ay.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${e=>e.isRegister?t:a});
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
`,c=n.Ay.div`
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
`,p=n.Ay.div`
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
`},9228:(e,i,r)=>{r.r(i),r.d(i,{default:()=>y});var n=r(2166),a=r(700),t=r(4706),s=r(3892),o=r(899),d=r(155),l=r(1669),c=r(3688),p=r(5043),x=r(3034),g=r.n(x),m=r(2119);const h=m.Ay.div`
  width: 100%;
  height: 4px;
  background-color: lightgray;
  margin-top: 6px;
  border-radius: 20px; 
`,u=m.Ay.div`
  height: 100%;
  background: ${e=>e.background||"red"}; 
  width: ${e=>e.strength/4*100}%;
  border-radius: 5px;
`;var f=r(579);const b=e=>{let{password:i}=e;const[r,n]=(0,p.useState)(0);(0,p.useEffect)((()=>{const e=a(i),r=Math.min(e.score,12);n(r)}),[i]);const a=e=>g()(e);return(0,f.jsx)(h,{children:(0,f.jsx)(u,{strength:r,background:(e=>{switch(e){case 0:default:return"red";case 1:return"orange";case 2:return"yellow";case 3:return"green";case 4:return"darkgreen"}})(r)})})},w=o.Ik().shape({email:o.Yj().email("Invalid email address").required("Required"),password:o.Yj().min(6,"Must be at least 6 characters").max(12,"Must be 12 characters or less").required("Required"),passwordConfirm:o.Yj().oneOf([o.KR("password"),null],"Password mismatch").required("Required")}),j=()=>{const e=(0,n.useDispatch)(),[i,r]=(0,p.useState)("");return(0,f.jsx)(s.l1,{initialValues:{email:"",password:"",passwordConfirm:""},validationSchema:w,onSubmit:(i,r)=>{let{resetForm:n}=r;const t=i.email.split("@")[0],s={email:i.email.trim(),password:i.password.trim(),name:t};e((0,a.register)(s)),n()},autoComplete:"off",children:e=>{let{values:n,handleChange:a}=e;return(0,f.jsxs)(l.c$,{children:[(0,f.jsxs)(c.KE,{children:[(0,f.jsx)("img",{src:d.A,alt:"Logo MoneyGuard",width:"36px",height:"36px",draggable:"false"}),(0,f.jsx)("h3",{children:"MoneyGuard"})]}),(0,f.jsx)(l.eb,{children:(0,f.jsxs)(l.Ow,{children:[(0,f.jsx)(l.Tu,{children:(0,f.jsx)(l.aZ,{})}),(0,f.jsx)(l.aC,{name:"email",type:"email",placeholder:"E-mail",autoComplete:"off"}),(0,f.jsx)(l.ng,{children:(0,f.jsx)(s.Kw,{component:"span",name:"email"})})]})}),(0,f.jsx)(l.eb,{children:(0,f.jsxs)(l.Ow,{children:[(0,f.jsx)(l.Tu,{children:(0,f.jsx)(l.BG,{})}),(0,f.jsx)(l.aC,{name:"password",type:"password",placeholder:"Password",autoComplete:"off",value:n.password,onChange:e=>{a(e),r(e.target.value)}}),(0,f.jsx)(l.ng,{children:(0,f.jsx)(s.Kw,{component:"span",name:"password"})})]})}),(0,f.jsx)(l.eb,{children:(0,f.jsxs)(l.Ow,{children:[(0,f.jsx)(l.Tu,{children:(0,f.jsx)(l.BG,{})}),(0,f.jsxs)("div",{children:[(0,f.jsx)(l.aC,{name:"passwordConfirm",type:"password",placeholder:"Confirm password",autoComplete:"off"}),(0,f.jsx)(b,{password:i})]}),(0,f.jsx)(l.ng,{children:(0,f.jsx)(s.Kw,{component:"span",name:"passwordConfirm"})})]})}),(0,f.jsx)(t.S,{type:"submit",children:"Register"}),(0,f.jsx)(t.S,{isNavLink:!0,to:"/login",children:"Log In"})]})}})},y=()=>(0,f.jsx)(c.J3,{isRegister:!0,children:(0,f.jsx)(c.xI,{children:(0,f.jsx)(j,{})})})}}]);
//# sourceMappingURL=20.c80e4e74.chunk.js.map
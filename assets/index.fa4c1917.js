import{j as b,s as u,R as v,a as h,W as q,b as y,c as w,d as R}from"./vendor.02820564.js";const k=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}};k();const i=b.exports.jsx,m=b.exports.jsxs,s=10,l=20,p="#fb80be",$=u.button`
  background-color: ${p};
  color: white;
  font-weight: bold;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${p};
  border-radius: 8px;
  box-shadow: 
  1px 2px 3px #fff,
  2px 2px 4px #ff6bb4,
  2px 3px 5px #ff9ecf,
  2px 3px 10px #ffd1e8;

  &:hover {
    background-color: #ebadc2;
    border-color: #ebadc2;
    color: #282c34;
    box-shadow: 
    0px 0px ${3+s}px #fff, 
    2px 2px ${3+s}px #ff6bb4,
    2px 3px ${5+s}px #ff9ecf, 
    2px 3px ${8+s}px #ffd1e8;
}
&:active {
    color: rgba(40, 44, 52, 0.50);
    background-color: #efbece;
    box-shadow: 
    0px 0px ${3+l}px #fff,
    2px 2px ${3+l}px #ff6bb4,
    2px 3px ${5+l}px #ff9ecf,
    2px 3px ${8+l}px #ffd1e8;
  }

  &:focus {
    outline: 0;
  }
  
  span {
      font-weight: bolder;
      /* -webkit-text-stroke: 2px black; */
      text-shadow:
      0 0 4px palevioletred,
      0 0 4px white;
  }
`,L=({children:t="Button",onClick:o})=>i($,{onClick:o,children:t}),P=u.p`
  text-align: left;
  font-size: calc(10px + ${t=>t.size}vmin);
`,a=({children:t="Text",size:o=2})=>i(P,{size:o,children:t}),S=u.h1`
  color: transparent;
  font-size: calc(10px + ${t=>t.size}vmin);
  text-align: center;
  text-shadow:
    0px 0px 1.8px #fff,
    2px 2px 3px #ff6bb4,
    2px 3px 5px #ff9ecf,
    2px 3px 8px #ffd1e8;
`,f=({children:t="Title",size:o=9})=>i(S,{size:o,children:t}),z=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,C=v({key:"clickCounter",default:[0]});function j(){const[t,o]=h(C),c=()=>{let r=[...t];r[0]++,o(r)};return m(z,{children:[i(f,{children:"Slang Interview Environment"}),i(a,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?"}),m(L,{onClick:()=>c(),children:["You have clicked me ",i("span",{children:t[0]})," times"]}),i(f,{size:5,children:"Hola Giusepe"}),i(a,{size:1.5,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?"}),i(a,{size:1.5,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse blanditiis ad consequuntur rem, quidem voluptas perferendis dolorem libero vel. Rem cum fuga deleniti vel cumque quod eligendi tenetur at?"})]})}const x=10,g=1,B=q`
body {
  background-color: #282c34;
  color: white;
  font-size: calc(10px + 2vmin);
  margin: ${g}vh ${x}vw ${g}vh ${x}vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;y.render(m(w.StrictMode,{children:[i(B,{}),i(R,{children:i(j,{})})]}),document.getElementById("root"));

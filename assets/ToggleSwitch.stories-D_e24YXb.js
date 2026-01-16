import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-qdalL59a.js";import{T as c}from"./ToggleSwitch-B7En8em3.js";import"./_commonjsHelpers-CqkleIqs.js";const j={title:"Toggles/ToggleSwitch",component:c,argTypes:{checked:{control:"boolean"},defaultChecked:{control:"boolean"},size:{control:{type:"range",min:40,max:100,step:4}},color:{control:"color"},sliderColor:{control:"color"},labelBefore:{control:"text"},labelAfter:{control:"text"},ariaLabel:{control:"text"}}},i=l=>t.jsx(c,{...l}),r=i.bind({});r.args={size:60,color:"var(--orange-600)"};const o=i.bind({});o.args={size:60,color:"var(--orange-600)",labelBefore:"Off",labelAfter:"On"};const e=l=>{const[a,D]=S.useState(!1);return t.jsxs("div",{style:{padding:"4rem",background:a?"#111":"#f9fbe6",color:a?"#eee":"#405d27",transition:"background 0.4s, color 0.4s",borderRadius:"8px"},children:[t.jsx(c,{...l,checked:a,onToggle:D,labelBefore:"Light",labelAfter:"Dark"}),t.jsxs("p",{style:{marginTop:"1rem"},children:["Current theme: ",a?"Dark Mode":"Light Mode"]})]})};e.args={size:60,color:"var(--orange-600)"};const s=i.bind({});s.args={size:60,color:"#9c27b0",sliderColor:"#ffeb3b"};e.__docgenInfo={description:"",methods:[],displayName:"ThemeToggle"};var g,n,d;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"args => <ToggleSwitch {...args} />",...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"args => <ToggleSwitch {...args} />",...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,f,h;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [isDark, setIsDark] = useState(false);
  return <div style={{
    padding: '4rem',
    background: isDark ? '#111' : '#f9fbe6',
    color: isDark ? '#eee' : '#405d27',
    transition: 'background 0.4s, color 0.4s',
    borderRadius: '8px'
  }}>
      <ToggleSwitch {...args} checked={isDark} onToggle={setIsDark} labelBefore="Light" labelAfter="Dark" />
      <p style={{
      marginTop: '1rem'
    }}>
        Current theme: {isDark ? 'Dark Mode' : 'Light Mode'}
      </p>
    </div>;
}`,...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,T,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:"args => <ToggleSwitch {...args} />",...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const v=["Default","WithLabels","ThemeToggle","CustomColors"];export{s as CustomColors,r as Default,e as ThemeToggle,o as WithLabels,v as __namedExportsOrder,j as default};

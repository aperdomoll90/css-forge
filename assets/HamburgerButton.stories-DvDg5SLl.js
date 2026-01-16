import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-qdalL59a.js";import"./_commonjsHelpers-CqkleIqs.js";const E={"c-hamburger-button":"_c-hamburger-button_1bx11_1"},s=({variant:t="spin",active:r,defaultActive:c=!1,onToggle:l,color:z="var(--white-100)",size:B=2,ariaControls:_,ariaLabel:H="Toggle menu",className:w="",style:N})=>{const[k,q]=d.useState(c),u=r!==void 0,m=u?r:k,I=()=>{const p=!m;u||q(p),l==null||l(p)},V={"--size":`${B}rem`,"--color":z,...N};return e.jsx("button",{"aria-label":H,"aria-pressed":m,"aria-controls":_,className:`${E["c-hamburger-button"]} ${w}`,style:V,onClick:I,"data-variant":t,children:e.jsx("span",{})})};s.__docgenInfo={description:"",methods:[],displayName:"HamburgerButton",props:{variant:{defaultValue:{value:"'spin'",computed:!1},required:!1},defaultActive:{defaultValue:{value:"false",computed:!1},required:!1},color:{defaultValue:{value:"'var(--white-100)'",computed:!1},required:!1},size:{defaultValue:{value:"2",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'Toggle menu'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const U={title:"Buttons/HamburgerButton",component:s,argTypes:{variant:{control:{type:"radio"},options:["spin","cross"]},active:{control:"boolean"},defaultActive:{control:"boolean"},size:{control:{type:"range",min:1,max:4,step:.25}},color:{control:"color"},ariaLabel:{control:"text"}}},R=t=>e.jsx(s,{...t}),a=R.bind({});a.args={variant:"spin"};const o=()=>{const[t,r]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"3rem",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{variant:"spin",active:t,onToggle:r,size:2}),e.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.75rem",color:"#888"},children:"spin"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{variant:"cross",active:t,onToggle:r,size:2}),e.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.75rem",color:"#888"},children:"cross"})]})]})},W=t=>{const[r,c]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{...t,active:r,onToggle:c}),e.jsxs("p",{style:{marginTop:"1rem"},children:["Menu is ",r?"open":"closed"]})]})},i=W.bind({}),n=t=>e.jsxs("div",{children:[e.jsx(s,{...t,style:{backgroundColor:"#303030",borderRadius:"5px",padding:"0.5rem",boxShadow:"0 10px 20px rgba(0, 0, 0, 0.8)"}}),e.jsx("p",{style:{color:"#888",marginTop:"1rem",fontSize:"0.875rem"},children:"Use className or style to add your own background, shape, hover states etc."})]});o.__docgenInfo={description:"",methods:[],displayName:"Comparison"};n.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyle"};var g,v,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"args => <HamburgerButton {...args} />",...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,b,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [active, setActive] = useState(false);
  return <div style={{
    display: 'flex',
    gap: '3rem',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <HamburgerButton variant="spin" active={active} onToggle={setActive} size={2} />
        <p style={{
        marginTop: '0.5rem',
        fontSize: '0.75rem',
        color: '#888'
      }}>spin</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <HamburgerButton variant="cross" active={active} onToggle={setActive} size={2} />
        <p style={{
        marginTop: '0.5rem',
        fontSize: '0.75rem',
        color: '#888'
      }}>cross</p>
      </div>
    </div>;
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,S,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [active, setActive] = useState(false);
  return <div>
      <HamburgerButton {...args} active={active} onToggle={setActive} />
      <p style={{
      marginTop: '1rem'
    }}>
        Menu is {active ? 'open' : 'closed'}
      </p>
    </div>;
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var A,T,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div>
    <HamburgerButton {...args} style={{
    backgroundColor: '#303030',
    borderRadius: '5px',
    padding: '0.5rem',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8)'
  }} />
    <p style={{
    color: '#888',
    marginTop: '1rem',
    fontSize: '0.875rem'
  }}>
      Use className or style to add your own background, shape, hover states etc.
    </p>
  </div>`,...(C=(T=n.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const O=["HamburgerButtonComponent","Comparison","ExternalState","WithCustomStyle"];export{o as Comparison,i as ExternalState,a as HamburgerButtonComponent,n as WithCustomStyle,O as __namedExportsOrder,U as default};

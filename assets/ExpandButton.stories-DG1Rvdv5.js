import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-qdalL59a.js";import"./_commonjsHelpers-CqkleIqs.js";const d={"c-expand-button":"_c-expand-button_1fmxv_1","c-expand-button__line":"_c-expand-button__line_1fmxv_13"},s=({variant:t="rotate",active:a,defaultActive:l=!1,onToggle:c,color:T="var(--white-100)",size:z=1.5,lineThickness:B=.125,ariaControls:k,ariaLabel:N="Expand",className:q="",style:w})=>{const[V,I]=p.useState(l),m=a!==void 0,u=m?a:V,$=()=>{const v=!u;m||I(v),c==null||c(v)},R={"--size":`${z}rem`,"--color":T,"--line-thickness":`${B}rem`,...w};return e.jsxs("button",{className:`${d["c-expand-button"]} ${q}`,onClick:$,"aria-pressed":u,"aria-controls":k,"aria-label":N,"data-variant":t,style:R,children:[e.jsx("span",{className:d["c-expand-button__line"]}),e.jsx("span",{className:d["c-expand-button__line"],"data-vertical":"true"})]})};s.__docgenInfo={description:"",methods:[],displayName:"ExpandButton",props:{variant:{defaultValue:{value:"'rotate'",computed:!1},required:!1},defaultActive:{defaultValue:{value:"false",computed:!1},required:!1},color:{defaultValue:{value:"'var(--white-100)'",computed:!1},required:!1},size:{defaultValue:{value:"1.5",computed:!1},required:!1},lineThickness:{defaultValue:{value:"0.125",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'Expand'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const D={title:"Buttons/ExpandButton",component:s,argTypes:{variant:{control:{type:"radio"},options:["rotate","collapse"]},active:{control:"boolean"},defaultActive:{control:"boolean"},size:{control:{type:"range",min:1,max:4,step:.25}},lineThickness:{control:{type:"range",min:.0625,max:.25,step:.0625}},color:{control:"color"},ariaLabel:{control:"text"}}},W=t=>e.jsx(s,{...t}),r=W.bind({});r.args={variant:"rotate"};const o=()=>{const[t,a]=p.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"3rem",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{variant:"rotate",active:t,onToggle:a,size:2}),e.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.75rem",color:"#888"},children:"rotate"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{variant:"collapse",active:t,onToggle:a,size:2}),e.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.75rem",color:"#888"},children:"collapse"})]})]})},L=t=>{const[a,l]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{...t,active:a,onToggle:l}),e.jsx("p",{style:{marginTop:"1rem"},children:a?"Expanded":"Collapsed"})]})},i=L.bind({}),n=t=>e.jsxs("div",{children:[e.jsx(s,{...t,style:{backgroundColor:"#4caf50",borderRadius:"50%",padding:"0.75rem",width:"3rem",height:"3rem"}}),e.jsx("p",{style:{color:"#888",marginTop:"1rem",fontSize:"0.875rem"},children:"Use className to add your own background, shape, hover states etc."})]});o.__docgenInfo={description:"",methods:[],displayName:"Comparison"};n.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyle"};var x,f,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"args => <ExpandButton {...args} />",...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,h,_;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [active, setActive] = useState(false);
  return <div style={{
    display: 'flex',
    gap: '3rem',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <ExpandButton variant="rotate" active={active} onToggle={setActive} size={2} />
        <p style={{
        marginTop: '0.5rem',
        fontSize: '0.75rem',
        color: '#888'
      }}>rotate</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <ExpandButton variant="collapse" active={active} onToggle={setActive} size={2} />
        <p style={{
        marginTop: '0.5rem',
        fontSize: '0.75rem',
        color: '#888'
      }}>collapse</p>
      </div>
    </div>;
}`,...(_=(h=o.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var b,E,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [active, setActive] = useState(false);
  return <div>
      <ExpandButton {...args} active={active} onToggle={setActive} />
      <p style={{
      marginTop: '1rem'
    }}>
        {active ? 'Expanded' : 'Collapsed'}
      </p>
    </div>;
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var j,C,A;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`args => <div>
    <ExpandButton {...args} style={{
    backgroundColor: '#4caf50',
    borderRadius: '50%',
    padding: '0.75rem',
    width: '3rem',
    height: '3rem'
  }} />
    <p style={{
    color: '#888',
    marginTop: '1rem',
    fontSize: '0.875rem'
  }}>
      Use className to add your own background, shape, hover states etc.
    </p>
  </div>`,...(A=(C=n.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const F=["ExpandButtonComponent","Comparison","ExternalState","WithCustomStyle"];export{o as Comparison,r as ExpandButtonComponent,i as ExternalState,n as WithCustomStyle,F as __namedExportsOrder,D as default};

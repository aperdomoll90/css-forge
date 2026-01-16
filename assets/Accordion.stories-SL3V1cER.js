import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-qdalL59a.js";import"./_commonjsHelpers-CqkleIqs.js";const g={"c-accordion-item":"_c-accordion-item_7ygqs_11","c-accordion-item__summary":"_c-accordion-item__summary_7ygqs_15"},n=({title:s,content:o,name:i,open:a,defaultOpen:c,onToggle:h,className:N="",summaryClassName:D="",contentClassName:M="",disabled:y=!1})=>{const t=C.useRef(null),x=a!==void 0;C.useEffect(()=>{x&&t.current&&(t.current.open=a)},[x,a]);const U=j=>{if(y){j.preventDefault(),t.current&&(t.current.open=x?!!a:t.current.open);return}const V=j.currentTarget.open;x&&t.current&&(t.current.open=a),h==null||h(V)};return e.jsxs("details",{ref:t,name:y?void 0:i,open:x?a:c,className:`${g["c-accordion-item"]} ${N}`,onToggle:U,"aria-disabled":y||void 0,children:[e.jsx("summary",{className:`${g["c-accordion-item__summary"]} ${D}`,tabIndex:y?-1:void 0,children:s}),e.jsx("div",{className:M,children:o})]})};n.__docgenInfo={description:`Accordion

Single native <details>/<summary> element.
Supports both controlled and uncontrolled modes.
Accessible out of the box (keyboard nav, screen reader support).

@example Uncontrolled
\`\`\`tsx
<Accordion
  title={<><span className="icon">+</span> Question</>}
  content={<p>Answer</p>}
  defaultOpen={false}
  onToggle={(isOpen) => console.log(isOpen)}
/>
\`\`\`

@example Controlled
\`\`\`tsx
const [isOpen, setIsOpen] = useState(false)

<Accordion
  title="Question"
  content="Answer"
  open={isOpen}
  onToggle={setIsOpen}
/>
\`\`\``,methods:[],displayName:"Accordion",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},summaryClassName:{defaultValue:{value:"''",computed:!1},required:!1},contentClassName:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const J={title:"Accordions/Accordion",component:n,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"light",value:"var(--white-100)"},{name:"dark",value:"var(--charcoal-950)"}]}}},r=()=>e.jsx("div",{style:{width:"80vw",maxWidth:"700px"},className:"accordion",children:["Code base optimization","SEO optimization","Accessibility optimization"].map((s,o)=>e.jsx(n,{name:"faq",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"accordion-icon",children:"+"}),e.jsx("span",{children:s})]}),content:e.jsxs("p",{children:["Content for ",s.toLowerCase(),"."]}),className:"accordion-item",summaryClassName:"accordion-summary",contentClassName:"accordion-content"},o))});r.parameters={docs:{description:{story:"Multiple accordions with same `name` - only one can be open at a time."}}};const l=()=>e.jsx("div",{style:{width:"80vw",maxWidth:"700px"},className:"accordion",children:["Code base optimization","SEO optimization","Accessibility optimization"].map((s,o)=>e.jsx(n,{defaultOpen:o===0,title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"accordion-icon",children:"+"}),e.jsx("span",{children:s})]}),content:e.jsxs("p",{children:["Content for ",s.toLowerCase(),"."]}),className:"accordion-item",summaryClassName:"accordion-summary",contentClassName:"accordion-content"},o))});l.parameters={docs:{description:{story:"Without `name`, multiple accordions can be open simultaneously."}}};const R=()=>{const[s,o]=C.useState([]),i=a=>c=>{const h=`${a}: ${c?"opened":"closed"}`;o(N=>[h,...N].slice(0,5))};return e.jsxs("div",{style:{width:"80vw",maxWidth:"700px"},children:[e.jsx("div",{className:"accordion",children:["codebase","seo","accessibility"].map((a,c)=>e.jsx(n,{name:"callback-demo",onToggle:i(a),title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"accordion-icon",children:"+"}),e.jsxs("span",{children:[a.charAt(0).toUpperCase()+a.slice(1)," optimization"]})]}),content:e.jsxs("p",{children:["Content for ",a,"."]}),className:"accordion-item",summaryClassName:"accordion-summary",contentClassName:"accordion-content"},a))}),e.jsxs("div",{className:"accordion-log",children:[e.jsx("strong",{children:"Toggle log:"}),s.length===0?e.jsx("span",{children:" Click an item to see events"}):s.map((a,c)=>e.jsx("div",{children:a},c))]})]})},d=()=>e.jsx(R,{});d.parameters={docs:{description:{story:"Uses onToggle callback to track open/close events."}}};const G=()=>{const[s,o]=C.useState(0);return e.jsxs("div",{style:{width:"80vw",maxWidth:"700px"},children:[e.jsxs("div",{className:"accordion-log",style:{marginBottom:"1rem",marginTop:0},children:[e.jsx("strong",{children:"External controls:"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[e.jsx("button",{onClick:()=>o(0),children:"Open 1"}),e.jsx("button",{onClick:()=>o(1),children:"Open 2"}),e.jsx("button",{onClick:()=>o(2),children:"Open 3"}),e.jsx("button",{onClick:()=>o(null),children:"Close all"})]})]}),e.jsx("div",{className:"accordion",children:["Code base","SEO","Accessibility"].map((i,a)=>e.jsx(n,{open:s===a,onToggle:c=>o(c?a:null),title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"accordion-icon",children:"+"}),e.jsxs("span",{children:[i," optimization"]})]}),content:e.jsxs("p",{children:["Content for ",i.toLowerCase(),"."]}),className:"accordion-item",summaryClassName:"accordion-summary",contentClassName:"accordion-content"},a))})]})},m=()=>e.jsx(G,{});m.parameters={docs:{description:{story:"Fully controlled with external state. Use `open` and `onToggle` to manage state."}}};const p=()=>e.jsxs("div",{style:{width:"80vw",maxWidth:"700px"},className:"accordion",children:[e.jsx(n,{title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"accordion-icon",children:"+"}),e.jsx("span",{children:"Enabled accordion"})]}),content:e.jsx("p",{children:"This one works normally."}),className:"accordion-item",summaryClassName:"accordion-summary",contentClassName:"accordion-content"}),e.jsx(n,{disabled:!0,title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"accordion-icon",children:"+"}),e.jsx("span",{children:"Disabled accordion"})]}),content:e.jsx("p",{children:"This content cannot be revealed."}),className:"accordion-item accordion-item--disabled",summaryClassName:"accordion-summary",contentClassName:"accordion-content"})]});p.parameters={docs:{description:{story:"Disabled accordion cannot be opened or closed."}}};const u=()=>e.jsx("div",{style:{width:"80vw",maxWidth:"700px"},className:"accordion--card",children:[{title:"Getting Started",icon:"🚀"},{title:"Customization",icon:"🎨"},{title:"Accessibility",icon:"♿"}].map((s,o)=>e.jsx(n,{name:"custom",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"accordion-icon--card",children:s.icon}),e.jsx("span",{children:s.title})]}),content:`Content for ${s.title.toLowerCase()}.`,className:"accordion-item--card",summaryClassName:"accordion-summary--card",contentClassName:"accordion-content--card"},o))});u.parameters={docs:{description:{story:"Custom card-style variant showing different visual styling."}}};r.__docgenInfo={description:"",methods:[],displayName:"MultipleExclusive"};l.__docgenInfo={description:"",methods:[],displayName:"MultipleAllowed"};d.__docgenInfo={description:"",methods:[],displayName:"WithCallback"};m.__docgenInfo={description:"",methods:[],displayName:"Controlled"};p.__docgenInfo={description:"",methods:[],displayName:"Disabled"};u.__docgenInfo={description:"",methods:[],displayName:"CustomStyle"};var v,f,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div style={{
  width: '80vw',
  maxWidth: '700px'
}} className="accordion">
    {['Code base optimization', 'SEO optimization', 'Accessibility optimization'].map((title, i) => <Accordion key={i} name="faq" title={<>
            <span className="accordion-icon">+</span>
            <span>{title}</span>
          </>} content={<p>Content for {title.toLowerCase()}.</p>} className="accordion-item" summaryClassName="accordion-summary" contentClassName="accordion-content" />)}
  </div>`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,_,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={{
  width: '80vw',
  maxWidth: '700px'
}} className="accordion">
    {['Code base optimization', 'SEO optimization', 'Accessibility optimization'].map((title, i) => <Accordion key={i} defaultOpen={i === 0} title={<>
            <span className="accordion-icon">+</span>
            <span>{title}</span>
          </>} content={<p>Content for {title.toLowerCase()}.</p>} className="accordion-item" summaryClassName="accordion-summary" contentClassName="accordion-content" />)}
  </div>`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var k,S,O;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:"() => <WithCallbackComponent />",...(O=(S=d.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var z,W,E;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:"() => <ControlledComponent />",...(E=(W=m.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var T,I,q;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => <div style={{
  width: '80vw',
  maxWidth: '700px'
}} className="accordion">
    <Accordion title={<>
          <span className="accordion-icon">+</span>
          <span>Enabled accordion</span>
        </>} content={<p>This one works normally.</p>} className="accordion-item" summaryClassName="accordion-summary" contentClassName="accordion-content" />
    <Accordion disabled title={<>
          <span className="accordion-icon">+</span>
          <span>Disabled accordion</span>
        </>} content={<p>This content cannot be revealed.</p>} className="accordion-item accordion-item--disabled" summaryClassName="accordion-summary" contentClassName="accordion-content" />
  </div>`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var F,L,$;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div style={{
  width: '80vw',
  maxWidth: '700px'
}} className="accordion--card">
    {[{
    title: 'Getting Started',
    icon: '🚀'
  }, {
    title: 'Customization',
    icon: '🎨'
  }, {
    title: 'Accessibility',
    icon: '♿'
  }].map((item, i) => <Accordion key={i} name="custom" title={<>
            <span className="accordion-icon--card">{item.icon}</span>
            <span>{item.title}</span>
          </>} content={\`Content for \${item.title.toLowerCase()}.\`} className="accordion-item--card" summaryClassName="accordion-summary--card" contentClassName="accordion-content--card" />)}
  </div>`,...($=(L=u.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};const K=["MultipleExclusive","MultipleAllowed","WithCallback","Controlled","Disabled","CustomStyle"];export{m as Controlled,u as CustomStyle,p as Disabled,l as MultipleAllowed,r as MultipleExclusive,d as WithCallback,K as __namedExportsOrder,J as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-qdalL59a.js";import"./_commonjsHelpers-CqkleIqs.js";const l=({id:r,children:c,showCloseButton:n=!0,closeButtonContent:t="×",onShow:s,onHide:i,onToggle:m,className:T="",closeButtonClassName:B="",style:j,"aria-label":S,"aria-labelledby":f,"aria-describedby":w})=>{const p=a.useRef(null);return a.useEffect(()=>{const M=p.current;if(!M)return;const u=k=>{const g=k.newState==="open";m==null||m(g),g?s==null||s():i==null||i()};return M.addEventListener("toggle",u),()=>M.removeEventListener("toggle",u)},[s,i,m]),e.jsxs("div",{ref:p,popover:"auto",id:r,role:"dialog","aria-modal":"true","aria-label":S,"aria-labelledby":f,"aria-describedby":w,className:T,style:j,children:[n&&e.jsx("button",{popoverTarget:r,popoverTargetAction:"hide",type:"button","aria-label":"Close modal",className:B,children:t}),c]})};l.__docgenInfo={description:`Modal

Native HTML popover-based modal dialog.
Trigger from any button using \`popovertarget={id}\`.
Accessible and keyboard navigable out of the box.

NOTE: Animation support varies by browser.
Chrome, Edge, Safari 17.4+ support popover natively.
Firefox degrades gracefully (modal works, no animation).

@example Basic usage
\`\`\`tsx
<button popovertarget="my-modal">Open</button>

<Modal id="my-modal" aria-label="Example modal">
  <h2>Hello</h2>
  <p>Modal content here</p>
</Modal>
\`\`\`

@example With callbacks
\`\`\`tsx
<Modal
  id="my-modal"
  aria-labelledby="modal-title"
  onShow={() => console.log('opened')}
  onHide={() => console.log('closed')}
>
  <h2 id="modal-title">Title</h2>
  <p>Content</p>
</Modal>
\`\`\`

@example Custom close button
\`\`\`tsx
<Modal
  id="my-modal"
  closeButtonContent={<span>Close</span>}
  closeButtonClassName="my-close-btn"
>
  <p>Content</p>
</Modal>
\`\`\`

@example No close button (user controls closing)
\`\`\`tsx
<Modal id="my-modal" showCloseButton={false}>
  <p>Content</p>
  <button popovertarget="my-modal" popovertargetaction="hide">
    Custom Close
  </button>
</Modal>
\`\`\``,methods:[],displayName:"Modal",props:{showCloseButton:{defaultValue:{value:"true",computed:!1},required:!1},closeButtonContent:{defaultValue:{value:"'×'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},closeButtonClassName:{defaultValue:{value:"''",computed:!1},required:!1}}};const re={title:"Components/Modal",component:l,parameters:{layout:"fullscreen",backgrounds:{default:"dark",values:[{name:"light",value:"var(--white-100)"},{name:"dark",value:"var(--charcoal-950)"}]}},argTypes:{id:{control:"text",description:"Unique ID for the popover. Use this in trigger button popovertarget.",table:{category:"Required"}},showCloseButton:{control:"boolean",description:"Show the built-in close button",table:{category:"Options"}},closeButtonContent:{control:"text",description:"Custom content for close button",table:{category:"Options"}},"aria-label":{control:"text",description:"Accessible label for the modal (use when no visible title)",table:{category:"Accessibility"}},"aria-labelledby":{control:"text",description:"ID of element that labels the modal (use with visible title)",table:{category:"Accessibility"}},"aria-describedby":{control:"text",description:"ID of element that describes the modal content",table:{category:"Accessibility"}},className:{control:"text",description:"Class name for the modal container",table:{category:"Styling"}},closeButtonClassName:{control:"text",description:"Class name for the close button",table:{category:"Styling"}},onShow:{action:"onShow",description:"Callback when modal opens",table:{category:"Events"}},onHide:{action:"onHide",description:"Callback when modal closes",table:{category:"Events"}},onToggle:{action:"onToggle",description:"Callback on toggle (receives open state)",table:{category:"Events"}}}},d=r=>{const[c,n]=a.useState("#111111"),[t,s]=a.useState("#eeeeee"),[i,m]=a.useState("#444444"),[T,B]=a.useState("#000000"),[j,S]=a.useState(50),[f,w]=a.useState(16),[p,M]=a.useState(12),[u,k]=a.useState(1),[g,oe]=a.useState(32),[O,ae]=a.useState(24);return e.jsxs("div",{className:"story-container",style:{flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{className:"playground-controls",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Background"}),e.jsx("input",{type:"color",value:c,onChange:o=>n(o.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Text Color"}),e.jsx("input",{type:"color",value:t,onChange:o=>s(o.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Border Color"}),e.jsx("input",{type:"color",value:i,onChange:o=>m(o.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Overlay Color"}),e.jsx("input",{type:"color",value:T,onChange:o=>B(o.target.value)})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Overlay Opacity: ",j,"%"]}),e.jsx("input",{type:"range",min:"0",max:"90",value:j,onChange:o=>S(Number(o.target.value))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Font Size: ",f,"px"]}),e.jsx("input",{type:"range",min:"12",max:"24",value:f,onChange:o=>w(Number(o.target.value))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Border Radius: ",p,"px"]}),e.jsx("input",{type:"range",min:"0",max:"32",value:p,onChange:o=>M(Number(o.target.value))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Border Width: ",u,"px"]}),e.jsx("input",{type:"range",min:"0",max:"4",value:u,onChange:o=>k(Number(o.target.value))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Padding: ",g,"px"]}),e.jsx("input",{type:"range",min:"8",max:"64",value:g,onChange:o=>oe(Number(o.target.value))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Shadow Blur: ",O,"px"]}),e.jsx("input",{type:"range",min:"0",max:"48",value:O,onChange:o=>ae(Number(o.target.value))})]})]}),e.jsx("button",{popoverTarget:r.id,className:"demo-trigger",children:"Open Modal"}),e.jsxs(l,{...r,className:"demo-modal-playground",closeButtonClassName:"demo-close",style:{"--modal-bg":c,"--modal-text":t,"--modal-border-color":i,"--modal-border-width":`${u}px`,"--modal-overlay":`${T}${Math.round(j*2.55).toString(16).padStart(2,"0")}`,"--modal-font-size":`${f}px`,"--modal-radius":`${p}px`,"--modal-padding":`${g}px`,"--modal-shadow":`0 8px ${O}px rgba(0, 0, 0, 0.4)`},children:[e.jsx("h2",{id:"playground-title",children:"Customizable Modal"}),e.jsx("p",{id:"playground-desc",children:"Adjust the controls above to customize appearance. All styles are user-controlled."})]})]})};d.args={id:"playground-modal",showCloseButton:!0,closeButtonContent:"×","aria-labelledby":"playground-title","aria-describedby":"playground-desc"};d.parameters={docs:{description:{story:`**Interactive playground** - Customize all modal properties.

Use the controls to adjust:
- Background color, text color, border color
- Overlay (backdrop) color and opacity
- Font size, border radius, border width
- Padding, shadow blur

All styling is applied via CSS custom properties, demonstrating how users control the appearance.`}}};const b=()=>e.jsxs("div",{className:"story-container",children:[e.jsx("button",{popoverTarget:"basic-modal",className:"demo-trigger",children:"Open Modal"}),e.jsxs(l,{id:"basic-modal","aria-labelledby":"basic-title",className:"demo-modal",closeButtonClassName:"demo-close",children:[e.jsx("h2",{id:"basic-title",children:"Modal Title"}),e.jsx("p",{children:"This is a native modal using the HTML popover attribute!"})]})]});b.parameters={docs:{description:{story:'**Basic usage** - Trigger from any button using `popovertarget`.\n\nUser controls all styling. The Modal only provides:\n- Native popover behavior (`popover="auto"`)\n- Accessibility attributes (`role="dialog"`, `aria-modal`)\n- Optional close button with `popovertargetaction="hide"`\n\nAnimation support: Chrome, Edge, Safari 17.4+. Firefox works without animation.'}}};const h=()=>e.jsxs("div",{className:"story-container",style:{flexDirection:"column",gap:"1rem"},children:[e.jsx("h3",{style:{color:"#eee",margin:0},children:"ADA Compliance Checklist"}),e.jsx("button",{popoverTarget:"a11y-modal",className:"demo-trigger",children:"Open Accessible Modal"}),e.jsxs(l,{id:"a11y-modal","aria-labelledby":"a11y-title","aria-describedby":"a11y-desc",className:"demo-modal",closeButtonClassName:"demo-close",children:[e.jsx("h2",{id:"a11y-title",children:"Accessibility Features"}),e.jsx("div",{id:"a11y-desc",children:e.jsxs("ul",{style:{margin:"1rem 0",paddingLeft:"1.5rem",opacity:.9},children:[e.jsxs("li",{children:[e.jsx("strong",{children:'role="dialog"'})," - Screen readers announce as dialog"]}),e.jsxs("li",{children:[e.jsx("strong",{children:'aria-modal="true"'})," - Prevents focus from leaving modal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"aria-labelledby"})," - Links visible title to modal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"aria-describedby"})," - Links description to modal"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Escape key"})," - Native popover closes on Escape"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Focus trap"})," - Native popover behavior"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Close button"}),' - Has aria-label="Close modal"']})]})})]}),e.jsxs("div",{className:"a11y-info",children:[e.jsx("h4",{children:"WCAG 2.1 Compliance"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{"data-status":"pass",children:"1.3.1"})," Info and Relationships - role, aria-* attributes"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"pass",children:"2.1.1"})," Keyboard - Escape closes, Tab navigates"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"pass",children:"2.1.2"})," No Keyboard Trap - Can escape with Escape key"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"pass",children:"2.4.3"})," Focus Order - Native popover handles focus"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"pass",children:"4.1.2"})," Name, Role, Value - Proper ARIA attributes"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"user",children:"1.4.3"})," Contrast - User controls colors (provide 4.5:1+)"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"user",children:"1.4.4"})," Resize Text - User controls font size"]})]})]})]});h.parameters={docs:{description:{story:`**ADA/WCAG 2.1 Compliance** - Built-in accessibility features.

The Modal component provides:
- \`role="dialog"\` and \`aria-modal="true"\` for screen readers
- \`aria-labelledby\` and \`aria-describedby\` props for proper labeling
- \`aria-label="Close modal"\` on the close button
- Native popover keyboard handling (Escape to close, Tab navigation)
- Light dismiss (click outside to close)

**User responsibilities:**
- Provide sufficient color contrast (4.5:1 minimum for text)
- Use readable font sizes (16px minimum recommended)
- Include a visible title or aria-label
- Test with screen readers`}}};const y=()=>e.jsxs("div",{className:"story-container",children:[e.jsx("button",{popoverTarget:"minimal-modal",className:"demo-trigger",children:"Open Minimal"}),e.jsxs(l,{id:"minimal-modal","aria-label":"Minimal example",className:"demo-modal-minimal",closeButtonClassName:"demo-close-minimal",children:[e.jsx("h2",{children:"Simple Modal"}),e.jsx("p",{children:"Minimal styling example with light theme."})]})]});y.parameters={docs:{description:{story:`**Minimal styling** - Shows the modal works with any design.

The component is completely unopinionated - you provide all CSS.`}}};const v=()=>e.jsxs("div",{className:"story-container",children:[e.jsx("button",{popoverTarget:"custom-modal",className:"demo-trigger",children:"Open Custom"}),e.jsxs(l,{id:"custom-modal","aria-labelledby":"custom-title",className:"demo-modal-custom",closeButtonClassName:"demo-close-custom",children:[e.jsx("div",{className:"demo-modal-custom-header",children:e.jsx("h2",{id:"custom-title",children:"Confirm Action"})}),e.jsx("div",{className:"demo-modal-custom-body",children:e.jsx("p",{children:"Are you sure you want to proceed? This action cannot be undone."})}),e.jsxs("div",{className:"demo-modal-custom-footer",children:[e.jsx("button",{popoverTarget:"custom-modal",popoverTargetAction:"hide",className:"demo-btn-secondary",children:"Cancel"}),e.jsx("button",{className:"demo-btn-primary",children:"Confirm"})]})]})]});v.parameters={docs:{description:{story:'**Custom content layout** - Header, body, footer structure.\n\nYou can add any content inside the modal. Use additional buttons with\n`popovertarget` and `popovertargetaction="hide"` for custom close actions.'}}};const x=()=>e.jsxs("div",{className:"story-container",children:[e.jsx("button",{popoverTarget:"no-close-modal",className:"demo-trigger",children:"Open Modal"}),e.jsxs(l,{id:"no-close-modal","aria-label":"Modal without close button",showCloseButton:!1,className:"demo-modal",children:[e.jsx("h2",{children:"No Built-in Close"}),e.jsx("p",{children:"Click outside or press Escape to close."}),e.jsx("p",{style:{marginTop:"1rem"},children:e.jsx("button",{popoverTarget:"no-close-modal",popoverTargetAction:"hide",className:"demo-trigger",children:"Close Me"})})]})]});x.parameters={docs:{description:{story:`**No close button** - Use \`showCloseButton={false}\`.

User can provide their own close button inside the modal content.
Modal still closes on Escape key or clicking outside (light dismiss).`}}};const C=()=>{const[r,c]=a.useState([]),n=t=>{c(s=>[...s.slice(-4),`${new Date().toLocaleTimeString()}: ${t}`])};return e.jsxs("div",{className:"story-container",style:{flexDirection:"column"},children:[e.jsx("button",{popoverTarget:"callback-modal",className:"demo-trigger",children:"Open Modal"}),e.jsxs(l,{id:"callback-modal","aria-label":"Modal with callbacks",className:"demo-modal",closeButtonClassName:"demo-close",onShow:()=>n("Modal opened"),onHide:()=>n("Modal closed"),onToggle:t=>n(`Toggle: ${t?"open":"closed"}`),children:[e.jsx("h2",{children:"Callbacks Demo"}),e.jsx("p",{children:"Open and close to see event logs below."})]}),e.jsxs("div",{style:{marginTop:"2rem",padding:"1rem",background:"rgba(255,255,255,0.1)",borderRadius:"0.5rem",fontFamily:"monospace",fontSize:"0.875rem",minHeight:"120px"},children:[e.jsx("div",{style:{opacity:.5,marginBottom:"0.5rem"},children:"Event Log:"}),r.map((t,s)=>e.jsx("div",{children:t},s))]})]})};C.parameters={docs:{description:{story:"**Event callbacks** - `onShow`, `onHide`, `onToggle`.\n\nListen for modal state changes to sync with your app state.\n- `onShow()` - Fires when modal opens\n- `onHide()` - Fires when modal closes\n- `onToggle(open)` - Fires on both, receives boolean state"}}};const N=()=>e.jsxs("div",{className:"story-container",children:[e.jsx("button",{popoverTarget:"multi-modal",className:"demo-trigger",children:"Trigger 1"}),e.jsx("button",{popoverTarget:"multi-modal",className:"demo-trigger",style:{background:"#667eea"},children:"Trigger 2"}),e.jsx("button",{popoverTarget:"multi-modal",className:"demo-trigger",style:{background:"#e74c3c"},children:"Trigger 3"}),e.jsxs(l,{id:"multi-modal","aria-label":"Modal with multiple triggers",className:"demo-modal",closeButtonClassName:"demo-close",children:[e.jsx("h2",{children:"Multiple Triggers"}),e.jsx("p",{children:"Any button can open this modal using the same ID."})]})]});N.parameters={docs:{description:{story:"**Multiple triggers** - Any number of buttons can trigger the same modal.\n\nJust use the same `popovertarget` ID on each button."}}};d.__docgenInfo={description:"",methods:[],displayName:"Playground"};b.__docgenInfo={description:"",methods:[],displayName:"Basic"};h.__docgenInfo={description:"",methods:[],displayName:"Accessibility"};y.__docgenInfo={description:"",methods:[],displayName:"Minimal"};v.__docgenInfo={description:"",methods:[],displayName:"CustomContent"};x.__docgenInfo={description:"",methods:[],displayName:"NoCloseButton"};C.__docgenInfo={description:"",methods:[],displayName:"WithCallbacks"};N.__docgenInfo={description:"",methods:[],displayName:"MultipleTriggers"};var A,E,z;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [bgColor, setBgColor] = useState('#111111');
  const [textColor, setTextColor] = useState('#eeeeee');
  const [borderColor, setBorderColor] = useState('#444444');
  const [overlayColor, setOverlayColor] = useState('#000000');
  const [overlayOpacity, setOverlayOpacity] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [borderRadius, setBorderRadius] = useState(12);
  const [borderWidth, setBorderWidth] = useState(1);
  const [padding, setPadding] = useState(32);
  const [shadowBlur, setShadowBlur] = useState(24);
  return <div className="story-container" style={{
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div className="playground-controls">
        <label>
          <span>Background</span>
          <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} />
        </label>
        <label>
          <span>Text Color</span>
          <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} />
        </label>
        <label>
          <span>Border Color</span>
          <input type="color" value={borderColor} onChange={e => setBorderColor(e.target.value)} />
        </label>
        <label>
          <span>Overlay Color</span>
          <input type="color" value={overlayColor} onChange={e => setOverlayColor(e.target.value)} />
        </label>
        <label>
          <span>Overlay Opacity: {overlayOpacity}%</span>
          <input type="range" min="0" max="90" value={overlayOpacity} onChange={e => setOverlayOpacity(Number(e.target.value))} />
        </label>
        <label>
          <span>Font Size: {fontSize}px</span>
          <input type="range" min="12" max="24" value={fontSize} onChange={e => setFontSize(Number(e.target.value))} />
        </label>
        <label>
          <span>Border Radius: {borderRadius}px</span>
          <input type="range" min="0" max="32" value={borderRadius} onChange={e => setBorderRadius(Number(e.target.value))} />
        </label>
        <label>
          <span>Border Width: {borderWidth}px</span>
          <input type="range" min="0" max="4" value={borderWidth} onChange={e => setBorderWidth(Number(e.target.value))} />
        </label>
        <label>
          <span>Padding: {padding}px</span>
          <input type="range" min="8" max="64" value={padding} onChange={e => setPadding(Number(e.target.value))} />
        </label>
        <label>
          <span>Shadow Blur: {shadowBlur}px</span>
          <input type="range" min="0" max="48" value={shadowBlur} onChange={e => setShadowBlur(Number(e.target.value))} />
        </label>
      </div>

      <button popoverTarget={args.id} className="demo-trigger">
        Open Modal
      </button>

      <Modal {...args} className="demo-modal-playground" closeButtonClassName="demo-close" style={{
      '--modal-bg': bgColor,
      '--modal-text': textColor,
      '--modal-border-color': borderColor,
      '--modal-border-width': \`\${borderWidth}px\`,
      '--modal-overlay': \`\${overlayColor}\${Math.round(overlayOpacity * 2.55).toString(16).padStart(2, '0')}\`,
      '--modal-font-size': \`\${fontSize}px\`,
      '--modal-radius': \`\${borderRadius}px\`,
      '--modal-padding': \`\${padding}px\`,
      '--modal-shadow': \`0 8px \${shadowBlur}px rgba(0, 0, 0, 0.4)\`
    } as React.CSSProperties}>
        <h2 id="playground-title">Customizable Modal</h2>
        <p id="playground-desc">
          Adjust the controls above to customize appearance. All styles are user-controlled.
        </p>
      </Modal>
    </div>;
}`,...(z=(E=d.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var L,R,I;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`() => <div className="story-container">
    <button popoverTarget="basic-modal" className="demo-trigger">
      Open Modal
    </button>

    <Modal id="basic-modal" aria-labelledby="basic-title" className="demo-modal" closeButtonClassName="demo-close">
      <h2 id="basic-title">Modal Title</h2>
      <p>This is a native modal using the HTML popover attribute!</p>
    </Modal>
  </div>`,...(I=(R=b.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var _,$,D;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div className="story-container" style={{
  flexDirection: 'column',
  gap: '1rem'
}}>
    <h3 style={{
    color: '#eee',
    margin: 0
  }}>ADA Compliance Checklist</h3>

    <button popoverTarget="a11y-modal" className="demo-trigger">
      Open Accessible Modal
    </button>

    <Modal id="a11y-modal" aria-labelledby="a11y-title" aria-describedby="a11y-desc" className="demo-modal" closeButtonClassName="demo-close">
      <h2 id="a11y-title">Accessibility Features</h2>
      <div id="a11y-desc">
        <ul style={{
        margin: '1rem 0',
        paddingLeft: '1.5rem',
        opacity: 0.9
      }}>
          <li>
            <strong>role=&quot;dialog&quot;</strong> - Screen readers announce as dialog
          </li>
          <li>
            <strong>aria-modal=&quot;true&quot;</strong> - Prevents focus from leaving modal
          </li>
          <li>
            <strong>aria-labelledby</strong> - Links visible title to modal
          </li>
          <li>
            <strong>aria-describedby</strong> - Links description to modal
          </li>
          <li>
            <strong>Escape key</strong> - Native popover closes on Escape
          </li>
          <li>
            <strong>Focus trap</strong> - Native popover behavior
          </li>
          <li>
            <strong>Close button</strong> - Has aria-label=&quot;Close modal&quot;
          </li>
        </ul>
      </div>
    </Modal>

    <div className="a11y-info">
      <h4>WCAG 2.1 Compliance</h4>
      <ul>
        <li>
          <span data-status="pass">1.3.1</span> Info and Relationships - role, aria-* attributes
        </li>
        <li>
          <span data-status="pass">2.1.1</span> Keyboard - Escape closes, Tab navigates
        </li>
        <li>
          <span data-status="pass">2.1.2</span> No Keyboard Trap - Can escape with Escape key
        </li>
        <li>
          <span data-status="pass">2.4.3</span> Focus Order - Native popover handles focus
        </li>
        <li>
          <span data-status="pass">4.1.2</span> Name, Role, Value - Proper ARIA attributes
        </li>
        <li>
          <span data-status="user">1.4.3</span> Contrast - User controls colors (provide 4.5:1+)
        </li>
        <li>
          <span data-status="user">1.4.4</span> Resize Text - User controls font size
        </li>
      </ul>
    </div>
  </div>`,...(D=($=h.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var F,W,P;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div className="story-container">
    <button popoverTarget="minimal-modal" className="demo-trigger">
      Open Minimal
    </button>

    <Modal id="minimal-modal" aria-label="Minimal example" className="demo-modal-minimal" closeButtonClassName="demo-close-minimal">
      <h2>Simple Modal</h2>
      <p>Minimal styling example with light theme.</p>
    </Modal>
  </div>`,...(P=(W=y.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var U,q,H;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`() => <div className="story-container">
    <button popoverTarget="custom-modal" className="demo-trigger">
      Open Custom
    </button>

    <Modal id="custom-modal" aria-labelledby="custom-title" className="demo-modal-custom" closeButtonClassName="demo-close-custom">
      <div className="demo-modal-custom-header">
        <h2 id="custom-title">Confirm Action</h2>
      </div>
      <div className="demo-modal-custom-body">
        <p>Are you sure you want to proceed? This action cannot be undone.</p>
      </div>
      <div className="demo-modal-custom-footer">
        <button popoverTarget="custom-modal" popoverTargetAction="hide" className="demo-btn-secondary">
          Cancel
        </button>
        <button className="demo-btn-primary">Confirm</button>
      </div>
    </Modal>
  </div>`,...(H=(q=v.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var V,K,G;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`() => <div className="story-container">
    <button popoverTarget="no-close-modal" className="demo-trigger">
      Open Modal
    </button>

    <Modal id="no-close-modal" aria-label="Modal without close button" showCloseButton={false} className="demo-modal">
      <h2>No Built-in Close</h2>
      <p>Click outside or press Escape to close.</p>
      <p style={{
      marginTop: '1rem'
    }}>
        <button popoverTarget="no-close-modal" popoverTargetAction="hide" className="demo-trigger">
          Close Me
        </button>
      </p>
    </Modal>
  </div>`,...(G=(K=x.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Y,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [log, setLog] = useState<string[]>([]);
  const addLog = (msg: string) => {
    setLog(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${msg}\`]);
  };
  return <div className="story-container" style={{
    flexDirection: 'column'
  }}>
      <button popoverTarget="callback-modal" className="demo-trigger">
        Open Modal
      </button>

      <Modal id="callback-modal" aria-label="Modal with callbacks" className="demo-modal" closeButtonClassName="demo-close" onShow={() => addLog('Modal opened')} onHide={() => addLog('Modal closed')} onToggle={open => addLog(\`Toggle: \${open ? 'open' : 'closed'}\`)}>
        <h2>Callbacks Demo</h2>
        <p>Open and close to see event logs below.</p>
      </Modal>

      <div style={{
      marginTop: '2rem',
      padding: '1rem',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '0.5rem',
      fontFamily: 'monospace',
      fontSize: '0.875rem',
      minHeight: '120px'
    }}>
        <div style={{
        opacity: 0.5,
        marginBottom: '0.5rem'
      }}>Event Log:</div>
        {log.map((entry, i) => <div key={i}>{entry}</div>)}
      </div>
    </div>;
}`,...(Q=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var X,Z,ee;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`() => <div className="story-container">
    <button popoverTarget="multi-modal" className="demo-trigger">
      Trigger 1
    </button>
    <button popoverTarget="multi-modal" className="demo-trigger" style={{
    background: '#667eea'
  }}>
      Trigger 2
    </button>
    <button popoverTarget="multi-modal" className="demo-trigger" style={{
    background: '#e74c3c'
  }}>
      Trigger 3
    </button>

    <Modal id="multi-modal" aria-label="Modal with multiple triggers" className="demo-modal" closeButtonClassName="demo-close">
      <h2>Multiple Triggers</h2>
      <p>Any button can open this modal using the same ID.</p>
    </Modal>
  </div>`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ne=["Playground","Basic","Accessibility","Minimal","CustomContent","NoCloseButton","WithCallbacks","MultipleTriggers"];export{h as Accessibility,b as Basic,v as CustomContent,y as Minimal,N as MultipleTriggers,x as NoCloseButton,d as Playground,C as WithCallbacks,ne as __namedExportsOrder,re as default};

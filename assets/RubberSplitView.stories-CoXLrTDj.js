import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-qdalL59a.js";import{T as oe}from"./ToggleSwitch-B7En8em3.js";import{R as le}from"./RubberEffect-0Qy0r3fc.js";import"./_commonjsHelpers-CqkleIqs.js";const N={"c-rubber-split-view":"_c-rubber-split-view_1m1p7_79","c-rubber-split-view-toggle":"_c-rubber-split-view-toggle_1m1p7_86","c-rubber-split-view-banner":"_c-rubber-split-view-banner_1m1p7_92","c-rubber-split-view-content":"_c-rubber-split-view-content_1m1p7_95"},se="var(--blue-400)",re="var(--charcoal-500)",i=({id:o,open:t,defaultOpen:c=!1,onToggle:d,bannerContent:g,contentPanel:y,duration:l=.9,stretchAmount:j=5,bounceAmount:v=.9,easing:C="ease-in-out",className:x="",bannerClassName:w="",contentClassName:n="",toggleClassName:J="",style:K,showToggle:Q=!0,toggleLabels:s,bannerColor:u=se,contentColor:f=re,toggleColor:S,toggleSize:X=60,"aria-label":Y})=>{const Z=a.useId(),ee=o||`rubber-split-${Z}`,[te,ne]=a.useState(c),T=t!==void 0,r=T?t:te,ae=L=>{T||ne(L),d==null||d(L)};return e.jsxs("div",{className:`${N["c-rubber-split-view"]} ${x}`,"data-open":r,style:{"--split-duration":`${l}s`,"--split-easing":C,"--split-color-delay":`${l/2}s`,"--banner-color":u,"--content-color":f,"--toggle-open-color":S||u,"--toggle-closed-color":S||f,...K},children:[Q&&e.jsx("div",{className:`${N["c-rubber-split-view-toggle"]} ${J}`,"data-toggle-wrapper":!0,"data-open":r,children:e.jsx(oe,{id:ee,checked:r,onToggle:ae,size:X,color:r?u:f,labelColor:r?u:f,colorDelay:l/2,labelBefore:s==null?void 0:s.left,labelAfter:s==null?void 0:s.right,ariaLabel:Y})}),e.jsx(le,{open:r,duration:l,color:u,stretchAmount:j,bounceAmount:v,easing:C,className:`${N["c-rubber-split-view-banner"]} ${w}`,children:g}),e.jsx("div",{className:`${N["c-rubber-split-view-content"]} ${n}`,"data-panel":"content",children:y})]})};i.__docgenInfo={description:`RubberSplitView

A two-panel layout with a rubber band animation effect (admin portal style).
Uses RubberEffect for the stretchy banner background.
Toggle auto-contrasts based on which panel it's over (with CSS transition delay).

@example Basic usage
\`\`\`tsx
<RubberSplitView
  id="my-split"
  bannerContent={<h1>Banner</h1>}
  contentPanel={<ul>...</ul>}
  toggleLabels={{ left: 'New', right: 'All' }}
/>
\`\`\`

@example With custom colors
\`\`\`tsx
<RubberSplitView
  id="styled"
  bannerColor="#667eea"
  contentColor="#1a1a2e"
  bannerContent={<h1>Portal</h1>}
  contentPanel={<div>Content</div>}
/>
\`\`\`

@example Controlled
\`\`\`tsx
const [open, setOpen] = useState(false)

<RubberSplitView
  id="controlled"
  open={open}
  onToggle={setOpen}
  bannerContent={<h2>Banner</h2>}
  contentPanel={<ul>...</ul>}
/>
\`\`\``,methods:[],displayName:"RubberSplitView",props:{defaultOpen:{defaultValue:{value:"false",computed:!1},required:!1},duration:{defaultValue:{value:"0.9",computed:!1},required:!1},stretchAmount:{defaultValue:{value:"5",computed:!1},required:!1},bounceAmount:{defaultValue:{value:"0.9",computed:!1},required:!1},easing:{defaultValue:{value:"'ease-in-out'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},bannerClassName:{defaultValue:{value:"''",computed:!1},required:!1},contentClassName:{defaultValue:{value:"''",computed:!1},required:!1},toggleClassName:{defaultValue:{value:"''",computed:!1},required:!1},showToggle:{defaultValue:{value:"true",computed:!1},required:!1},bannerColor:{defaultValue:{value:"'var(--blue-400)'",computed:!1},required:!1},contentColor:{defaultValue:{value:"'var(--charcoal-500)'",computed:!1},required:!1},toggleSize:{defaultValue:{value:"60",computed:!1},required:!1}}};const me={title:"Components/RubberSplitView",component:i,parameters:{layout:"fullscreen"},argTypes:{id:{control:"text",description:"Unique ID",table:{category:"Required"}},open:{control:"boolean",description:"Controlled open state",table:{category:"State"}},defaultOpen:{control:"boolean",description:"Default open for uncontrolled",table:{category:"State"}},duration:{control:{type:"range",min:.3,max:1.5,step:.1},description:"Animation duration",table:{category:"Animation"}},showToggle:{control:"boolean",description:"Show built-in toggle",table:{category:"Toggle"}},toggleSize:{control:{type:"range",min:40,max:100,step:5},description:"Toggle size in pixels",table:{category:"Toggle"}},bannerColor:{control:"color",description:"Banner background color",table:{category:"Colors"}},contentColor:{control:"color",description:"Content panel background color",table:{category:"Colors"}},toggleColor:{control:"color",description:"Toggle color (auto-contrasts if not set)",table:{category:"Colors"}}}},p={render:()=>{const[o,t]=a.useState(!0);return e.jsx("div",{className:"story-container",children:e.jsx(i,{id:"basic-split",open:o,onToggle:t,className:"demo-split-container",contentClassName:"demo-split-content",toggleLabels:{left:"New",right:"All"},bannerColor:"var(--blue-400)",contentColor:"var(--charcoal-500)",bannerContent:e.jsxs("div",{className:"demo-banner-content",children:[e.jsx("h1",{children:"Admin Portal"}),e.jsx("p",{children:"Manage your items here"}),e.jsx("button",{className:"demo-banner-btn",children:"Download"})]}),contentPanel:e.jsxs("div",{className:"demo-content-list",children:[e.jsxs("h3",{children:["Items (",o?"New Only":"All",")"]}),e.jsx("div",{className:"demo-card",children:"Card 1"}),e.jsx("div",{className:"demo-card",children:"Card 2"}),e.jsx("div",{className:"demo-card",children:"Card 3"})]}),"aria-label":"Toggle between new and all items"})})}},m={render:()=>{const[o,t]=a.useState(!0);return e.jsx("div",{className:"story-container",children:e.jsx(i,{id:"custom-colors",open:o,onToggle:t,className:"demo-split-container",contentClassName:"demo-split-content",toggleLabels:{left:"Active",right:"Archive"},bannerColor:"var(--red-300)",contentColor:"var(--charcoal-700)",bannerContent:e.jsxs("div",{className:"demo-banner-content",children:[e.jsx("h1",{children:"Dashboard"}),e.jsx("p",{children:"View your data"})]}),contentPanel:e.jsxs("div",{className:"demo-content-list",children:[e.jsx("h3",{children:"Data List"}),e.jsx("div",{className:"demo-card",children:"Item A"}),e.jsx("div",{className:"demo-card",children:"Item B"})]}),"aria-label":"Toggle view"})})}},b={render:()=>{const[o,t]=a.useState(!0);return e.jsxs("div",{className:"story-container",children:[e.jsxs("div",{className:"external-controls",children:[e.jsx("button",{onClick:()=>t(!0),className:"demo-ext-btn",children:"Show Banner"}),e.jsx("button",{onClick:()=>t(!1),className:"demo-ext-btn",children:"Show Content"})]}),e.jsx(i,{id:"external-split",open:o,onToggle:t,showToggle:!1,className:"demo-split-container",contentClassName:"demo-split-content",bannerColor:"var(--blue-700)",contentColor:"var(--charcoal-500)",bannerContent:e.jsx("div",{className:"demo-banner-content",children:e.jsx("h1",{children:"Banner"})}),contentPanel:e.jsx("div",{className:"demo-content-list",children:e.jsx("h3",{children:"Content"})})})]})}},h={render:()=>{const[o,t]=a.useState(!0),[c,d]=a.useState(.9),[g,y]=a.useState("#667eea"),[l,j]=a.useState("#1a1a2e"),[v,C]=a.useState("New"),[x,w]=a.useState("All");return e.jsxs("div",{className:"story-container",children:[e.jsxs("div",{className:"playground-controls",children:[e.jsxs("label",{children:[e.jsxs("span",{children:["Duration: ",c,"s"]}),e.jsx("input",{type:"range",min:"0.3",max:"1.5",step:"0.1",value:c,onChange:n=>d(Number(n.target.value))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Left Label"}),e.jsx("input",{type:"text",value:v,onChange:n=>C(n.target.value),placeholder:"Left"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Right Label"}),e.jsx("input",{type:"text",value:x,onChange:n=>w(n.target.value),placeholder:"Right"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Banner Color"}),e.jsx("input",{type:"color",value:g,onChange:n=>y(n.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Content Color"}),e.jsx("input",{type:"color",value:l,onChange:n=>j(n.target.value)})]})]}),e.jsx(i,{id:"playground-split",open:o,onToggle:t,duration:c,className:"demo-split-container",contentClassName:"demo-split-content",toggleLabels:{left:v,right:x},bannerColor:g,contentColor:l,bannerContent:e.jsxs("div",{className:"demo-banner-content",children:[e.jsx("h1",{children:"Playground"}),e.jsx("p",{children:"Customize the animation"})]}),contentPanel:e.jsxs("div",{className:"demo-content-list",children:[e.jsx("h3",{children:"Content Panel"}),e.jsx("p",{children:"Adjust settings above"})]}),"aria-label":"Toggle panels"})]})}};var O,A,R,V,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="story-container">
        <RubberSplitView id="basic-split" open={open} onToggle={setOpen} className="demo-split-container" contentClassName="demo-split-content" toggleLabels={{
        left: 'New',
        right: 'All'
      }} bannerColor="var(--blue-400)" contentColor="var(--charcoal-500)" bannerContent={<div className="demo-banner-content">
              <h1>Admin Portal</h1>
              <p>Manage your items here</p>
              <button className="demo-banner-btn">Download</button>
            </div>} contentPanel={<div className="demo-content-list">
              <h3>Items ({open ? 'New Only' : 'All'})</h3>
              <div className="demo-card">Card 1</div>
              <div className="demo-card">Card 2</div>
              <div className="demo-card">Card 3</div>
            </div>} aria-label="Toggle between new and all items" />
      </div>;
  }
}`,...(R=(A=p.parameters)==null?void 0:A.docs)==null?void 0:R.source},description:{story:`Basic split view with rubber animation (admin portal style).
Toggle auto-contrasts with panel backgrounds.`,...(P=(V=p.parameters)==null?void 0:V.docs)==null?void 0:P.description}}};var B,_,D,q,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="story-container">
        <RubberSplitView id="custom-colors" open={open} onToggle={setOpen} className="demo-split-container" contentClassName="demo-split-content" toggleLabels={{
        left: 'Active',
        right: 'Archive'
      }} bannerColor="var(--red-300)" contentColor="var(--charcoal-700)" bannerContent={<div className="demo-banner-content">
              <h1>Dashboard</h1>
              <p>View your data</p>
            </div>} contentPanel={<div className="demo-content-list">
              <h3>Data List</h3>
              <div className="demo-card">Item A</div>
              <div className="demo-card">Item B</div>
            </div>} aria-label="Toggle view" />
      </div>;
  }
}`,...(D=(_=m.parameters)==null?void 0:_.docs)==null?void 0:D.source},description:{story:"Different color scheme - notice toggle auto-contrasts.",...(I=(q=m.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var E,$,k,z,U;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="story-container">
        <div className="external-controls">
          <button onClick={() => setOpen(true)} className="demo-ext-btn">
            Show Banner
          </button>
          <button onClick={() => setOpen(false)} className="demo-ext-btn">
            Show Content
          </button>
        </div>

        <RubberSplitView id="external-split" open={open} onToggle={setOpen} showToggle={false} className="demo-split-container" contentClassName="demo-split-content" bannerColor="var(--blue-700)" contentColor="var(--charcoal-500)" bannerContent={<div className="demo-banner-content">
              <h1>Banner</h1>
            </div>} contentPanel={<div className="demo-content-list">
              <h3>Content</h3>
            </div>} />
      </div>;
  }
}`,...(k=($=b.parameters)==null?void 0:$.docs)==null?void 0:k.source},description:{story:"Without toggle - control externally.",...(U=(z=b.parameters)==null?void 0:z.docs)==null?void 0:U.description}}};var F,M,W,G,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    const [duration, setDuration] = useState(0.9);
    const [bannerColor, setBannerColor] = useState('#667eea');
    const [contentColor, setContentColor] = useState('#1a1a2e');
    const [leftLabel, setLeftLabel] = useState('New');
    const [rightLabel, setRightLabel] = useState('All');
    return <div className="story-container">
        <div className="playground-controls">
          <label>
            <span>Duration: {duration}s</span>
            <input type="range" min="0.3" max="1.5" step="0.1" value={duration} onChange={e => setDuration(Number(e.target.value))} />
          </label>
          <label>
            <span>Left Label</span>
            <input type="text" value={leftLabel} onChange={e => setLeftLabel(e.target.value)} placeholder="Left" />
          </label>
          <label>
            <span>Right Label</span>
            <input type="text" value={rightLabel} onChange={e => setRightLabel(e.target.value)} placeholder="Right" />
          </label>
          <label>
            <span>Banner Color</span>
            <input type="color" value={bannerColor} onChange={e => setBannerColor(e.target.value)} />
          </label>
          <label>
            <span>Content Color</span>
            <input type="color" value={contentColor} onChange={e => setContentColor(e.target.value)} />
          </label>
        </div>

        <RubberSplitView id="playground-split" open={open} onToggle={setOpen} duration={duration} className="demo-split-container" contentClassName="demo-split-content" toggleLabels={{
        left: leftLabel,
        right: rightLabel
      }} bannerColor={bannerColor} contentColor={contentColor} bannerContent={<div className="demo-banner-content">
              <h1>Playground</h1>
              <p>Customize the animation</p>
            </div>} contentPanel={<div className="demo-content-list">
              <h3>Content Panel</h3>
              <p>Adjust settings above</p>
            </div>} aria-label="Toggle panels" />
      </div>;
  }
}`,...(W=(M=h.parameters)==null?void 0:M.docs)==null?void 0:W.source},description:{story:"Playground with controls.",...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};const be=["Basic","CustomColors","ExternalControl","Playground"];export{p as Basic,m as CustomColors,b as ExternalControl,h as Playground,be as __namedExportsOrder,me as default};

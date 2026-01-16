import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-qdalL59a.js";import"./_commonjsHelpers-CqkleIqs.js";const i=({id:o,name:d,value:t,checked:s,defaultChecked:a,onChange:c,disabled:l=!1,src:p,alt:h,children:y,className:m="",inputClassName:oe="",imageClassName:te="",style:le,"aria-label":ie})=>{const de=n.useCallback(S=>{c==null||c(S.target.checked,S)},[c]),ne=s!==void 0?s:void 0;return e.jsxs("label",{htmlFor:o,className:m,style:le,"data-checked":ne,"data-disabled":l||void 0,children:[e.jsx("input",{type:"checkbox",id:o,name:d,value:t,checked:s,defaultChecked:a,onChange:de,disabled:l,className:oe,"aria-label":ie}),p?e.jsx("img",{src:p,alt:h||"",className:te}):y]})};i.__docgenInfo={description:`CheckboxImage

An image-based checkbox component. Users control all styling.
The wrapper uses data-checked and data-disabled attributes for state-based CSS.

@example Basic with image src
\`\`\`tsx
<CheckboxImage
  id="option-1"
  src="/path/to/image.jpg"
  alt="Option 1"
  className="my-checkbox-image"
  onChange={(checked) => console.log(checked)}
/>
\`\`\`

@example With custom children
\`\`\`tsx
<CheckboxImage
  id="option-2"
  className="my-checkbox-image"
  aria-label="Select color red"
>
  <div className="color-swatch" style={{ background: 'red' }} />
</CheckboxImage>
\`\`\`

@example Controlled
\`\`\`tsx
const [selected, setSelected] = useState(false)

<CheckboxImage
  id="controlled"
  checked={selected}
  onChange={setSelected}
  src="/image.jpg"
  alt="Controlled option"
  className="my-checkbox-image"
/>
\`\`\`

@example Styling with data attributes
\`\`\`css
.my-checkbox-image {
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s;
}

.my-checkbox-image[data-checked="true"] {
  border-color: blue;
}

.my-checkbox-image[data-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
}
\`\`\``,methods:[],displayName:"CheckboxImage",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},inputClassName:{defaultValue:{value:"''",computed:!1},required:!1},imageClassName:{defaultValue:{value:"''",computed:!1},required:!1}}};const ue={title:"Components/CheckboxImage",component:i,parameters:{layout:"fullscreen"},argTypes:{id:{control:"text",description:"Unique ID for the checkbox input",table:{category:"Required"}},src:{control:"text",description:"Image source URL",table:{category:"Content"}},alt:{control:"text",description:"Alt text for image",table:{category:"Content"}},checked:{control:"boolean",description:"Controlled checked state",table:{category:"State"}},defaultChecked:{control:"boolean",description:"Default checked for uncontrolled",table:{category:"State"}},disabled:{control:"boolean",description:"Disable the checkbox",table:{category:"State"}},name:{control:"text",description:"Name for form submission",table:{category:"Form"}},value:{control:"text",description:"Value for form submission",table:{category:"Form"}},className:{control:"text",description:"Class for wrapper label",table:{category:"Styling"}},inputClassName:{control:"text",description:"Class for hidden input",table:{category:"Styling"}},imageClassName:{control:"text",description:"Class for image element",table:{category:"Styling"}},"aria-label":{control:"text",description:"Accessible label",table:{category:"Accessibility"}}}},r=["https://picsum.photos/seed/a/150/150","https://picsum.photos/seed/b/150/150","https://picsum.photos/seed/c/150/150","https://picsum.photos/seed/d/150/150"],u={render:()=>{const[o,d]=n.useState([]),t=(s,a)=>{d(c=>a?[...c,s]:c.filter(l=>l!==s))};return e.jsxs("div",{className:"story-container",children:[e.jsx("div",{className:"demo-grid",children:r.map((s,a)=>e.jsx(i,{id:`image-${a}`,src:s,alt:`Option ${a+1}`,checked:o.includes(`image-${a}`),onChange:c=>t(`image-${a}`,c),className:"demo-checkbox-image",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img"},a))}),e.jsxs("p",{className:"demo-selected",children:["Selected: ",o.length," items"]})]})}},g={render:()=>{const[o,d]=n.useState(null);return e.jsxs("div",{className:"story-container",children:[e.jsx("div",{className:"demo-grid",children:r.map((t,s)=>e.jsx(i,{id:`single-${s}`,src:t,alt:`Option ${s+1}`,checked:o===`single-${s}`,onChange:a=>d(a?`single-${s}`:null),className:"demo-checkbox-image",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img"},s))}),e.jsxs("p",{className:"demo-selected",children:["Selected: ",o||"none"]})]})}},b={render:()=>{const o=["#e74c3c","#3498db","#2ecc71","#f1c40f","#9b59b6"],[d,t]=n.useState([]),s=(a,c)=>{t(l=>c?[...l,a]:l.filter(p=>p!==a))};return e.jsxs("div",{className:"story-container",children:[e.jsx("div",{className:"demo-grid-colors",children:o.map(a=>e.jsx(i,{id:`color-${a}`,checked:d.includes(a),onChange:c=>s(a,c),className:"demo-checkbox-color",inputClassName:"demo-checkbox-input","aria-label":`Select color ${a}`,children:e.jsx("span",{className:"demo-color-swatch",style:{background:a}})},a))}),e.jsxs("p",{className:"demo-selected",children:["Selected colors: ",d.join(", ")||"none"]})]})}},x={render:()=>e.jsx("div",{className:"story-container",children:e.jsxs("div",{className:"demo-grid",children:[e.jsx(i,{id:"disabled-unchecked",src:r[0],alt:"Disabled unchecked",disabled:!0,className:"demo-checkbox-image",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img"}),e.jsx(i,{id:"disabled-checked",src:r[1],alt:"Disabled checked",disabled:!0,defaultChecked:!0,className:"demo-checkbox-image",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img"}),e.jsx(i,{id:"enabled",src:r[2],alt:"Enabled",className:"demo-checkbox-image",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img"})]})})},k={render:()=>e.jsxs("div",{className:"story-container",children:[e.jsxs("div",{className:"demo-grid",children:[e.jsx(i,{id:"uncontrolled-1",src:r[0],alt:"Option 1",defaultChecked:!0,className:"demo-checkbox-image",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img"}),e.jsx(i,{id:"uncontrolled-2",src:r[1],alt:"Option 2",className:"demo-checkbox-image",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img"})]}),e.jsx("p",{className:"demo-note",children:"Note: Uncontrolled mode - check the native input state. data-checked attribute only works in controlled mode."})]})},N={render:()=>{const[o,d]=n.useState(!1),[t,s]=n.useState("#3498db"),[a,c]=n.useState(3),[l,p]=n.useState(8),[h,y]=n.useState(150);return e.jsxs("div",{className:"story-container",children:[e.jsxs("div",{className:"playground-controls",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Border Color"}),e.jsx("input",{type:"color",value:t,onChange:m=>s(m.target.value)})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Border Width: ",a,"px"]}),e.jsx("input",{type:"range",min:"1",max:"10",value:a,onChange:m=>c(Number(m.target.value))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Border Radius: ",l,"px"]}),e.jsx("input",{type:"range",min:"0",max:"50",value:l,onChange:m=>p(Number(m.target.value))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Image Size: ",h,"px"]}),e.jsx("input",{type:"range",min:"50",max:"300",value:h,onChange:m=>y(Number(m.target.value))})]})]}),e.jsx("div",{className:"demo-playground-preview",children:e.jsx(i,{id:"playground",src:r[0],alt:"Playground option",checked:o,onChange:d,className:"demo-checkbox-image-playground",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img",style:{"--checkbox-border-color":t,"--checkbox-border-width":`${a}px`,"--checkbox-border-radius":`${l}px`,"--checkbox-image-size":`${h}px`}})}),e.jsxs("p",{className:"demo-selected",children:["Checked: ",o?"Yes":"No"]})]})}},C={render:()=>{const[o,d]=n.useState([]),t=(s,a)=>{d(c=>a?[...c,s]:c.filter(l=>l!==s))};return e.jsxs("div",{className:"story-container",children:[e.jsxs("div",{className:"demo-grid",children:[e.jsx(i,{id:"a11y-1",src:r[0],alt:"Mountain landscape",checked:o.includes("a11y-1"),onChange:s=>t("a11y-1",s),className:"demo-checkbox-image",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img","aria-label":"Select mountain landscape photo"}),e.jsx(i,{id:"a11y-2",src:r[1],alt:"Ocean view",checked:o.includes("a11y-2"),onChange:s=>t("a11y-2",s),className:"demo-checkbox-image",inputClassName:"demo-checkbox-input",imageClassName:"demo-checkbox-img","aria-label":"Select ocean view photo"})]}),e.jsxs("div",{className:"a11y-info",children:[e.jsx("h4",{children:"Accessibility Features"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{"data-status":"pass",children:"PASS"}),"Native checkbox - keyboard accessible (Space to toggle)"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"pass",children:"PASS"}),"Label association via htmlFor/id"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"pass",children:"PASS"}),"Alt text for images"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"user",children:"USER"}),"aria-label for additional context (optional)"]}),e.jsxs("li",{children:[e.jsx("span",{"data-status":"user",children:"USER"}),"Focus styles (user provides via CSS)"]})]})]})]})}};var v,j,f,I,$;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const toggle = (id: string, checked: boolean) => {
      setSelected(prev => checked ? [...prev, id] : prev.filter(i => i !== id));
    };
    return <div className="story-container">
        <div className="demo-grid">
          {sampleImages.map((src, i) => <CheckboxImage key={i} id={\`image-\${i}\`} src={src} alt={\`Option \${i + 1}\`} checked={selected.includes(\`image-\${i}\`)} onChange={checked => toggle(\`image-\${i}\`, checked)} className="demo-checkbox-image" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" />)}
        </div>
        <p className="demo-selected">Selected: {selected.length} items</p>
      </div>;
  }
}`,...(f=(j=u.parameters)==null?void 0:j.docs)==null?void 0:f.source},description:{story:`Basic example with image selection.
The component is unstyled by default - all styles come from the demo CSS.`,...($=(I=u.parameters)==null?void 0:I.docs)==null?void 0:$.description}}};var w,B,A,R,z;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:'{\n  render: () => {\n    const [selected, setSelected] = useState<string | null>(null);\n    return <div className="story-container">\n        <div className="demo-grid">\n          {sampleImages.map((src, i) => <CheckboxImage key={i} id={`single-${i}`} src={src} alt={`Option ${i + 1}`} checked={selected === `single-${i}`} onChange={checked => setSelected(checked ? `single-${i}` : null)} className="demo-checkbox-image" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" />)}\n        </div>\n        <p className="demo-selected">Selected: {selected || \'none\'}</p>\n      </div>;\n  }\n}',...(A=(B=g.parameters)==null?void 0:B.docs)==null?void 0:A.source},description:{story:`Single selection (radio-like behavior).
Handle mutual exclusivity in your onChange handler.`,...(z=(R=g.parameters)==null?void 0:R.docs)==null?void 0:z.description}}};var U,O,P,W,D;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];
    const [selected, setSelected] = useState<string[]>([]);
    const toggle = (color: string, checked: boolean) => {
      setSelected(prev => checked ? [...prev, color] : prev.filter(c => c !== color));
    };
    return <div className="story-container">
        <div className="demo-grid-colors">
          {colors.map(color => <CheckboxImage key={color} id={\`color-\${color}\`} checked={selected.includes(color)} onChange={checked => toggle(color, checked)} className="demo-checkbox-color" inputClassName="demo-checkbox-input" aria-label={\`Select color \${color}\`}>
              <span className="demo-color-swatch" style={{
            background: color
          }} />
            </CheckboxImage>)}
        </div>
        <p className="demo-selected">Selected colors: {selected.join(', ') || 'none'}</p>
      </div>;
  }
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:`Custom children instead of image src.
Great for color swatches, icons, or any custom content.`,...(D=(W=b.parameters)==null?void 0:W.docs)==null?void 0:D.description}}};var E,F,q,V,_;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="story-container">
      <div className="demo-grid">
        <CheckboxImage id="disabled-unchecked" src={sampleImages[0]} alt="Disabled unchecked" disabled className="demo-checkbox-image" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" />
        <CheckboxImage id="disabled-checked" src={sampleImages[1]} alt="Disabled checked" disabled defaultChecked className="demo-checkbox-image" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" />
        <CheckboxImage id="enabled" src={sampleImages[2]} alt="Enabled" className="demo-checkbox-image" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" />
      </div>
    </div>
}`,...(q=(F=x.parameters)==null?void 0:F.docs)==null?void 0:q.source},description:{story:`Disabled state example.
Use data-disabled attribute for styling.`,...(_=(V=x.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var L,T,M,Y,G;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="story-container">
      <div className="demo-grid">
        <CheckboxImage id="uncontrolled-1" src={sampleImages[0]} alt="Option 1" defaultChecked className="demo-checkbox-image" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" />
        <CheckboxImage id="uncontrolled-2" src={sampleImages[1]} alt="Option 2" className="demo-checkbox-image" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" />
      </div>
      <p className="demo-note">
        Note: Uncontrolled mode - check the native input state.
        data-checked attribute only works in controlled mode.
      </p>
    </div>
}`,...(M=(T=k.parameters)==null?void 0:T.docs)==null?void 0:M.source},description:{story:`Uncontrolled usage with defaultChecked.
State is managed internally by the input.`,...(G=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:G.description}}};var H,J,K,Q,X;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const [borderColor, setBorderColor] = useState('#3498db');
    const [borderWidth, setBorderWidth] = useState(3);
    const [borderRadius, setBorderRadius] = useState(8);
    const [imageSize, setImageSize] = useState(150);
    return <div className="story-container">
        <div className="playground-controls">
          <label>
            <span>Border Color</span>
            <input type="color" value={borderColor} onChange={e => setBorderColor(e.target.value)} />
          </label>
          <label>
            <span>Border Width: {borderWidth}px</span>
            <input type="range" min="1" max="10" value={borderWidth} onChange={e => setBorderWidth(Number(e.target.value))} />
          </label>
          <label>
            <span>Border Radius: {borderRadius}px</span>
            <input type="range" min="0" max="50" value={borderRadius} onChange={e => setBorderRadius(Number(e.target.value))} />
          </label>
          <label>
            <span>Image Size: {imageSize}px</span>
            <input type="range" min="50" max="300" value={imageSize} onChange={e => setImageSize(Number(e.target.value))} />
          </label>
        </div>

        <div className="demo-playground-preview">
          <CheckboxImage id="playground" src={sampleImages[0]} alt="Playground option" checked={checked} onChange={setChecked} className="demo-checkbox-image-playground" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" style={{
          '--checkbox-border-color': borderColor,
          '--checkbox-border-width': \`\${borderWidth}px\`,
          '--checkbox-border-radius': \`\${borderRadius}px\`,
          '--checkbox-image-size': \`\${imageSize}px\`
        } as React.CSSProperties} />
        </div>

        <p className="demo-selected">Checked: {checked ? 'Yes' : 'No'}</p>
      </div>;
  }
}`,...(K=(J=N.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:`Playground with interactive controls.
Adjust border, colors, and sizes via Storybook controls.`,...(X=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,ae,se,ce;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const toggle = (id: string, checked: boolean) => {
      setSelected(prev => checked ? [...prev, id] : prev.filter(i => i !== id));
    };
    return <div className="story-container">
        <div className="demo-grid">
          <CheckboxImage id="a11y-1" src={sampleImages[0]} alt="Mountain landscape" checked={selected.includes('a11y-1')} onChange={checked => toggle('a11y-1', checked)} className="demo-checkbox-image" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" aria-label="Select mountain landscape photo" />
          <CheckboxImage id="a11y-2" src={sampleImages[1]} alt="Ocean view" checked={selected.includes('a11y-2')} onChange={checked => toggle('a11y-2', checked)} className="demo-checkbox-image" inputClassName="demo-checkbox-input" imageClassName="demo-checkbox-img" aria-label="Select ocean view photo" />
        </div>

        <div className="a11y-info">
          <h4>Accessibility Features</h4>
          <ul>
            <li>
              <span data-status="pass">PASS</span>
              Native checkbox - keyboard accessible (Space to toggle)
            </li>
            <li>
              <span data-status="pass">PASS</span>
              Label association via htmlFor/id
            </li>
            <li>
              <span data-status="pass">PASS</span>
              Alt text for images
            </li>
            <li>
              <span data-status="user">USER</span>
              aria-label for additional context (optional)
            </li>
            <li>
              <span data-status="user">USER</span>
              Focus styles (user provides via CSS)
            </li>
          </ul>
        </div>
      </div>;
  }
}`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Accessibility example with proper labeling.",...(ce=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ce.description}}};const ge=["Basic","SingleSelect","CustomChildren","Disabled","Uncontrolled","Playground","Accessibility"];export{C as Accessibility,u as Basic,b as CustomChildren,x as Disabled,N as Playground,g as SingleSelect,k as Uncontrolled,ge as __namedExportsOrder,ue as default};

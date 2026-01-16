import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-qdalL59a.js";import{R as i}from"./RubberEffect-0Qy0r3fc.js";import"./_commonjsHelpers-CqkleIqs.js";const _={title:"Components/RubberEffect",component:i,parameters:{layout:"fullscreen"},argTypes:{open:{control:"boolean",description:"Open state triggers the animation",table:{category:"State"}},duration:{control:{type:"range",min:.2,max:2,step:.1},description:"Animation duration in seconds",table:{category:"Animation"}},stretchAmount:{control:{type:"range",min:1,max:10,step:.5},description:"Peak stretch amount (higher = more dramatic)",table:{category:"Animation"}},bounceAmount:{control:{type:"range",min:.5,max:1.5,step:.05},description:"Bounce back amount before settling",table:{category:"Animation"}},easing:{control:"text",description:"CSS easing function",table:{category:"Animation"}},color:{control:"color",description:"Background color",table:{category:"Styling"}},className:{control:"text",description:"Class for styling",table:{category:"Styling"}}}},a={render:()=>{const[n,s]=o.useState(!0);return e.jsxs("div",{className:"story-container",children:[e.jsx("button",{onClick:()=>s(!n),className:"demo-toggle-btn",children:n?"Close":"Open"}),e.jsx("div",{className:"demo-effect-container",children:e.jsx(i,{open:n,className:"demo-rubber-effect"})})]})}},r={render:()=>{const[n,s]=o.useState(!0);return e.jsxs("div",{className:"story-container",children:[e.jsx("button",{onClick:()=>s(!n),className:"demo-toggle-btn",children:n?"Close":"Open"}),e.jsx("div",{className:"demo-effect-container",children:e.jsx(i,{open:n,className:"demo-rubber-effect",children:e.jsxs("div",{className:"demo-overlay-content","data-open":n,children:[e.jsx("h2",{children:"Content Layer"}),e.jsx("p",{children:"This content slides but doesn't stretch!"})]})})})]})}},c={render:()=>{const[n,s]=o.useState(!0),[l,B]=o.useState(.9),[d,R]=o.useState("#3498db"),[u,D]=o.useState(5),[p,P]=o.useState(.9),[m,w]=o.useState("ease-in-out");return e.jsxs("div",{className:"story-container",children:[e.jsxs("div",{className:"playground-controls",children:[e.jsxs("label",{children:[e.jsxs("span",{children:["Duration: ",l,"s"]}),e.jsx("input",{type:"range",min:"0.2",max:"2",step:"0.1",value:l,onChange:t=>B(Number(t.target.value))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Stretch: ",u]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:u,onChange:t=>D(Number(t.target.value))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:["Bounce: ",p]}),e.jsx("input",{type:"range",min:"0.5",max:"1.5",step:"0.05",value:p,onChange:t=>P(Number(t.target.value))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Easing"}),e.jsxs("select",{value:m,onChange:t=>w(t.target.value),children:[e.jsx("option",{value:"ease-in-out",children:"ease-in-out"}),e.jsx("option",{value:"ease-in",children:"ease-in"}),e.jsx("option",{value:"ease-out",children:"ease-out"}),e.jsx("option",{value:"linear",children:"linear"}),e.jsx("option",{value:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",children:"bouncy"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Color"}),e.jsx("input",{type:"color",value:d,onChange:t=>R(t.target.value)})]})]}),e.jsx("button",{onClick:()=>s(!n),className:"demo-toggle-btn",children:n?"Close":"Open"}),e.jsx("div",{className:"demo-effect-container",children:e.jsx(i,{open:n,duration:l,color:d,stretchAmount:u,bounceAmount:p,easing:m})})]})}};var b,g,h,v,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className='story-container'>
        <button onClick={() => setOpen(!open)} className='demo-toggle-btn'>
          {open ? 'Close' : 'Open'}
        </button>

        <div className='demo-effect-container'>
          <RubberEffect open={open} className='demo-rubber-effect' />
        </div>
      </div>;
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:`Basic rubber effect - just the animated background.
Click toggle to see the stretchy animation.`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var y,f,j,C,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className='story-container'>
        <button onClick={() => setOpen(!open)} className='demo-toggle-btn'>
          {open ? 'Close' : 'Open'}
        </button>

        <div className='demo-effect-container'>
          <RubberEffect open={open} className='demo-rubber-effect'>
            <div className='demo-overlay-content' data-open={open}>
              <h2>Content Layer</h2>
              <p>This content slides but doesn't stretch!</p>
            </div>
          </RubberEffect>
        </div>
      </div>;
  }
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source},description:{story:`Use the effect as a background layer with content on top.
Notice how the content doesn't stretch - only the background.`,...(N=(C=r.parameters)==null?void 0:C.docs)==null?void 0:N.description}}};var S,A,O,E,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    const [duration, setDuration] = useState(0.9);
    const [color, setColor] = useState('#3498db');
    const [stretchAmount, setStretchAmount] = useState(5);
    const [bounceAmount, setBounceAmount] = useState(0.9);
    const [easing, setEasing] = useState('ease-in-out');
    return <div className='story-container'>
        <div className='playground-controls'>
          <label>
            <span>Duration: {duration}s</span>
            <input type='range' min='0.2' max='2' step='0.1' value={duration} onChange={e => setDuration(Number(e.target.value))} />
          </label>
          <label>
            <span>Stretch: {stretchAmount}</span>
            <input type='range' min='1' max='10' step='0.5' value={stretchAmount} onChange={e => setStretchAmount(Number(e.target.value))} />
          </label>
          <label>
            <span>Bounce: {bounceAmount}</span>
            <input type='range' min='0.5' max='1.5' step='0.05' value={bounceAmount} onChange={e => setBounceAmount(Number(e.target.value))} />
          </label>
          <label>
            <span>Easing</span>
            <select value={easing} onChange={e => setEasing(e.target.value)}>
              <option value='ease-in-out'>ease-in-out</option>
              <option value='ease-in'>ease-in</option>
              <option value='ease-out'>ease-out</option>
              <option value='linear'>linear</option>
              <option value='cubic-bezier(0.68, -0.55, 0.27, 1.55)'>bouncy</option>
            </select>
          </label>
          <label>
            <span>Color</span>
            <input type='color' value={color} onChange={e => setColor(e.target.value)} />
          </label>
        </div>

        <button onClick={() => setOpen(!open)} className='demo-toggle-btn'>
          {open ? 'Close' : 'Open'}
        </button>

        <div className='demo-effect-container'>
          <RubberEffect open={open} duration={duration} color={color} stretchAmount={stretchAmount} bounceAmount={bounceAmount} easing={easing} />
        </div>
      </div>;
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source},description:{story:"Playground with controls.",...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.description}}};const U=["Basic","WithContentOverlay","Playground"];export{a as Basic,c as Playground,r as WithContentOverlay,U as __namedExportsOrder,_ as default};

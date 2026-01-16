import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-qdalL59a.js";import{u as p}from"./MagnetizeComponent-BsnZWyqi.js";import"./_commonjsHelpers-CqkleIqs.js";const D={title:"Utils/useMagnetize",parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#1c1d20"},{name:"gray",value:"#e0e0e0"}]}},argTypes:{intensity:{control:{type:"range",min:.1,max:2,step:.1},description:"How far the element travels relative to cursor distance. 1 = natural, <1 = subtle, >1 = exaggerated"},followLerpFactor:{control:{type:"range",min:.02,max:.3,step:.01},description:"How quickly the element follows the cursor. Lower = floaty/delayed, Higher = snappy"},maxTravelPercent:{control:{type:"range",min:20,max:300,step:10},description:"Maximum translate() movement allowed, in percent of element size"},clampWithinArea:{control:"boolean",description:"Prevents the element from moving outside the container"},springStiffness:{control:{type:"range",min:5,max:40,step:1},description:"Strength of the pull back to center when mouse leaves"},springDamping:{control:{type:"range",min:4,max:20,step:1},description:"How much bounce is absorbed on return"}}},T=({intensity:e,followLerpFactor:s,maxTravelPercent:a,clampWithinArea:r,springStiffness:i,springDamping:u})=>{const g=o.useRef(null),f=o.useMemo(()=>[{selector:".magnet-target",options:{intensity:e,followLerpFactor:s,maxTravelPercent:a,clampWithinArea:r,returnSpring:{stiffness:i,damping:u}}}],[e,s,a,r,i,u]),{handleMouseMove:v,handleMouseLeave:P}=p({areaRef:g,targets:f});return t.jsx("div",{ref:g,className:"magnet-area",onMouseMove:v,onMouseLeave:P,children:t.jsx("div",{className:"magnet-target",children:"Hover me"})})},l=e=>t.jsx(T,{...e});l.args={intensity:.5,followLerpFactor:.18,maxTravelPercent:200,clampWithinArea:!0,springStiffness:18,springDamping:10};const c=()=>{const e=o.useRef(null),{handleMouseMove:s,handleMouseLeave:a}=p({areaRef:e,targets:[{selector:".magnet-target",options:{intensity:.5}}]});return t.jsx("div",{ref:e,className:"magnet-area",onMouseMove:s,onMouseLeave:a,children:t.jsx("div",{className:"magnet-target",children:"Hover me"})})};c.parameters={docs:{description:{story:"Simple single-target magnetize effect with default settings."}}};const k=({outerIntensity:e,innerIntensity:s,followLerpFactor:a,springStiffness:r,springDamping:i})=>{const u=o.useRef(null),g=o.useMemo(()=>[{selector:".magnet-button",options:{intensity:e,followLerpFactor:a,clampWithinArea:!0,returnSpring:{stiffness:r,damping:i,precision:.01}}},{selector:".magnet-button__label",options:{intensity:s,followLerpFactor:a,clampWithinArea:!0,returnSpring:{stiffness:r,damping:i,precision:.01}}}],[e,s,a,r,i]),{handleMouseMove:f,handleMouseLeave:v}=p({areaRef:u,targets:g});return t.jsx("div",{ref:u,className:"magnet-area",onMouseMove:f,onMouseLeave:v,children:t.jsx("button",{className:"magnet-button",children:t.jsx("span",{className:"magnet-button__label",children:"Nested Label"})})})},n=e=>t.jsx(k,{...e});n.args={outerIntensity:.4,innerIntensity:.15,followLerpFactor:.1,springStiffness:11,springDamping:14};n.argTypes={outerIntensity:{control:{type:"range",min:.1,max:1,step:.05},description:"Intensity for the outer button element"},innerIntensity:{control:{type:"range",min:.05,max:.5,step:.05},description:"Intensity for the inner label element"},followLerpFactor:{control:{type:"range",min:.02,max:.3,step:.01},description:"How quickly elements follow the cursor"},springStiffness:{control:{type:"range",min:5,max:40,step:1},description:"Strength of the pull back to center"},springDamping:{control:{type:"range",min:4,max:20,step:1},description:"How much bounce is absorbed on return"}};n.parameters={docs:{description:{story:"Multiple nested targets with different intensities. The outer button moves more while the inner label moves less, creating a parallax-like depth effect."}}};const m=()=>{const e=o.useRef(null),{handleMouseMove:s,handleMouseLeave:a}=p({areaRef:e,targets:[{selector:".magnet-target",options:{intensity:1.5,maxTravelPercent:300,followLerpFactor:.25}}]});return t.jsx("div",{ref:e,className:"magnet-area",onMouseMove:s,onMouseLeave:a,children:t.jsx("div",{className:"magnet-target",children:"Wild"})})};m.parameters={docs:{description:{story:"Exaggerated movement with high intensity (1.5), extended travel range (300%), and snappy follow (0.25 lerp)."}}};const d=()=>{const e=o.useRef(null),{handleMouseMove:s,handleMouseLeave:a}=p({areaRef:e,targets:[{selector:".magnet-target",options:{intensity:.4,followLerpFactor:.05,returnSpring:{stiffness:8,damping:6}}}]});return t.jsx("div",{ref:e,className:"magnet-area",onMouseMove:s,onMouseLeave:a,children:t.jsx("div",{className:"magnet-target",children:"Floaty"})})};d.parameters={docs:{description:{story:"Slow, dreamy movement with low lerp (0.05) and soft spring (stiffness: 8, damping: 6) for a floaty feel."}}};l.__docgenInfo={description:"",methods:[],displayName:"Playground"};c.__docgenInfo={description:"",methods:[],displayName:"Basic"};n.__docgenInfo={description:"",methods:[],displayName:"Nested"};m.__docgenInfo={description:"",methods:[],displayName:"HighIntensity"};d.__docgenInfo={description:"",methods:[],displayName:"Floaty"};var h,M,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"args => <PlaygroundComponent {...args} />",...(y=(M=l.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var x,L,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const areaRef = useRef<HTMLDivElement>(null);
  const {
    handleMouseMove,
    handleMouseLeave
  } = useMagnetize({
    areaRef,
    targets: [{
      selector: '.magnet-target',
      options: {
        intensity: 0.5
      }
    }]
  });
  return <div ref={areaRef} className="magnet-area" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="magnet-target">Hover me</div>
    </div>;
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var b,w,R;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"args => <NestedComponent {...args} />",...(R=(w=n.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var _,j,H;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const areaRef = useRef<HTMLDivElement>(null);
  const {
    handleMouseMove,
    handleMouseLeave
  } = useMagnetize({
    areaRef,
    targets: [{
      selector: '.magnet-target',
      options: {
        intensity: 1.5,
        maxTravelPercent: 300,
        followLerpFactor: 0.25
      }
    }]
  });
  return <div ref={areaRef} className="magnet-area" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="magnet-target">Wild</div>
    </div>;
}`,...(H=(j=m.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var S,I,F;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const areaRef = useRef<HTMLDivElement>(null);
  const {
    handleMouseMove,
    handleMouseLeave
  } = useMagnetize({
    areaRef,
    targets: [{
      selector: '.magnet-target',
      options: {
        intensity: 0.4,
        followLerpFactor: 0.05,
        returnSpring: {
          stiffness: 8,
          damping: 6
        }
      }
    }]
  });
  return <div ref={areaRef} className="magnet-area" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="magnet-target">Floaty</div>
    </div>;
}`,...(F=(I=d.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const A=["Playground","Basic","Nested","HighIntensity","Floaty"];export{c as Basic,d as Floaty,m as HighIntensity,n as Nested,l as Playground,A as __namedExportsOrder,D as default};

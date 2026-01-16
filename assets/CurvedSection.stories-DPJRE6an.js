import{j as e}from"./jsx-runtime-D_zvdyIk.js";const _={"c-curved-section":"_c-curved-section_1b3fs_1"},s=({children:u,className:m="",background:t="var(--white)",curveBackground:v="var(--white)",animationRange:p="90% 100%",scaleFrom:h=30,scaleTo:g=0})=>{const y={"--section-bg":t,"--curve-bg":v||t,"--animation-range":p,"--curve-scale-from":h,"--curve-scale-to":g};return e.jsxs("section",{className:`${_["c-curved-section"]} ${m}`,style:y,children:[e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},children:e.jsx("defs",{children:e.jsx("clipPath",{id:"content-curve",clipPathUnits:"objectBoundingBox",children:e.jsx("path",{d:"M0,0 L1,0 L1,0.5 C0.75,1 0.25,1 0,0.5 L0,0 Z"})})})}),u]})};s.__docgenInfo={description:"",methods:[],displayName:"CurvedSection",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--white)'",computed:!1}},curveBackground:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--white)'",computed:!1}},animationRange:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'90% 100%'",computed:!1}},scaleFrom:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"30",computed:!1}},scaleTo:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const x={title:"Components/CurvedSection",component:s,parameters:{layout:"fullscreen"},argTypes:{background:{control:"color",description:"Section background color",table:{category:"Colors"}},curveBackground:{control:"color",description:"Curve background color (defaults to background)",table:{category:"Colors"}},animationRange:{control:"text",description:"Scroll animation range (CSS animation-range)",table:{category:"Animation"}},scaleFrom:{control:{type:"range",min:0,max:60,step:1},description:"Curve scale start value",table:{category:"Animation"}},scaleTo:{control:{type:"range",min:0,max:60,step:1},description:"Curve scale end value",table:{category:"Animation"}},className:{control:"text",description:"Optional className for custom layout",table:{category:"Layout"}},children:{control:!1,table:{disable:!0}}}},r={render:()=>e.jsxs("div",{className:"story-curved",children:[e.jsxs(s,{className:"story-curved__content",animationRange:"10% 40%",scaleFrom:15,scaleTo:0,background:"var(--white-100)",curveBackground:"var(--white-100)",children:[e.jsx("section",{className:"story-curved__header",children:e.jsx("h1",{className:"story-curved__header-title",children:"Building digital products that set new standards"})}),e.jsx("div",{className:"story-curved__body",children:e.jsx("p",{children:"Content inside the curved section. Scroll to see the curve animation."})})]}),e.jsx("section",{className:"story-curved__footer",children:e.jsx("p",{children:"Section below the curve"})})]})},a={render:()=>e.jsxs("div",{className:"story-curved",children:[e.jsxs(s,{className:"story-curved__content",animationRange:"50% 100%",scaleFrom:30,scaleTo:0,background:"var(--white-100)",curveBackground:"var(--white-100)",children:[e.jsx("section",{className:"story-curved__header",children:e.jsx("h1",{className:"story-curved__header-title",children:"Large curve effect"})}),e.jsx("div",{className:"story-curved__body",children:e.jsx("p",{children:"This example uses scaleFrom: 30 and scaleTo: 0 for a more dramatic curve."})})]}),e.jsx("section",{className:"story-curved__footer",children:e.jsx("p",{children:"Section below the curve"})})]})};var c,o,n;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className='story-curved'>
      <CurvedSection className='story-curved__content' animationRange='10% 40%' scaleFrom={15} scaleTo={0} background='var(--white-100)' curveBackground='var(--white-100)'>
        <section className='story-curved__header'>
          <h1 className='story-curved__header-title'>Building digital products that set new standards</h1>
        </section>
        <div className='story-curved__body'>
          <p>Content inside the curved section. Scroll to see the curve animation.</p>
        </div>
      </CurvedSection>

      <section className='story-curved__footer'>
        <p>Section below the curve</p>
      </section>
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className='story-curved'>
      <CurvedSection className='story-curved__content' animationRange='50% 100%' scaleFrom={30} scaleTo={0} background='var(--white-100)' curveBackground='var(--white-100)'>
        <section className='story-curved__header'>
          <h1 className='story-curved__header-title'>Large curve effect</h1>
        </section>
        <div className='story-curved__body'>
          <p>This example uses scaleFrom: 30 and scaleTo: 0 for a more dramatic curve.</p>
        </div>
      </CurvedSection>

      <section className='story-curved__footer'>
        <p>Section below the curve</p>
      </section>
    </div>
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const b=["Basic","LargeCurve"];export{r as Basic,a as LargeCurve,b as __namedExportsOrder,x as default};

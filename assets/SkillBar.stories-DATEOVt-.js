import{j as r}from"./jsx-runtime-D_zvdyIk.js";const o={"c-skill-bar":"_c-skill-bar_4tsc4_79","c-skill-bar__track":"_c-skill-bar__track_4tsc4_92","c-skill-bar__fill":"_c-skill-bar__fill_4tsc4_97"},l=({level:i,label:b,barColor:u,labelColor:v,indicatorColor:m,indicatorBackground:k})=>{const x={"--bar-color":u,"--label-color":v,"--indicator-color":m,"--indicator-background":k};return r.jsx("div",{className:o["c-skill-bar"],"data-label":b,style:x,children:r.jsx("div",{className:o["c-skill-bar__track"],children:r.jsx("div",{className:o["c-skill-bar__fill"],"data-level":i,style:{maxWidth:`${i}%`}})})})};l.__docgenInfo={description:"",methods:[],displayName:"SkillBar",props:{level:{required:!0,tsType:{name:"number"},description:""},label:{required:!0,tsType:{name:"string"},description:""},barColor:{required:!1,tsType:{name:"string"},description:""},labelColor:{required:!1,tsType:{name:"string"},description:""},indicatorColor:{required:!1,tsType:{name:"string"},description:""},indicatorBackground:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/SkillBar",component:l,argTypes:{level:{control:{type:"range",min:0,max:100,step:5}},label:{control:"text"}}},g=i=>r.jsx("div",{style:{maxWidth:"400px",width:"100%"},children:r.jsx(l,{...i})}),a=g.bind({});a.args={level:80,label:"CSS"};const e=()=>r.jsxs("div",{style:{maxWidth:"400px",width:"100%",display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(l,{level:90,label:"CSS",barColor:"var(--blue-700)",indicatorBackground:"var(--blue-600)",indicatorColor:"var(--white-100)"}),r.jsx(l,{level:85,label:"JavaScript",barColor:"var(--yellow-400)",indicatorBackground:"var(--orange-400)",indicatorColor:"var(--charcoal-200)"}),r.jsx(l,{level:80,label:"React",barColor:"var(--blue-100)",indicatorBackground:"var(--blue-600)",indicatorColor:"var(--white-100)"}),r.jsx(l,{level:70,label:"TypeScript",barColor:"var(--blue-800)",indicatorBackground:"var(--blue-600)",indicatorColor:"var(--white-100)"})]});e.__docgenInfo={description:"",methods:[],displayName:"MultipleSkills"};var t,s,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`args => <div style={{
  maxWidth: '400px',
  width: '100%'
}}>
    <SkillBar {...args} />
  </div>`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var n,d,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => <div style={{
  maxWidth: '400px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}}>
    <SkillBar level={90} label="CSS" barColor="var(--blue-700)" indicatorBackground="var(--blue-600)" indicatorColor="var(--white-100)" />
    <SkillBar level={85} label="JavaScript" barColor="var(--yellow-400)" indicatorBackground="var(--orange-400)" indicatorColor="var(--charcoal-200)" />
    <SkillBar level={80} label="React" barColor="var(--blue-100)" indicatorBackground="var(--blue-600)" indicatorColor="var(--white-100)" />
    <SkillBar level={70} label="TypeScript" barColor="var(--blue-800)" indicatorBackground="var(--blue-600)" indicatorColor="var(--white-100)" />
  </div>`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const S=["Default","MultipleSkills"];export{a as Default,e as MultipleSkills,S as __namedExportsOrder,y as default};

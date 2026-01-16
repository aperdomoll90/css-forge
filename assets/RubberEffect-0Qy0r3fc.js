import{j as c}from"./jsx-runtime-D_zvdyIk.js";const b={"c-rubber-effect":"_c-rubber-effect_1fx7l_79"},d=({open:e,duration:a=.9,color:t,stretchAmount:r=5,bounceAmount:u=.9,easing:n="ease-in-out",className:s="",style:l,children:o})=>c.jsx("div",{className:`${b["c-rubber-effect"]} ${s}`,"data-open":e,style:{"--rubber-duration":`${a}s`,"--rubber-color":t,"--rubber-stretch":r,"--rubber-bounce":u,"--rubber-easing":n,...l},children:o});d.__docgenInfo={description:`RubberEffect

A simple animated background with a rubber band stretch effect.
Use as a background layer - content placed on top won't distort.

@example
\`\`\`tsx
<div data-open={isOpen}>
  <RubberEffect color="#667eea" className="banner-bg" />
  <div className="banner-content">Content here</div>
</div>
\`\`\``,methods:[],displayName:"RubberEffect",props:{duration:{defaultValue:{value:"0.9",computed:!1},required:!1},stretchAmount:{defaultValue:{value:"5",computed:!1},required:!1},bounceAmount:{defaultValue:{value:"0.9",computed:!1},required:!1},easing:{defaultValue:{value:"'ease-in-out'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{d as R};

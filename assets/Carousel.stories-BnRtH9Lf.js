import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-qdalL59a.js";import"./_commonjsHelpers-CqkleIqs.js";const c={"c-carousel":"_c-carousel_c3h3n_79","c-carousel__track-container":"_c-carousel__track-container_c3h3n_95","c-carousel__track":"_c-carousel__track_c3h3n_95","c-carousel__slide":"_c-carousel__slide_c3h3n_115","c-carousel__button":"_c-carousel__button_c3h3n_121","c-carousel__nav":"_c-carousel__nav_c3h3n_164","c-carousel__indicator":"_c-carousel__indicator_c3h3n_171"},I=({children:C,slidesToShow:a=1,loop:i=!1,showDots:ee=!0,showButtons:j=!0,outerButtons:te=!1,prevButtonClassName:oe="",nextButtonClassName:re="",prevIcon:ae,nextIcon:se,buttonColor:E,activeDotColor:B,dotColor:N,transitionDuration:ne=250,lazyLoad:f=!1,autoplay:s=0,pauseOnHover:w=!0,className:le="",style:ce})=>{const[r,x]=o.useState(0),[M,k]=o.useState(!1),[ue,ie]=o.useState(new Set([0])),q=o.useRef(null),V=o.useRef(null),T=o.useRef(0),$=o.useRef(0),S=C.length,l=S-a,de={...E&&{"--button-color":E},...B&&{"--active-dot-color":B},...N&&{"--dot-color":N},"--transition-duration":`${ne}ms`,...ce},D=o.useMemo(()=>{if(!f)return null;const e=new Set;for(let t=r;t<r+a;t++)e.add(t),t>0&&e.add(t-1),t<S-1&&e.add(t+1);return e},[r,a,S,f]);o.useEffect(()=>{f&&D&&ie(e=>{const t=new Set(e);return D.forEach(d=>t.add(d)),t})},[D,f]);const y=o.useCallback(()=>{const e=q.current;if(!e)return;const t=e.clientWidth/a;e.style.transform=`translateX(-${t*r}px)`},[r,a]);o.useEffect(()=>{y()},[r,y]),o.useEffect(()=>{let e;const t=()=>{clearTimeout(e),e=setTimeout(y,100)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),clearTimeout(e)}},[y]);const h=o.useCallback(()=>{x(e=>i?e>0?e-1:l:Math.max(0,e-1))},[l,i]),u=o.useCallback(()=>{x(e=>i?(e+1)%(l+1):Math.min(l,e+1))},[l,i]),fe=o.useCallback(e=>{x(Math.min(e,l))},[l]);o.useEffect(()=>{const e=V.current;if(!e)return;const t=d=>{d.key==="ArrowLeft"?(d.preventDefault(),h()):d.key==="ArrowRight"&&(d.preventDefault(),u())};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)},[h,u]);const he=o.useCallback(e=>{T.current=e.touches[0].clientX},[]),me=o.useCallback(e=>{$.current=e.touches[0].clientX},[]),ve=o.useCallback(()=>{const e=T.current-$.current;Math.abs(e)>50&&(e>0?u():h())},[u,h]);o.useEffect(()=>{if(s<=0||M)return;const e=setInterval(()=>{u()},s);return()=>clearInterval(e)},[s,M,u]);const pe=o.useCallback(()=>{w&&s>0&&k(!0)},[w,s]),ge=o.useCallback(()=>{w&&s>0&&k(!1)},[w,s]),be=o.useCallback(()=>{s>0&&k(!0)},[s]),_e=o.useCallback(()=>{s>0&&k(!1)},[s]),R=!i&&r===0,z=!i&&r===l,Ce=e=>f?ue.has(e):!0;return n.jsxs("div",{ref:V,className:`${c["c-carousel"]} ${le}`,style:de,role:"region","aria-roledescription":"carousel","aria-live":s>0?"off":"polite","data-outer-buttons":te||void 0,tabIndex:0,onMouseEnter:pe,onMouseLeave:ge,onFocus:be,onBlur:_e,onTouchStart:he,onTouchMove:me,onTouchEnd:ve,children:[j&&n.jsx("button",{onClick:h,"aria-label":"Previous slide",disabled:R,className:`${c["c-carousel__button"]} ${oe}`,"data-direction":"left","data-hidden":R||void 0,tabIndex:-1,children:ae||"❮"}),n.jsx("div",{className:c["c-carousel__track-container"],children:n.jsx("ul",{className:c["c-carousel__track"],ref:q,children:C.map((e,t)=>n.jsx("li",{"aria-hidden":t<r||t>=r+a,className:c["c-carousel__slide"],"data-current":t>=r&&t<r+a||void 0,style:{left:`${100/a*t}%`,width:`${100/a}%`},children:Ce(t)?e:null},t))})}),j&&n.jsx("button",{onClick:u,"aria-label":"Next slide",disabled:z,className:`${c["c-carousel__button"]} ${re}`,"data-direction":"right","data-hidden":z||void 0,tabIndex:-1,children:se||"❯"}),ee&&n.jsx("div",{className:c["c-carousel__nav"],role:"tablist",children:Array.from({length:l+1}).map((e,t)=>n.jsx("button",{onClick:()=>fe(t),"aria-label":`Go to slide ${t+1}`,"aria-selected":t===r,role:"tab",className:c["c-carousel__indicator"],"data-current":t===r||void 0,tabIndex:t===r?0:-1},t))})]})};I.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{slidesToShow:{defaultValue:{value:"1",computed:!1},required:!1},loop:{defaultValue:{value:"false",computed:!1},required:!1},showDots:{defaultValue:{value:"true",computed:!1},required:!1},showButtons:{defaultValue:{value:"true",computed:!1},required:!1},outerButtons:{defaultValue:{value:"false",computed:!1},required:!1},prevButtonClassName:{defaultValue:{value:"''",computed:!1},required:!1},nextButtonClassName:{defaultValue:{value:"''",computed:!1},required:!1},transitionDuration:{defaultValue:{value:"250",computed:!1},required:!1},lazyLoad:{defaultValue:{value:"false",computed:!1},required:!1},autoplay:{defaultValue:{value:"0",computed:!1},required:!1},pauseOnHover:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const we=["#e74c3c","#3498db","#f1c40f","#2ecc71","#9b59b6","#e67e22","#ff69b4"],Se={title:"Carousels/BasicCarousel",component:I,argTypes:{slidesToShow:{control:"number"},loop:{control:"boolean"},showDots:{control:"boolean"},showButtons:{control:"boolean"},lazyLoad:{control:"boolean"},autoplay:{control:"number"},pauseOnHover:{control:"boolean"},buttonColor:{control:"color"},activeDotColor:{control:"color"},dotColor:{control:"color"},transitionDuration:{control:"number"}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"var(--white-100)"},{name:"dark",value:"var(--charcoal-300)"}]}}},_=C=>n.jsx("div",{style:{width:"80%",height:"400px",margin:"0 auto",padding:"40px"},children:n.jsx(I,{...C,children:we.map(a=>n.jsx("div",{style:{backgroundColor:a,height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"2rem"},children:a},a))})}),m=_.bind({});m.args={slidesToShow:1,loop:!0,showDots:!0,showButtons:!0,buttonColor:"var(--white-100)",activeDotColor:"var(--gray-400)",dotColor:"var(--white-100)"};const v=_.bind({});v.args={slidesToShow:3,loop:!1,showDots:!0,showButtons:!0,buttonColor:"var(--white-100)",activeDotColor:"var(--gray-400)",dotColor:"var(--white-100)"};const p=_.bind({});p.args={slidesToShow:1,loop:!0,showDots:!0,showButtons:!0,outerButtons:!0,buttonColor:"var(--charcoal-300)",activeDotColor:"var(--charcoal-300)",dotColor:"var(--gray-300)"};const g=_.bind({});g.args={slidesToShow:1,loop:!0,showDots:!0,showButtons:!0,prevIcon:"←",nextIcon:"→",buttonColor:"var(--white-100)",activeDotColor:"var(--gray-400)",dotColor:"var(--white-100)"};const b=_.bind({});b.args={slidesToShow:1,loop:!0,showDots:!0,showButtons:!0,autoplay:3e3,pauseOnHover:!0,buttonColor:"var(--white-100)",activeDotColor:"var(--gray-400)",dotColor:"var(--white-100)"};var L,P,A;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`args => <div style={{
  width: '80%',
  height: '400px',
  margin: '0 auto',
  padding: '40px'
}}>
    <Carousel {...args}>
      {slides.map(color => <div key={color} style={{
      backgroundColor: color,
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '2rem'
    }}>
          {color}
        </div>)}
    </Carousel>
  </div>`,...(A=(P=m.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var X,O,F;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`args => <div style={{
  width: '80%',
  height: '400px',
  margin: '0 auto',
  padding: '40px'
}}>
    <Carousel {...args}>
      {slides.map(color => <div key={color} style={{
      backgroundColor: color,
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '2rem'
    }}>
          {color}
        </div>)}
    </Carousel>
  </div>`,...(F=(O=v.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var W,G,K;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`args => <div style={{
  width: '80%',
  height: '400px',
  margin: '0 auto',
  padding: '40px'
}}>
    <Carousel {...args}>
      {slides.map(color => <div key={color} style={{
      backgroundColor: color,
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '2rem'
    }}>
          {color}
        </div>)}
    </Carousel>
  </div>`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var H,J,Q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`args => <div style={{
  width: '80%',
  height: '400px',
  margin: '0 auto',
  padding: '40px'
}}>
    <Carousel {...args}>
      {slides.map(color => <div key={color} style={{
      backgroundColor: color,
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '2rem'
    }}>
          {color}
        </div>)}
    </Carousel>
  </div>`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,Y,Z;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`args => <div style={{
  width: '80%',
  height: '400px',
  margin: '0 auto',
  padding: '40px'
}}>
    <Carousel {...args}>
      {slides.map(color => <div key={color} style={{
      backgroundColor: color,
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '2rem'
    }}>
          {color}
        </div>)}
    </Carousel>
  </div>`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const De=["Default","MultipleSlides","OuterButtons","CustomIcons","Autoplay"];export{b as Autoplay,g as CustomIcons,m as Default,v as MultipleSlides,p as OuterButtons,De as __namedExportsOrder,Se as default};

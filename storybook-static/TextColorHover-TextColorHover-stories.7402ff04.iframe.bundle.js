/*! For license information please see TextColorHover-TextColorHover-stories.7402ff04.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkcss_forge=self.webpackChunkcss_forge||[]).push([[384],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./src/TextColorHover/TextColorHover.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextColorHoverComponent:function(){return TextColorHoverComponent},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return TextColorHover_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TextColorHover=function TextColorHover(_ref){var text=_ref.text,_useState=(0,react.useState)({x:0,y:0}),_useState2=(0,slicedToArray.Z)(_useState,2),coords=_useState2[0],setCoords=_useState2[1],ref=(0,react.useRef)(),maskStyle={"--maskX":coords.x,"--maskY":coords.y};return(0,jsx_runtime.jsx)("div",{id:"mouseOverTextWrapper",children:(0,jsx_runtime.jsxs)("div",{className:"mouseOverTextContainer",onMouseMove:function handleMouseMov(e){var width=ref.current.clientWidth,height=ref.current.clientHeight,offX=e.nativeEvent.offsetX/width*100,offY=e.nativeEvent.offsetY/height*100;setCoords({x:offX,y:offY})},onMouseOut:function handleMouseOut(e){setCoords({x:0,y:0})},style:maskStyle,ref:ref,children:[(0,jsx_runtime.jsx)("div",{className:"mouseOverTextTitleWrapper",children:(0,jsx_runtime.jsx)("h1",{children:text})}),(0,jsx_runtime.jsx)("div",{className:"mouseOverTextTitleWrapper mouseOverTexCloneWrapper",children:(0,jsx_runtime.jsx)("h1",{children:text})})]})})};try{TextColorHover.displayName="TextColorHover",TextColorHover.__docgenInfo={description:"",displayName:"TextColorHover",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TextColorHover/TextColorHover.tsx#TextColorHover"]={docgenInfo:TextColorHover.__docgenInfo,name:"TextColorHover",path:"src/TextColorHover/TextColorHover.tsx#TextColorHover"})}catch(__react_docgen_typescript_loader_error){}var _TextColorHoverCompon,_TextColorHoverCompon2,_TextColorHoverCompon3,StorybookContainer=__webpack_require__("./src/StorybookContainer/index.tsx"),TextColorHover_stories={title:"Text Effects",component:TextColorHover,parameters:{jest:["TextColorHover.test.tsx"]}},TextColorHoverComponent=function TextColorHoverTemplate(){return(0,jsx_runtime.jsx)(StorybookContainer.Z,{children:(0,jsx_runtime.jsx)(TextColorHover,{text:"Color Text"})})}.bind({});TextColorHoverComponent.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},TextColorHoverComponent.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_TextColorHoverCompon=TextColorHoverComponent.parameters)||void 0===_TextColorHoverCompon?void 0:_TextColorHoverCompon.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <StorybookContainer>\n        <TextColorHover text={'Color Text'} />\n  </StorybookContainer>"},null===(_TextColorHoverCompon2=TextColorHoverComponent.parameters)||void 0===_TextColorHoverCompon2||null===(_TextColorHoverCompon3=_TextColorHoverCompon2.docs)||void 0===_TextColorHoverCompon3?void 0:_TextColorHoverCompon3.source)})});var __namedExportsOrder=["TextColorHoverComponent"]},"./src/StorybookContainer/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return src_StorybookContainer}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function StorybookContainer(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("div",{className:"storybook-container",children:children})}var src_StorybookContainer=StorybookContainer;try{StorybookContainer.displayName="StorybookContainer",StorybookContainer.__docgenInfo={description:"",displayName:"StorybookContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/StorybookContainer/index.tsx#StorybookContainer"]={docgenInfo:StorybookContainer.__docgenInfo,name:"StorybookContainer",path:"src/StorybookContainer/index.tsx#StorybookContainer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
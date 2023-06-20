import React, { createRef, useEffect, useRef } from 'react'
import './styles.css'
import { ProductDisplayerPropsTypes } from './ProductDisplayer.types'
import { SectionEnsemble, SectionEnsemblePropsTypes, StatePropsType } from '../SectionEnsemble'
import { ToggleButton } from '../ToggleButton'
import { CameraControls } from '@react-three/drei'
import { PerspectiveControls } from '../PerspectiveControls'

// Add size control passed down to the model
//  Add controls to the model
//  Add initial position for model

const state: StatePropsType = {
  sections: 1,
  pages: 1,
  zoom: 1,
  top: createRef<any>(),
}

const getDomContent = (cameraRef:any) => {
  const [visible, setVisible] = React.useState<boolean>(false)
  const [color, setColor] = React.useState<string>('')

   const controlsProps = {
    buttonColor: 'transparent',
    top: 4,
    left: 2,
  }
  return (
    <div id='product-displayer-dom-content'>
      <div id='product-image-area'>
        <ToggleButton
          top={1}
          left={3}
          ariaControls='carrousel-area'
          ariaExpanded={visible}
          active={visible}
          setActive={() => {
            setVisible(!visible)
          }}
        />
      <PerspectiveControls cameraRef={cameraRef as any} {...controlsProps} />

        <div id='carrousel-area' aria-expanded={visible} data-visible={visible}>
          <h1>Product Displayer Carrousel</h1>
        </div>
      </div>
      <div id='product-menu-area'>
        <div className='product-menu-info-area'>
          <h1 className='product-menu-title'>City own brand Blue Armchair</h1>
          <div className='product-menu-ratings'>
            <span>&#8902;</span>
            <span>&#8902;</span>
            <span>&#8902;</span>
            <span>&#8902;</span>
            <span>&#8902;</span>
          </div>
          <p className='product-menu-price'>$2,999.99</p>
          <p className='product-menu-financing'>
            <span>$64</span>/Months with 60 month financing. See How
          </p>
        </div>
        <div className='product-menu-color-area'>
          <div className='product-menu-color-label product-menu-financing'>
            <span>color:</span>
            {color}
          </div>
          <div className='product-menu-color-selector-area'>
            <div onClick={() => setColor('blue')} style={{ '--color': 'blue' } as React.CSSProperties} className='product-menu-color-selector'></div>
            <div onClick={() => setColor('brown')} style={{ '--color': 'brown' } as React.CSSProperties} className='product-menu-color-selector'></div>
            <div onClick={() => setColor('gray')} style={{ '--color': 'gray' } as React.CSSProperties} className='product-menu-color-selector'></div>
            <div onClick={() => setColor('green')} style={{ '--color': 'green' } as React.CSSProperties} className='product-menu-color-selector'></div>
          </div>
        </div>
        <div className='product-menu-action-area'>
         <div className='product-menu-qty-button'>1 \/</div>
          <div className='product-menu-action-button'>Add to cart</div>
          <div className='product-menu-secondary-button'>see it in store</div>
        </div>
      </div>
    </div>
  )
}

export const ProductDisplayer: React.FC<ProductDisplayerPropsTypes> = () => {
  const cameraRef = useRef() as React.RefObject<CameraControls>

  const ensembleProps: Omit<SectionEnsemblePropsTypes, 'children'> = {
    modelPosition: [0, -30, 0],
    modelRotationX: 0,
    modelRotationY: 7,
    modelRotationZ: 0,
    cameraRef: cameraRef,
    camera: {
      fov: 70,
      x: 0,
      y: 30,
      z: 100,
    },
    modelUrl: '/armchairBlue/scene.gltf',
    state: state,
    animated: false,
    manualControls: false,
    testId: 'product-displayer',
    bgColor: 'transparent',
    canvasWidth: '60%',
    canvasLeft: '0rem',
  }

  return (
    <div id='product-displayer-wrapper'>
      {getDomContent(cameraRef)}
      <SectionEnsemble {...ensembleProps} />
    </div>
  )
}

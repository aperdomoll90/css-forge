import { Meta, StoryFn } from '@storybook/react'
import { SectionEnsemble } from './SectionEnsemble'
import StorybookContainer from '../StorybookContainer'
import { createRef } from 'react'
import { SectionEnsemblePropsTypes, StatePropsType } from './SectionEnsemble.types'

const state: StatePropsType = {
  sections: 1,
  pages: 1,
  zoom: 1,
  top: createRef<any>(),
}

const children = (
  <div className='storybook-wrapper'>
    <h1>Hello</h1>
  </div>
)

export default {
  title: '3D',
  component: SectionEnsemble,
  parameters: {
    jest: ['SectionEnsemble.test.tsx'],
  },
  argTypes: {
    bgColor: { options: ['#fff', '#cacbcd', '#f15946', '#571ec1', '#636567'], control: { type: 'select' } },
    testId: { options: ['test-1', 'test-2'], control: { type: 'radio' } },
    customClass: { options: ['test-1', 'test-2'], control: { type: 'radio' } },
  },
} as Meta

const SectionEnsembleTemplate: StoryFn<SectionEnsemblePropsTypes> = args => (
  <StorybookContainer>
    <SectionEnsemble {...args} />
  </StorybookContainer>
)

export const SectionEnsembleComponent = SectionEnsembleTemplate.bind({})
SectionEnsembleComponent.args = {
  children: children,
  modelUrl: '/armchairYellow/scene.gltf',
  state: state,
  animated: false,
  manualControls: false,
  testId: 'section-ensemble-wrapper',
  modelPosition: [0, -30, 0],
  modelRotationX: 0,
  modelRotationY: 7,
  modelRotationZ: 0,
  camera: {
    fov: 70,
    x: 0,
    y: 30,
    z: 100,
  },
  cameraRef: createRef<any>(),

}

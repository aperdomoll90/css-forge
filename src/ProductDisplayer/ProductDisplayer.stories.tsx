import { Meta, StoryFn } from '@storybook/react'
import { ProductDisplayer } from './ProductDisplayer'
import StorybookContainer from '../StorybookContainer'
import { ProductDisplayerPropsTypes } from './ProductDisplayer.types'


export default {
  title: '3D',
  component: ProductDisplayer,
  parameters: {
    jest: ['ProductDisplayer.test.tsx'],
  },
  argTypes: {
    modelUrl: { options: ['/armchairYellow/scene.gltf', '/armchairPink/scene.gltf', '/armchairBlue/scene.gltf'], control: { type: 'radio' } },
  },
} as Meta

const ProductDisplayerTemplate: StoryFn<ProductDisplayerPropsTypes> = args => (
  <StorybookContainer>
    <ProductDisplayer {...args} />
  </StorybookContainer>
)

export const ProductDisplayerComponent = ProductDisplayerTemplate.bind({})
ProductDisplayerComponent.args = {
}

import { Meta, StoryFn } from '@storybook/react'
import { Carousel } from './Carousel'
import { CarouselProps } from './Carousel.types'

const slides = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22', '#ff69b4']

export default {
  title: 'Carousels/BasicCarousel',
  component: Carousel,
  argTypes: {
    slidesToShow: { control: 'number' },
    loop: { control: 'boolean' },
    showDots: { control: 'boolean' },
    showButtons: { control: 'boolean' },
    lazyLoad: { control: 'boolean' },
    autoplay: { control: 'number' },
    pauseOnHover: { control: 'boolean' },
    buttonColor: { control: 'color' },
    activeDotColor: { control: 'color' },
    dotColor: { control: 'color' },
    transitionDuration: { control: 'number' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--white-100)' },
        { name: 'dark', value: 'var(--charcoal-300)' },
      ],
    },
  },
} as Meta

const Template: StoryFn<CarouselProps> = args => (
  <div style={{ width: '80%', height: '400px', margin: '0 auto', padding: '40px' }}>
    <Carousel {...args}>
      {slides.map(color => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '2rem',
          }}>
          {color}
        </div>
      ))}
    </Carousel>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  slidesToShow: 1,
  loop: true,
  showDots: true,
  showButtons: true,
  buttonColor: 'var(--white-100)',
  activeDotColor: 'var(--gray-400)',
  dotColor: 'var(--white-100)',
}

export const MultipleSlides = Template.bind({})
MultipleSlides.args = {
  slidesToShow: 3,
  loop: false,
  showDots: true,
  showButtons: true,
  buttonColor: 'var(--white-100)',
  activeDotColor: 'var(--gray-400)',
  dotColor: 'var(--white-100)',
}

export const OuterButtons = Template.bind({})
OuterButtons.args = {
  slidesToShow: 1,
  loop: true,
  showDots: true,
  showButtons: true,
  outerButtons: true,
  buttonColor: 'var(--charcoal-300)',
  activeDotColor: 'var(--charcoal-300)',
  dotColor: 'var(--gray-300)',
}

export const CustomIcons = Template.bind({})
CustomIcons.args = {
  slidesToShow: 1,
  loop: true,
  showDots: true,
  showButtons: true,
  prevIcon: '←',
  nextIcon: '→',
  buttonColor: 'var(--white-100)',
  activeDotColor: 'var(--gray-400)',
  dotColor: 'var(--white-100)',
}

export const Autoplay = Template.bind({})
Autoplay.args = {
  slidesToShow: 1,
  loop: true,
  showDots: true,
  showButtons: true,
  autoplay: 3000,
  pauseOnHover: true,
  buttonColor: 'var(--white-100)',
  activeDotColor: 'var(--gray-400)',
  dotColor: 'var(--white-100)',
}

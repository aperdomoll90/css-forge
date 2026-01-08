import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { RoundCarousel } from './RoundCarousel'
import { RoundCarouselProps, RoundCarouselSlide } from './RoundCarousel.types'

const colorSlides: RoundCarouselSlide[] = [
  { background: 'red', label: 'Red' },
  { background: 'blue', label: 'Blue' },
  { background: 'yellow', label: 'Yellow' },
  { background: 'purple', label: 'Purple' },
  { background: 'orange', label: 'Orange' },
  { background: 'green', label: 'Green' },
  { background: 'pink', label: 'Pink' },
  { background: 'black', label: 'Black' },
  { background: 'brown', label: 'Brown' },
]

const imageSlides: RoundCarouselSlide[] = [
  { background: 'https://picsum.photos/seed/1/400/400', label: 'Image 1' },
  { background: 'https://picsum.photos/seed/2/400/400', label: 'Image 2' },
  { background: 'https://picsum.photos/seed/3/400/400', label: 'Image 3' },
  { background: 'https://picsum.photos/seed/4/400/400', label: 'Image 4' },
  { background: 'https://picsum.photos/seed/5/400/400', label: 'Image 5' },
]

export default {
  title: 'Carousels/RoundCarousel',
  component: RoundCarousel,
  argTypes: {
    size: { control: 'number' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<RoundCarouselProps> = args => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <RoundCarousel {...args} />
  </div>
)

export const Colors = Template.bind({})
Colors.args = {
  slides: colorSlides,
  size: 70,
}

export const Images = Template.bind({})
Images.args = {
  slides: imageSlides,
  size: 70,
}

export const WithExternalInfo: StoryFn<RoundCarouselProps> = args => {
  const [activeSlide, setActiveSlide] = useState<RoundCarouselSlide | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <RoundCarousel
        {...args}
        onSlideChange={(index, slide) => {
          setActiveIndex(index)
          setActiveSlide(slide)
        }}
      />
      {activeSlide && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '2rem',
            transform: 'translateY(-50%)',
            padding: '2rem',
            background: 'rgba(0,0,0,0.7)',
            borderRadius: '8px',
            color: '#fff',
            maxWidth: '300px',
          }}
        >
          <span style={{ opacity: 0.6, fontSize: '0.875rem' }}>
            {String(activeIndex + 1).padStart(2, '0')} / {String(args.slides.length).padStart(2, '0')}
          </span>
          <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>
            {activeSlide.label}
          </h2>
          <p style={{ opacity: 0.8 }}>
            Use the onSlideChange callback to sync external content with the carousel.
          </p>
        </div>
      )}
    </div>
  )
}
WithExternalInfo.args = {
  slides: colorSlides,
  size: 70,
}
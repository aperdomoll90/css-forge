import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ExpandingCards } from './ExpandingCards'
import { ExpandingCardsProps, ExpandingCardItem } from './ExpandingCards.types'
import './ExpandingCards.stories.scss'

export default {
  title: 'Accordions/ExpandingCards',
  component: ExpandingCards,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1b1b1c' },
      ],
    },
  },
} as Meta<ExpandingCardsProps>

const colorCards: ExpandingCardItem[] = [
  { content: <CardContent title="Red" />, background: '#e74c3c' },
  { content: <CardContent title="Blue" />, background: '#3498db' },
  { content: <CardContent title="Yellow" />, background: '#f1c40f' },
  { content: <CardContent title="Pink" />, background: '#e91e63' },
  { content: <CardContent title="Green" />, background: '#2ecc71' },
]

function CardContent({ title, icon }: { title: string; icon?: string }) {
  return (
    <div className="card-content">
      <div className="card-content__icon">{icon || title[0]}</div>
      <div className="card-content__title">{title}</div>
    </div>
  )
}

export const Default: StoryFn = () => (
  <div className="story-container">
    <ExpandingCards items={colorCards} />
  </div>
)
Default.parameters = {
  docs: {
    description: {
      story: 'Default expanding cards with color backgrounds.',
    },
  },
}

const imageCards: ExpandingCardItem[] = [
  {
    content: <CardContent title="Jungle" />,
    background: 'url(https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longjungle.png) center/cover',
  },
  {
    content: <CardContent title="Lake" />,
    background: 'url(https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longdarkplacidlake.png) center/cover',
  },
  {
    content: <CardContent title="Swamp" />,
    background: 'url(https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longgoldenswamp.png) center/cover',
  },
  {
    content: <CardContent title="Snow" />,
    background: 'url(https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longsnowylake.png) center/cover',
  },
  {
    content: <CardContent title="Night" />,
    background: 'url(https://raw.githubusercontent.com/aperdomoll90/demo-images/refs/heads/main/longnightjungle.png) center/cover',
  },
]

export const WithImages: StoryFn = () => (
  <div className="story-container">
    <ExpandingCards items={imageCards} />
  </div>
)
WithImages.parameters = {
  docs: {
    description: {
      story: 'Expanding cards with background images.',
    },
  },
}

export const FewItems: StoryFn = () => (
  <div className="story-container">
    <ExpandingCards
      items={colorCards.slice(0, 3)}
      animation={{ expandedGrow: 5 }}
    />
  </div>
)
FewItems.parameters = {
  docs: {
    description: {
      story: 'Works with any number of items - here with just 3 cards.',
    },
  },
}

export const ManyItems: StoryFn = () => (
  <div className="story-container">
    <ExpandingCards
      items={[
        ...colorCards,
        { content: <CardContent title="Purple" />, background: '#9b59b6' },
        { content: <CardContent title="Orange" />, background: '#e67e22' },
        { content: <CardContent title="Teal" />, background: '#1abc9c' },
      ]}
      minWidth="50px"
      animation={{ expandedGrow: 10 }}
    />
  </div>
)
ManyItems.parameters = {
  docs: {
    description: {
      story: 'Works with many items - adjust minWidth and expandedGrow as needed.',
    },
  },
}

export const CustomAnimation: StoryFn = () => (
  <div className="story-container">
    <ExpandingCards
      items={colorCards}
      animation={{
        duration: 0.8,
        timing: 'cubic-bezier(0.25, 0.01, 0, 1.5)',
        expandedGrow: 10,
        collapsedGrow: 0.5,
      }}
    />
  </div>
)
CustomAnimation.parameters = {
  docs: {
    description: {
      story: 'Custom animation with longer duration and bouncy timing.',
    },
  },
}

export const CustomSizing: StoryFn = () => (
  <div className="story-container">
    <ExpandingCards
      items={colorCards}
      height="70%"
      gap="20px"
      marginInline="100px"
      borderRadius="50px"
      minWidth="100px"
    />
  </div>
)
CustomSizing.parameters = {
  docs: {
    description: {
      story: 'Custom dimensions with larger gap, border radius, and min width.',
    },
  },
}

const WithCallbackComponent = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [clickedCard, setClickedCard] = useState<number | null>(null)

  return (
    <div className="story-container">
      <div className="callback-log">
        <span>Hovered: {activeCard !== null ? colorCards[activeCard].background : 'none'}</span>
        <span>Clicked: {clickedCard !== null ? colorCards[clickedCard].background : 'none'}</span>
      </div>
      <ExpandingCards
        items={colorCards}
        onCardHover={setActiveCard}
        onCardClick={setClickedCard}
      />
    </div>
  )
}

export const WithCallback: StoryFn = () => <WithCallbackComponent />
WithCallback.parameters = {
  docs: {
    description: {
      story: 'Using onCardHover and onCardClick callbacks to track interactions.',
    },
  },
}

const gradientCards: ExpandingCardItem[] = [
  {
    content: <CardContent title="Sunset" />,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    content: <CardContent title="Ocean" />,
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    content: <CardContent title="Forest" />,
    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    content: <CardContent title="Fire" />,
    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    content: <CardContent title="Night" />,
    background: 'linear-gradient(135deg, #0c1445 0%, #1a1a2e 100%)',
  },
]

export const Gradients: StoryFn = () => (
  <div className="story-container">
    <ExpandingCards items={gradientCards} />
  </div>
)
Gradients.parameters = {
  docs: {
    description: {
      story: 'Cards with gradient backgrounds.',
    },
  },
}

export const CustomContent: StoryFn = () => (
  <div className="story-container">
    <ExpandingCards
      items={[
        {
          content: (
            <div className="custom-card-content">
              <div className="custom-card-content__number">01</div>
              <div className="custom-card-content__text">
                <h3>Innovation</h3>
                <p>Pushing boundaries</p>
              </div>
            </div>
          ),
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f23 100%)',
        },
        {
          content: (
            <div className="custom-card-content">
              <div className="custom-card-content__number">02</div>
              <div className="custom-card-content__text">
                <h3>Design</h3>
                <p>Beautiful interfaces</p>
              </div>
            </div>
          ),
          background: 'linear-gradient(180deg, #2d1b69 0%, #1a1a2e 100%)',
        },
        {
          content: (
            <div className="custom-card-content">
              <div className="custom-card-content__number">03</div>
              <div className="custom-card-content__text">
                <h3>Code</h3>
                <p>Clean architecture</p>
              </div>
            </div>
          ),
          background: 'linear-gradient(180deg, #134e5e 0%, #1a1a2e 100%)',
        },
        {
          content: (
            <div className="custom-card-content">
              <div className="custom-card-content__number">04</div>
              <div className="custom-card-content__text">
                <h3>Deploy</h3>
                <p>Ship with confidence</p>
              </div>
            </div>
          ),
          background: 'linear-gradient(180deg, #4a1942 0%, #1a1a2e 100%)',
        },
      ]}
      borderRadius="20px"
    />
  </div>
)
CustomContent.parameters = {
  docs: {
    description: {
      story: 'Fully custom content with complex layouts.',
    },
  },
}

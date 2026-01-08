import { useRef } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { useScrollDraw } from './useScrollDraw'
import './ScrollDraw.stories.scss'

export default {
  title: 'Utils/useScrollDraw',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0d0d0d' },
      ],
    },
  },
} as Meta

const MarkerIndicatorComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useScrollDraw(pathRef, containerRef)

  return (
    <div className="scroll-draw-container">
      <div className="scroll-draw-container__indicator">
        <svg viewBox="0 0 26 167" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={pathRef}
            d="M14 0.5L1 14L14 27.5L24.5 17L14 7.5V47L1 60L14 73.5L23.5 64L14 56V93L1 106L14 119.5L25 109L14 99.5V139L1 152L14 165.5L24 155.5L14 145.5L7.5 152L14 159L18 155.5L14 151L12 153"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <h1>Scroll</h1>
      <div ref={containerRef} className="scroll-draw-container__content">
        {['red', 'blue', 'yellow', 'orange', 'green'].map((color, i) => (
          <div key={i} style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  )
}

export const MarkerIndicator: StoryFn = () => <MarkerIndicatorComponent />
MarkerIndicator.parameters = {
  docs: {
    description: {
      story: 'A zigzag marker path that draws as you scroll through the content.',
    },
  },
}

const SpiralComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useScrollDraw(pathRef, containerRef)

  return (
    <div className="scroll-draw-container">
      <div className="scroll-draw-container__indicator scroll-draw-container__indicator--spiral">
        <svg viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={pathRef}
            d="M50 0 C80 50, 20 100, 50 150 C80 200, 20 250, 50 300 C80 350, 20 400, 50 400"
            stroke="#667eea"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
      <h1>Scroll</h1>
      <div ref={containerRef} className="scroll-draw-container__content">
        {[...Array(5)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  )
}

export const Spiral: StoryFn = () => <SpiralComponent />
Spiral.parameters = {
  docs: {
    description: {
      story: 'A wavy spiral path that draws as you scroll.',
    },
  },
}

const LineProgressComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useScrollDraw(pathRef, containerRef)

  return (
    <div className="scroll-draw-container">
      <div className="scroll-draw-container__indicator scroll-draw-container__indicator--line">
        <svg viewBox="0 0 4 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            ref={pathRef}
            d="M2 0 L2 400"
            stroke="#38ef7d"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <h1>Scroll</h1>
      <div ref={containerRef} className="scroll-draw-container__content">
        {[...Array(5)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  )
}

export const LineProgress: StoryFn = () => <LineProgressComponent />
LineProgress.parameters = {
  docs: {
    description: {
      story: 'A simple vertical line that fills as a scroll progress indicator.',
    },
  },
}

const FullPageComponent = () => {
  const pathRef = useRef<SVGPathElement>(null)

  useScrollDraw(pathRef)

  return (
    <div className="scroll-draw-fullpage">
      <div className="scroll-draw-fullpage__indicator">
        <svg viewBox="0 0 445 3887" fill="none" preserveAspectRatio="xMidYMax meet">
          <path
            ref={pathRef}
            d="M242 1L240.908 809.636L231.5 809.5H250.5L241 809.636V836C230.833 835.833 210.565 835.98 210 836C196 836.5 192 847 190 852C189.814 852.464 180.5 878.5 180.5 878.5C180.5 878.5 220.667 885.833 241 889L319 879L307 926C305 932.5 304 944.5 274 955C272.298 955.596 248.936 963.648 248 964C241.35 966.5 241.35 966.5 235 964C234.07 963.634 201.91 952.776 200 952C184 945.5 181 939 176 929C175 927 167.667 892.667 163.5 879.5L241 888L300.5 879C297.167 869.5 290.214 849.5 290 849C288.5 845.5 286.5 836 272 836C261.6 836 247.333 836 241.5 836L241 836.5L243 1579C243 1579 243.379 1618.51 243 1629C241.59 1668 201 1672 201 1719.5C201 1767 271.422 1767 270 1822C268.578 1877 209.441 1865 210 1922C210.5 1973 286 1975 286 2031C286 2083.5 242.5 2075.5 242.5 2140C242.5 2195.2 242.333 2222.33 242.5 2229L243 2234L239 2442.5L240 2464.5C240 2464.5 248.5 2510.42 287.5 2533C297 2538.5 359.5 2557 403 2540.5C408.289 2538.49 443.5 2531.5 443.5 2490C443.5 2442.5 389 2429 359.5 2435C308.881 2445.3 260.5 2475.5 245.5 2483C220.5 2495.5 150 2522.5 73 2522.5C53.5 2522.5 2 2517.5 2 2468C2 2436 54.2018 2409.59 113.5 2440C152.5 2460 197.598 2498 201 2500.5C204.402 2503 324 2587 350.5 2593C368.391 2597.05 403.516 2598.83 407 2562.5C410.5 2526 382.5 2515 341.5 2515C311 2515 232.132 2534.38 211 2540.5C192 2546 164.5 2557 113.5 2557C62.5 2557 58.5 2528 58.5 2520.5C58.5 2513 63 2481.5 113.5 2483C162.978 2484.47 204.693 2537.92 207.5 2542C228.5 2572.5 238.5 2597.5 238.5 2639C238.5 2643.5 242.5 3094 242.5 3095.5C242.5 3096.7 242.5 3623.33 242.5 3886.5M233.5 844V878.5L191 871.5C192.833 865.833 196.314 853.464 196.5 853C197.5 850.5 199 844 209 844C209.785 844 227.333 844 233.5 844ZM248.5 843.917V878.417L290 871.5C288.5 866.5 284 852 283.5 851C283 850 282 843.5 273 844C272.5 844.028 252.667 843.917 248.5 843.917Z"
            stroke="#e20953"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
      <h1>Scroll down to draw</h1>
      <div className="scroll-draw-fullpage__spacer" />
    </div>
  )
}

export const FullPage: StoryFn = () => <FullPageComponent />
FullPage.parameters = {
  docs: {
    description: {
      story: 'Full page scroll drawing using window scroll. The decorative path draws as you scroll down the page.',
    },
  },
}
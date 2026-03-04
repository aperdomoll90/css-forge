import { useRef } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { useSvgFiller } from './useSvgFiller'
import './ScrollFill.stories.scss'

export default {
  title: 'Utils/ScrollFill',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta


const SimpleBarComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<SVGRectElement>(null)

  useSvgFiller(barRef, containerRef, { startAt: 0 })

  return (
    <div className="scroll-container">
      <div className="scroll-container__banner scroll-container__banner--simple">
        <svg viewBox="0 0 50 300" style={{ height: '300px', width: '50px' }}>
          <defs>
            <clipPath id="bar-clip">
              <rect ref={barRef} x="0" y="0" width="100%" height="100%" />
            </clipPath>
          </defs>
          <g clipPath="url(#bar-clip)">
            <rect x="0" y="0" width="50" height="300" fill="#3498db" rx="25" />
          </g>
        </svg>
      </div>
      <h1>Scroll</h1>
      <div ref={containerRef} className="scroll-container__content">
        {[...Array(5)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  )
}

export const SimpleBar: StoryFn = () => <SimpleBarComponent />

const ReverseComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<SVGRectElement>(null)

  useSvgFiller(barRef, containerRef, { startAt: 0, reverse: true })

  return (
    <div className="scroll-container">
      <div className="scroll-container__banner scroll-container__banner--simple">
        <svg viewBox="0 0 50 300" style={{ height: '300px', width: '50px' }}>
          <defs>
            <clipPath id="reverse-clip">
              <rect ref={barRef} x="0" y="0" width="100%" height="100%" />
            </clipPath>
          </defs>
          <g clipPath="url(#reverse-clip)">
            <rect x="0" y="0" width="50" height="300" fill="#e74c3c" rx="25" />
          </g>
        </svg>
      </div>
      <h1>Scroll</h1>
      <div ref={containerRef} className="scroll-container__content">
        {[...Array(5)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  )
}

export const Reverse: StoryFn = () => <ReverseComponent />

const RainbowBannerComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const ref0 = useRef<SVGRectElement>(null)
  const ref1 = useRef<SVGRectElement>(null)
  const ref2 = useRef<SVGRectElement>(null)
  const ref3 = useRef<SVGRectElement>(null)
  const ref4 = useRef<SVGRectElement>(null)
  const ref5 = useRef<SVGRectElement>(null)
  const ref6 = useRef<SVGRectElement>(null)
  const ref7 = useRef<SVGRectElement>(null)
  const ref8 = useRef<SVGRectElement>(null)

  useSvgFiller(ref0, containerRef, { startAt: 0.9 })
  useSvgFiller(ref1, containerRef, { startAt: 0.8 })
  useSvgFiller(ref2, containerRef, { startAt: 0.7 })
  useSvgFiller(ref3, containerRef, { startAt: 0.6 })
  useSvgFiller(ref4, containerRef, { startAt: 0.5 })
  useSvgFiller(ref5, containerRef, { startAt: 0.4 })
  useSvgFiller(ref6, containerRef, { startAt: 0.3 })
  useSvgFiller(ref7, containerRef, { startAt: 0.2 })
  useSvgFiller(ref8, containerRef, { startAt: 0 })

  return (
    <div className="scroll-container">
      <div className="scroll-container__banner">
        <svg viewBox="0 0 1072 1543" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="clip0">
              <rect ref={ref0} x="0" y="0" width="100%" height="100%" />
            </clipPath>
            <clipPath id="clip1">
              <rect ref={ref1} x="0" y="0" width="100%" height="100%" />
            </clipPath>
            <clipPath id="clip2">
              <rect ref={ref2} x="0" y="0" width="100%" height="100%" />
            </clipPath>
            <clipPath id="clip3">
              <rect ref={ref3} x="0" y="0" width="100%" height="100%" />
            </clipPath>
            <clipPath id="clip4">
              <rect ref={ref4} x="0" y="0" width="100%" height="100%" />
            </clipPath>
            <clipPath id="clip5">
              <rect ref={ref5} x="0" y="0" width="100%" height="100%" />
            </clipPath>
            <clipPath id="clip6">
              <rect ref={ref6} x="0" y="0" width="100%" height="100%" />
            </clipPath>
            <clipPath id="clip7">
              <rect ref={ref7} x="0" y="0" width="100%" height="100%" />
            </clipPath>
            <clipPath id="clip8">
              <rect ref={ref8} x="0" y="0" width="100%" height="100%" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip0)">
            <path
              d="M169.5 702.696V347.196C169.828 253.552 187.437 203.599 248 129.696V702.696L123 1495.2C73.8549 1483.57 47.0171 1475.11 0 1457.7L169.5 702.696Z"
              fill="#561C3D"
            />
          </g>
          <g clipPath="url(#clip1)">
            <path
              d="M247.5 702.696L248 129.196C271.705 98.7256 291.885 82.8181 326 58.6963V702.696L240 1518.7C194.159 1511.62 168.432 1506.43 123 1495.2L247.5 702.696Z"
              fill="#562E1C"
            />
          </g>
          <g clipPath="url(#clip2)">
            <path
              d="M325.5 702.696L326 58.6963C354.022 40.2218 371.244 31.8998 404 19.6963V702.696L348 1532.2C305.713 1528.61 282.042 1525.56 240 1518.7L325.5 702.696Z"
              fill="#6D7851"
            />
          </g>
          <g clipPath="url(#clip3)">
            <path
              d="M404.5 704.696L404 21.6963C434.201 11.8601 451.456 7.73988 483 4.19629V704.696L468 1542.2C421.155 1540.01 394.888 1538.38 348 1534.2L404.5 704.696Z"
              fill="#C8FF47"
            />
          </g>
          <g clipPath="url(#clip4)">
            <path
              d="M481.5 702.696L483 2.19625C513.28 -0.65543 530.173 -0.80775 560 2.19625V702.696L613 1539.2C556.906 1543.42 525.042 1542.85 468 1540.2L481.5 702.696Z"
              fill="#FF0000"
            />
          </g>
          <g clipPath="url(#clip5)">
            <path
              d="M559.5 702.696L560 2.19629C591.744 6.53556 608.516 10.8069 637.5 20.1963V702.696L730 1528.2C684.591 1533.94 658.985 1536.31 613 1539.2L559.5 702.696Z"
              fill="#8FEE6C"
            />
          </g>
          <g clipPath="url(#clip6)">
            <path
              d="M637.5 702.696V20.1963C661.914 28.457 682.134 36.989 715.5 59.6963V702.696L855 1506.7C805.216 1517.75 768.617 1527.39 730 1528.2L637.5 702.696Z"
              fill="#6C86EE"
            />
          </g>
          <g clipPath="url(#clip7)">
            <path
              d="M715.5 702.696V59.6963C740.521 77.2899 762.26 92.8823 793.5 131.196V702.696L964.5 1479.2C922.309 1491.22 898.369 1498.39 855 1506.7L715.5 702.696Z"
              fill="#121B41"
            />
          </g>
          <g clipPath="url(#clip8)">
            <path
              d="M793.5 702.696L793.5 131.196C793.5 131.196 823.842 165.196 842.5 210.196C861.158 255.196 856.5 247.696 864 280.696C871.5 313.696 871.5 354.196 871.5 354.196V695.696L1072 1444.2C1030.68 1458.8 1007.05 1466.88 964.5 1479.2L793.5 702.696Z"
              fill="#B3BDE6"
            />
          </g>
        </svg>
      </div>
      <h1>Scroll</h1>
      <div ref={containerRef} className="scroll-container__content">
        {[...Array(5)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  )
}

export const RainbowBanner: StoryFn = () => <RainbowBannerComponent />

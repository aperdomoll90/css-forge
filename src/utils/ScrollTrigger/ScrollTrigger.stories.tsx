import { useRef, useState, useMemo } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { useScrollTrigger, ScrollTriggerItem } from './useScrollTrigger'
import './ScrollTrigger.stories.scss'

export default {
  title: 'Utils/useScrollTrigger',
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

const BasicComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState('start')

  const triggers = useMemo<ScrollTriggerItem[]>(
    () => [
      { threshold: 0, onEnter: () => setCurrentSection('start'), onExit: () => setCurrentSection('start') },
      { threshold: 0.25, onEnter: () => setCurrentSection('25%'), onExit: () => setCurrentSection('start') },
      { threshold: 0.5, onEnter: () => setCurrentSection('50%'), onExit: () => setCurrentSection('25%') },
      { threshold: 0.75, onEnter: () => setCurrentSection('75%'), onExit: () => setCurrentSection('50%') },
      { threshold: 1, onEnter: () => setCurrentSection('100%'), onExit: () => setCurrentSection('75%') },
    ],
    []
  )

  useScrollTrigger({ containerRef, triggers })

  const colors = ['#e74c3c', '#3498db', '#f1c40f', '#e67e22', '#2ecc71']

  return (
    <div className="scroll-trigger-container">
      <div className="scroll-trigger-container__indicator" data-section={currentSection}>
        {currentSection}
      </div>
      <div ref={containerRef} className="scroll-trigger-container__content">
        {colors.map((color, i) => (
          <div key={i} style={{ backgroundColor: color }} />
        ))}
      </div>
    </div>
  )
}

export const Basic: StoryFn = () => <BasicComponent />
Basic.parameters = {
  docs: {
    description: {
      story: 'Basic scroll trigger that updates the current section indicator as you scroll through different thresholds.',
    },
  },
}

const OnceComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState<string[]>([])

  const triggers = useMemo<ScrollTriggerItem[]>(
    () => [
      { threshold: 0.25, onEnter: () => setTriggered(prev => [...prev, '25%']), once: true },
      { threshold: 0.5, onEnter: () => setTriggered(prev => [...prev, '50%']), once: true },
      { threshold: 0.75, onEnter: () => setTriggered(prev => [...prev, '75%']), once: true },
    ],
    []
  )

  useScrollTrigger({ containerRef, triggers })

  return (
    <div className="scroll-trigger-container">
      <div className="scroll-trigger-container__log">
        <span>Triggered (once):</span>
        {triggered.length === 0 ? ' none yet' : triggered.map((t, i) => <span key={i}>{t}</span>)}
      </div>
      <div ref={containerRef} className="scroll-trigger-container__content">
        {[...Array(5)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  )
}

export const Once: StoryFn = () => <OnceComponent />
Once.parameters = {
  docs: {
    description: {
      story: 'Triggers fire only once when using the `once` option. Scroll down and back up - triggers will not fire again.',
    },
  },
}

const FullPageComponent = () => {
  const [currentSection, setCurrentSection] = useState('intro')

  const triggers = useMemo<ScrollTriggerItem[]>(
    () => [
      { threshold: 0, onEnter: () => setCurrentSection('intro') },
      { threshold: 0.2, onEnter: () => setCurrentSection('about'), onExit: () => setCurrentSection('intro') },
      { threshold: 0.4, onEnter: () => setCurrentSection('work'), onExit: () => setCurrentSection('about') },
      { threshold: 0.6, onEnter: () => setCurrentSection('services'), onExit: () => setCurrentSection('work') },
      { threshold: 0.8, onEnter: () => setCurrentSection('contact'), onExit: () => setCurrentSection('services') },
    ],
    []
  )

  useScrollTrigger({ triggers })

  return (
    <div className="scroll-trigger-fullpage" data-section={currentSection}>
      <nav className="scroll-trigger-fullpage__nav">
        {['intro', 'about', 'work', 'services', 'contact'].map(section => (
          <span key={section} data-active={currentSection === section}>
            {section}
          </span>
        ))}
      </nav>
      <div className="scroll-trigger-fullpage__spacer" />
    </div>
  )
}

export const FullPage: StoryFn = () => <FullPageComponent />
FullPage.parameters = {
  docs: {
    description: {
      story: 'Full page scroll trigger using window scroll. Navigation highlights update as you scroll through sections.',
    },
  },
}

const AnimationComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  const triggers = useMemo<ScrollTriggerItem[]>(
    () =>
      [0.1, 0.25, 0.4, 0.55, 0.7].map((threshold, index) => ({
        threshold,
        onEnter: () => setVisibleCards(prev => (prev.includes(index) ? prev : [...prev, index])),
        onExit: () => setVisibleCards(prev => prev.filter(i => i !== index)),
      })),
    []
  )

  useScrollTrigger({ containerRef, triggers })

  return (
    <div className="scroll-trigger-container">
      <div ref={containerRef} className="scroll-trigger-container__content scroll-trigger-container__content--cards">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="scroll-trigger-card" data-visible={visibleCards.includes(i)}>
            Card {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export const Animation: StoryFn = () => <AnimationComponent />
Animation.parameters = {
  docs: {
    description: {
      story: 'Trigger CSS animations as elements come into view. Cards fade in and out based on scroll position.',
    },
  },
}

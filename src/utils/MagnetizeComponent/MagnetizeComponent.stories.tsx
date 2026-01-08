import { useRef, useMemo } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { useMagnetize, PerTargetOptions } from './MagnetizeComponent'
import './MagnetizeComponent.stories.scss'

interface PlaygroundArgs {
  intensity: number
  followLerpFactor: number
  maxTravelPercent: number
  clampWithinArea: boolean
  springStiffness: number
  springDamping: number
}

export default {
  title: 'Utils/useMagnetize',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1c1d20' },
        { name: 'gray', value: '#e0e0e0' },
      ],
    },
  },
  argTypes: {
    intensity: {
      control: { type: 'range', min: 0.1, max: 2, step: 0.1 },
      description: 'How far the element travels relative to cursor distance. 1 = natural, <1 = subtle, >1 = exaggerated',
    },
    followLerpFactor: {
      control: { type: 'range', min: 0.02, max: 0.3, step: 0.01 },
      description: 'How quickly the element follows the cursor. Lower = floaty/delayed, Higher = snappy',
    },
    maxTravelPercent: {
      control: { type: 'range', min: 20, max: 300, step: 10 },
      description: 'Maximum translate() movement allowed, in percent of element size',
    },
    clampWithinArea: {
      control: 'boolean',
      description: 'Prevents the element from moving outside the container',
    },
    springStiffness: {
      control: { type: 'range', min: 5, max: 40, step: 1 },
      description: 'Strength of the pull back to center when mouse leaves',
    },
    springDamping: {
      control: { type: 'range', min: 4, max: 20, step: 1 },
      description: 'How much bounce is absorbed on return',
    },
  },
} as Meta

const PlaygroundComponent = ({
  intensity,
  followLerpFactor,
  maxTravelPercent,
  clampWithinArea,
  springStiffness,
  springDamping,
}: PlaygroundArgs) => {
  const areaRef = useRef<HTMLDivElement>(null)

  const targets = useMemo(
    () => [
      {
        selector: '.magnet-target',
        options: {
          intensity,
          followLerpFactor,
          maxTravelPercent,
          clampWithinArea,
          returnSpring: {
            stiffness: springStiffness,
            damping: springDamping,
          },
        } as PerTargetOptions,
      },
    ],
    [intensity, followLerpFactor, maxTravelPercent, clampWithinArea, springStiffness, springDamping]
  )

  const { handleMouseMove, handleMouseLeave } = useMagnetize({
    areaRef,
    targets,
  })

  return (
    <div
      ref={areaRef}
      className="magnet-area"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="magnet-target">Hover me</div>
    </div>
  )
}

export const Playground: StoryFn<PlaygroundArgs> = args => <PlaygroundComponent {...args} />
Playground.args = {
  intensity: 0.5,
  followLerpFactor: 0.18,
  maxTravelPercent: 200,
  clampWithinArea: true,
  springStiffness: 18,
  springDamping: 10,
}

export const Basic: StoryFn = () => {
  const areaRef = useRef<HTMLDivElement>(null)

  const { handleMouseMove, handleMouseLeave } = useMagnetize({
    areaRef,
    targets: [{ selector: '.magnet-target', options: { intensity: 0.5 } }],
  })

  return (
    <div
      ref={areaRef}
      className="magnet-area"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="magnet-target">Hover me</div>
    </div>
  )
}
Basic.parameters = {
  docs: {
    description: {
      story: 'Simple single-target magnetize effect with default settings.',
    },
  },
}

interface NestedArgs {
  outerIntensity: number
  innerIntensity: number
  followLerpFactor: number
  springStiffness: number
  springDamping: number
}

const NestedComponent = ({
  outerIntensity,
  innerIntensity,
  followLerpFactor,
  springStiffness,
  springDamping,
}: NestedArgs) => {
  const areaRef = useRef<HTMLDivElement>(null)

  const targets = useMemo(
    () => [
      {
        selector: '.magnet-button',
        options: {
          intensity: outerIntensity,
          followLerpFactor,
          clampWithinArea: true,
          returnSpring: { stiffness: springStiffness, damping: springDamping, precision: 0.01 },
        } as PerTargetOptions,
      },
      {
        selector: '.magnet-button__label',
        options: {
          intensity: innerIntensity,
          followLerpFactor,
          clampWithinArea: true,
          returnSpring: { stiffness: springStiffness, damping: springDamping, precision: 0.01 },
        } as PerTargetOptions,
      },
    ],
    [outerIntensity, innerIntensity, followLerpFactor, springStiffness, springDamping]
  )

  const { handleMouseMove, handleMouseLeave } = useMagnetize({
    areaRef,
    targets,
  })

  return (
    <div
      ref={areaRef}
      className="magnet-area"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button className="magnet-button">
        <span className="magnet-button__label">Nested Label</span>
      </button>
    </div>
  )
}

export const Nested: StoryFn<NestedArgs> = args => <NestedComponent {...args} />
Nested.args = {
  outerIntensity: 0.4,
  innerIntensity: 0.15,
  followLerpFactor: 0.1,
  springStiffness: 11,
  springDamping: 14,
}
Nested.argTypes = {
  outerIntensity: {
    control: { type: 'range', min: 0.1, max: 1, step: 0.05 },
    description: 'Intensity for the outer button element',
  },
  innerIntensity: {
    control: { type: 'range', min: 0.05, max: 0.5, step: 0.05 },
    description: 'Intensity for the inner label element',
  },
  followLerpFactor: {
    control: { type: 'range', min: 0.02, max: 0.3, step: 0.01 },
    description: 'How quickly elements follow the cursor',
  },
  springStiffness: {
    control: { type: 'range', min: 5, max: 40, step: 1 },
    description: 'Strength of the pull back to center',
  },
  springDamping: {
    control: { type: 'range', min: 4, max: 20, step: 1 },
    description: 'How much bounce is absorbed on return',
  },
}
Nested.parameters = {
  docs: {
    description: {
      story:
        'Multiple nested targets with different intensities. The outer button moves more while the inner label moves less, creating a parallax-like depth effect.',
    },
  },
}

export const HighIntensity: StoryFn = () => {
  const areaRef = useRef<HTMLDivElement>(null)

  const { handleMouseMove, handleMouseLeave } = useMagnetize({
    areaRef,
    targets: [
      {
        selector: '.magnet-target',
        options: {
          intensity: 1.5,
          maxTravelPercent: 300,
          followLerpFactor: 0.25,
        },
      },
    ],
  })

  return (
    <div
      ref={areaRef}
      className="magnet-area"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="magnet-target">Wild</div>
    </div>
  )
}
HighIntensity.parameters = {
  docs: {
    description: {
      story: 'Exaggerated movement with high intensity (1.5), extended travel range (300%), and snappy follow (0.25 lerp).',
    },
  },
}

export const Floaty: StoryFn = () => {
  const areaRef = useRef<HTMLDivElement>(null)

  const { handleMouseMove, handleMouseLeave } = useMagnetize({
    areaRef,
    targets: [
      {
        selector: '.magnet-target',
        options: {
          intensity: 0.4,
          followLerpFactor: 0.05,
          returnSpring: {
            stiffness: 8,
            damping: 6,
          },
        },
      },
    ],
  })

  return (
    <div
      ref={areaRef}
      className="magnet-area"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="magnet-target">Floaty</div>
    </div>
  )
}
Floaty.parameters = {
  docs: {
    description: {
      story: 'Slow, dreamy movement with low lerp (0.05) and soft spring (stiffness: 8, damping: 6) for a floaty feel.',
    },
  },
}
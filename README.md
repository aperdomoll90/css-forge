<p align="center">
  <img src="https://img.shields.io/npm/v/css-forge?style=flat-square&color=blue" alt="npm version" />
  <img src="https://img.shields.io/npm/l/css-forge?style=flat-square" alt="license" />
  <img src="https://img.shields.io/npm/dt/css-forge?style=flat-square" alt="downloads" />
  <img src="https://img.shields.io/badge/React-18%20%7C%2019-61DAFB?style=flat-square&logo=react" alt="react" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript" alt="typescript" />
</p>

# css-forge

A lightweight React component library with CSS-first animations and zero runtime dependencies.

---

## Features

- **CSS-Driven Animations** — Smooth transitions powered by pure CSS
- **Accessible by Default** — Built with ARIA attributes and keyboard navigation
- **Controlled & Uncontrolled** — Flexible state management patterns
- **TypeScript Ready** — Full type definitions included
- **Tree Shakeable** — Import only what you need
- **Zero Dependencies** — Just React as a peer dependency

---

## Installation

```bash
npm install css-forge
```

```bash
yarn add css-forge
```

---

## Components

### Accordion

A native `<details>/<summary>` accordion with CSS animations. Supports controlled/uncontrolled modes and mutual exclusivity.

```tsx
import { Accordion } from 'css-forge'

// Uncontrolled with exclusive group
<Accordion
  name="faq"
  title={<><span className="icon">+</span> Question</>}
  content={<p>Answer content here</p>}
  onToggle={(isOpen) => console.log(isOpen)}
/>

// Controlled
const [open, setOpen] = useState(false)
<Accordion
  open={open}
  onToggle={setOpen}
  title="Question"
  content="Answer"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | **required** | Title/summary content |
| `content` | `ReactNode` | **required** | Expandable content |
| `name` | `string` | — | Group name for mutual exclusivity |
| `open` | `boolean` | — | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Initial state (uncontrolled) |
| `onToggle` | `(isOpen: boolean) => void` | — | Toggle callback |
| `disabled` | `boolean` | `false` | Disable interactions |
| `className` | `string` | — | Container class |
| `summaryClassName` | `string` | — | Summary class |
| `contentClassName` | `string` | — | Content class |

> **Note:** Uses CSS `::details-content` pseudo-element for animations. Best supported in modern browsers (Safari 17.4+, Chrome 129+).

---

### WaveAccordion

A 3D perspective accordion with hover effects on panels. Supports image URLs or custom content.

```tsx
import { WaveAccordion } from 'css-forge'

<WaveAccordion
  items={['image1.jpg', 'image2.jpg', 'image3.jpg']}
  height="50dvh"
  animation={{
    timing: 'pop',
    hoverScale: 1.1,
    rotateAngle: 40,
  }}
  onPanelClick={(index) => console.log(index)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `(string \| ReactNode)[]` | **required** | Image URLs or custom content |
| `height` | `string` | `'50dvh'` | Container height |
| `gap` | `string` | `'1%'` | Gap between panels |
| `aspectRatio` | `string` | `'2 / 11.5'` | Panel aspect ratio |
| `grayscale` | `boolean` | `true` | Grayscale inactive panels |
| `animation.duration` | `number` | `0.5` | Transition duration (seconds) |
| `animation.timing` | `'pop' \| 'snap' \| string` | `'pop'` | Easing function |
| `animation.hoverScale` | `number` | `1.07` | Hovered panel scale |
| `animation.adjacentScale` | `number` | `1.02` | Adjacent panel scale |
| `animation.hoverDepth` | `number` | `2.2` | Z-depth on hover |
| `animation.rotateAngle` | `number` | `35` | Adjacent rotation (degrees) |
| `animation.perspective` | `number` | `25` | Perspective multiplier |

> **Note:** Uses CSS `:has()` selector for previous sibling styling. Requires modern browser support.

---

### ExpandingCards

Flexible expanding cards that grow on hover. Fully customizable content and animations.

```tsx
import { ExpandingCards } from 'css-forge'

<ExpandingCards
  items={[
    { content: <MyCard />, background: '#e74c3c' },
    { content: <MyCard />, background: 'linear-gradient(...)' },
  ]}
  animation={{ expandedGrow: 8, duration: 0.6 }}
  onCardClick={(index) => console.log(index)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ExpandingCardItem[]` | **required** | Array of card items |
| `items[].content` | `ReactNode` | **required** | Card content |
| `items[].background` | `string` | — | Background color/gradient/image |
| `items[].style` | `CSSProperties` | — | Per-card styles |
| `items[].className` | `string` | — | Per-card class |
| `height` | `string` | `'90%'` | Container height |
| `gap` | `string` | `'10px'` | Gap between cards |
| `borderRadius` | `string` | `'30px'` | Card border radius |
| `minWidth` | `string` | `'70px'` | Collapsed card width |
| `animation.duration` | `number` | `0.5` | Transition duration |
| `animation.timing` | `string` | `'ease-in-out'` | Easing function |
| `animation.expandedGrow` | `number` | `7` | Flex-grow when expanded |
| `animation.collapsedGrow` | `number` | `1` | Flex-grow when collapsed |

> **Styling tip:** Use `data-expanded="true"` attribute in your CSS to style content based on hover state.

---

### HamburgerButton

An animated hamburger menu button with two variants.

```tsx
import { HamburgerButton } from 'css-forge'

// Uncontrolled
<HamburgerButton variant="spin" />

// Controlled
const [open, setOpen] = useState(false)
<HamburgerButton active={open} onToggle={setOpen} variant="cross" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'spin' \| 'cross'` | `'spin'` | Animation style |
| `active` | `boolean` | — | Controlled state |
| `defaultActive` | `boolean` | `false` | Initial state (uncontrolled) |
| `onToggle` | `(active: boolean) => void` | — | State change callback |
| `color` | `string` | `'#fff'` | Line color |
| `size` | `number` | `2` | Size in rem |

---

### ExpandButton

A plus/minus toggle button with two animation variants.

```tsx
import { ExpandButton } from 'css-forge'

<ExpandButton variant="rotate" />
<ExpandButton variant="collapse" onToggle={(active) => console.log(active)} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'rotate' \| 'collapse'` | `'rotate'` | Animation style |
| `active` | `boolean` | — | Controlled state |
| `defaultActive` | `boolean` | `false` | Initial state (uncontrolled) |
| `onToggle` | `(active: boolean) => void` | — | State change callback |
| `color` | `string` | `'#fff'` | Icon color |
| `size` | `number` | `1.5` | Size in rem |
| `lineThickness` | `number` | `0.125` | Line thickness in rem |

---

### BubbleButton

A magnetic button with cursor-following effect.

```tsx
import { BubbleButton } from 'css-forge'

<BubbleButton
  label="Get Started"
  href="/start"
  magnetArea="4rem"
  backgroundColor="#6366f1"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Button text |
| `href` | `string` | — | Link URL (renders as anchor) |
| `fontSize` | `string \| ValuePerBreakpoint` | `'1.5rem'` | Font size |
| `magnetArea` | `string \| ValuePerBreakpoint` | `'4rem'` | Magnetic area padding |
| `padding` | `string \| ValuePerBreakpoint` | `'1rem'` | Button padding |
| `labelColor` | `string` | — | Text color |
| `backgroundColor` | `string` | — | Background color |
| `backgroundHoverColor` | `string` | — | Hover background |

> **Responsive sizes:** Use `{ default: '1rem', sm: '1.2rem', md: '1.5rem' }` for breakpoint-specific values.

---

### DottedButton

A magnetic link button with dotted underline animation.

```tsx
import { DottedButton } from 'css-forge'

<DottedButton
  label="Learn More"
  href="/about"
  textColor="#fff"
  dotColor="#6366f1"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Button text |
| `href` | `string` | `'#'` | Link URL |
| `textColor` | `string` | — | Text color |
| `dotColor` | `string` | — | Dot/underline color |

---

### DrawButton

A button with animated SVG stroke effect on hover.

```tsx
import { DrawButton } from 'css-forge'

<DrawButton href="/contact" variant="circled">
  Contact Us
</DrawButton>

<DrawButton variant="underline" onClick={handleClick}>
  Learn More
</DrawButton>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | Button content |
| `variant` | `'circled' \| 'underline'` | `'circled'` | SVG animation style |
| `href` | `string` | — | Link URL |
| `fontSize` | `string \| ValuePerBreakpoint` | `'1rem'` | Font size |
| `labelColor` | `string` | — | Text color |
| `strokeColor` | `string` | — | SVG stroke color |
| `download` | `string` | — | Download filename |

---

### SlicerButton

A text link button with a slicing hover animation.

```tsx
import { SlicerButton } from 'css-forge'

<SlicerButton
  label="View Projects"
  href="/projects"
  colorHover="#00ff88"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Button text |
| `href` | `string` | **required** | Link destination |
| `color` | `string` | `'#fff'` | Text color |
| `colorHover` | `string` | — | Hover state color |
| `fontSize` | `string` | `'1rem'` | Font size |

---

### ToggleSwitch

An accessible toggle switch with optional labels.

```tsx
import { ToggleSwitch } from 'css-forge'

<ToggleSwitch
  labelBefore="Off"
  labelAfter="On"
  onToggle={(checked) => console.log(checked)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled state |
| `defaultChecked` | `boolean` | `false` | Initial state (uncontrolled) |
| `onToggle` | `(checked: boolean) => void` | — | State change callback |
| `color` | `string` | — | Track color |
| `sliderColor` | `string` | — | Knob color |
| `size` | `number` | — | Size in pixels |
| `labelBefore` | `string` | — | Label before toggle |
| `labelAfter` | `string` | — | Label after toggle |

---

### DesertToggle

An animated day/night toggle with desert theme.

```tsx
import { DesertToggle } from 'css-forge'

<DesertToggle
  size={1.5}
  onToggle={(isNight) => setTheme(isNight ? 'dark' : 'light')}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled state |
| `defaultChecked` | `boolean` | `false` | Initial state |
| `onToggle` | `(checked: boolean) => void` | — | Toggle callback |
| `size` | `number` | `1` | Scale multiplier |
| `ariaLabel` | `string` | `'Toggle day/night mode'` | Accessibility label |

---

### HillToggle

An animated day/night toggle with mountain/forest theme.

```tsx
import { HillToggle } from 'css-forge'

<HillToggle
  size={1.2}
  onToggle={(isNight) => setTheme(isNight ? 'dark' : 'light')}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled state |
| `defaultChecked` | `boolean` | `false` | Initial state |
| `onToggle` | `(checked: boolean) => void` | — | Toggle callback |
| `size` | `number` | `1` | Scale multiplier |
| `ariaLabel` | `string` | `'Toggle day/night mode'` | Accessibility label |

---

### FloatingInput

An input field with floating label animation.

```tsx
import { FloatingInput } from 'css-forge'

<FloatingInput
  name="email"
  label="Email Address"
  type="email"
  required
  error={errors.email}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Input name/id |
| `label` | `string` | **required** | Floating label text |
| `type` | `string` | `'text'` | Input type |
| `required` | `boolean` | `false` | Mark as required |
| `disabled` | `boolean` | `false` | Disable input |
| `error` | `string` | — | Error message |
| `value` | `string` | — | Controlled value |
| `onChange` | `ChangeEventHandler` | — | Change handler |
| `borderColor` | `string` | — | Border color |
| `borderColorFocus` | `string` | — | Focus border color |
| `backgroundColor` | `string` | — | Background color |
| `textColor` | `string` | — | Text color |
| `errorColor` | `string` | — | Error state color |

---

### WordScrambler

A text scramble animation on hover.

```tsx
import { WordScrambler } from 'css-forge'

<WordScrambler
  words={['Developer', 'Designer', 'Creator']}
  speed={30}
  textColor="#fff"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `words` | `string[]` | **required** | Array of words to cycle |
| `speed` | `number` | `30` | Animation speed (ms per iteration) |
| `textColor` | `string` | — | Text color |
| `fontSize` | `string` | — | Font size |

---

### SkillBar

A progress bar component for displaying skill levels.

```tsx
import { SkillBar } from 'css-forge'

<SkillBar label="React" level={90} />
<SkillBar label="TypeScript" level={85} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Skill name |
| `level` | `number` | **required** | Progress level (0-100) |

---

### Carousel

A fully-featured carousel with touch support, autoplay, and lazy loading.

```tsx
import { Carousel } from 'css-forge'

<Carousel
  slidesToShow={3}
  loop
  autoplay={5000}
  lazyLoad
>
  <img src="slide1.jpg" alt="Slide 1" />
  <img src="slide2.jpg" alt="Slide 2" />
  <img src="slide3.jpg" alt="Slide 3" />
</Carousel>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode[]` | **required** | Slide content |
| `slidesToShow` | `number` | `1` | Visible slides |
| `loop` | `boolean` | `false` | Enable infinite loop |
| `showDots` | `boolean` | `true` | Show dot navigation |
| `showButtons` | `boolean` | `true` | Show prev/next buttons |
| `outerButtons` | `boolean` | `false` | Position buttons outside |
| `autoplay` | `number` | `0` | Auto-advance interval (ms) |
| `pauseOnHover` | `boolean` | `true` | Pause autoplay on hover |
| `lazyLoad` | `boolean` | `false` | Lazy load slides |
| `transitionDuration` | `number` | `250` | Transition time (ms) |
| `buttonColor` | `string` | — | Button color |
| `activeDotColor` | `string` | — | Active dot color |
| `dotColor` | `string` | — | Inactive dot color |
| `prevIcon` | `ReactNode` | `'❮'` | Previous button icon |
| `nextIcon` | `ReactNode` | `'❯'` | Next button icon |

---

## Hooks

### useMagnetize

A magnetic cursor-following effect hook. Elements follow the cursor within a defined area.

```tsx
import { useMagnetize } from 'css-forge'

const areaRef = useRef<HTMLDivElement>(null)

const { handleMouseMove, handleMouseLeave } = useMagnetize({
  areaRef,
  targets: [
    { selector: '.button', options: { intensity: 0.4 } },
    { selector: '.label', options: { intensity: 0.15 } },
  ],
})

<div
  ref={areaRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <button className="button">
    <span className="label">Click me</span>
  </button>
</div>
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `intensity` | `number` | `1` | Movement intensity (0.1-2) |
| `followLerpFactor` | `number` | `0.18` | Follow speed (0.02-0.3) |
| `clampWithinArea` | `boolean` | `true` | Keep within bounds |
| `maxTravelPercent` | `number` | `200` | Max movement (% of size) |
| `cursorOffsetPercent` | `{ x, y }` | `{ x: 0, y: 0 }` | Cursor offset |
| `returnSpring.stiffness` | `number` | `18` | Spring stiffness (5-40) |
| `returnSpring.damping` | `number` | `10` | Spring damping (4-20) |
| `returnSpring.precision` | `number` | `0.02` | Settle precision |

> **Important:** The container element (`areaRef`) should have `position: relative` or `position: absolute` for proper positioning. Use padding on the container to define the magnetic area around the target element.

---

### useScrollDraw

Animate SVG path stroke based on scroll position.

```tsx
import { useScrollDraw } from 'css-forge'

const pathRef = useRef<SVGPathElement>(null)
const containerRef = useRef<HTMLDivElement>(null)

useScrollDraw(pathRef, containerRef)

<div ref={containerRef} style={{ overflowY: 'scroll', height: '100vh' }}>
  <svg>
    <path
      ref={pathRef}
      d="M0 0 L100 100"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
    />
  </svg>
  <div style={{ height: '300vh' }} />
</div>
```

| Param | Type | Description |
|-------|------|-------------|
| `pathRef` | `RefObject<SVGGeometryElement>` | Reference to SVG path |
| `containerRef` | `RefObject<HTMLElement>` | Scrollable container (optional, defaults to window) |

> **Requirements:**
> - Path must have `stroke` and `fill="none"` attributes
> - Container needs scrollable content (height > viewport)
> - Works with any SVG geometry element that has `getTotalLength()`

---

### useSvgFiller

Fill an SVG rectangle based on scroll position.

```tsx
import { useSvgFiller } from 'css-forge'

const fillRef = useRef<SVGRectElement>(null)
const containerRef = useRef<HTMLDivElement>(null)

useSvgFiller(fillRef, containerRef, { startAt: 0.2, reverse: false })

<div ref={containerRef} style={{ overflowY: 'scroll' }}>
  <svg>
    <rect ref={fillRef} x="0" y="0" width="100" height="500" fill="#6366f1" />
  </svg>
  <div style={{ height: '300vh' }} />
</div>
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `startAt` | `number` | `0` | Scroll % to start (0-1) |
| `reverse` | `boolean` | `false` | Fill from bottom |

---

### useScrollTrigger

Fire callbacks when scroll reaches certain percentage thresholds.

```tsx
import { useScrollTrigger } from 'css-forge'

const containerRef = useRef<HTMLDivElement>(null)
const [section, setSection] = useState('intro')

useScrollTrigger({
  containerRef,
  triggers: [
    { threshold: 0.25, onEnter: () => setSection('about') },
    { threshold: 0.5, onEnter: () => setSection('work'), once: true },
    { threshold: 0.75, onEnter: () => setSection('contact'), onExit: () => setSection('work') },
  ],
})

<div ref={containerRef} style={{ overflowY: 'scroll', height: '100vh' }}>
  <div style={{ height: '400vh' }}>Current: {section}</div>
</div>
```

| Trigger Option | Type | Description |
|----------------|------|-------------|
| `threshold` | `number` | Scroll percentage (0-1) |
| `onEnter` | `() => void` | Called when crossing down |
| `onExit` | `() => void` | Called when crossing up |
| `once` | `boolean` | Fire onEnter only once |

---

## Responsive Breakpoints

Components supporting `ValuePerBreakpoint` use these breakpoints:

| Key | Breakpoint |
|-----|------------|
| `default` | Base value |
| `sm` | `400px` |
| `md` | `800px` |
| `mdx` | `900px` |
| `lg` | `1600px` |

```tsx
<BubbleButton
  fontSize={{ default: '1rem', sm: '1.2rem', md: '1.5rem', lg: '2rem' }}
  magnetArea={{ default: '2rem', md: '4rem' }}
/>
```

---

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build for production
npm run build
```

---

## Browser Support

- Chrome 129+
- Safari 17.4+
- Firefox 128+
- Edge 129+

Some features use modern CSS like `::details-content`, `:has()`, and `@starting-style` which may require recent browser versions for full functionality.

---

## License

MIT © [Adrian Perdomo Llerena](https://github.com/aperdomoll90)

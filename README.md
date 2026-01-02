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

## License

MIT © [Adrian Perdomo Llerena](https://github.com/aperdomoll90)
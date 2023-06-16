import './styles.css'

type storybookContainerProps = {
  children: string | JSX.Element | JSX.Element[] | '() => JSX.Element'
  backgroundImage?: boolean
}

function StorybookContainer({ children, backgroundImage }: storybookContainerProps) {
  const classArray = backgroundImage ? `storybook-container storybook-container-image` : 'storybook-container'

  return <div className={classArray}>{children}</div>
}

export default StorybookContainer

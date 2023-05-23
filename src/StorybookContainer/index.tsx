import './styles.css'

type storybookContainerProps = {
  children: string | JSX.Element | JSX.Element[] | '() => JSX.Element'
  backgroundImage?: boolean
}

function StorybookContainer({ children, backgroundImage }: storybookContainerProps) {
  return <div className={`storybook-container ${backgroundImage && 'storybook-container-image'}`}>{children}</div>
}

export default StorybookContainer

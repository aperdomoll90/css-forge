import './styles.css'

type Props = {
  children: string | JSX.Element | JSX.Element[] | '() => JSX.Element'
}
function StorybookContainer({children}:Props) {
  return (
    <div className='storybook-container'>{children}</div>
  )
}

export default  StorybookContainer
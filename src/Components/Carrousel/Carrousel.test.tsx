import { render } from '@testing-library/react'
import Carrousel from './Carrousel'

describe('Carrousel component', () => {
  // const { axe, toHaveNoViolations } = require('jest-axe')
  // expect.extend(toHaveNoViolations)
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  const cardInfo = [{ text: 'Frist card' }, { text: 'card' }, { text: 'card' }, { text: 'card' }, { text: 'card' }, { text: 'card' }, { text: 'card' }, { text: 'Last card' }]

  const args = {
    id: 'carrousel-wrapper',
    testId: 'carrousel-wrapper-testId',
    wrapperClass: 'carrousel-wrapper-className',
    cardsContainerClass: 'card-container-className',
    cardsClass: 'carrousel-card-className',
    //   cardContainerWidth: '100%',
    height: '70%',
    width: '95vw',
    pagination: false,
    navigation: true,
    orientation: { default: 'column', md: 'row', lg: 'row' },
    color: 'blue',
    cardsPerView: { default: 2, md: 2, lg: 2 },
    cardsArray: cardInfo, //in leu off children TO BE DELETED
  }
  const renderComponent = () =>
    render(
      <Carrousel {...args}>
        <div>First card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>Last card</div>
      </Carrousel>
    )
  it('should match snapshots', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
  //   it('should demonstrate ADA compliance on this component', async () => {
  //     const { container } = renderComponent()
  //     const results = await axe(container)
  //     expect(container).toHaveNoViolations()
  //   })
})

export const rotateElement = (event: MouseEvent, element: Element | null) => {
  // get mouse position
  const x = event.clientX
  const y = event.clientY
  // find the middle
  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  //get offset from middle
  const offsetX = ((x - middleX) / middleX) * 25
  const offsetY = ((y - middleY) / middleY) * 25
  console.log('element', element)
  if (element) {
    element.style.setProperty('--rotateX', -1 * offsetY + 'deg')
    element.style.setProperty('--rotateY', offsetX + 'deg')
  }
}

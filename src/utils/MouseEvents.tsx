

export const rotateElement = (event: MouseEvent, element: HTMLDivElement | null) => {
  // get mouse position
  const x = event.clientX
  const y = event.clientY
  // find the middle
  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  //get offset from middle
  const offsetX = ((x - middleX) / middleX) * 15
  const offsetY = ((y - middleY) / middleY) * 15
  console.log('element', element)
  if (element) {
    element.style.setProperty('--rotateX', -1 * offsetY + 'deg')
    element.style.setProperty('--rotateY', offsetX + 'deg')
  }
}

export const wobbleElement = (e: MouseEvent, wobbles: any) => {
  const width = window.innerWidth
  const height = window.innerHeight
  // get mouse position
  const x = e.clientX
  const y = e.clientY
  // find the middle
  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  //get offset from middle
  const offsetX = ((x - middleX) / middleX) * 85
  const offsetY = ((y - middleY) / middleY) * 85

  wobbles &&
    wobbles.forEach((wobble: any) => {
      const speed = wobble.getAttribute('data-speed')
      const x = (offsetX / width) * speed
      const y = (offsetY / height) * speed
      wobble.style.transform = `translateX(${x}%) translateY(${y}%) `
    })
}

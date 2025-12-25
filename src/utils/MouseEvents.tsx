export const rotateElement = (event: MouseEvent, element: HTMLDivElement | null): void => {
  const x = event.clientX
  const y = event.clientY
  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  const offsetX = ((x - middleX) / middleX) * 15
  const offsetY = ((y - middleY) / middleY) * 15

  if (element) {
    element.style.setProperty('--rotateX', -1 * offsetY + 'deg')
    element.style.setProperty('--rotateY', offsetX + 'deg')
  }
}

export const wobbleElement = (e: MouseEvent, wobbles: HTMLElement[] | NodeListOf<HTMLElement>): void => {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = e.clientX
  const y = e.clientY
  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  const offsetX = ((x - middleX) / middleX) * 85
  const offsetY = ((y - middleY) / middleY) * 85

  wobbles?.forEach((wobble) => {
    const speed = Number(wobble.getAttribute('data-speed') || 1)
    const xOffset = (offsetX / width) * speed
    const yOffset = (offsetY / height) * speed
    wobble.style.transform = `translateX(${xOffset}%) translateY(${yOffset}%)`
  })
}

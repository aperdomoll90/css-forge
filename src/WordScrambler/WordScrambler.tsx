import { useState, useCallback } from 'react'
import { WordScramblerProps } from './WordScrambler.types'
import styles from './WordScrambler.module.scss'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const WordScrambler: React.FC<WordScramblerProps> = ({
  words,
  speed = 30,
  textColor,
  fontSize,
  className = '',
  style,
}) => {
  const [text, setText] = useState(words[0])
  const [wordIndex, setWordIndex] = useState(0)
  const [isScrambling, setIsScrambling] = useState(false)

  const scrambleText = useCallback(() => {
    if (isScrambling) return
    setIsScrambling(true)

    const currentWord = words[wordIndex]
    const nextWord = words[(wordIndex + 1) % words.length]
    const maxLength = Math.max(currentWord.length, nextWord.length)
    let iterations = 0

    setText(currentWord.replace(/./g, () => LETTERS[Math.floor(Math.random() * 26)]))

    const intervalId = setInterval(() => {
      setText((prevText) =>
        prevText
          .split('')
          .map((letter, index) => {
            if (index < iterations) {
              return nextWord[index] || ''
            }
            return LETTERS[Math.floor(Math.random() * 26)]
          })
          .join('')
          .padEnd(maxLength, ' ')
      )

      iterations += 1 / 3

      if (iterations >= maxLength) {
        clearInterval(intervalId)
        setText(nextWord)
        setIsScrambling(false)
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
      }
    }, speed)
  }, [wordIndex, words, isScrambling, speed])

  const handleMouseOver = useCallback(() => {
    if (!isScrambling) {
      scrambleText()
    }
  }, [scrambleText, isScrambling])

  const combinedStyle = {
    ...(textColor && { '--text-color': textColor }),
    ...(fontSize && { '--font-size': fontSize }),
    ...style,
  } as React.CSSProperties

  return (
    <div className={`${styles['c-word-scrambler']} ${className}`} style={combinedStyle}>
      <span className={styles['c-word-scrambler__text']} onMouseOver={handleMouseOver}>
        {text}
      </span>
    </div>
  )
}
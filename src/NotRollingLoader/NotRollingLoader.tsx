import { useEffect } from 'react'
import { NotRollingLoaderPropsType } from './NotRollingLoader.types'
import './styles.css'
import { ColorByIndex } from '../utils/ColorManipulation'

export const NotRollingLoader: React.FC<NotRollingLoaderPropsType> = ({ tracks = 8, trackColor = 'transparent' }) => {
  useEffect(() => {
    const addTrack = (index: number) => {
      const track = document.createElement('div')
      track.classList.add('not-rolling-loader-track')
      track.style.setProperty('--index', `${index}`)
      track.style.setProperty('--trackColor', `${trackColor}`)
      track.style.setProperty('--tracks', `${tracks}`)
      track.style.setProperty('--color', ColorByIndex(index, tracks))
      const trackInner = document.createElement('div')
      trackInner.classList.add('not-rolling-loader-track-inner')
      track.appendChild(trackInner)
      const wrapper = document.getElementById('not-rolling-loader-wrapper')
      wrapper && wrapper.appendChild(track)
    }
    for (let i = 0; i < tracks; i++) {
      addTrack(i)
    }
  }, [])

  return <div id='not-rolling-loader-wrapper' className='not-rolling-loader-wrapper' style={{ '--trackColor': trackColor } as React.CSSProperties}></div>
}

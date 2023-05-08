import React from 'react'
import './styles.css'
import page from './media/page.svg'
import { DownloadBanner } from './media/CvBanner'
import { CvDownloadPropsType } from './CvDownload.types'
import { LightenDarkenColor } from '../utils/ColorManipulation'

export const CvDownload: React.FC<CvDownloadPropsType> = ({ color, buttonHover, labelColor, linkUrl }) => {
  return (
    <div
      className='cv-download-wrapper'
      style={{ '--color': color ? color : '#71bd55', '--underBanner': color ? LightenDarkenColor(color, -80) : LightenDarkenColor('#71bd55', -80), '--buttonHover': buttonHover ? buttonHover : 'green', '--labelColor': labelColor ? labelColor : 'white' } as React.CSSProperties}>
      <img src={page} className='cv-download-page' />
      {DownloadBanner}
      <a href={linkUrl} target='_blank' className='cv-download-arrow-circle'>
        <div className='cv-download-arrow' />
      </a>
      <p className='cv-download-label'>DOWNLOAD</p>
    </div>
  )
}

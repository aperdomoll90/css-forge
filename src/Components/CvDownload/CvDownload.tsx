import React from 'react'
import './styles.css'
import page from './media/page.svg'
import banner from './media/CvBanner.svg'

export default function CvDownload() {
  return (
    <div id='cv-download-wrapper'>
      <img src={page} id='cv-download-page' />
      <img src={banner} id='cv-download-banner' />
      <div id='cv-download-arrow-circle'>
        <div id='cv-download-arrow' />
          </div>
          <p id='cv-download-label'>DOWNLOAD</p>
    </div>
  )
}

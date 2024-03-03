import React from 'react'
import Cursor from '../components/Cursor/Cursor'
import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ResisterNow from '@/components/ResisterNow'
import Scroller from '@/components/Scroller'
import WhatAreYouWating from '@/components/WhatAreYouWating'

export default function page() {
  return (
    <>
      <Cursor />
      <Hero />
      <Scroller />
      <AboutUs />
      <ResisterNow />
      <WhatAreYouWating />
      <Footer />
    </>
  )
}

import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ResisterNow from '@/components/ResisterNow'
import Scroller from '@/components/Scroller'
import WhatAreYouWating from '@/components/WhatAreYouWating'
import React from 'react'

export default function page() {
  return (
    <>
      <Hero />
      <Scroller />
      <AboutUs />
      <ResisterNow />
      <WhatAreYouWating />
      <Footer />
    </>
  )
}

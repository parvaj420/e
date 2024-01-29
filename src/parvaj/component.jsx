
import React, { useRef, useState} from 'react'
import './style.css'
import Nav from './Nav'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Footer from './Footer'
function component({timeline, ease}) {
  return (
    <>
    <Nav />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Footer />
    </>
  )
}

export default component


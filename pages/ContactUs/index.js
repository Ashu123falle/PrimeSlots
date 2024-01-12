import React from 'react'
import ContactUsnavbar from '@/Components/ContactUsnavbar/ContactUsnavbar'
import Footer from '@/Components/Footer/Footer'
import LetsTalk from '@/Components/LetsTalk/LetsTalk'
import StayLoop from '@/Components/StayLoop/StayLoop'
import ContactUsimage from '@/Components/ContactUsimage/ContactUsimage'
import MiniNavbar from '@/Components/MiniNavbar/MiniNavbar'

const ContactUs = () => {
  return (
    <>
      <MiniNavbar />
      <ContactUsimage/>
      <LetsTalk />
      <StayLoop />
      <Footer />
    </>
  )
}

export default ContactUs
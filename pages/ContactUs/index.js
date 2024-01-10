import React from 'react'
import ContactUsnavbar from '@/Components/ContactUsnavbar/ContactUsnavbar'
import Footer from '@/Components/Footer/Footer'
import LetsTalk from '@/Components/LetsTalk/LetsTalk'
import StayLoop from '@/Components/StayLoop/StayLoop'
import ContactUsimage from '@/Components/ContactUsimage/ContactUsimage'

const ContactUs = () => {
  return (
    <>
      <ContactUsnavbar />
      <ContactUsimage/>
      <LetsTalk />
      <StayLoop />
      <Footer />
    </>
  )
}

export default ContactUs
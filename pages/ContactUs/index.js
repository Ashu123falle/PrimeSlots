import React from 'react'
import ContactUsnavbar from '@/components/ContactUsnavbar/ContactUsnavbar'
import Footer from '@/components/Footer/Footer'
import LetsTalk from '@/components/LetsTalk/LetsTalk'
import StayLoop from '@/components/StayLoop/StayLoop'
import ContactUsimage from '@/components/ContactUsimage/ContactUsimage'

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
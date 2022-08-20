import React from 'react'
import ContactForm from '../components/contactus/ContactForm'
import SupportPosters from '../components/contactus/SupportPosters'

const ContactUs = () => {
  return (
    <section className='w-full bg-primary-bg-color'>
      <ContactForm />
      <SupportPosters />
    </section>
  )
}

export default ContactUs
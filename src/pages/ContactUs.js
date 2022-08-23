import React from 'react'
import useTitle from "../hooks/useTitle";
import ContactForm from '../components/contactus/ContactForm'
import SupportPosters from '../components/contactus/SupportPosters'
import ContactWays from '../components/contactus/ContactWays'
import FastLogin from "../components/FastLogin";

const ContactUs = () => {
  useTitle("تماس با ما")
  
  return (
    <section className='w-full bg-primary-bg-color'>
      <ContactForm />
      <SupportPosters />
      <ContactWays />
      <FastLogin />
    </section>
  )
}

export default ContactUs
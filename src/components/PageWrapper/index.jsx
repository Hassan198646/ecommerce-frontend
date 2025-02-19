import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
const Page = ({ children }) => {
  return (
    <div className='clientPage'>
      <Navbar />

      {children}
      <Footer />
    </div>
  )
}

export default Page
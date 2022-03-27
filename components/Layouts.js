
import Navbar from './Header'
import Header from './Nav'
import React, { useState } from 'react'
export default function Layout({ children }) {
  return (
   <React.Fragment>
     <div className="g-sidenav-show  bg-gray-200">
      <Navbar />
   
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
     
      <Header />
      {children}
      </main>
      </div>
      </React.Fragment>
  )
}
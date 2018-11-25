import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'
import './all.scss'

export default ({ children }) => (
  <div>
    <Helmet defaultTitle='Brus kódu' titleTemplate='%s — Brus kódu'>
      <html lang='cs' />
      <link
        href='https://fonts.googleapis.com/css?family=Playfair+Display:700&subset=latin,latin-ext'
        rel='stylesheet'
        type='text/css'
      />
    </Helmet>
    <Header />
    <div class='container'>
      <div id='primary'>
        <div id='content' role='main'>
          {children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

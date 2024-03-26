import React from 'react'

import { Helmet } from 'react-helmet'

import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio - Portfolio Page</title>
        <meta property="og:title" content="Portfolio - Portfolio Page" />
      </Helmet>
    </div>
  )
}

export default Portfolio

import './style.css'
import React, { useContext, useEffect, useState } from 'react'

import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div className="Home">
      <div className="homeInformation">
        <h5>HI THERE! I'M</h5>
        <div className="DivOne">
          <h2>Khalaf</h2>
          <h2>Alhajjaj</h2>
        </div>
        <div className="DivOne">
          <h3>A </h3>
          <h3>Full-Stack Devloper</h3>
        </div>
        <div>
          <h3>
            passionate about creating interactive applications and experiences
            on the web.
          </h3>{' '}
        </div>
      </div>
      <div>
        <img
          className="myimage"
          src="https://www.denaro.it/images/2021/02/13/cristiano-ronaldo_large.jpg"
        />
      </div>
    </div>
  )
}

export default Home

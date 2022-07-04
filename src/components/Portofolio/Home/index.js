import './style.css'
import React, { useContext, useEffect, useState } from 'react'

import { Button } from 'react-bootstrap'
import { getByAltText } from '@testing-library/react'

const Home = () => {
  return (
    <div className="Continer">
      <div className="One">
        <div className="oneOne">
          <a href={'#Home'}>
            <div>
              <button className="K">K</button>
            </div>
          </a>
          {/* <h2 className="khalaf"> khalaf</h2> */}
        </div>

        <div className="OneTwo ">
          <a href={'#01'}>
            <button className="button">About Me</button>
          </a>
          <a href={'#02Skills'}>
            <button className="button">Skills</button>
          </a>
          <a href={'#03project'}>
            <button className="button">project</button>
          </a>
          <a href={'#One'}>
            <button className="button">Contact</button>
          </a>
        </div>
      </div>

      <div className="Two">
        <div className="first" id="Home">
          <div className="firstOne">
            <h1 className="h2h2">
              <span className="spana">Hi,</span>
              <br />
              <span className="letters">I'</span>
              <span className="letters">m</span>{' '}
              <span
                className="letter  span"
                style={{ animationDelay: 0.1 + 's' }}
              >
                K
              </span>
              <span className="letter" style={{ animationDelay: 0.2 + 's' }}>
                h
              </span>
              <span className="letter" style={{ animationDelay: 0.3 + 's' }}>
                a
              </span>
              <span className="letter" style={{ animationDelay: 0.4 + 's' }}>
                l
              </span>
              <span className="letter" style={{ animationDelay: 0.5 + 's' }}>
                a
              </span>
              <span className="letter" style={{ animationDelay: 0.6 + 's' }}>
                f
              </span>
              <br />A full Stack Devloper
            </h1>
          </div>

          <div className="FirstTwo"></div>
        </div>

        <div className="Second" id="01">
          <div className="SecondOne">
            <h3>
              <span className="G">0.1</span>{' '}
              <span className="white">About Me</span>{' '}
              <span className="G">_____________________</span>
            </h3>
            <br />
            <h2 className="Self  G">MySelf</h2>
            <br />

            <p className="paragraph">
              <span>
                Hello! My name is khalaf Alhajjaj ,I’m A full stack web
                developer{' '}
              </span>
            </p>

            <p className="paragraph">
              {' '}
              I studied civil engineering at university and worked in it , but
              my passion for the future prompted me to learn programming
            </p>

            <p className="paragraph">
              {' '}
              Recently ..I learned programming through an intensive camp with{' '}
              <span className="G">Meraki Academy</span> Bootcamp
            </p>
            <p className="paragraph">
              {' '}
              I am passionate about coding and solving problems through code,
              and I am excited to work alongside other amazing programmers and
              learn so much more!
            </p>
          </div>

          <div className="SecondTwo">
            <div className="DivimgDiv">
              <div className="divimage">
                <img
                  className="img"
                  src="https://res.cloudinary.com/g12-khalaf/image/upload/v1656938433/khalaf12_g0qudm.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="skills" id="02Skills">
          <div className="skillsOne">
            <h3>
              <span className="G">0.2</span>{' '}
              <span className="white">Skills</span>
              <span className="G"> ...............</span>
            </h3>
            <br />
            <h2 className="Self  G">Skills </h2>
            <p className="paragraphSkills">
              <span>
                The skills, tools and technologies I used them during my
                learning journey and with my projects
              </span>
            </p>
          </div>
          <div className="skillsTwo">
            <div className="big">
              <div className="divtools">
                <img
                  className="img2"
                  src="https://www.freeiconspng.com/uploads/html5-icon-15.png"
                />
              </div>
              <h2 className="Name  G">HTML</h2>
            </div>

            <div className="big">
              {' '}
              <div className="divtoolsss">
                <img
                  className="img2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOH2t7rfXehLdX-RYI5i4xkiivX9bUk2gL2cVGb6T4rauUPKIUUpo5YZ9AsUoOx-ciC4&usqp=CAU"
                />
              </div>
              <h2 className="Name  G">CSS</h2>
            </div>

            <div className="big">
              <div className="divtools">
                <img
                  className="img2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Fxa4Sx05hcykDnXfwNBYg5yGwuB1oNENcg&usqp=CAU"
                />
              </div>
              <h2 className="Name  G">Java Script</h2>
            </div>

            <div className="big">
              <div className="divtoolsss">
                <img
                  className="img2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKC1YyIK3ShJeHKeHMf67uKw6N0u5uKXCK1mvlKOELOpZ4-K8kmzF26BhQB16nUrMvKE&usqp=CAU"
                />
              </div>
              <h2 className="Name  G">JQuery</h2>
            </div>

            <div className="big">
              <div className="divtools">
                <img
                  className="img2"
                  src="https://cdn.exvar.com/wp-content/uploads/2022/03/27210938/Node.JS-and-Observability-1-1024x536-1-615x439.png"
                />
              </div>
              <h2 className="Name  G">node js</h2>
            </div>

            <div className="big">
              <div className="divtoolsss">
                <img
                  className="img2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwoQOKaEC2yGqs3Qt7cM-m4AGON6PeUEc81wnzHh-igFMBptr8uhyyEx0YGAm485M_LI&usqp=CAU"
                />
              </div>
              <h2 className="Name  G">React js</h2>
            </div>

            <div className="big">
              <div className="divtools">
                <img
                  className="img2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2htE1q3dYsOdv_kbNtPRDDzeEnT1G5u-OSzoTKTDcursQbgAwDz40lBUX3UbfodAPVI&usqp=CAU"
                />
              </div>
              <h2 className="Name  G">Redux js</h2>
            </div>

            <div className="big">
              <div className="divtoolssss">
                <img
                  className="img2"
                  src="https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png"
                />
              </div>
              <h2 className="Name  G">MySql</h2>
            </div>

            <div className="big">
              <div className="divtoolssss">
                <img
                  className="img2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8EBDbQZjwD-lyTt9ZTlYVyN_d3n5vhUcmm2Cmc7Mn4_qhYTDMudAaYXksFxolYpyNdg&usqp=CAU"
                />
              </div>
              <h2 className="Name  G">mongoDB</h2>
            </div>
          </div>
        </div>

        <div className="project" id="03project">
          <h3>
            <span className="G">0.3</span>{' '}
            <span className="white">Project</span>
            <span className="G"> ...............</span>
          </h3>
          <br />
          <h2 className="Self  G">Project </h2>

          <div className="AllProject">
            <div className="project5">
              <div className="pro55">
                <div className="df">dddsaaaddd</div>
              </div>
            </div>
            <div className="project5">
              <div className="pro55">
                <div className="df"><img className='imageProject' src="https://res.cloudinary.com/g12-khalaf/image/upload/v1656948793/project4_ioj7qh.png"/>
                <h2 className='G projectName'>Booking Hotel</h2>
                <p className='P'>Booking Hotel user can Booking room from any Hotel want after see them and Sort By Loaction our Price</p>
           <a className='p'  href='https://github.com/C5-AlhajjajKhalaf/MERAKI_Academy_Project_4'  >More</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="divT">gfgfgfgf</div>
        <div className="divT">wwwwwwwwwww</div>
      </div>
    </div>
  )
}

export default Home

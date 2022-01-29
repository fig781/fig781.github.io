import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import styles from '../styles/Home.module.css'
import DisplayCard from '../components/DisplayCard'
import ContactForm from '../components/ContactForm'
import cardPropData from '../data/cardProps'

import {
  Navbar,
  Container,
  Nav,
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'

import agileIcon from '../public/Images/agileIcon.png'
import bootstrapIcon from '../public/Images/bootstrap.png'
import cssIcon from '../public/Images/cssIcon2.webp'
import gitIcon from '../public/Images/gitIcon.png'
import htmlIcon from '../public/Images/html5Icon.png'
import javascriptIcon from '../public/Images/javascriptIcon.svg'
import azureSql from '../public/Images/logoAzureSql.png'
import nodeIcon from '../public/Images/nodeIcon.png'
import postgresSqlIcon from '../public/Images/postgresSqlIcon.png'
import reactIcon from '../public/Images/reactIcon.png'
import tailwindIcon from '../public/Images/tailwindIcon.png'
import typescriptIcon from '../public/Images/typescript.jpeg'
import vueIcon from '../public/Images/vueIcon.png'

import algoVisualizerImg from '../public/Images/algoVisualizer.png'
import personalSiteImg from '../public/Images/personalSite.png'
import codingStatsImg from '../public/Images/codingStats2.png'
import countryCurrencyImg from '../public/Images/country-currency.png'
import keyValueDbImg from '../public/Images/keyValueDb.png'
import learnFluentImg from '../public/Images/learnfluent.png'

import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa'

export default function Home() {
  cardPropData.codingStatsProps.img = codingStatsImg
  cardPropData.personalSiteProps.img = personalSiteImg
  cardPropData.sortingAlgoProps.img = algoVisualizerImg
  cardPropData.keyValueProps.img = keyValueDbImg
  cardPropData.currencyInfoProps.img = countryCurrencyImg
  cardPropData.learnfluentProps.img = learnFluentImg

  const copyToClipboard = () => navigator.clipboard.writeText('adeneilers@gmail.com')

  return (
    <>
      {/*HERO IMAGE*/}
      <section className={styles.hero}>
        <Navbar collapseOnSelect expand='sm' variant='dark'>
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse className={styles.navbar1} id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link className='text-white' href='#development'>
                  Development
                </Nav.Link>
                <Nav.Link className='text-white' href='#projectsSection'>
                  Projects
                </Nav.Link>
                <Nav.Link className='text-white' href='#resumeSection'>
                  Resume
                </Nav.Link>
                <Nav.Link className='text-white' href='#contactSection'>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav className={styles.articleButtonNav}>
              <Button className={`btn ${styles.btnWhite}`}>Articles</Button>
            </Nav>
          </Container>
        </Navbar>

        {/*TEXT IN CENTER OF HERO*/}
        <div className={`container ${styles.center}`}>
          <div className={styles.innerCenter}>
            <h1>ADEN EILERS</h1>
            <div className='row'>
              <div className='col-md-9'>
                <h3>Software engineering through research and development.</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <OverlayTrigger
                  placement='right'
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip id='email-tooltip'>Copy to clipboard</Tooltip>}
                >
                  <h4 className={styles.email} onClick={copyToClipboard}>
                    adeneilers@gmail.com
                  </h4>
                </OverlayTrigger>

                <a
                  className={styles.linkIcons}
                  href='https://github.com/fig781'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconContext.Provider
                    value={{
                      className: styles.customMarginRight,
                    }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                </a>
                <a
                  className={styles.linkIcons}
                  href='https://www.linkedin.com/in/aden-eilers/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconContext.Provider
                    value={{
                      className: styles.customMarginRight,
                    }}
                  >
                    <FaLinkedin />
                  </IconContext.Provider>
                </a>
                <a
                  className={styles.linkIcons}
                  href='https://dev.to/fig781'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaDev />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*DEVLOPMENT*/}
      <section className='container pt-5' id='development'>
        <h2 className='mb-3'>Development</h2>
        <div className='card shadow mb-3'>
          <div className='card-body'>
            <h4 className='card-title'>Frontend</h4>
            <div className={styles.customFlexContainer}>
              <div className={styles.customItemContainer}>
                <Image src={htmlIcon} width={50} height={50} alt='' />
                <div className='media-body'>Html</div>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={cssIcon} width={50} height={50} alt='' />
                <div className='media-body'>CSS</div>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={javascriptIcon} width={50} height={50} alt='' />
                <div className='media-body'>Javascript</div>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={typescriptIcon} width={50} height={50} alt='' />
                <div className='media-body'>Typescript</div>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={reactIcon} width={50} height={50} alt='' />
                <div className='media-body'>React.js</div>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={vueIcon} width={50} height={50} alt='' />
                <div className='media-body'>Vue.js</div>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={tailwindIcon} width={50} height={50} alt='' />
                <div className='media-body'>Tailwind CSS</div>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={bootstrapIcon} width={50} height={50} alt='' />
                <div className='media-body'>Bootstrap</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.customDevCardsContainer}>
          <div className={`card shadow ${styles.customCardSize}`}>
            <div className='card-body'>
              <h4 className='card-title'>Backend</h4>
              <div className={styles.customFlexContainer}>
                <div className={styles.customItemContainer}>
                  <Image src={nodeIcon} width={50} height={50} alt='' />
                  <div className='media-body'>Node.js/ Express.js</div>
                </div>

                <div className={styles.customItemContainer}>
                  <Image src={postgresSqlIcon} width={50} height={50} alt='' />
                  <div className='media-body'>PostgreSQL</div>
                </div>

                <div className={styles.customItemContainer}>
                  <Image src={azureSql} width={50} height={50} alt='' />
                  <div className='media-body'>SQL Server</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`card shadow ${styles.customCardSize}`}>
            <div className='card-body'>
              <h4 className='card-title'>Other</h4>
              <div className={styles.customFlexContainer}>
                <div className={styles.customItemContainer}>
                  <Image src={gitIcon} width={50} height={50} alt='' />
                  <div className='media-body'>Git</div>
                </div>

                <div className={styles.customItemContainer}>
                  <Image src={agileIcon} width={50} height={50} alt='' />
                  <div className='media-body'>Agile Scrum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*PROJECTS*/}
      <div className='container pt-5' id='projectsSection'>
        <h2 className='mb-3'>Projects</h2>
        <div className='row row-cols-1 row-cols-md-2'>
          <DisplayCard cardInfo={cardPropData.codingStatsProps} />
          <DisplayCard cardInfo={cardPropData.personalSiteProps} />
          <DisplayCard cardInfo={cardPropData.sortingAlgoProps} />
          <DisplayCard cardInfo={cardPropData.keyValueProps} />
          <DisplayCard cardInfo={cardPropData.currencyInfoProps} />
          <DisplayCard cardInfo={cardPropData.learnfluentProps} />
        </div>
      </div>

      {/*HACKATHONS*/}
      <div className='container pt-5' id='projectsSection'>
        <h2 className='mb-3'>Hackathons</h2>
        <div className='row row-cols-1 row-cols-md-2'>
          <DisplayCard cardInfo={cardPropData.cloudNativeHack} />
          <DisplayCard cardInfo={cardPropData.trimbleHack} />
          <DisplayCard cardInfo={cardPropData.quarantineHack} />
        </div>
      </div>

      {/*RESUME*/}
      <div className='container pt-4 pb-2' id='resumeSection'>
        <h2 className='mb-3'>Resume</h2>
        <h5>Education</h5>
        <div className='row'>
          <div className='col-8'>
            <div className='media'>
              <div className='media-body'>
                <p className='resume-school'>
                  <b>Oregon State University:</b> Bachelor&apos;s of Science
                </p>
                <p>Business Information Systems</p>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <p>
              <b>Corvallis, Oregon</b>
            </p>
          </div>
        </div>
      </div>

      <div className='container'>
        <h5>Experience</h5>
        <div className='row'>
          <div className='col-8'>
            <p>
              <b>Application Support </b>Viewpoint Construction Software
            </p>
            <ul>
              <li>Supporting the Viewpoint Team product</li>
              <li>Troubleshooting customer support cases</li>
              <li>Collaborating with development to fix product bugs</li>
            </ul>
          </div>
          <div className='col-4'>
            <p>
              <b>Portland, Oregon</b> January 2020 - Current
            </p>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <p>
              <b>Web Development Internship</b> NSI Engineering
            </p>
            <ul>
              <li>Constructed the user interface using the React.js framework.</li>
              <li>Collaborated with a team of 5 other developers.</li>
              <li>Used the agile development framework.</li>
            </ul>
          </div>
          <div className='col-4'>
            <p>
              <b>Remote</b> April 2019 - October 2019
            </p>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <p>
              <b>Network Administrator</b> Beaver Lodge Student Co-Op
            </p>
            <ul>
              <li>Maintained the internet of the 30-student co-op.</li>
              <li>Troubleshot individual people&apos;s internet troubles.</li>
              <li>Rebuilt the network setup from scratch.</li>
            </ul>
          </div>
          <div className='col-4'>
            <p>
              <b>Corvallis, Oregon</b> December 2017 - June 2018
            </p>
          </div>
        </div>
      </div>

      <div className='container mb-5'>
        <h5>Certifications</h5>
        <div className='row'>
          <div className='col-8'>
            <ul>
              <li>CSX Cybersecurity Fundamentals (CSXF)</li>
            </ul>
          </div>
        </div>
      </div>

      {/*CONTACT*/}
      <div className={styles.contactSection} id='contactSection'>
        <div className='container d-flex justify-content-center align-items-center pt-5'>
          <div id={styles.contactForm} className='card p-3 mt-5'>
            <h3 className='card-title'>Get in Contact</h3>
            <ContactForm />
          </div>
        </div>
      </div>

      {/*FOOTER*/}
      <div className={`${styles.footer} container-fluid pt-4 pb-4`}>
        <div className={`row`}>
          <div className='col-12'>
            <a
              className={styles.linkIcons}
              href='https://github.com/fig781'
              target='_blank'
              rel='noreferrer'
            >
              <IconContext.Provider
                value={{
                  className: styles.customMarginRight,
                }}
              >
                <FaGithub />
              </IconContext.Provider>
            </a>
            <a
              className={styles.linkIcons}
              href='https://www.linkedin.com/in/aden-eilers/'
              target='_blank'
              rel='noreferrer'
            >
              <IconContext.Provider
                value={{
                  className: styles.customMarginRight,
                }}
              >
                <FaLinkedin />
              </IconContext.Provider>
            </a>
            <a
              className={styles.linkIcons}
              href='https://dev.to/fig781'
              target='_blank'
              rel='noreferrer'
            >
              <FaDev />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

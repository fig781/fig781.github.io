import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import DisplayCard from '../components/DisplayCard';
import ContactForm from '../components/ContactForm';
import cardPropData from '../utils/cardProps';

import {
  Navbar,
  Container,
  Nav,
  OverlayTrigger,
  Tooltip,
  Button,
} from 'react-bootstrap';

import agileIcon from '../public/Images/agileIcon.png';
import bootstrapIcon from '../public/Images/bootstrap.png';
import cssIcon from '../public/Images/cssIcon2.webp';
import gitIcon from '../public/Images/gitIcon.png';
import htmlIcon from '../public/Images/html5Icon.png';
import javascriptIcon from '../public/Images/javascriptIcon.svg';
import azureSql from '../public/Images/logoAzureSql.png';
import nodeIcon from '../public/Images/nodeIcon.png';
import pythonIcon from '../public/Images/pythonIcon.png';
import postgresSqlIcon from '../public/Images/postgresSqlIcon.png';
import reactIcon from '../public/Images/reactIcon.png';
import tailwindIcon from '../public/Images/tailwindIcon.png';
import typescriptIcon from '../public/Images/typescript.jpeg';
import vueIcon from '../public/Images/vueIcon.png';

import algoVisualizerImg from '../public/Images/algoVisualizer.png';
import personalSiteImg from '../public/Images/personalSite.png';
import codingStatsImg from '../public/Images/codingStats2.png';
import countryCurrencyImg from '../public/Images/country-currency.png';
import keyValueDbImg from '../public/Images/keyValueDb.png';
import learnFluentImg from '../public/Images/learnfluent.png';

import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';

export default function Home() {
  cardPropData.codingStatsProps.img = codingStatsImg;
  cardPropData.personalSiteProps.img = personalSiteImg;
  cardPropData.sortingAlgoProps.img = algoVisualizerImg;
  cardPropData.keyValueProps.img = keyValueDbImg;
  cardPropData.currencyInfoProps.img = countryCurrencyImg;
  cardPropData.learnfluentProps.img = learnFluentImg;

  const copyToClipboard = () =>
    navigator.clipboard.writeText('adeneilers@gmail.com');

  return (
    <>
      <Head>
        <title>Aden Eilers</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {/*HERO IMAGE*/}
      <section className={styles.hero}>
        <Navbar collapseOnSelect expand='sm' variant='dark'>
          <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse className={styles.navbar1} id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link
                  className={`${styles.navLinks} text-white`}
                  href='#development'>
                  Development
                </Nav.Link>
                <Nav.Link
                  className={`${styles.navLinks} text-white`}
                  href='#projectsSection'>
                  Projects
                </Nav.Link>
                <Nav.Link
                  className={`${styles.navLinks} text-white`}
                  href='#resumeSection'>
                  Resume
                </Nav.Link>
                <Nav.Link
                  className={`${styles.navLinks} text-white`}
                  href='#contactSection'>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav className={styles.articleButtonNav}>
              <Link href='/articles' passHref>
                <Button className={`btn ${styles.btnWhite}`}>Articles</Button>
              </Link>
            </Nav>
          </Container>
        </Navbar>

        {/*TEXT IN CENTER OF HERO*/}
        <div className={`container ${styles.center}`}>
          <div className={styles.innerCenter}>
            <h1>ADEN EILERS</h1>
            <div className='row'>
              <div className='col-md-9'>
                <h3 className={styles.subHeader}>
                  Software engineering through research and development.
                </h3>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <OverlayTrigger
                  placement='right'
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip id='email-tooltip'>Copy to clipboard</Tooltip>}>
                  <h4
                    className={`${styles.email} ${styles.subHeader}`}
                    onClick={copyToClipboard}>
                    adeneilers@gmail.com
                  </h4>
                </OverlayTrigger>

                <a
                  className={styles.linkIcons}
                  href='https://github.com/fig781'
                  target='_blank'
                  rel='noreferrer'>
                  <IconContext.Provider
                    value={{
                      className: styles.customMarginRight,
                    }}>
                    <FaGithub />
                  </IconContext.Provider>
                </a>
                <a
                  className={styles.linkIcons}
                  href='https://www.linkedin.com/in/aden-eilers/'
                  target='_blank'
                  rel='noreferrer'>
                  <IconContext.Provider
                    value={{
                      className: styles.customMarginRight,
                    }}>
                    <FaLinkedin />
                  </IconContext.Provider>
                </a>
                <a
                  className={styles.linkIcons}
                  href='https://dev.to/fig781'
                  target='_blank'
                  rel='noreferrer'>
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
                <p>Html</p>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={cssIcon} width={50} height={50} alt='' />
                <p>CSS</p>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={javascriptIcon} width={50} height={50} alt='' />
                <p>Javascript</p>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={typescriptIcon} width={50} height={50} alt='' />
                <p>Typescript</p>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={reactIcon} width={50} height={50} alt='' />
                <p>React.js</p>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={vueIcon} width={50} height={50} alt='' />
                <p>Vue.js</p>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={tailwindIcon} width={50} height={50} alt='' />
                <p>Tailwind CSS</p>
              </div>

              <div className={styles.customItemContainer}>
                <Image src={bootstrapIcon} width={50} height={50} alt='' />
                <p>Bootstrap</p>
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
                  <p>Node.js/ Express.js</p>
                </div>

                <div className={styles.customItemContainer}>
                  <Image src={pythonIcon} width={50} height={50} alt='' />
                  <p>Python</p>
                </div>

                <div className={styles.customItemContainer}>
                  <Image src={postgresSqlIcon} width={50} height={50} alt='' />
                  <p>PostgreSQL</p>
                </div>

                <div className={styles.customItemContainer}>
                  <Image src={azureSql} width={50} height={50} alt='' />
                  <p>SQL Server</p>
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
                  <p>Git</p>
                </div>

                <div className={styles.customItemContainer}>
                  <Image src={agileIcon} width={50} height={50} alt='' />
                  <p>Agile Scrum</p>
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
          <DisplayCard cardInfo={cardPropData.spatialFront22Q2} />
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
              <div>
                <p className='mb-0'>
                  <b>Oregon State University:</b> Bachelor&apos;s of Science
                </p>
                <p>Information Systems</p>
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
              <b>Software Developer </b>Spatial Front, Inc.
            </p>
            <ul>
              <li>Building the frontend with React</li>
            </ul>
          </div>
          <div className='col-4'>
            <p>
              <b>Remote</b> June 2022 - Current
            </p>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <p>
              <b>Application Support </b>Viewpoint Construction Software
            </p>
            <ul>
              <li>
                Consistently close the most support cases each week while maintaining
                positive customer feedback.
              </li>
              <li>Teach and mentor all new team members.</li>
              <li>Collaborating with development to fix 100+ product bugs.</li>
            </ul>
          </div>
          <div className='col-4'>
            <p>
              <b>Portland, Oregon</b> January 2020 - June 2022
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
              <li>
                Constructed the user interface for a complex SaaS app using the
                React.js framework.
              </li>
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
              <li>Certified SAFe 5 Practitioner</li>
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
              rel='noreferrer'>
              <IconContext.Provider
                value={{
                  className: styles.customMarginRight,
                }}>
                <FaGithub />
              </IconContext.Provider>
            </a>
            <a
              className={styles.linkIcons}
              href='https://www.linkedin.com/in/aden-eilers/'
              target='_blank'
              rel='noreferrer'>
              <IconContext.Provider
                value={{
                  className: styles.customMarginRight,
                }}>
                <FaLinkedin />
              </IconContext.Provider>
            </a>
            <a
              className={styles.linkIcons}
              href='https://dev.to/fig781'
              target='_blank'
              rel='noreferrer'>
              <FaDev />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

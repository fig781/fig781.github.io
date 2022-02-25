import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.footer} container-fluid`}>
      <div className='d-flex align-items-center justify-content-center'>
        <a
          className={styles.linkIcons}
          href='https://github.com/fig781'
          target='_blank'
          rel='noreferrer'>
          <FaGithub />
        </a>
        <a
          className={styles.linkIcons}
          href='https://www.linkedin.com/in/aden-eilers/'
          target='_blank'
          rel='noreferrer'>
          <FaLinkedin />
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
  );
};

export default Footer;

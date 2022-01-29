//import Image from 'next/image'
import styles from '../styles/DisplayCard.module.css'
import { Badge, Image } from 'react-bootstrap'

const DisplayCard = ({ cardInfo }) => {
  return (
    <div className='col mb-4'>
      <div className='card shadow h-100'>
        {cardInfo.img !== null && (
          <Image
            className={styles.cardImage}
            src={cardInfo.img.src}
            alt='...'
          ></Image>
        )}

        <div className='card-body'>
          <h4 className='card-title'>{cardInfo.title}</h4>
          {cardInfo.subHeader !== null && (
            <h6 className='card-subtitle mb-2 text-muted'>{cardInfo.subHeader}</h6>
          )}
          <div>
            {cardInfo.tags.map((tag: string) => {
              return (
                <span key={`${cardInfo.id}${tag}`}>
                  <Badge className={styles.badge} pill text='dark'>
                    {tag}
                  </Badge>{' '}
                </span>
              )
            })}
          </div>

          <p className={`${styles.customMarginBottom} card-text`}>{cardInfo.text}</p>
          <div className={styles.projectButtons}>
            {cardInfo.btn1.display && (
              <button className={`btn ${styles.btnProjects}`}>
                <a href={cardInfo.btn1.link} target='_blank' rel='noreferrer'>
                  {cardInfo.btn1.text}
                </a>
              </button>
            )}
            {cardInfo.btn2.display && (
              <button className={`btn ${styles.btnProjects}`}>
                <a href={cardInfo.btn2.link} target='_blank' rel='noreferrer'>
                  {cardInfo.btn2.text}
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

DisplayCard.defaultProps = {
  includeTopImage: true,
  includeSubHeader: true,
}

export default DisplayCard

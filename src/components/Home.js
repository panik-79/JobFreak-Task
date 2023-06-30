import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <div className='home'>
      <h1>About Us</h1>
      <p>
      Welcome to our captivating tour and travels website, where extraordinary adventures await! Explore enchanting destinations, discover hidden gems, and immerse yourself in rich cultures. Our seamless booking experience, expertly crafted itineraries, and exceptional customer service ensure your journey is unforgettable. Embark on a voyage of wonder and create lifelong memories with us.
      </p>
      <p>
        <u>
      I am very thankful to Job Freak for giving me this opportunity to complete this task. <br /> I hope I will meet your expectations by this submission.
        </u>
      </p>
      <div className="my-info">
          <p>
            <a href="https://github.com/panik-79">
              <FontAwesomeIcon icon={faGithub} />
              <span>panik_79</span>
            </a>
          </p>
          <p>
            <a href="mailto:pujanparekh2609@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>pujanparekh2609@gmail.com</span>
            </a>
          </p>
          <p>
            <a href="tel:+919522234236">
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 95222-34236</span>
            </a>
          </p>
      </div>
    </div>
  )
}

export default Home
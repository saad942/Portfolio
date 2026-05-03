import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from './alert/Alert';

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {

  const form = useRef();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4q9i9kj',
        'template_61e5sih',
        form.current,
        'M6rj-uMieOES0C7r7'
      )
      .then(
        () => {
          setAlertMessage('SUCCESS! Your message has been sent.');
          setAlertType('success');
          setTimeout(() => setAlertMessage(''), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setAlertMessage('FAILED to send the message. Please try again.');
          setAlertType('error');
          setTimeout(() => setAlertMessage(''), 3000);
        }
      );
  };

  const itemes = {
    images: [
      { src: './images/téléchargement (5).png' },
      { src: './images/téléchargement (4).png' },
      { src: './images/téléchargement (6).png' },
      { src: './images/téléchargement.png' },
      { src: './images/téléchargement (1).png' },
      { src: './images/téléchargement (2).png' },
      { src: './images/téléchargement (3).png' },
      { src: './images/téléchargement (7).png' },
      { src: './images/images.png' },
    ]
  };

  return (
    <div className="App">

      {/* NAV */}
      <div className='nav'>
        <strong className="brand">SAAD.dev</strong>
        <div className='navL'>
          <span onClick={() => scrollToSection('hom')}>Home</span>
          <span onClick={() => scrollToSection('abo')}>About</span>
          <span onClick={() => scrollToSection('pro')}>Projects</span>
          <span onClick={() => scrollToSection('con')}>Contact</span>
        </div>
      </div>

      {/* HOME */}
      <section id='hom'>
        <div className='home'>
          <div className='image'>
            <div className='blob'></div>
          </div>

          <div className='hhm'>
            <strong className='str'>Développeur web 👋</strong>
            <p>Hi, I'm Saad Ammari. A passionate Développeur web <br />based in Casablanca 📍</p>

            <a
              href="https://www.linkedin.com/in/saad-ammari-1689b7286/"
              className='iconL'
              target='_blank'
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>

            <a
              href="https://www.github.com/saad942"
              className='iconG'
              target='_blank'
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>

        {/* TECH STACK */}
        <div className='tt'>
          <strong className='tech'>Tech Stack |</strong>
          <div>
            {itemes.images.map((image, index) => (
              <img key={index} src={image.src} alt='' className='iconIM' />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id='abo'>
        <div className='about'>
          <div>
            <img src='./images/imageS.jpeg' className='Abimg' alt='' />
          </div>

          <div className='abo'>
            <strong className='aboS'>ABOUT ME</strong><br />
            <strong className='abop'>A dedicated Développeur web based in Casablanca 📍</strong>

            <p className='par'>
              As a junior web developer, I specialize in MERN stack development...
            </p>

            <a className="button" href="./images/saad-cv-2026.pdf" download>
              <FontAwesomeIcon icon={faDownload} /> Télécharger CV
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="pro">

        <div className="portfolio-section-container">

          <div className="portfolio-section-card">

            <img src='./images/React App et 1 page supplémentaire - Personnel – Microsoft​ Edge 14-03-2024 23_41_33.png' alt="" />

            <h3>E-commerce</h3>
            <p>React, Node.js, Express, MySQL</p>

            <a
              href="https://www.github.com/saad942/e-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          <div className="portfolio-section-card">

            <img src='./images/React App - Google Chrome 22_05_2024 16_25_55.png' alt="" />

            <h3>Blog App</h3>
            <p>React, Node.js, Express, MongoDB</p>

            <a
              href="https://www.github.com/saad942/BlogPost"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id='con'>

        <Alert
          message={alertMessage}
          type={alertType}
          onClose={() => setAlertMessage('')}
        />

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <input type="submit" value="Send" />
        </form>

      </section>

      {/* FOOTER */}
      <div className="footer">

        <a
          href="https://github.com/saad942"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/saad-ammari-1689b7286"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

      </div>

    </div>
  );
}

export default App;
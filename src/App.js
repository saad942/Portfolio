import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from '@fortawesome/free-solid-svg-icons';
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
      .sendForm('service_4q9i9kj', 'template_61e5sih', form.current, 'M6rj-uMieOES0C7r7')
      .then(
        () => {
          setAlertMessage('SUCCESS! Your message has been sent.');
          setAlertType('success');
                  e.target.reset();
          setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setAlertMessage('FAILED to send the message. Please try again.');
          setAlertType('error');
          setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
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
      <div className='nav'>
        <strong className="brand">SAAD.dev</strong>
        <div className='navL'>
          <span onClick={() => scrollToSection('hom')}>
            Home
          </span>
          <span onClick={() => scrollToSection('abo')}>
            About
          </span>
          <span onClick={() => scrollToSection('pro')}>
            Projects
          </span>
          <span onClick={() => scrollToSection('con')}>
            Contact
          </span>
        </div>
      </div>

      <section id='hom'>
        <div className='home'>
          <div className='image'>
            <div className='blob'>
            </div>
          </div>

          <div className='hhm'>
            <strong className='str'>Développeur web 👋</strong>
            <p >Hi, I'm Saad Ammari — a creative Full-Stack Web Developer based in Casablanca, specializing in building modern, responsive, and user-friendly web applications using the MERN Stack. <br />based in Casablanca 📍</p>
            <a href="https://www.linkedin.com/in/saad-ammari-1689b7286/" className='iconL' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
            <a href="https://www.github.com/saad942" className='iconG' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
          </div>
<br/><br/>

        </div>
        <div className=' tt'>
          <strong className='tech'>Tech Stack |</strong>
          <div >
            {itemes.images.map((image) => (
              <img  src={image.src} alt='' className='iconIM' />
            ))}
          </div>
        </div>
      </section>

      <section id='abo'>
        <div className='about'>
          <div >
            <img src='./images/imageS.jpeg' className='Abimg' alt='' />
          </div>
          <div className='abo'>
            <strong className='aboS'>ABOUT ME</strong><br />
            <strong className='abop'>A dedicated Développeur web based in Casablanca 📍</strong>
            <p className='par'>As a junior web developer, I specialize in MERN stack development, proficient in MySQL for
              database management, and skilled in crafting responsive layouts with HTML and CSS. Eager to
              contribute to dynamic web projects and continuously expand my expertise in front-end
              and back-end technologies .</p><br />

            <a className="button" href="./images/saad26.pdf" download="cv-saad-ammari.pdf">
              <FontAwesomeIcon icon={faDownload} /> Télécharger CV
            </a>

          </div>
        </div>
        <section className='col'>
      <div style={{ marginTop: '90px'}}>
        <strong style={{ color: '#b6adad' }}>EXPÉRIENCE PROFESSIONNELLE</strong><br/><br/>
        <div className='contents'>
          <div className='box'>
            <h4> NOVEMBRE 2025 – PRÉSENT</h4>
            <h3>DÉVELOPPEUR FRONT-END</h3>
            <p>
               Développement d’applications web front end.
            </p>
          </div>
          <div className='box'>
            <h4>01 AOÛT 2024 – NOVEMBRE 2025</h4>
            <h3>AGENT DE SAISIE | 3STD SARL</h3>
            <p>
               -Accueil et enregistrement des patients<br/>
-Respect de la confidentialité des données<br/>
-Collaboration avec le personnel
            </p>
          </div>
          <div className='box'>
            <h4> 10/01/2024 – 14/06/ 2024</h4>
            <h3>ARK-X Talent Factory</h3>
            <p>
               Développement d’applications web full-stack avec MERN Stack.
            </p>
          </div>
          <div className='box'>
            <h4>SEPTEMBRE 2023 – FÉVRIER 2024</h4>
            <h3>NTT DATA</h3>
            <p>
            En tant que stagiaire dèveloppeur Full Stack.Jai eu lopportunité de travailler sur divers
projets passionnants. mettant en oeuvre un éventail de technologies clès, notamment
React, Laravel. MySQL, DevOps et Nodejs            </p>
          </div>
        </div>
      </div>
    </section>

      </section>

      

<section className="portfolio-section" id="pro">
  <div className="portfolio-container-box">
    <div className="portfolio-container">
      <p className="sub-title">Recent Projects</p>
      <h2 className="section-heading">My Portfolio</h2>
    </div>
    <div>
      <button className="btn btn-github" onClick={() => window.open('https://www.github.com/saad942', '_blank','noopener,noreferrer')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 33 33"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202ZM16.3333 2.52684C19.804 2.52684 22.9797 3.82836 25.3919 5.96285C25.1489 6.30992 23.0838 9.06914 18.2248 10.8912C15.9862 6.77846 13.5047 3.41187 13.1229 2.89126C14.1467 2.64831 15.2227 2.52684 16.3333 2.52684ZM10.5199 3.811C10.8843 4.2969 13.3138 7.68085 15.5871 11.7068C9.20093 13.4075 3.56102 13.3728 2.95364 13.3728C3.83867 9.13855 6.70201 5.61577 10.5199 3.811ZM2.65863 16.1841C2.65863 16.0452 2.65863 15.9064 2.65863 15.7676C3.24865 15.7849 9.87772 15.8717 16.6977 13.824C17.0969 14.5875 17.4613 15.3684 17.8084 16.1493C17.6348 16.2014 17.4439 16.2535 17.2704 16.3055C10.2248 18.5788 6.47642 24.7914 6.16405 25.312C3.99485 22.8999 2.65863 19.6895 2.65863 16.1841ZM16.3333 29.8413C13.1749 29.8413 10.2595 28.7654 7.95147 26.9606C8.19442 26.4574 10.971 21.1125 18.676 18.4227C18.7107 18.4053 18.7281 18.4053 18.7628 18.388C20.689 23.3684 21.47 27.5506 21.6782 28.748C20.0296 29.4595 18.2248 29.8413 16.3333 29.8413ZM23.9515 27.4986C23.8127 26.6656 23.0838 22.6743 21.2964 17.7632C25.5828 17.0864 29.3311 18.1971 29.7997 18.3533C29.2097 22.1537 27.0231 25.4335 23.9515 27.4986Z"
            fill="currentColor"
          />
        </svg>
        Visit My GitHub
      </button>
    </div>
  </div>
  <div className="portfolio-section-container">
    <div className="portfolio-section-card">
      <div className="portfolio-section-img">
        <img src='./images/React App et 1 page supplémentaire - Personnel – Microsoft​ Edge 14-03-2024 23_41_33.png' alt="Placeholder" />
      </div>
      <div className="portfolio-section-card-content">
        <div>
          <h3 className="portfolio-section-title">E-commerce</h3>
          <p className="text-md">I am presenting my simple e-commerce platform, developed with React, Node.js, Express.js, and MySQL.</p>
        </div>
        <p className="text-sm portfolio-link">
          <a href="https://www.github.com/saad942/e-commerce" target="_blank"  rel="noopener noreferrer">View Project</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
              stroke="currentColor"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
    </div>
    <div className="portfolio-section-card">
      <div className="portfolio-section-img">
        <img src='./images/React App - Google Chrome 18-05-2026 7_53_06.png' alt="Placeholder" />
      </div>
      <div className="portfolio-section-card-content">
        <div>
          <h3 className="portfolio-section-title">Service indépendant – Nettoyage de maisons</h3>
          <p className="text-md">I am presenting my simple Nettoyage de maisons platform, developed with React, Node.js, Express.js, and MongoDB.</p>
        </div>
        <p className="text-sm portfolio-link">
          <a href="https://www.github.com/ saad942/DirYdik" target="_blank"  rel="noopener noreferrer">View Project</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
              stroke="currentColor"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
    </div>
    <div className="portfolio-section-card">
      <div className="portfolio-section-img">
        <img src='./images/React App - Google Chrome 22_05_2024 16_25_55.png' alt="Placeholder" />
      </div>
      <div className="portfolio-section-card-content">
        <div>
          <h3 className="portfolio-section-title">Blog App</h3>
          <p className="text-md">I am presenting my simple Blog App platform, developed with React, Node.js, Express.js and MongoDB.</p>
        </div>
        <p className="text-sm portfolio-link">
          <a href="https://www.github.com/saad942/BlogPost" target="_blank"  rel="noopener noreferrer">View Project</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
              stroke="currentColor"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
      
    </div>
  </div>
</section>

     =<br/><br/><br/><br/><br/>
      <Alert message={alertMessage} type={alertType} onClose={() => setAlertMessage('')} />

<section id='con'>
        <div className="contact">
          <div>
            <strong className='h2'>Contact</strong><br /><br />
            <strong> Hire me !! 👇</strong>
          </div>
          <form className="cnt" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </section>

      <div className="footer">
        <div className="footer-content">
          <p className='p'>© 2026 YourWebsite. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://github.com/saad942" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/saad-ammari-1689b7286" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

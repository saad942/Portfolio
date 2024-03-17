import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelopeOpen, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {

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
          <div>
            <strong className='str'>Développeur web 👋</strong>
            <p >Hi, I'm Saad Ammari. A passionate Développeur web <br />based in Casablanca 📍</p>
            <a href="https://www.linkedin.com/in/saad-ammari-1689b7286/" className='iconL' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
            <a href="https://www.github.com/saad942" className='iconG' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
          </div>
          <div className='image'>
            <img src='./images/WhatsApp Image 2024-01-09 at 23.17.23.jpeg' alt='' />
          </div>
        </div>
        <div className=' tt'>
          <strong className='tech'>Tech Stack |</strong>
          <div >
            {itemes.images.map((image, index) => (
              <img key={index} src={image.src} alt='' className='iconIM' />
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

            <a className="button" href="./images/Professional Modern CV Resume (1).pdf" download="mon-cv.pdf">
              <FontAwesomeIcon icon={faDownload} /> Télécharger CV
            </a>

          </div>
        </div>
      </section>

      <section id='pro'>
        <div className='project' >
          <div className='tit'>
            <strong className='aboS'>PORTFOLIO</strong><br />
            <strong>project is a unique piece of development 🌩️</strong>
          </div>
          <div className='cont'>
            <div >
              <img src='./images/React App et 1 page supplémentaire - Personnel – Microsoft​ Edge 14-03-2024 23_41_33.png' className='vd' />
            </div>
            <div className='port'>
              <strong>E-commerce</strong><br />
              <p>I am presenting my simple e-commerce platform, developed with React, Node.js, Express.js and MySQL.</p><br />
              <a href="https://www.github.com/saad942/e-commerce" className='iconG' target='_blank' rel="noopener noreferrer">Code <FontAwesomeIcon icon={faGithub} size="lg" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id='con'>
        <div className="contact">
          <div>
            <strong className='h2'>CONTACT</strong><br /><br />
            <strong>Don't be shy! Hit me up! 👇</strong>
          </div>
          <div className='cnt'>
            <p><FontAwesomeIcon icon={faLocationDot} className='cc' />    Morocco, Casablanca</p>
            <p><FontAwesomeIcon icon={faEnvelopeOpen} className='cc' />    ammarisaad343@gmail.com</p>
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="footer-content">
          <p className='p'>© 2024 YourWebsite. All rights reserved.</p>
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

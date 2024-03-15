import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
function App() {

  const itemes = {
    images: [
      { src: './images/téléchargement.png' },
      { src: './images/téléchargement (1).png' },
      { src: './images/téléchargement (2).png' },
      { src: './images/téléchargement (3).png' },
      { src: './images/téléchargement (4).png' },
      { src: './images/téléchargement (5).png' },
    ]
  };
  return (
    <div className="App">
      <div className='nav'>
        <strong className="brand">SAAD.dev</strong>
        <div className='navL'>
          <span>
            Home
          </span>
          <span>
            About
          </span>
          <span>
            Projects
          </span>
          <span>
            Contact
          </span>
        </div>
      </div>

      <div className='home'>
        <div>
          <strong className='str'>Développeur web 👋</strong>
          <p >Hi, I'm Saad Ammari . A passionate Développeur web <br />bases in Casablanca 📍</p>
          <a href="https://www.linkedin.com/in/saad-ammari-1689b7286/" className='iconL' target='_blank'><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          <a href="https://www.github.com/saad942" className='iconG' target='_blank'><FontAwesomeIcon icon={faGithub} size="lg" /></a>
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
          ))}</div>
      </div>

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

      <div className='project'>
        <div className='tit'>
          <strong className='aboS'>PORTFOLIO</strong><br />
          <strong>project is a unique piece of development 🌩️</strong>
        </div>
        <div className='cont'>
          <div >
            <video src="./images/Untitled video - Made with Clipchamp (1).mp4" controls className='vd' />
          </div>
          <div className='port'>
            <strong>E-commerce</strong><br />
            <p>I am presenting my simple e-commerce platform, developed with React, Node.js, Express.js and MySQL.</p><br />
            <a href="https://www.github.com/saad942/e-commerce" className='iconG' target='_blank'>Code <FontAwesomeIcon icon={faGithub} size="lg" /></a>

          </div>
        </div>

      </div>
      

    </div>
  );
}

export default App;

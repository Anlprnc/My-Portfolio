import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} className={styles.hero} alt="Profile picture of Anıl Pirinççi" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>
          Anıl
          <br />
          Pirinççi
        </h1>
        <h2>Backend Developer</h2>
        <span>
          <a href="https://github.com/Anlprnc" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/anil-pirincci/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hello!
          <br />
          I'm Anıl, a backend developer with over 2 years of experience specializing in C#, .NET, and ASP.NET Core. I've
          worked on car rental and e-commerce projects. I'm also skilled in JavaScript, TypeScript, Python, Django,
          React, and Next.js. I value teamwork and flexibility. Looking forward to connecting!{' '}
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

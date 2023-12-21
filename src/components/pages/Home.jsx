import NavBar from "../utils/NavBar";
import styles from "../styles/Home.module.css";
//import perfil from '../../img/perfil.jpeg';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <NavBar />
      <section className={styles.profile}>
        <div className={styles.home_content_image}>
          <div className={styles.section_img}>
          </div>
        </div>
        <div className={styles.section_text}>
          <p className={styles.section_p1}>Hello, I&apos;m</p>
          <h1 className={styles.title}>Renan Thierry</h1>
          <p className={styles.section_p2}>Front-end Developer</p>
          <div className={styles.btn_container}>
            <button className={`${styles.btn} ${styles.btn_1}`}>Download CV</button>
            <button className={`${styles.btn} ${styles.btn_2}`}><a href="#Contact">Contact Info</a></button>
          </div>
          <div className={styles.container_socials}>
            <a href="https://www.linkedin.com/in/renan-thierry-99b957211/" target="blank"><BsLinkedin /></a>
            <a href="https://github.com/Renan-Thierry" target="blank"><FaGithub /></a>
            <a href="https://www.instagram.com/_renanthierry/" target="blank"><SiInstagram /></a>
          </div>
        </div>
      </section>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
export default Home;
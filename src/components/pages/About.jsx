import styles from '../styles/About.module.css';
import perfil from '../../img/about.jpg';
import { PiMedal } from "react-icons/pi";
import { HiUsers } from "react-icons/hi2";

function About() {
  return (
    <section id="About" className={styles.about}>
      <div><p className={styles.text_p1}>Get To Know More</p>
        <h1 className={styles.title}>About Me</h1></div>
      <div className={styles.section_container}>
        <div className={styles.picture_container}>
          <img src={perfil} alt="perfil picture" className={styles.about_picture} />
        </div>
        <div className={styles.about_details}>
          <div className={styles.about_container}>
            <div className={styles.details_container}>
              <PiMedal />
              <h3>Experience</h3>
              <p>1 Year <br /> Front-end Developer</p>
            </div>
            <div className={styles.details_container}>
              <HiUsers />
              <h3>Education</h3>
              <p>Internet Systems - IFPB <br /> Graduate</p>
            </div>
          </div>
          <div className={styles.text_container}>
            <p>Hello! My name is Renan Thierry, I&apos;m 22 years old and I have a degree in Internet Systems from IFPB. I have extensive knowledge in different languages and frameworks, with a main focus on Front-end development, but I also feel confident working in the Back-end. Over time, I accumulated advanced experience on several projects. My biggest career goal is to become an exemplary programmer capable of making a positive impact on my personal and professional trajectory. I am committed to constantly improving my skills and using programming as a tool to change reality and achieve success.</p>
          </div>
        </div>
      </div>
    </section >
  )
}
export default About;
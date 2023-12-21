import styles from '../styles/Contact.module.css'
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <>
      <section id="Contact" className={styles.Contact}>
        <div>
          <p className={styles.text_p1}>Get in Touch</p>
          <h1 className={styles.title}>Contact Me</h1>
        </div>
        <div className={styles.contact_info_upper}>
          <div className={styles.contact_info_container}>
            <MdEmail />
            <p><a href='mailto:re.thyerry698@gmail.com'>re.thyerry698@gmail.com</a></p>
          </div>
          <div className={styles.contact_info_container}>
            <BsLinkedin />
            <p><a href='https://www.linkedin.com/in/renan-thierry-99b957211/' target='blank'>LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className={styles.nav_links_container}>
            <ul className={styles.nav_links}>
              <li><a href="#About">About</a></li>
              <li><a href="#Experience">Experience</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Renan Thierry. All Rights Reserved.</p>
      </footer>
    </>
  )
}
export default Contact;
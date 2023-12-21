import styles from '../styles/Experience.module.css'
import html from '../../img/tecnology/html.png'
import css from '../../img/tecnology/css3-logo.png'
import javascript from '../../img/tecnology/javascript.png'
import nextjs from '../../img/tecnology/nextjs.png'
import react from '../../img/tecnology/react-logo.png'
import figma from '../../img/tecnology/figma.png'
import typescript from '../../img/tecnology/typescript-logo.png'
import nodejs from '../../img/tecnology/nodejs.png'
import reactNative from '../../img/tecnology/react-native-logo.png'
import java from '../../img/tecnology/java-logo.png'
import python from '../../img/tecnology/python.png'
import postgresql from '../../img/tecnology/postgres.png'
import docker from '../../img/tecnology/docker.png'
import git from '../../img/tecnology/git.png'

function Experience() {
  return (
    <section id="Experience" className={styles.Experience}>
      <div>
        <p className={styles.text_p1}>Explore My</p>
        <h1 className={styles.title}>Experience</h1>
      </div>
      <div className={styles.experience_details}>
        <div className={styles.about_container}>
          <div className={styles.details_container}>
            <h2 className={styles.experience_subTitle}>Tech Stack</h2>
            <div className={styles.article_container}>
              <article>
                <img src={html} alt='' className={styles.icon} />
                <div>
                  <h3>HTML</h3>
                </div>
              </article>
              <article>
                <img src={css} alt='' className={styles.icon} />
                <div>
                  <h3>CSS</h3>
                </div>
              </article>
              <article>
                <img src={javascript} alt='' className={styles.icon} />
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>
              <article>
                <img src={typescript} alt='' className={styles.icon} />
                <div>
                  <h3>TypeScript</h3>
                </div>
              </article>
              <article>
                <img src={react} alt='' className={styles.icon} />
                <div>
                  <h3>ReactJs</h3>
                </div>
              </article>
              <article>
                <img src={nextjs} alt='' className={styles.icon} />
                <div>
                  <h3>NextJs</h3>
                </div>
              </article>
              <article>
                <img src={reactNative} alt='' className={styles.icon} />
                <div>
                  <h3>ReactNative</h3>
                </div>
              </article>
              <article>
                <img src={figma} alt='' className={styles.icon} />
                <div>
                  <h3>Figma</h3>
                </div>
              </article>
            </div>
          </div>
          <div className={styles.details_container}>
            <h2 className={styles.experience_subTitle}>Tech Stack</h2>
            <div className={styles.article_container}>
              <article>
                <img src={nodejs} alt='' className={styles.icon} />
                <div>
                  <h3>NodeJs</h3>
                </div>
              </article>
              <article>
                <img src={python} alt='' className={styles.icon} />
                <div>
                  <h3>Python</h3>
                </div>
              </article>
              <article>
                <img src={java} alt='' className={styles.icon} />
                <div>
                  <h3>Java</h3>
                </div>
              </article>
              <article>
                <img src={postgresql} alt='' className={styles.icon} />
                <div>
                  <h3>PostgreSql</h3>
                </div>
              </article>
              <article>
                <img src={docker} alt='' className={styles.icon} />
                <div>
                  <h3>Docker</h3>
                </div>
              </article>
              <article>
                <img src={git} alt='' className={styles.icon} />
                <div>
                  <h3>Git</h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience;
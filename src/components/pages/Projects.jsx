import styles from '../styles/Projects.module.css'
import project1 from '../../img/project/project-1.png'
import project2 from '../../img/project/project-2.png'
import project3 from '../../img/project/project-3.png'

function Projects() {
  return (
    <section id="Projects" className={styles.Projects}>
      <div>
        <p className={styles.section_p1}>Browse My Recent</p>
        <h1 className={styles.title}>Projects</h1></div>
      <div className={styles.experience_details}>
        <div className={styles.about_container}>
          <div className={`${styles.details_container} ${styles.color_container}`}>
            <div className={styles.article_container}>
              <img src={project1} alt='Projeto 1' className={styles.project_img} />
            </div>
            <h2 className={`${styles.experience_subTitle} ${styles.project_title}`}>ConexãoIF</h2>
            <div className={styles.btn_container}>
              <a href='https://github.com/Renan-Thierry/ConexaoIF-Front' target='blank'><button className={`${styles.btn} ${styles.btn_1} ${styles.project_btn}`}>GitHub</button></a>
              <button className={`${styles.btn} ${styles.btn_1} ${styles.project_btn}`}>Live Demo</button>
            </div>
          </div>
          <div className={`${styles.details_container} ${styles.color_container}`}>
            <div className={styles.article_container}>
              <img src={project2} alt='Projeto 2' className={styles.project_img} />
            </div>
            <h2 className={`${styles.experience_subTitle} ${styles.project_title}`}>Project Costs</h2>
            <div className={styles.btn_container}>
              <a href='https://github.com/Renan-Thierry/Projeto_Costs' target='blank'><button className={`${styles.btn} ${styles.btn_1} ${styles.project_btn}`}>GitHub</button></a>
              <button className={`${styles.btn} ${styles.btn_1} ${styles.project_btn}`}>Live Demo</button>
            </div>
          </div>
          <div className={`${styles.details_container} ${styles.color_container}`}>
            <div className={styles.article_container}>
              <img src={project3} alt='Projeto 3' className={styles.project_img} />
            </div>
            <h2 className={`${styles.experience_subTitle} ${styles.project_title}`}>MoviesLab</h2>
            <div className={styles.btn_container}>
              <a href='https://github.com/Renan-Thierry/MoviesLab' target='blank'><button className={`${styles.btn} ${styles.btn_1} ${styles.project_btn}`}>GitHub</button></a>
              <button className={`${styles.btn} ${styles.btn_1} ${styles.project_btn}`}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects;
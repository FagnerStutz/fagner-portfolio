import styles from './Skills.module.css'
import javascript from '../../assets/skills/javascript.svg'
import html from '../../assets/skills/html.svg'
import css from '../../assets/skills/css.svg'
import react from '../../assets/skills/react.svg'

function Skills() {
    return(
        <div id='Skills' className={styles.skill}>
            <h1> Habilidades </h1>
            
            <div className={styles.logo}>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
            </div>
        </div>
    )
}

export default Skills
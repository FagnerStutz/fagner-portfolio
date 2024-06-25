import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return(
        <section className={styles.footer}>
            <p>
                Meu contato:
                (21)965980711
            </p>
            <p>
                Email:
                fagnerstutz@gmail.com
            </p>
            <ul>
                <li><a href='https://www.linkedin.com/in/fagner-stutz-7a4255263/' target='_blank'><FaLinkedin/></a></li>
                <li><a href='https://github.com/FagnerStutz' target='_blank'><FaGithub/></a></li>
            </ul>
        </section>
    )
}

export default Footer
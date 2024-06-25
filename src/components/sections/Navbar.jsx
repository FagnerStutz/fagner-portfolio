import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Início</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Tecnologias</Nav.Link></li>
                <li><Nav.Link href='#About'>Sobre mim</Nav.Link></li>
            </ul>

            <ul>
                <li><a href='https://www.instagram.com/fagnerstutz/' target='_blank'><FaInstagram/></a></li>
                <li><a href='https://www.linkedin.com/in/fagner-stutz-7a4255263/' target='_blank'><FaLinkedin/></a></li>
                <li><a href='https://github.com/FagnerStutz' target='_blank'><FaGithub/></a></li>
            </ul>
        </div>
    )
}

export default Navbar
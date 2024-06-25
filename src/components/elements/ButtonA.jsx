import styles from './ButtonA.module.css'
import curriculo from '../../assets/curriculum.pdf'

function ButtonA () {
    return(
        <div>
            <button className={styles.btn}>
                <a href={curriculo} download='download'> Download Currículo </a>
            </button>
        </div>
    )
}

export default ButtonA
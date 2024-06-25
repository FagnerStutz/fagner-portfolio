import styles from './ButtonB.module.css'

function ButtonB ({repo}){
    return(
        <div>
            <a target='_blank' href={repo}>
                <button className={styles.btn}> Clique aqui </button>
            </a>
        </div>
    )
}

export default ButtonB
import styles from './Card.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'

function Card({img, title, repo, description, site}) {

    const [info, setInfo] = useState(false)

    function InfoOn (){
        setInfo(true)
    }
    function InfoOff (){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className={styles.card}>
            <a onMouseEnter={InfoOn} target='_blank' href={site}>
                <img src={img} alt='ERRO'/>
            </a>
            {info === true &&(
                <div>
                    <h3> {title} </h3>
                    <p> {description} </p>
                    <ButtonB text='Clique aqui' repo={repo}/>
                </div>
            )}
        </div>
    )
}

export default Card
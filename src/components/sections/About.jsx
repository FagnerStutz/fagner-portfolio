import styles from './About.module.css'
import img from '../../assets/elipse.svg'

function About() {
    return(
        <section id="About" className={styles.about}>
            <h1>Sobre mim</h1>
            <div className={styles.years}>
                <h2>2019</h2>
                <h2>2022</h2>
                <h2>2023</h2>
                <h2>2024</h2>
            </div>

            <div className={styles.timeline}></div>

            <div className={styles.elipses}>
                <img src={img}/>
                <img src={img}/>
                <img src={img}/>
                <img src={img}/>
            </div>

            <div className={styles.description}>
                <p>Fui aprovado no ENEM em 2018 com uma boa nota e pude ter a oportunidade de escolher um curso na área que me indetifico. Então, escolhi Sistemas de Informação.
                </p>

                <p>Iniciei o curso de Desenvolvedor Full-Stack na Escola DNC. Já praticando desenvolvimento de Landing Page com aplicações simples, postando no GitHub e fazendo deploy.
                </p>

                <p>Progredindo em meus estudos, implementando e estilizando projetos mais avançados. Introduzindo aos meus projetos ferramentas como Bootstrap, React e APIs.  
                </p>

                <p>Aprendendo sobre Protocolos HTTP para consumo mais intensos de APIs e mergulhando em React bem mais avançado. 
                </p>
            </div>
        </section>
    )
}

export default About
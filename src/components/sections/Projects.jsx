import Card from '../elements/Card'
import styles from './Projects.module.css'
import poklist from '../../assets/projects/poklist.png'
import lpdnc from '../../assets/projects/lpdnc.png'
import previsaotempo from '../../assets/projects/previsaotempo.jpg'
import portf from '../../assets/projects/meuportfolio.png'

function Projects(){
    return(
        <>
            <section id="Projects">

                <h1>Projetos</h1>

                <div className={styles.projects}>
                    <Card
                    img={lpdnc}
                    title="Landing Page - DNC"
                    description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia. Utilizando HTML, CSS e Java Script"
                    repo="https://github.com/FagnerStutz/projeto-landingpage"
                    site="https://landingpage-escoladnc.netlify.app"
                    />
                    
                    <Card
                    img={poklist}
                    title="Listagem Pokemon"
                    description="Desenvolvimento de uma listagem de Pokemon. Praticando HMTL, CSS, JS"
                    repo="https://github.com/FagnerStutz/Listagem-Pokemon"
                    site="https://poklistagem.netlify.app/"
                    />
                    
                    <Card
                    img={previsaotempo}
                    title="Previsão do Tempo"
                    description="Projeto de Consulta de CEP e Temperatura. Praticando o consumo de APIs"
                    repo="https://github.com/FagnerStutz/Consumo-de-APIs-Temperatura-CEP"
                    site="https://weatherdnc.netlify.app/"
                    />
                    
                    <Card
                    img={portf}
                    title="Portfólio"
                    description="Criação do meu primeiro portfólio. Utilizando React.js"
                    repo="https://github.com/FagnerStutz/Meu-Portfolio"
                    site="https://meu-portfolio-lime-alpha.vercel.app/"
                    />
                    
                    
                </div>
            </section>
        </>
    )
}

export default Projects
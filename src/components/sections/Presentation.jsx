import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'


function Presentation() {
    const [text, setText] = useState('');
    const toRotate = [' Fagner Stutz!  ', ' Desenvolvedor Front End  '];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] =useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
        
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <section className={styles.presentation} id='Presentation'>

            <h1>Olá, eu sou  {text}</h1>
            <p>
                Sou um Desenvolvedor Front-End apaixonado por inovação, sempre em busca de <br/>desafios para transformar códigos em experiências cativantes. Minha visão vai além <br/>do design, focando na usabilidade e na qualidade técnica. Trabalho em equipe para <br/>criar soluções excepcionais. Estou pronto para novos projetos, contribuindo <br/>com minha paixão e habilidades para moldar o futuro digital.
            </p>
            <ButtonA/>
        </section>
    )
}

export default Presentation
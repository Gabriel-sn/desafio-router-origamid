import styles from './Contato.module.css'
import img from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
    return (
        <section className={`${styles.contato} animeLeft`}>
            <Head title='Ranek | Contato' description="Fale conosco"/>
            <img src={img} alt="contato"></img>
            <div>
                <h1 >Entre em contato.</h1>
                <ul className={styles.dados}>
                    <li>contato@email.com</li>
                    <li>(99) 99999-9999</li>
                    <li>localização</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato
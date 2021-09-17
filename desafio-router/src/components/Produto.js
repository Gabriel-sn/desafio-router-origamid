import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Head from './Head';
import styles from './Produto.module.css';

const Produto = () => {
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        async function fetchData (url) {
            try {
                setLoading(true)
                const response = await fetch(url);
                const json = await response.json();
                setProduto(json);
            } catch (erro){
                setError(`Um erro ocorreu: ${erro}`);
            } finally {
                setLoading(false);
            }
        }

        fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id]);

    if(loading) return <div className="loading"></div>

    if(error) return <p>{error}</p>

    if(produto === null) return null;

    return (
        <section className={`${styles.produto} animeLeft`}>
            <Head 
                title={`Ranek | ${produto.nome}`} 
                description={produto.descricao}
            />

            <div>
                {produto.fotos.map(foto => 
                    <img key={foto.src} src={foto.src} alt={foto.titulo}/>
                )}
            </div>

            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>R$ {produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </section>
    )
}

export default Produto;
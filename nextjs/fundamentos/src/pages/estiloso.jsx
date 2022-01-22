import styles from '../styles/Estiloso.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS módulos</h1>
            </div>
        </Layout>
    )
}
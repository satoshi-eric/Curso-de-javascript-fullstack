import Cabecalho from "../components/cabecalho"
import Layout from "../components/layout"

export default function Exemplo() {
    return (
        <Layout titulo="Usando componentes">
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprenda Next na prática" />
        </Layout>
    )
}
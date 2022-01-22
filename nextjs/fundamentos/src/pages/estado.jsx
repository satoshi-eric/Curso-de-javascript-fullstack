import { useState } from "react"
import Layout from "../components/layout"

export default function Estado() {
    const [numero, setNumero] = useState(0) // React Hooks

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}
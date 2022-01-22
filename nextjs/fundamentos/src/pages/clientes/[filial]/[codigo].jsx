import Layout from "../../../components/layout"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ClientePorCodigo() {
    const router = useRouter()
    // useEffect(() => {
    //     console.log(router.query)
    // }, [])
    return (
        <Layout titulo="Navegação dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}
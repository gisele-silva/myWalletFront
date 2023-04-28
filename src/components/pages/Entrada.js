import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useContext, useState } from "react"
import UserContext from "../../context/UserContext"

export default function Entrada (){
    const [value, setValue] = useState("")
    const navigator = useNavigate()
    const [descricao, setDescricao] = useState("")
    const { usuario } = useContext(UserContext)

    async function salvarEntrada (e){
        e.preventDefault()
        const body = {descricao, value: parseFloat(value), type:"entrada"}
        const headers = {headers: {Authorization: `Bearer ${usuario.data.token}`}}

        try {
            await axios.post("http://localhost:5000/transacao", body, headers)
            alert('Entrada realizada com sucesso!');
            navigator("/home")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <h1>Nova entrada</h1>
        <form>
            {}
            <input type="number" placeholder="valor" onChange={e=>setValue(e.target.value)} value={value}></input><br />
            {}
            <input type="text" placeholder="descrição" onChange={e=>setDescricao(e.target.value)} value={descricao}></input><br />
            {}
            <button type="submit" onClick={salvarEntrada}>Salvar entrada</button>
        </form>
        </>
    )
}
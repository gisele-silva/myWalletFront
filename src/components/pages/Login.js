import axios from "axios"
import { useContext, useState } from "react"
import UserContext from "../../context/UserContext"
import {Link, useNavigate} from 'react-router-dom'

export default function Login (){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { setUsuario } = useContext(UserContext)
    const navigator = useNavigate()

    async function enviar (e){
        e.preventDefault()
        const body = {email, senha}

        try {
            const data = await axios.post ("http://localhost:5000/sign-in", body);
            setUsuario(data);
            navigator("/home")
        } catch (error) {
            console.log(error)
        }
    }

    return (
 
        <>
            <form>
                <input type="text" placeholder="email" onChange={e =>setEmail(e.target.value)}/> <br />
                <input type="text" placeholder="senha" onChange={e =>setSenha(e.target.value)}/> <br />
                <button onClick={enviar}>Entrar</button>
                <p><Link to="/sign-up" style={{color: 'white', fontSize: 14}}>Primeira vez? Cadastrate-se!</Link></p>
            </form>
        </>
    )
}


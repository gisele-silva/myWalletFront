import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function Cadastro (){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [repeteSenha, setRepeteSenha] = useState("")
    const navigator = useNavigate();

    async function cadastrar (e){
        e.preventDefault()
        const body = {email, senha, nome, repeteSenha}

        try {
            await axios.post("http://localhost:5000/sign-up", body)
            navigator("/")
        } catch (error) {
            console.error("Erro ao cadastrar")
        }
    }

    return(
        <>
            <form>
                <input type="text" placeholder='nome' onChange={e=> setNome(e.target.value)}></input><br />
                <input type="text" placeholder='email' onChange={e=> setEmail(e.target.value)}></input><br />
                <input type="password" placeholder='senha' onChange={e=> setSenha(e.target.value)}></input><br />
                <input type="password" placeholder='confirmar senha' onChange={e=> setRepeteSenha(e.target.value)}></input><br />
                <button type="submit" onClick={cadastrar}>Cadastrar</button><br />
                <p><Link to="/" style={{color: 'white', fontSize: 14}}>Já tem uma conta? Entre agora!</Link></p>
            </form>
        </>
    )
}
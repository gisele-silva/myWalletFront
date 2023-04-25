import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import Cadastro from "./pages/Cadastro"
import Entrada from "./pages/Entrada"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Saida from "./pages/Saida"

import UserContext from '../context/UserContext'

export default function App(){
    const [usuario, setUsuario] = useState(null)

    return (
        <>
        <UserContext.Provider value={{ usuario, setUsuario }}>
          <header className="App-header">
            MyWallet
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastrar-entrada" element={<Entrada />} />
                <Route path="/cadastrar-saida" element={<Saida />} />
              </Routes>
            </BrowserRouter>
          </header>
        </UserContext.Provider>
      </>
    )
}
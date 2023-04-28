import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {

  const { usuario } = useContext(UserContext);
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    async function pegarTransacao() {
      try {
        const { data } = await axios.get('http://localhost:5000/transacao', {
          headers: {
            Authorization: `Bearer ${usuario.data.token}`
          }
        });

        setTransacoes(data);
        
      } catch (error) {
        alert('Tente novamente!');
        console.error(error.response);
      }
    }

    pegarTransacao();
  }, []);
console.log("nome", transacoes.usuario.nome)
console.log("transacoes", transacoes.transacoes)

  function renderizaTransacoes() {
    return transacoes.transacoes.map((t, index) => (
      <p key={index} style={t.type === 'entrada' ? { color: 'green' } : { color: 'red' }}>
        {t.createAt} | {t.descricao} | {t.value}
      </p>
      
    ));
  }

  function pegaSaldo() {
    if (transacoes.length > 0) {
      return transacoes.reduce((antigo, atual) => {
        if (atual.type === 'entrada') {
          return antigo + atual.value;
        }

        return antigo - atual.value;
      }, 0);
    } else {
      return 0;
    }
  }


  return (
    <div className="">
      <p>Olá</p>
      <Link to="/"> Sair </Link>
      <div style={{ backgroundColor: 'white', width: 200, height: 250 }}>
        {transacoes.transacoes.length > 0 ? (
          <p style={{ color: 'gray', fontSize: 12 }}>
            Minhas transacoes
            <p>{renderizaTransacoes()}</p>
          </p>
        ) : (
          <span style={{ color: 'gray', fontSize: 12 }}>
            não há registros de entrada e saída
          </span>
        )}
        <h4 style={{ color: 'black', fontSize: 12 }}>Saldo: {pegaSaldo()}</h4>
      </div>
      <p>
        <Link to="/cadastrar-entrada">Nova Entrada</Link> |{' '}
        <Link to="/cadastrar-saida">Nova Saída</Link>
      </p>
    </div>
  );
}
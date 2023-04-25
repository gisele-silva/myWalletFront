import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function Saida() {
  const [value, setValue] = useState('');
  const [descricao, setDescricao] = useState('');

  const { user } = useContext(UserContext);
  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      descricao,
      type: 'saida',
      value: parseFloat(value)
    };
    const headers = {
      headers: { Authorization: `Bearer ${user.token}` }
    };
    try {
      await axios.post('http://localhost:5000/transacao', body, headers);
      alert('Registro realizado com sucesso!');
      navigator('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Nova saída</h1>
      <form>
        { }
        <input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/><br/>

        { }
        <input type="text" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}/><br/>
        <button type="submit" onClick={handleSubmit}>
          Salvar saída
        </button>
      </form>
    </div>
  );
}
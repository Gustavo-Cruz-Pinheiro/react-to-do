import { useState } from 'react'
import './App.css'
import Item from './components/Item';
import ItemForm from './components/ItemForm';
import Procurar from './components/Procurar';
import Filtrar from './components/Filtrar';

function App() {
  const [itens, setItens] = useState([]);

  const [procura, setProcura] = useState('');

  const [filtro, setFiltro] = useState('Todas');

  const [ordem, setOrdem] = useState('Crescente');

  const adicionarItem = (titulo, descricao) => {
    const novoItem = [...itens, { id: Math.floor(Math.random() * 10000), titulo, descricao, completado: false }]

    setItens(novoItem);
  }

  const removerItem = (id) => {
    const novoItem = [...itens];
    const filtrarItens = novoItem.filter((item) => item.id !== id ? item : null);

    setItens(filtrarItens);
  }

  const completarItem = (id) => {
    const novoItem = [...itens];

    novoItem.map((item) => item.id === id ? (item.completado = !item.completado) : item);

    setItens(novoItem);
  }

  return (
    <div className='main'>
      <h1>
        Top To-Do
      </h1>
      <Procurar procura={procura} setProcura={setProcura} />
      <Filtrar filtro={filtro} setFiltro={setFiltro} setOrdem={setOrdem} />
      <div className='lista'>
        {itens
          .filter((item) => filtro === 'Todas' ? true : filtro === 'Completadas' ? item.completado : !item.completado)
          .filter((item) => item.titulo.toLowerCase().includes(procura.toLowerCase()))
          .sort((a, b) => ordem === 'Crescente' ? a.titulo.localeCompare(b.titulo) : b.titulo.localeCompare(a.titulo))
          .map((item) => (
            <Item key={item.id} item={item} removerItem={removerItem} completarItem={completarItem} />
          ))}
      </div>
      <ItemForm adicionarItem={adicionarItem} />
    </div>
  )
}

export default App

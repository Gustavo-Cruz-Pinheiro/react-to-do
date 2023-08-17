import { useState } from 'react'

const ItemForm = ({ adicionarItem }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if(!titulo) {
            alert('Preencha o campo titulo');
            return;
        } else if(!descricao) {
            alert('Preencha o campo descricao');
            return;
        } else {
            alert('Item adicionado com sucesso!');
            setDescricao('');
            setTitulo('');
            adicionarItem(titulo, descricao)
        }
    }

    return (
        <div className='item-form'>
            <h2>
                Inserir Item
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={titulo} placeholder="Digite o título" onChange={(e) => setTitulo(e.target.value)}/>
                <input type="text" value={descricao} placeholder="Digite a descrição" onChange={(e) => setDescricao(e.target.value)}/>
                <button type="submit">Inserir</button>
            </form>

        </div>
    )
}

export default ItemForm
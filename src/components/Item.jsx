import React from 'react'

const Item = ({ item, removerItem, completarItem }) => {
    return (
        <div className='item' style={{textDecoration: item.completado ? 'line-through' : '', backgroundColor: item.completado ? 'gray' : 'white'}}>
            <div className='conteudo'>
                <p className='titulo'><h3>{item.titulo}</h3></p>
                <p className='descricao'>{item.descricao}</p>
            </div> 
            <div>
                <button className='inseri' onClick={() => completarItem(item.id)}>Check</button>
                <button className='deleta' onClick={() => removerItem(item.id)}>Apagar</button>
            </div>
        </div>
    )
}

export default Item
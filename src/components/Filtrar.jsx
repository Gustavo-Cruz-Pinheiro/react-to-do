import React from 'react'

const Filtrar = ({ filtro, setFiltro, setOrdem }) => {
  return (
    <div className='filtrar'>
        <h1>Filtrar Atividades</h1>
        <div className='opcoes-filtro'>
            <div>
                <p>Ordem:</p>
                <button onClick={() => setOrdem("Crescente")}>↑</button>
                <button onClick={() => setOrdem("Decrescente")}>↓</button>
            </div>
            <div> 
                <p>Status: </p> 
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                    <option value="Todas">Todas</option>
                    <option value="Completadas">Completadas</option>
                    <option value="Incompletas">Incompletas</option>
                </select>
            </div>
            
        </div>
    </div>
  )
}

export default Filtrar
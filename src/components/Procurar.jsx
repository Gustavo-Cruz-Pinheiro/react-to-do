import React from 'react'

const Procurar = ({ procura, setProcura }) => {
  return (
    <div className='search'>
        <h2>Procurar</h2>
        <input type="text" value={procura} onChange={(e) => setProcura(e.target.value)} placeholder='Digite para procurar um item'/>
    </div>
  )
}

export default Procurar
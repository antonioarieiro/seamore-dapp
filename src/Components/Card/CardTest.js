import React from 'react'



function CardTest({name, type}) {
  return (
    <div style={{ backgroundColor: 'blue', width: '95%', margin: 'auto' }}>
        <button type={type}>{name}</button>
    </div>
  )
}

export default CardTest;
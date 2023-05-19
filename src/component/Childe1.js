import React from 'react'
import SubChild1 from './SubChild1'

const Childe1 = ({count}) => {
  return (
    <div>
      <h1>Chiled1 = {count}</h1>
      <SubChild1 subcount={count}/>
    </div>
  )
}

export default Childe1

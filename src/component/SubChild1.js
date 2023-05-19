import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment } from '../features/counterSlice'
const SubChild1 = () => {
  const data = useSelector((c)=>{
    return (c.show.value)
  })
  const dispatch = useDispatch();

  return (
    <div>
      <h1>sub Childe1 = {data}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>

    </div>
  )
}

export default SubChild1

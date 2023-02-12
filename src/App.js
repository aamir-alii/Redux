import React from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from './actions/index'
const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.reducer)
  return (
    <>
      <div className='flex'>
      <button onClick={_ => dispatch(increment())}>+</button>
      <div>{counter}</div>
      <button onClick={_ => dispatch(decrement())}>-</button>
      </div>
    </>
  )
}

export default App
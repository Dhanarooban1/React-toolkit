import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Store  from './Redux/Store'
import CounterComponent from './Component/CounterComponent'


function App() {


  return (
    <Provider store={Store}>
    <CounterComponent/>
    </Provider>
  )
}

export default App

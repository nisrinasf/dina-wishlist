import { useState } from 'react'
import './App.css'
import Form from './Form'
import Show from './Show'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Form></Form>
    </>
  )
}

export default App

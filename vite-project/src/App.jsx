import { useState } from 'react'
import './App.css'
import { Usercard } from './Usercard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' overflow-x-hidden'>
        <Usercard/>
     </div>
    </>
  )
}

export default App



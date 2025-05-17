import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testmoniols  from './component/Testmoniols'

function App() {
  const [count, setCount] = useState(0)
  const name = "aniket"
  return (
    <>
      <h1 className='justify-start mb-1'>React</h1>
      <Testmoniols username={name}/>
      <button className="bg-sky-500 hover:bg-sky-700 ...">
        Save changes
      </button>
      
    </>
  )
}

export default App

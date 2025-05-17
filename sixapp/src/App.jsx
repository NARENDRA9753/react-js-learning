import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/conf.js';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>A blog app with appwrite</h1>
        <h1>AppWrite Url : {conf.appwriteUrl}</h1>
      </div>
    </>
  )
}

export default App

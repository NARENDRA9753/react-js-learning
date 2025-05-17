import  React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const reactElement = React.createElement(
  'a',
  {href:"www.com",target:"__blank"},
  'click here'
)
createRoot(document.getElementById('root')).render(
          
           reactElement 
)

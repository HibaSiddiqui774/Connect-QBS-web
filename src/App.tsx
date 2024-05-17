import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee_list from './components/admin/employee/Employee_list'
import Employee from './components/admin/employee/Employee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Employee_list />
    </>
  )
}

export default App

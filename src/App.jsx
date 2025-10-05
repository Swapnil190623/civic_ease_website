import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import Header from './Components/Header'
import ReportIssue from './Pages/ReportIssue'
import DashboardAdmin from './Pages/DashboardAdmin'
import DashboardCitizen from './Pages/DashboardCitizen'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage/>
     <Header/>
     <br />
     <br />
     <ReportIssue/>

     <br/>
     <br/>
     <br/>
     <DashboardAdmin/>

     <br />
     <br />
     <br />
     <DashboardCitizen/>
    
     
    </>
  )
}

export default App

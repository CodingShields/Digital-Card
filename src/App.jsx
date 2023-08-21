import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


import './App.css'

function App() {
const element = <FontAwesomeIcon icon={faEnvelope} />

  return (
    <>
         <h1 className=" bg-slate-400 text-red-500 text-3xl font-bold underline">
      Hello world!
      </h1>
      {element}
    </>
  )
}

export default App

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Home from "./Home"
import styles from './App.module.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Home/> {}
    </div>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css';
import Login from "./components/Login.jsx";
import {BrowserRouter} from "react-router-dom";
import "./components/assets/css/common.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
      <Login/>
      </BrowserRouter>
      
    </>
  )
}

export default App

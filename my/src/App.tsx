import React from "react"
import logo from "./logo.svg"
import "./App.css"
import MyButton from "./components/MyButton"
import MyForm from "./components/MyForm"
import MyContainer from "./layout/MyContainer"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <MyContainer>
      <MyForm />
      <MyButton />
    </MyContainer>
  )
}

export default App

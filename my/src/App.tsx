import React from "react"
import "./App.css"
import MyContainer from "./layout/MyContainer"
import MyHeader from "./components/MyHeader"
import { Stack, Typography } from "@mui/material"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <MyContainer>
      <MyHeader />
      <Outlet />
      <Stack
        direction="column"
        gap={2}
      >
        <Typography>Lehe avalehe</Typography>
        <Typography>ja leheava vahel</Typography>
        <Typography>on ka leht vahel</Typography>
      </Stack>
    </MyContainer>
  )
}

export default App

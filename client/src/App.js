import "./App.css"

import Layout from "./layout/Layout"

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App

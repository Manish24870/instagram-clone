import "./App.css"

import Layout from "./layout/Layout"

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/chat" element={<div>chat</div>} />
      </Route>

      <Route path="/create-new-post" element={<div>New Post</div>} />
    </Routes>
  )
}

export default App

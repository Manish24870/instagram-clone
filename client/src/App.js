import "./App.css"

import Layout from "./layout/Layout"

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import CreatePost from "./components/Posts/CreatePost/CreatePost"
import Register from "./components/Authentication/Register/Register"

function App() {
  return (
    <Routes>
      {/* Main application routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/chat" element={<div>chat</div>} />
      </Route>

      {/* Upload new image route */}
      <Route path="/create-new-post" element={<CreatePost />} />

      {/* Authentication routes */}
      <Route path="/login" element={<Register />} />
      <Route path="/register" element={<div>Sign up</div>} />
    </Routes>
  )
}

export default App

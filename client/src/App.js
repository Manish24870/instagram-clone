import "./App.css"

import Layout from "./layout/Layout"

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"

function App() {
  return (
    <Routes>
      <Route
        path="/create-post"
        element={<div>This is create post</div>}
      ></Route>
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        }
      ></Route>
    </Routes>
  )
}

export default App

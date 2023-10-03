import { BrowserRouter, Route, Routes } from "react-router-dom"
import Page from "./pages/home/HomePage"
import SingleProperty from "./pages/singleProperty/SingleProperty"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/property/:id" element={<SingleProperty />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

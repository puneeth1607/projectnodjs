import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import UserLogin from "./components/UserLogin"
import Page1 from "./components/Page1"
const App = () => {
  return (
    <BrowserRouter>
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/create' element={<UserLogin/>} ></Route>
      <Route path='/page' element={<Page1/>} ></Route>

      </Routes>   
    </BrowserRouter>

     
  )
}

export default App
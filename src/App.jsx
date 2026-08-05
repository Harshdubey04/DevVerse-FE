import { Route,Routes } from "react-router"
import LoginPage from "./pages/auth/LoginPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
  )
}

export default App

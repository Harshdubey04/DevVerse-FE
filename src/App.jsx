import { Route,Routes } from "react-router"
import LoginPage from "./pages/auth/LoginPage"
import SignupPage from "./pages/auth/SignupPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/feed" element={<div>Temporary feed data</div>}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  )
}

export default App

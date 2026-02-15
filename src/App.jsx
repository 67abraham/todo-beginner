import { Route, Routes } from "react-router-dom"
import { Index } from "./pages"
import { Registrar } from "./pages/Registrar"
import { Todo } from "./pages/Todo"


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/register" element={<Registrar/>}/>
      <Route path="/todo_plan" element={<Todo/>}/>
    </Routes>
    </>
  )
}

export default App

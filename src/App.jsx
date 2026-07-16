import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPages from"./pages/Dashboard";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardPages />}/>
      <Route path="/new-task" element={<NewTask/>}/>
       <Route path="/edit-task" element={<EditTask />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
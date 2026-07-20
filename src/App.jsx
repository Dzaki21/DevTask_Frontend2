import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPages from "./pages/Dashboard";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPages />} />
        <Route path="/new-task" element={<NewTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
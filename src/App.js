import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import EditUser from "./page/EditUser";
import AddUser from "./page/AddUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;

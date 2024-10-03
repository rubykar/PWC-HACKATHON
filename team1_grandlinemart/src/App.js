import { Router, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import { Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Login Here</h2>
        <Form />
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

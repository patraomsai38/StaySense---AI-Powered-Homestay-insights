import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import ComponentsDemo from "./Pages/ComponentsDemo";
import Booking from "./Pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/booking" element={<Booking />} />

        <Route
          path="/components-demo"
          element={<ComponentsDemo />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
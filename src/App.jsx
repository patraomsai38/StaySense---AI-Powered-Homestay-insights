import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSuccess from "./Pages/LoginSuccess";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Booking from "./Pages/Booking";
import MyBookings from "./Pages/MyBookings";
import ComponentsDemo from "./Pages/ComponentsDemo";
import AIAssistant from "./Pages/AIAssistant";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />
        <Route
    path="/ai"
    element={<AIAssistant />}
/>

        <Route
          path="/components-demo"
          element={<ComponentsDemo />}
        />

        <Route
  path="/login-success"
  element={<LoginSuccess />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
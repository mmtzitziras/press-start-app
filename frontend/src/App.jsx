import './App.css'

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search" element={<Search />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

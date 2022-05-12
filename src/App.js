// src/App.js
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./component/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* more pages to be added here later */}
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

// src/App.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/Login";
import Toolbar from "./components/Toolbar";
import { bootstrapLoginState } from "./store/auth/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, []);

  return (
    <div>
      <Toolbar />
      <Routes>
        {/* more pages to be added here later */}
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

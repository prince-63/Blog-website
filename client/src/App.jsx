import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePage from "./pages/CreatePage";
import { UserContextProvider } from "./components/UserContext";
import Layout from "./components/Layout";
import PostPage from "./pages/PostPage";
import "./app.css";

const App = () => {
    return (
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/post/:id" element={<PostPage />} />
                </Route>
            </Routes>
        </UserContextProvider>
    );
};
export default App;

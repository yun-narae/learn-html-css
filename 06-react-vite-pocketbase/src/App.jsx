import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import RegistrationSuccess from "./Auth/RegistrationSuccess";
import Header from "./components/Header";
import Layout from "./components/Layout"; // Layout 컴포넌트 추가
import Home from "./components/Home"; // Home 컴포넌트 추가

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
    console.log(isLoggedIn);

    // 로그인 상태를 브라우저 저장소에서 초기화
    useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLoginStatus === "true");
    }, []);

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} />
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                <Route
                path="/login"
                element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route path="/register" element={<Register />} />
                <Route path="/registration-success" element={<RegistrationSuccess />} />
            </Route>
            </Routes>
        </Router>
    );
}

export default App;

import React from "react"
import "./App.css"
import Header from "./components/header/Header"
import Main from "./components/pages/Main/Main"
import { Route, Routes } from "react-router-dom"
import Report from "./components/pages/Report/Report"

function App() {
    return (
        <div className="w-full bg-primary h-full">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/report" element={<Report />} />
            </Routes>
        </div>
    )
}

export default App

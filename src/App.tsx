import React from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Main from "./pages/Main/Main"
import { Route, Routes } from "react-router-dom"
import Report from "./pages/Report/Report"

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

import React from "react"
import "./App.css"
import Header from "./components/header/Header"
import Main from "./components/pages/Main/Main"

function App() {
    return (
        <div className="w-full bg-primary h-full">
            <Header />
            <Main />
        </div>
    )
}

export default App

import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Socials from "./components/Socials.js"

function App() {
    return (
        <div className="">
            <Info />
            <About />
            <Interests />
            <Socials />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
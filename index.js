import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Socials from "./components/Socials.js"

function App() {
    return (
        // <div className="card">

            <div className="card-content">
                <Info />
                <About />
                <Interests />
                <Socials />
            </div>

        // </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
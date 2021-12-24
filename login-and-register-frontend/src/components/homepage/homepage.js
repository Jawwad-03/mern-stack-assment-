import React from "react"
import "./homepage.css"
import Resume from "./components/components/Resume";

const Homepage = ({updateUser}) => {
    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <Resume />
            <div className="button" onClick={() => updateUser({})} >Logout</div>
        </div>
    )
}

export default Homepage
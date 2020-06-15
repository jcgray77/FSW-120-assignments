import React from "react"

function ColoredBoxes(props) {
    console.log(props)
    return (
        <div className="colored-boxes">
            <h1 style={{color:"blue"}}>{props.colored.Title}</h1>
            <h3 style={{color:"red"}}>{props.colored.backgroundColor}</h3>
            <p style={{color:"black"}}> {props.colored.Subtitle}</p>
            <p>Information: {props.colored.Information}</p>
        </div>
    )
}

export default ColoredBoxes
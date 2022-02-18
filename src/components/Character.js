// Write your Character component here
import React from "react";
import CharacterDetails from "../CharacterDetails"

export default function Character(props) {
    console.log(props)
    return (
        <div className="container">
            <h3>{props.character.name}</h3>
        </div>
    )
  }
import React from "react";


export default function CharacterDetails(props) {
    const character = {...props.character}
    return (
        <div className="container">
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
        </div>
        )
}
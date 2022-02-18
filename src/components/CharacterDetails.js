import React from "react";


export default function CharacterDetails(props) {

    return (
        <div className="container">
            <p>gender: {props.gender}</p>
            <p>height: {props.height}</p>
            <p>mass: {props.mass}</p>
            <p>BirthYear: {props.birth_year}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
        </div>
    )
}
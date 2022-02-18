// Write your Character component here
import React from "react";
import CharacterDetails from './CharacterDetails';

export default function Character(props) {
    const { character, updateSelectId } = props    
    
       
    

    return (
        <div className="container" onClick={() => updateSelectId(character.birth_year)}>
            <h3>{props.character.name}</h3>
            <CharacterDetails character= {character} key={character.birth_year} />
        </div>
    )
  }


// Write your Character component here
import React, { useState } from "react";
import CharacterDetails from './CharacterDetails';

export default function Character(props) {
    const { character } = {...props}    
    const [selectedID, setSelectedId] = useState(false)

    const updateSelectId = () => {
        setSelectedId(!selectedID)
    }

    return (
        <div className="container" onClick={() => updateSelectId(character.birth_year)}>
            <h3>{props.character.name}</h3>
            { selectedID &&
                <CharacterDetails character= {character} key={character.birth_year} />
                
                }
        </div>
    )
  }


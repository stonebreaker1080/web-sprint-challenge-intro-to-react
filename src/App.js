import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants';
import './App.css';

import Character from "../src/components/Character"



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters] = useState([])
  const [ currentCharacterId, setCurrentCharacterId] = useState("")

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( ()=> {
    axios.get(BASE_URL)
      .then(resp => {
        setCharacters(resp.data)
    })

    .catch(err => console.error(err))

  }, [])

  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character => {
        console.log(character)
        return (<Character character= {character} key={character.created} />)
      })}
    </div>
  );
}

export default App;

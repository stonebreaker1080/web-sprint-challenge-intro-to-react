import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './constants';
import './App.css';
// import styled, { keyframes } from 'styled-components';


import Character from "./components/Character"
import SearchBar from './components/SearchBar'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters] = useState([])
  const [ currentCharacterIds, setCurrentCharacterIds] = useState([])
  const [selectedID, setSelectedId] = useState("")

  const [searchTerm, setSearchTerm] = useState("")


  const updateSelectId = (id) => {
    if (selectedID === id) {
      return
    }

    setSelectedId(id)
    
    if(!currentCharacterIds.indexOf(id)){
      setCurrentCharacterIds([...currentCharacterIds,id])
    }
  }



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
      <SearchBar searchTerm = {searchTerm} setSearchTerm={setSearchTerm}/>
      
      {characters.map(character => {
        
        return (<Character 
          key={character.created} 
          
          character= {character} 
          currentCharacterIds = {currentCharacterIds} 
          selectedID = {selectedID}
          updateSelectId={updateSelectId}
          
          />)
      })}
      
    </div>
  );
}

export default App;

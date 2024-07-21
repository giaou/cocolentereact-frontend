import axios from "axios";
import React, { useEffect, useState } from "react";
import "./pokemoncard.css";

function PokemonCard() {
  const [message, setMessage] = useState("");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/hello-world/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
      try {
        // Parse the string to an object
        const jsonObject = JSON.parse(message);
        //console.log(jsonString);
        // Set data to state
        console.log(jsonObject);
        setPokemon(jsonObject);
        console.log(pokemon);
      } catch (error) {
        console.error("Invalid JSON string:", error);
      }
  }, [message]);


  


  return (
    <>
    <form>
      <label>Pokemon name</label>
      <input type="text" placeholder="type a pokemon name..."/>
      <button>Add</button>
    </form>
    <div className="container">
    
      <img src={pokemon.image} className="pokemon-image" alt={pokemon.name} />
      <div className="details">
        <p className="pokemon-name">{pokemon.name}</p>
        <p className="pokemon-type">Type: Electricity</p>
        <p className="pokemon-ability">Ability: Generate Electricity</p>
      </div>
    </div>
    </>
    
  );
}

export default PokemonCard;

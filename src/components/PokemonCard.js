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
  }, []);

  console.log("msg"+message);

  useEffect(() => {
    // Plain string that looks like JSON
    const jsonString = '{ "name": "bulbasaur", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png" }';

    try {
      // Parse the string to an object
      const jsonObject = JSON.parse(jsonString);
      console.log(jsonString)
      // Set data to state
      setPokemon(jsonObject);
    } catch (error) {
      console.error("Invalid JSON string:", error);
    }
  }, []);

  return (
    <div className="container">
      <img src={pokemon.image} className="pokemon-image" alt={pokemon.name} />
      <div className="details">
        <p className="pokemon-name">{pokemon.name}</p>
        <p className="pokemon-type">Type: Electricity</p>
        <p className="pokemon-ability">Ability: Generate Electricity</p>
      </div>
    </div>
  );
}

export default PokemonCard;

import React, { useEffect, useState } from 'react';
import axios from "axios";

const PokemonList = () => {
    // Déclare une nouvelle variable d'état
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then((res) => {
                for (let i = 0; i < res.data.results.length; i++) {
                    axios.get(res.data.results[i].url)
                        .then(result =>
                            setPokemons(prevArray => [...prevArray, result.data])
                        )
                }
            })
    }, []);

    return (
        <div>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}> {pokemon.name} </li>
                ))}
            </ul>
        </div>
    );
};
export default PokemonList;

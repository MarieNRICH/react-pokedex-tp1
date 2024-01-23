import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

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
        <div className='pokemonList'>
                {pokemons.map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon} />                    
            ))}
            
        </div>
    );
};
export default PokemonList;

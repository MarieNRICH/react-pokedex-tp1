import React from 'react';
const Card = ({ pokemon }) => {
    return (
        <div className='cardPokemon'>
            <div className='contentPokemon'>
                {pokemon.sprites.front_default ?
                    <img src={pokemon.sprites.front_default} alt={"image de " + pokemon.name} /> :
                    <img src="inconnu.png" alt={"image de " + pokemon.name} />}
                <h3>{pokemon.name.toUpperCase()}</h3>
            </div>
        </div>
    );
};
export default Card;
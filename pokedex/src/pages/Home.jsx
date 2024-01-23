import React from 'react';
import Navbar from '../components/Navbar';
import PokemonList from '../components/PokemonList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <PokemonList/>
            <h1>Bienvenu sur la page d'accueil</h1>
        </div>
    );
};
export default Home;

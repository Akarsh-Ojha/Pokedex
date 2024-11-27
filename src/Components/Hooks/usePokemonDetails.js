import { useState, useEffect } from "react";
import axios from 'axios'; // Correct import statement

function usePokemonDetail(id,pokemonName) {
    const [pokemon, setPokemon] = useState({});
    async function downloadPokemons() {
        try {
            let response;
            if(pokemonName){
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            }
            else{
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            }
            const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`);

            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                weight: response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t) => t.type.name),
                similarPokemon: pokemonOfSameTypes.data.pokemon.slice(0,5)
            });

            setPokemonListState({
                ...pokemonListState,
                type : response.data.types ? response.data.types[0].type.name : ''
            });
        } catch (error) {
            // Handle errors
            console.error("Error fetching Pokemon details:");
        }
    }
    const [pokemonListState, setPokemonListState] = useState({});

    useEffect(() => {
        downloadPokemons();
    }, [id]);

    return [pokemon, pokemonListState];
}

export default usePokemonDetail; // Remove the invocation ()

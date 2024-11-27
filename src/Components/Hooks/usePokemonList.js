import axios from 'axios';
import { useEffect, useState } from 'react';

function usePokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
        nextUrl: '',
        prevUrl: '',
        type: ''
    });

    async function downloadPokemon() {

            setPokemonListState((state) => ({ ...state, isLoading: true }));
            const response = await axios.get(pokemonListState.pokedexUrl);//Downloading 20 Pokemon list

            const pokemonResults = response.data.results; // we get the array of Pokemon from results
            
            console.log(pokemonListState);

            setPokemonListState((state) => ({
                ...state,
                nextUrl: response.data.next,
                prevUrl: response.data.previous
            }));
            const pokemonResultPromises = pokemonResults.map((pokemon) => axios.get(pokemon.url));
    
            const pokemonData = await axios.all(pokemonResultPromises); //array of 20 Pokemons Details

            console.log(pokemonData);
            // console.log("this is the "+ pokemonResultPromises);
            
            // Now iterating on each Pokemon and extracting name, id, image, and type of Pokemons
            const pokemonListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                    type: pokemon.types
                };
            });

            console.log(pokemonListResult);
            setPokemonListState((state) => ({
                ...state,
                pokemonList: pokemonListResult,
                isLoading: false
            }));

    }


    useEffect(() => {
        downloadPokemon();
    }, [pokemonListState.pokedexUrl]);

    return [pokemonListState, setPokemonListState];
}

export default usePokemonList;
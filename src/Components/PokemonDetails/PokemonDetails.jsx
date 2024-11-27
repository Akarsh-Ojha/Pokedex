
import {useParams} from 'react-router-dom';
import "./PokemonDetais.css"
import usePokemonDetail from '../Hooks/usePokemonDetails.js';

function PokemonDetails({ pokemonName }){
    const {id}=useParams();
    const [pokemon]= usePokemonDetail(id,pokemonName);
    console.log(`this is pokemon ${pokemon}`);
    return(
        <div className='pokemon-details-wrapper'>
            <img className='pokemon-details-image' src={pokemon.image}/>
            <div className='pokemon-details-name'><span>{pokemon.name} </span></div>
            <div className='pokemon-details-name'> Height: {pokemon.height}</div>
            <div className='pokemon-details-name'> Weight: {pokemon.weight}</div>
            <div className='pokemon-details-type' >
                {pokemon.types && pokemon.types.map((t)=> <div key={t}> {t} </div>)}
            </div>
            {
                pokemon.types && pokemon.similarPokemon && 
                <div>
                    more {pokemon.types && pokemon.types[0]} type pokemons
                    <ul>
                        {pokemon.similarPokemon.map((p) => <li key={p.pokemon.url}> {p.pokemon.name} </li>)}
                    </ul>
                </div>
            }

        </div>
    );
}

export default PokemonDetails;
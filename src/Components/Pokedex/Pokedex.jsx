import PokemonDetails from "../PokemonDetails/PokemonDetails";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Searsh";
import "./Pokedex.css"
import { useEffect, useState } from "react";
function Pokedex(){
    const [searchTerm,setSearchTerm] = useState('');

    return(
        <div className="pokedex-wrapper">
            <Search  updateSearchTerm={setSearchTerm}/>
            { (!searchTerm.length) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        </div>
    )
}

export default Pokedex;
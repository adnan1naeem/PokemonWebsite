import * as React  from "react";
import  {getPokeMonList,getSimilarPokeMonList}  from '../../Api';

// custom hook which provides list of pokemons

export const GetPokemonList=()=> {
    const [pokemonList,setPokemonList] =React.useState([]);
    const [selectedPokemonName,setSelectedPokemonName] =React.useState('');

    //fetching initial list of pokemon
    React.useEffect(()=>{
      (async()=>{
        const {results}=await getPokeMonList();
        setPokemonList(results);
      })();

    },[]);
    
    // onselecting a single pokemon
    const selectedPokemon= (name,index)=> async()=>{
      const selectedPokeMonList = await getSimilarPokeMonList(index);
      setPokemonList(selectedPokeMonList);
      setSelectedPokemonName(name);
    }

    

    return {selectedPokemonName,pokemonList,selectedPokemon}
}

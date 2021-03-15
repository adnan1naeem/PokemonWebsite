
export const getSimilarPokeMonList=async(id)=>{

  // fetching selected lists of pokemon from v2 Api
  try{
    const response= await fetch(`https://pokeapi.co/api/v2/evolution-trigger/${id}`);
    const {pokemon_species}= await response.json();
    return pokemon_species;
  }
  catch(e){
    return e;
  }
}
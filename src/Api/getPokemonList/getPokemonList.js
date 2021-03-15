

export const getPokeMonList=async()=>{
  // fetching initial lists of pokemon from Api
  try{
    const response=await fetch('https://pokeapi.co/api/v2/pokemon/');
    const result= await response.json();
    return result;
  }
  catch(e){
    return e;
  }
}
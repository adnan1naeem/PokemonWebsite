import * as React  from "react";
import {Card,ListGroup, ListGroupItem, CardBody, CardTitle } from 'reactstrap';
import  {styles}  from './style'
import  {GetPokemonList}  from '../../hooks';

export const PokemonList=()=> {

  const {selectedPokemonName,pokemonList,selectedPokemon}=GetPokemonList();  

  return (
    <Card style={styles.container}>
      {pokemonList.length>0?
      <CardBody>
        {selectedPokemonName?
          <CardTitle style={styles.header}>List of evolved Pokemon from {selectedPokemonName}</CardTitle>
          :
          <CardTitle style={styles.header}>List of Pokemon's</CardTitle>
        }
            <ListGroup>
              {
                pokemonList.map((item,index)=>{
                const {name}=item;    
                return(
                  <ListGroupItem onClick={selectedPokemon(name,index+1)}>{name}</ListGroupItem>
                );
                })
              }
            </ListGroup>
        </CardBody>
        :
        <div style={styles.header}>No evolved pokemon list found for {selectedPokemonName} </div>
        }
    </Card>
  );
}

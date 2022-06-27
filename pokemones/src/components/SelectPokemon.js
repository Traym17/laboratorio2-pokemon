import Select from 'react-select';
import React, { useEffect, useState } from 'react';

const SelectPokemon=(props)=>{
    const [pokemones,setPokemones]=useState([]);
    const [urlFetch,setUrlFetch]=useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    async function fetchP(){
    let nombres=await fetch(urlFetch, {method:'GET'});
    let pokemonesRes= await nombres.json();
    setPokemones(pokemonesRes.results);
   }
      
    let options = [];
    pokemones.map(function(pokemon){
        options.push({ value: pokemon.url, label: pokemon.name })
    })

    useEffect(()=>{
      fetchP();
    },[])

    return(
        <select id={props.id}>
            {
                pokemones.map((pokemon)=>{
                   //console.log(pokemon);
                    return <option value={pokemon.url}>{pokemon.name}</option>
                })
            }
        </select>
    );
}

export default SelectPokemon;
import logo from './logo.svg';
import './App.css';
import SelectPokemon from './components/SelectPokemon';
import BtnSeleccionar from './components/BtnSeleccionar';
import ImagePokemon from './components/ImagePokemon';
import React, { useEffect, useState } from 'react';

function App() {
  const [poke1, setPokemon1] = useState("");
  const [poke2, setPokemon2] = useState("");

  const cargarImagen = async () => {
    let pokemon1=document.getElementById('select1').value;
    let pokemon2=document.getElementById('select2').value;
    let propiedadesP1=await fetch(pokemon1,{method:'GET'});
    propiedadesP1=await propiedadesP1.json();
    poke1.img=propiedadesP1.sprites.front_default;
    console.log(poke1);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div>
          <SelectPokemon id='select1' name='select1'/>
          <SelectPokemon id='select2' name='select2'/>
        </div>
        <div>
          <BtnSeleccionar funcion={cargarImagen}/>
        </div>
        <div>
          <ImagePokemon url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'/>
        </div>
      </header>
    </div>
  );
}

export default App;

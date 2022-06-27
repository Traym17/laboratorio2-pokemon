import logo from './logo.svg';
import './App.css';
import SelectPokemon from './components/SelectPokemon';
import BtnSeleccionar from './components/BtnSeleccionar';
import ImagePokemon from './components/ImagePokemon';
import React, { useEffect, useState } from 'react';

function App() {
  const [poke1, setPoke1] = useState("");
  const [poke2, setPoke2] = useState("");

  const cargarImagen = async () => {
    //pokemon1
    let pokemon1=document.getElementById('select1').value;
    let propiedadesP1=await fetch(pokemon1,{method:'GET'});
    propiedadesP1=await propiedadesP1.json();
    propiedadesP1.img=propiedadesP1.sprites.front_default;
    //pokemon2
    let pokemon2=document.getElementById('select2').value;
    let propiedadesP2=await fetch(pokemon2,{method:'GET'});
    propiedadesP2=await propiedadesP2.json();
    propiedadesP2.img=propiedadesP2.sprites.front_default;

    setPoke1(propiedadesP1);
    setPoke2(propiedadesP2);
    console.log('ddd');
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
          {console.log(poke1.img)}
          <ImagePokemon url={poke1.img}/>
          <ImagePokemon url={poke2.img}/>
        </div>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import SelectPokemon from './components/SelectPokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
          <SelectPokemon id='select1' name='select1'/>
          <SelectPokemon id='select2' name='select2'/>
        </div>
      </header>
    </div>
  );
}

export default App;

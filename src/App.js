// import logo from './logo.svg';
import { Component } from 'react';
import Tareas from './Componentes/Tareas';
import './App.css';
import tareas from './Datos/tareas.json'
import FormularioTarea from './Componentes/FormularioTareas';
console.log(tareas)
class App extends Component {

  state = {
    tareas: tareas
  }
  render() {
    return<div>
      <FormularioTarea></FormularioTarea>
      <Tareas tareas={this.state.tareas}/>
    </div>
  }
}

export default App;

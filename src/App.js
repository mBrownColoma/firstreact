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

  agregarTarea = (titulo, descripcion) =>{
    console.log(titulo, descripcion)
  }
  
  render() {
    
    return<div>
      <FormularioTarea agregarTarea = {this.agregarTarea()}/>
      <Tareas tareas={this.state.tareas}/>
    </div>
  }
}

export default App;

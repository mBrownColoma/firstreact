import react, {Component} from "react";
import Tarea from "./Tarea";


class Tareas extends Component{
    render(){
        return this.props.tareas.map(tarea => <Tarea tarea={tarea} key={tarea.id}/>)
    }

}

export default Tareas;
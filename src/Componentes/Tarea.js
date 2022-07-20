import react, {Component} from "react";

class Tarea extends Component{
    render(){
        return <div>
            {this.props.tarea.titulo} -
            {this.props.tarea.descripcion} -
            {this.props.tarea.id}
            <input type="checkbox"></input>
            <button>X</button> 
        </div>
    }

}

export default Tarea;
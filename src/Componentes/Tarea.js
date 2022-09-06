import react, {Component} from "react";

class Tarea extends Component{
    TareaHecha(){
        return{
            fontSize:'20px',
            color: this.props.tarea.estado ? '#D1C5FC':'gray',
            textDecoration: this.props.tarea.estado ? 'none':'line-through'
        }
    }
    render(){
        const btnBorrar = {
            fontSize: '18px',
            background: '#263F3B',
            color: '#F57B3B',
            border: 'none',
            padding: '10px 15 px',
            borderRadius: '50%',
            cursor: 'pointer'
        }
    return <div style={this.TareaHecha()}>
            {this.props.tarea.titulo} -
            {this.props.tarea.descripcion} -
            {this.props.tarea.id}
            <input type="checkbox" onChange={this.props.marcarHecho.bind(this,this.props.tarea.id)}></input>
            <button style={btnBorrar} onClick={this.props.borrarTarea.bind(this,this.props.tarea.id)}>X</button> 
        </div>
    }

}

export default Tarea;
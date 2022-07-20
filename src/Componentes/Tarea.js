import react, {Component} from "react";

class Tarea extends Component{
    TareaHecha(){
        return{
            fontSize:'20px',
            color: this.props.tarea.estado ? 'gray':'#D1C5FC',
            textDecoration: this.props.tarea.estado ? 'line-through':'none'
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
            <input type="checkbox"></input>
            <button style={btnBorrar}>X</button> 
        </div>
    }

}

export default Tarea;
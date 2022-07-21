import react, {Component} from "react";

class FormularioTarea extends Component{
    
    state = {
        titulo:'',
        descripcion:''
    }

    onSubmit = (e) => {
        e.preventDefault(); 
    }

    onChange = (e)=>{
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="titulo" value={this.state.titulo} onChange={this.onChange} placeholder="Ingrese el titulo"></input><br/>
                <textarea rows="4" name="descripcion" value={this.state.descripcion} onChange={this.onChange} placeholder="Descripción de la tarea"></textarea>
                <br/>
                <br/>
                <button type="submit">Guardar</button>
            </form>
        )
    }

}

export default FormularioTarea;
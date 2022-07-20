import react, {Component} from "react";

class FormularioTarea extends Component{
    
    render(){
        return(
            <form>
                <input type="text" placeholder="Ingrese el titulo"></input>
                <textarea placeholder="Escriba la descripción de la tarea"></textarea>

            </form>
        )
    }

}

export default FormularioTarea;
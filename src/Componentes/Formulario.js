import React, {Fragment, useState} from 'react';
import { CalcularTotal } from './Helpers';
const Formulario = (props) => {
    const {Cantidad, GuardarCantidad, Plazo, GuardarPlazo, GuardarTotal, GuardarCargando} = props;
    //Definir el state 
    const [Error, GuardarError] = useState(false);
    const CalcularPrestamo = (e) => {
        e.preventDefault();
        if(Cantidad === 0 || Plazo === ''){
            GuardarError(true);
            setTimeout(()=>{
                GuardarError(false);
            },3000);
            return;
        }
        GuardarError(false);
        GuardarCargando(true);
        setTimeout(() => {
            const Total = CalcularTotal(Cantidad, Plazo);
            GuardarTotal(Total);
            GuardarCargando(false);
        }, 3000);
        
    }

    return (  
        <Fragment>
            <form onSubmit={CalcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000" 
                            onChange={ e => GuardarCantidad(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onClick={e => GuardarPlazo(parseInt(e.target.value))}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div> 
            </form>

            {(Error) ? <p className="error">Todos los campos son obligatorios</p>: null }
            
        </Fragment>
    );
}
 
export default Formulario;
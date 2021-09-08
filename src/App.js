import React, {Fragment, useState} from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Mensaje from './Componentes/Mensaje';
import Resultado from './Componentes/Resultado';
import Spinner from './Componentes/Spinner';
import './App.css';

function App() {
  //Definir el state
  const [Cantidad, GuardarCantidad] = useState(0);
  const [Plazo, GuardarPlazo] = useState('');
  const [Total, GuardarTotal] = useState(0);
  const [Cargando, GuardarCargando] = useState(false);

  let Componente;
  if(Cargando){
    Componente = <Spinner/>
  }else if(Total === 0){
    Componente = <Mensaje/>
  }else{
    Componente = <Resultado 
                    Cantidad = {Cantidad}
                    Plazo = {Plazo}
                    Total = {Total}
                 />
  }
  return (
    <Fragment>
      <Header
        Titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          Cantidad = {Cantidad}
          GuardarCantidad = {GuardarCantidad}
          Plazo = {Plazo}
          GuardarPlazo = {GuardarPlazo}
          Total = {Total}
          GuardarTotal = {GuardarTotal}
          GuardarCargando = {GuardarCargando}
        />
        {Componente}
      </div>
     

    </Fragment>
  );
}

export default App;

import React from "react";

const Resultado = ({Cantidad, Plazo, Total}) => {
    const PagoMensual = Total / Plazo;
    return (
        <div className="u-full-width resultado mensajes">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: ${Cantidad} pesos</p>
            <p>A pagar en: {Plazo} Meses</p>
            <p>Su pago mensual es de: ${PagoMensual.toFixed(2)} pesos</p>
            <p>Total a pagar: {Total.toFixed(2)}</p>
        </div>
    );
}

export default Resultado;
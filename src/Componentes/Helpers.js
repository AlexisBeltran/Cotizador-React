export function CalcularTotal(cantidad, plazo){
    //Cantidad
    //0 - 1000 = 25%
    //1001 - 5000 = 20%
    //5001 - 10000 = 15%
    //10001 = 10%
    let TotalCantidad;

    if(cantidad <= 1000){
        TotalCantidad = cantidad * 0.25;
    }else if(cantidad > 1000 && cantidad <= 5000){
        TotalCantidad = cantidad * 0.20;
    }else if(cantidad > 5000 && cantidad <= 10000){
        TotalCantidad = cantidad * 0.15;
    }else {
        TotalCantidad = cantidad * 0.10;
    }
    /*
        Calcular plazo
        3 = 5%
        6 = 10%
        12 = 15%
        24 = 20%    
    */
    let MesesPlazo;
    switch(plazo){
        case 3: MesesPlazo = cantidad * .05; break;
        case 6: MesesPlazo = cantidad * .10; break;
        case 12: MesesPlazo = cantidad * .15; break;
        case 24: MesesPlazo = cantidad * .20; break;
        default:  break;
    }

    return MesesPlazo + TotalCantidad + cantidad;
}
let resultado;
    switch (operador) {
      case "+":
        resultado = numero1 + numero2;
        alert("El resultado de la suma es: " + resultado);
        break;
      case "-":
        resultado = numero1 - numero2;
        alert("El resultado de la resta es: " + resultado);
        break;
      case "*":
        resultado = numero1 * numero2;
        alert("El resultado de la multiplicación es: " + resultado);
        break;
    }

    if (operador == ""){
        alert("No ingresaste una operacion valida");
    }
    
    if (!isNaN(numero1) && !isNaN(numero2)  && operador != ""  ){
        if (operador == "+"){
            let resultadoSuma = numero1 + numero2 ;
            alert("El resultado de la suma es: "+resultadoSuma);
        
        }else if (operador == "-"){
                let resultadoResta = numero1 - numero2 ;
                alert("El resultado de la suma es: "+resultadoResta);
        }else if(operador == "*"){
            let resutadoMulti = numero1 * numero2 ;
            alert("El resultado de la multiplicacion es "+ resutadoMulti);
        
      
        }else if (operador == "/"){
            if (numero2 == 0){
                alert("No se puede dividir por cero");
            }else{
                let resultadoDiv= numero1 / numero2 ;
                alert("El resultado de la division es "+ resultadoDiv);
            }
        }else{
            alert("No ingresaste una operacion valida");
        }
        
    }else{   
        alert("No fue posible hacer el calculo");
    }

    /*
function hackeo(clientes) {
    clientes.forEach(cliente => {
        let cuentaPesos = cliente.getCuentaPesos();

        if (CuentaPesos) {
            let cbu = cuentaPesos.getCbu();
            let saldo = cuentaPesos.getSaldo();

            
            if (cbu % 2 === 0) {
                cuentaPesos.setMonto(saldo *= 2);
            } else {
                cuentaPesos.setMonto (saldo /= 2);
            }
            if (cliente.getNombre() === 'Maria') {
                cuentaPesos.acreditar += (50000);
            }
        }
    });
    return clientes;
}
*/

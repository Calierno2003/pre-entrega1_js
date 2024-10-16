//contador de ovejas
//son 3 componentes

/*for (let i = 1 ; i <= 20 ; i++ ) {
    
    if (i == 1) {
        alert ("Tengo"+ i + "oveja");
    
    }else{

        alert ("Tengo"+ i + "ovejas");
    }
}

let cant_ovejas = 1;

for (let i = 20 ; i >= 0 ; i-- ) {
    
    if (cant_ovejas == 1) {
       
        alert ("Tengo"+ cant_ovejas + "oveja");
    
    }else{

        alert ("Tengo"+ cant_ovejas + "ovejas");
    }

    cant_ovejas ++;
}
*/

let total = 0 ;

let cant = parseInt(prompt("Cuantos numeros quiero sumar?"));
if (!isNaN(cant)){

    for (let i = 0 ; i < cant ; i++) {
        
        let dato = parseInt(prompt("Ingrese un numero"));
        if (!isNaN(dato)){
            
            total = total + dato ;
            console.log(total);
        }else {
            alert("No ingresaste un dato numerico. Suma cancelada ")
            break;
        }

        
    }
    if (total > 0) {
        alert("La suma total es: "+total);
    }




}else{
    
    alert("No ingresaste un numero");

}



function saludar(){
    let nombreIngresado= prompt("Ingresa tu nombre");
    alert ("Bienvenido " + nombreIngresado);
}
saludar(); 



const vasos = new descartables("vasos", "plástico", 0, 40);
const servilletas = new descartables("servilletas", "plástico", 0, 20);
const bolsas = new descartables("bolsas", "plástico", 0, 30);
const bandejas = new descartables("bandejas", "plástico", 0, 100);




let producto = prompt("Ingresa el tipo de producto:\nvasos\nservilletas\nbolsas\nbandejas")
let total=0;

while(producto != "total")  {
  switch(producto){ 

    case "vasos":
      vasos.cantidad=parseFloat(prompt("Ingrese la cantidad"));
      total += vasos.cantidad * vasos.precio;
      break;

    case "servilletas":
        servilletas.cantidad=parseFloat(prompt("Ingrese la cantidad"));
        total += servilletas.cantidad * servilletas.precio;
        break;

        case "bolsas":
        bolsas.cantidad=parseFloat(prompt("Ingrese la cantidad"));
        total += bolsas.cantidad * bolsas.precio;
        break;

        case "bandejas":
            bandejas.cantidad=parseFloat(prompt("Ingrese la cantidad"));
            total += bandejas.cantidad * bandejas.precio;
            break;

            default: 
      alert("Eso no es un descartable, elegi tu descartable / Para finalizar escribir total");
      break;






  }

  producto = prompt("Elegi tu producto bandejas, bolsas, vasos, servilletas  / Para finalizar escribir total");

  
}

function totalProd(variable,variable1,total){
    if(variable===0){
      return total = 0;
    }else{
      return variable*variable1;
    }
  }

  function descartables(tipo, material, cantidad, precio) {
    this.tipo = tipo;
    this.material = material;
    this.cantidad = cantidad;
    this.precio = precio;
  }
  
  






  alert("Compraste " + vasos.cantidad + " de " + vasos.tipo + ". De " + vasos.material + " por un total de: $" + totalProd(vasos.cantidad,vasos.precio,  total));
  alert("Compraste " + servilletas.cantidad + " de " + servilletas.tipo + ". De " + servilletas.material + " por un total de: $" + totalProd(servilletas.cantidad,servilletas.precio,total));
  alert("Compraste " + bolsas.cantidad + " de " + bolsas.tipo + ". De " + bolsas.material + " por un total de: $" + totalProd(bolsas.cantidad,bolsas.precio,total));
  alert("Compraste " + bandejas.cantidad + " de " + bandejas.tipo + ". De " + bandejas.material + " por un total de: $" + totalProd(bandejas.cantidad,bandejas.precio,total));

alert("El total de la compra es: $" + total);



console.log(vasos);
console.log(servilletas);
console.log(bolsas);
console.log(bandejas);
console.log(producto);






  

   
      




    

    


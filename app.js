//VARIABLES GLOBALES
let valorIngresado = "Salir"; // likes ingresados
let sumaNumerica = 0; // Total de Likes
let LikesMenor10 = 0; //Likes menor de 10

//BUCLE DO WHILE 
//El do While permite que teniendo valorIngresado como Salir, se inicie el bucle
//1.Desarrollar un programa que al ingresar por teclado la cantidad de likes que tiene el usuario en cada una de sus fotos 
// (un ingreso por cada foto). 
do {
    valorIngresado = prompt("Ingrese un número para continuar o Salir para finalizar")
    if(valorIngresado != "Salir"){
        sumaNumerica = sumaNumerica + parseInt (valorIngresado)
// 2.Contar la totalidad y mostrarla por consola.

// 3. Verificar la cantidad de fotos con menos de 10 y mostrar un mensaje con la cantidad de las mismas.
        if (valorIngresado < 10) {
            LikesMenor10 ++  ;
        }
        console.log( "el total de likes es " + sumaNumerica)
console.log("La cantidad de fotos con menos de 10 likes es: " + LikesMenor10);
//Se pone al finalizar 
    } else {
        alert("Gracias por utilizar nuestra app")
    }     
// Esto para cuando le pongan "Salir"      
    } while (valorIngresado != "Salir");
    
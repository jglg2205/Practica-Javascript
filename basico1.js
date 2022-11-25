/* Ejercicio 1:
    Programa una función que cuente el número de caracteres de una cadena de texto
    , pe. miFuncion("Hola Mundo") devolverá 10. */

function numerosCaracteres(cadena){

	if (typeof(cadena)==="number" || typeof(cadena)==="boolean"){
		console.log("Error, debe ingresar una cadena de texto");
	}else if(cadena === ""){
		console.log("Error, la cadena de texto no debe estar vacia");
	}else{
		let cantidad = cadena.length;
		return(console.log(`El numero de caracteres de la cadena es de ${cantidad}`));
	}
}

let texto = "hola mundo";
console.log("EJERCICIO 1:");
numerosCaracteres(texto);

/*Ejercicio 2:
2) Programa una función que te devuelva el texto recortado 
según el número de caracteres indicados,
 pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

function recortaCadena(cadena, num1, num2){

	if (typeof(cadena)==="number" || typeof(cadena)==="boolean"){
		console.log("Error, debe ingresar una cadena de texto");
	}else if(cadena === ""){
		console.log("Error, la cadena de texto no debe estar vacia");
	}else{
		let nuevaCadena = cadena.slice(num1, num2);
		return(console.log(`La cadena recortada es: ${nuevaCadena}`));
	}
}

console.log("Ejercico 2: ");
recortaCadena(texto, 0, 4 );

/*Ejercico 3:
Programa una función que dada una String te devuelva un Array 
de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function nuevoArreglo(cadena){
  
  let arreglo = cadena.split(" ");
  return(console.log(arreglo));
}

console.log("Ejercicio 3:");
nuevoArreglo("hola que tal");

/*Ejercicio 4:
Programa una función que repita un texto X veces,
 pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo*/

 function repetirCadena(cadena, numero){

 		if (typeof(cadena)==="number" || typeof(cadena)==="boolean"){
		console.log("Error, debe ingresar una cadena de texto");
	}else if(cadena === ""){
		console.log("Error, la cadena de texto no debe estar vacia");
	}else{
		for(let i = 0; i < numero; i++){
          console.log(cadena);
		}
	}
 }
  
 console.log("Ejercicio 4:");
 repetirCadena("hola mundo", 3);





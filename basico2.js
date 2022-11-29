/*5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const invertirPalabras = (cadena= "") =>{
	let cadenaInvertida= "";
	if (!cadena){
	  return(console.log("no has suministrado una cadena de texto"));
	        }else if (typeof(cadena)==="number"){
	    return(console.log("no debes ingresar numeros"));
	         }else{
	    for(let i = cadena.length-1; i >=0; i--){
          cadenaInvertida = cadenaInvertida + cadena[i];
	        }
	         console.log(`la cadena "${cadena}" invertida es: ${cadenaInvertida}`);
          }
      }

invertirPalabras("hola mundo");


/*6) Programa una función para contar el número de veces que se 
repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

let textoMuestra = "hola mundo adios mundo";
let comprobar = "mundo";
let contador = 0;

const buscarPalabra = (cadena="", palabra="")=>{

  if (!cadena){
	return(console.log("no has suministrado una cadena de texto"));
	}else if (typeof(cadena)==="number"){
	  return(console.log("no debes ingresar numeros"));
	  }else{
	    let arregloPalabras = cadena.split(" ");
	    for(let i = 0; i < arregloPalabras.length; i++){
          if(arregloPalabras[i].includes(palabra) === true){
            contador ++;
          }
	    }
	      console.log(`En la cadena "${cadena}" la palabra "${palabra}" se repite ${contador} veces`);
          }
            contador = 0;
}
buscarPalabra(textoMuestra,comprobar);



/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

  let cadena1 = "salas";
  const palindromo = (cadena="")=>{
  if (!cadena){
	return(console.log("no has suministrado una cadena de texto"));
	}else if (typeof(cadena)==="number"){
	  return(console.log("no debes ingresar numeros"));
	  }else{

  let cadena2="";
  for (let i = cadena.length -1; i >= 0; i--){
    cadena2 = cadena2 + cadena[i];
  }
  if(cadena === cadena2){
  	console.log(`la palabra "${cadena}" si es palindromo`);
  }else{
  		console.log(`la palabra "${cadena}" no es palindromo`);
  }
}
}
palindromo("salas");

/*8) Programa una función que elimine cierto patrón de caracteres 
de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
 devolverá  "1, 2, 3, 4 y 5.*/

 const eliminaCaracter = (cadena, parametro)=>{
 	let cadenaSinParametro ="";
 	if (!cadena){
	return(console.log("no has suministrado una cadena de texto"));
	}else if (typeof(cadena)==="number" || typeof(cadena)==="boolean"){
	  return(console.log("no debes ingresar numeros, ni booleanos"));
	  }else{
        cadenaSinParametro =cadena.replaceAll(parametro,""); 
        console.log(`La cadena "${cadena}" luego de eliminar "${parametro}" es: ${cadenaSinParametro}`);
	  }
 }
 eliminaCaracter("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
 
/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

   const aleatorio = ()=>{
   	let numAleatorio = 0;
   	do{
   		numAleatorio = Math.round(Math.random()*600);
   	}while(numAleatorio <= 500);
   	console.log(numAleatorio);
  
   }
   aleatorio();
/*10) Programa una función que reciba un número y evalúe si es capicúa o no
 (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

  let num = 1111;
  const capicua = (numero = 0) =>{
   if(!numero) {
      console.log("debes ingresar un numero");
   }else if (typeof(numero)==="string"){
    console.log("no puedes ingresar texto");
   }else{
   let num2 = num.toString().split("").reverse().join("");
   (num == num2)
   ?console.log(`El numero ${numero} si es Capicua`)
   :console.log(`el numero ${numero} no es Capicua`);
  }
  }
  capicua(num);
  

/*11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como 
el producto de todos los números enteros positivos desde 1 hasta 
n), pe. miFuncion(5) devolverá 120.*/

const factorial = (numero = 0) => {
  if(!numero){
   console.warn("Debes ingresar un numero");
  }else if(numero < 0){
   console.error("no puedes ingresar numeros negativos");
  }else if(numero === 1){
   console.info(`El Factorial de ${numero} es 1`);
  }else if(typeof(numero)==="string" || typeof(numero)=== "boolean"){
   console.error("Solo puedes ingresar numeros");
  }else{
   let fact = 1;
   for(let i = 1; i <= numero; i++ ){
     fact = fact * i;
   }
   console.info(`El factorial de ${numero} es ${fact}`);
  }
}

factorial(5);

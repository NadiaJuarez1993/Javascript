/*Ejercitacion de la clase
Se espera que puedan realizar los ejercicios utilizando todo lo visto hasta ahora, y testeando sus propios codigos con varios ejemplos (numeros enteros, positivos y negativos, con coma, etc) las veces que sea necesario para asegurarse su funcionamiento. Probar que pasa si no se reciben parametros y analizar cada caso.
Recordar sintaxis:

const miFuncion = (parametros) => {
     sentencias de codigo
    return
}
miFuncion()*/


/*Ejercicio 0
Crear una funcion que reciba como parametro un nombre y muestre por consola un saludo a esa persona.*/

/*const user = prompt("Ingrese su nombre")
console.log(`Hola ${user} .nadia`)*/

////////////////////

/*Ejercicio 1
Crear una funcion que reciba como parametro dos numeros y devuelva el resultado de cada calculo aritmetico.
sumar(a, b)
restar(a, b)
dividir(a, b)
multiplicar(a, b)*/

/*
const sumar = (a,b) =>{
    return a + b 
}

const restar = (a,b) =>{
    return a - b 
}

const dividir = (a,b) =>{
    return a / b 
}

const multiplicar = (a,b) =>{
    return a * b 
}
*/


////////////////////////////////////////////
/*Ejercicio 2
Crear una funcion que reciba como parametro un sueldo y un numero que representa el porcentaje de aumento. La funcion debe devolver el sueldo mas el aumento.
aumentarSueldo(1000, 10) // deberia devolver 1100 */

/*const porsentajeDeAumento = (sueldo , porsentaje) =>{
    const  total = sueldo * porsentaje /100
    return sueldo + total
}*/

//////////////////////////////
/*Ejercicio 3
Crear una funcion que reciba como parametros un nombre, una edad, una profesion y un pais y retorne un string con la concatenacion de los datos ingresados. Probar con varios datos varias veces para comprobar funcionamiento. Ejemplo: Me llamo Pepa, tengo 30 anios, vivo en Colombia y soy abogada.*/

const hola = (nombre , edad , profesion , pais) => {
    return  `Hola! mi nombre es ${nombre}, tengo ${edad} años, soy ${profesion}, y vivo en ${pais} `
 }
 console.log(hola("nombre", edad, "profesion"))
 
 //////////////////////////////
 /*Ejercicio 4
 Crear una funcion que reciba como parametro un precio y devuelva el precio mas el IVA.*/
 
 /*const totalIva = (precio) => {
     const iva = precio * 21 / 100
     return iva + precio
 }*/
 
 ///////////////////////////////////
 /*Ejercicio 5
 Como harian para usar las funciones del ejercicio 1 pero que los numeros se los pidamos al usuario?
 Repetir solucion pero para el ejercicio 2 y ejercicio 3*/
 
 
 
 /*Bonus:
 Crear una funcion contador() que cada vez que se ejecute, sume en una unidad a una variable.*/
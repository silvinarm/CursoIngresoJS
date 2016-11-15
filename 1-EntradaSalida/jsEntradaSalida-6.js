/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var nuno;
var ndos;
var resultado;

nuno = document.getElementById('numeroUno').value; 
nuno = parseInt (nuno);
ndos = document.getElementById('numeroDos').value;
ndos = parseInt (ndos);
resultado = (nuno + ndos);
alert  ("la suma es: "+resultado)

}


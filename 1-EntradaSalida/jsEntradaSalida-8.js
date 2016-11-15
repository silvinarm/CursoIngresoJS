/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

/*input type="text"  placeholder="Ingrese dividendo" id="numeroDividendo">
				<font color=black> dividendo: es el número que se va a dividir 

				<input type="text"  placeholder="Ingrese divisor" id="numeroDivisor">*/

function SacarResto()
{	var dividendo;
	var divisor;
	var resto;

	dividendo = document.getElementById('numeroDividendo').value;
	dividendo = parseInt (dividendo);
	divisor = document.getElementById ('numeroDivisor').value;
	divisor = parseInt (divisor);
	resto = (dividendo%divisor);
	alert (resto);

	
}

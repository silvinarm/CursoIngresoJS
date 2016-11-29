/* 
	Realizar el algoritmo que pida dos números por prompt, 
	si son iguales que los multiplique, 
	si el primero es mayor que el segunto que los reste y 
	sino que los sume, mostrar el resultado por document.write
*/
function Mostar()
{
	var Numero1;
	var Numero2;
	var Resultado;

	Numero1 = prompt ("Ingrese Primer Número");
	Numero2 = prompt ("Ingrese Segundo Número");
	Numero1 = parseInt(Numero1);
	Numero2 = parseInt(Numero2);
	if (Numero1 == Numero2)
	{
		Resultado = (Numero1*Numero2);
	}
	else
	{
		if (Numero1 > Numero2)
		{
			Resultado = (Numero1-Numero2);
		}
		else
		{
			Resultado = (Numero1+Numero2);
		}
	}
	console.log ("El resultado es "+Resultado);
	document.getElementById('resultado').value = Resultado;

}


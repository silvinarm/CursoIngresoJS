/* 
	Realizar el algoritmo que pida del importe de las ventas (validar
	que sea mayor a 0 "cero") de los 24 días hábiles del mes por
	prompt (una por día), e informar cual fue el importe y cual fue
	el menor importe de venta.
*/
function Mostrar()
{
	var importeIngresado;
	var menorImporte = 0;
	var mayorImporte = 0;
	var diaHabil = 0;

	while (diaHabil < 24)
	{
		diaHabil ++;
		importeIngresado = prompt ("Ingrese el importe del día hábil "+diaHabil);
		importeIngresado = parseInt (importeIngresado);
		while (importeIngresado < 1)
		{
			importeIngresado = prompt ("Reingrese el importe del día hábil "+diaHabil);	
			importeIngresado = parseInt (importeIngresado);
		}
		if (diaHabil == 1)
		{
			menorImporte = importeIngresado;
			mayorImporte = importeIngresado;
		}
		else
		{
			if (importeIngresado > mayorImporte)
			{
				mayorImporte = importeIngresado;
			}
			if (importeIngresado < menorImporte)
			{
				menorImporte = importeIngresado;
			}
		}

	}
	
	console.log ("El menor importe fue: "+menorImporte+" y el mayor importe fue: "+mayorImporte);
	document.write ("El menor importe fue: "+menorImporte+" y el mayor importe fue: "+mayorImporte);

}//FIN DE LA FUNCIÓN
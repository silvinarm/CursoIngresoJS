function Mostrar()
{

	var contador=0;
	var numeroIngresado;
	var maximoNumero;
	var minimoNumero;
	var respuesta='si';
	

	while(respuesta!='no')
	{
		numeroIngresado = prompt ("Ingrese número "+contador);
		if (contador == 0)
		{
			minimoNumero = parseInt (numeroIngresado);
			maximoNumero = parseInt (numeroIngresado);
		}
		else
		{
			if (numeroIngresado < minimoNumero)
			{
				minimoNumero = parseInt (numeroIngresado);
			}
			if (numeroIngresado > maximoNumero)
			{
				maximoNumero = parseInt (numeroIngresado);
			}
		}
		respuesta = prompt ("Ingrese 'no' para finalizar");
		contador ++;

	}
	console.log ("El número mínimo es "+minimoNumero+" y el número máximo es "+maximoNumero);
	document.getElementById ('minimo').value = minimoNumero;
	document.getElementById ('maximo').value = maximoNumero;

}//FIN DE LA FUNCIÓN
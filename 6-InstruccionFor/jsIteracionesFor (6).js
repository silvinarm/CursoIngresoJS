function Mostrar()
{
	var numeroIngresado;
	var contador;
	var numerosPares;
	var contadorPares;

	numeroIngresado = prompt ("Ingresar número");
	numeroIngresado = parseInt (numeroIngresado);
	contadorPares = 0;

	for (contador=1;contador<=numeroIngresado;contador++)
	{
		if (contador%2==0)
		{
			contadorPares++;
		}
	}
	document.write (contadorPares);




}//FIN DE LA FUNCIÓN
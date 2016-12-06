function Mostrar()
{
	var numeroIngresado;
	var contadorDivisores;
	var indice;

	contadorDivisores = 0
	numeroIngresado = prompt ("Ingrese un número");
	numeroIngresado = parseInt (numeroIngresado);

	for (indice=2;indice<numeroIngresado;indice++)
	{
		if (numeroIngresado%indice==0)
			{
				contadorDivisores++;
			}
	}
	if (contadorDivisores ==0)
	{
		alert ("El número "+numeroIngresado+" es primo");
	}
	else
	{
		alert ("El número "+numeroIngresado+" no es primo");
	}


}//FIN DE LA FUNCIÓN
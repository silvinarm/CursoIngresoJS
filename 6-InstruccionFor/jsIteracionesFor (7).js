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
document.write (contadorDivisores);


}//FIN DE LA FUNCIÓN
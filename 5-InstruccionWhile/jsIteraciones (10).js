function Mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;

	while (respuesta != "no")
	{
		numeroIngresado = prompt ("Ingrese número ");
		numeroIngresado = parseInt (numeroIngresado);
		if (numeroIngresado == 0)
		{
			cantidadCeros = (cantidadCeros+1);
		}
		else
		{
			if (numeroIngresado%2 == 0)
			{
				cantidadPares = (cantidadPares+1);
			}
			if (numeroIngresado<0)
			{
				cantidadNegativos = (cantidadNegativos+1);
				sumaNegativos = (sumaNegativos + numeroIngresado);
			}
			if (numeroIngresado>0)
			{
				cantidadPositivos = (cantidadPositivos+1);
				sumaPositivos = (sumaPositivos + numeroIngresado);
			}
		}

		respuesta = prompt ("Ingrese 'no' para finalizar");

	}
	console.log (cantidadPares);
	promedioNegativos = (sumaNegativos/cantidadNegativos);
	promedioPositivos = (sumaPositivos/cantidadPositivos);
	diferencia = (sumaPositivos+sumaNegativos);
	document.write ("1 - Suma de los negativos: "+sumaNegativos+"<br>2 - Suma de los positivos: "+sumaPositivos+"<br>3- Cantidad de positivos: "+cantidadPositivos+"<br>4 - Cantidad de negativos: "+cantidadNegativos+"<br>5 - Cantidad de ceros: "+cantidadCeros+"<br>6 - Cantidad de numeros pares: "+cantidadPares+"<br>7 - Promedio de positivos: "+promedioPositivos+"<br>8- Promedio de negativos: "+promedioNegativos);



}//FIN DE LA FUNCIÓN
function Mostrar()
{

	var contador=0;
	var respuesta="si";
	var numeroIngresado;
	var cantidadPositivos =0;
	var	cantidadNegativos =0;
	var cantidadCeros =0;
	var sumaNegativos =0;
	var sumaPositivos =0;
	var cantidadPares =0;
	var promedioPositivos =0;
	var promedioNegativos =0;
	var diferencia;

	while(respuesta!="no")
	{
		numeroIngresado = prompt ("Ingrese número ");
		numeroIngresado = parseInt (numeroIngresado);
		if (numeroIngresado < 0)
		{
			cantidadNegativos == (cantidadNegativos+1);
			sumaNegativos == (sumaNegativos + numeroIngresado);
			if 
			{
				cantidadPares = (cantidadPares+1);
			}
		}
		if (numeroIngresado > 0)
		{
			cantidadPositivos == (cantidadPositivos+1);
			sumaPositivos == (sumaPositivos + numeroIngresado);
		}
		if (numeroIngresado = 0) 
		{
			cantidadCeros == (cantidadCeros+1);
		}			

		respuesta = prompt ("Ingrese 'no' para finalizar");
		contador ++;
	}

	promedioNegativos = (sumaNegativos/cantidadNegativos);
	promedioPositivos = (sumaPositivos/cantidadPositivos);
	diferencia = (sumaPositivos+sumaNegativos);
	document.write ("1 - Suma de los negativos: "+sumaNegativos+" 2 - Suma de los positivos: "+sumaPositivos+" 3- Cantidad de positivos: "+cantidadPositivos+" 4 - Cantidad de negativos: "+cantidadNegativos+" 5 - Cantidad de ceros: "+cantidadCeros+" 6 - Cantidad de numeros pares: "+cantidadPares+" 7 - Promedio de positivos: "+promedioPositivos+" 8- Promedio de negativos: "+promedioNegativos);



}//FIN DE LA FUNCIÓN
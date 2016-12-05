function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var respuesta='si';

	while (respuesta =='si')
	{
		contador ++;
		numeroIngresado = prompt ("Ingrese número "+contador);
		acumulador = acumulador + parseInt(numeroIngresado);
		respuesta = prompt ("Ingrese 'si' para continuar");
	}
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
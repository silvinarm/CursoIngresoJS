function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numeroIngresado;

	while (respuesta =='si')
	{
		contador ++;
		numeroIngresado = prompt ("Ingrese número "+contador);
		if (numeroIngresado > -1)
		{
			positivo = (positivo + parseInt (numeroIngresado));
		}
		else
		{
			negativo = (negativo * parseInt (numeroIngresado));
		}

		respuesta = prompt ("Ingrese 'si' para continuar");
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
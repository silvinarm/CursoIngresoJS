function Mostrar()
{
	var contador;
	var pesoIngresado;
	var mayorPeso;
	var menorPeso;

	contador = 1;
	while (contador<51)
	{
		pesoIngresado = prompt ("Ingrese peso del contenedor número "+contador);
		pesoIngresado = parseInt (pesoIngresado);
		if (pesoIngresado > 0)
		{
			if (contador == 1)
			{
				mayorPeso = pesoIngresado;
				menorPeso = pesoIngresado;
			}
			else
			{
				if (pesoIngresado > mayorPeso)
				{
					mayorPeso = pesoIngresado;
				}
				if (pesoIngresado < menorPeso) 
				{
					menorPeso = pesoIngresado;
				}
			}
			contador++;
		}
	}

document.write ("El mayor peso fue "+mayorPeso+" y el menor peso fue "+menorPeso);


}
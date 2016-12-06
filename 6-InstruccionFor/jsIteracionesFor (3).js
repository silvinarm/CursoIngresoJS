function Mostrar()
{
	var repeticiones;
	var contador;

	repeticiones = prompt ("Ingrese cantidad de Repeticiones");
	repeticiones = parseInt (repeticiones)

	while (repeticiones <1)
	{
		repeticiones = prompt ("Reingrese cantidad de repeticiones");
	}

	for (contador=0;contador<repeticiones;contador++)
	{
		document.write ("<br> Hola UTN FRA");
	}

}//FIN DE LA FUNCIÓN
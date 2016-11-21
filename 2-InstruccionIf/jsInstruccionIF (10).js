function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom;

	numeroRandom = Math.floor ((Math.random () *10)+1);
	console.log ("La nota es "+numeroRandom);
	if (numeroRandom > 8)	
	{
		alert ("Excelente");
	}
	else
	{
		if (numeroRandom < 4)
		{
			alert ("Vamos, la próxima se puede");
		}
		else
		{
			alert ("Aprobó");
		}
	}
	

}//FIN DE LA FUNCIÓN
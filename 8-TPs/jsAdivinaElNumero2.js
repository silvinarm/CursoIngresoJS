/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor ((Math.random () *100)+1);
	contadorIntentos = 0;
	//alert(numeroSecreto );
	console.log ("numero secreto es " + numeroSecreto); 
	document.getElementById ('numero').value = null;
	document.getElementById ('intentos').value = null;
	

}

function verificar()
{	var numero;

	numero = document.getElementById('numero').value;
	contadorIntentos++;
	console.log ("var intentos "+contadorIntentos);
	document.getElementById ('intentos').value = contadorIntentos;
	if (numero == numeroSecreto)
	{
		if (contadorIntentos >10)
		{
			alert ("Afortunado en el amor!!");
		}
		else 
		{
			if (contadorIntentos ==1)
			{
				alert ("Usted es un Psíquico”");
			}
			if (contadorIntentos ==2)
			{
				alert ("Excelente percepción");
			}
			if (contadorIntentos ==3)
			{
				alert ("Esto es suerte");
			}
			if (contadorIntentos ==4)
			{
				alert ("Excelente técnica”");
			}
			if (contadorIntentos ==5)
			{
				alert ("Usted está en la media");
			}
			if (contadorIntentos >5 && contadorIntentos<10)
			{
				alert ("Falta técnica");
			}
		}
	}


	

}
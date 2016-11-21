function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	console.log ("la edad es "+edad);
	if (edad <18 )
	{
		if (edad <13)
		{
			alert ("la persona es  un niño");
		}
		else
		{
			alert ("la persona es adolescente");
		}
	}
	else
	{
		alert ("la persona es un adulto");
	}
	




}//FIN DE LA FUNCIÓN
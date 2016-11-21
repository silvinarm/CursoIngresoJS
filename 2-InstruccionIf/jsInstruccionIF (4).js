function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	console.log ("la edad es "+edad);
	if (edad >12 && edad <18)
	{
		alert ("la persona es adolescente");
	}
	/*tambien se puede hacer un if dentro del if
	if (edad >12)
	{
		if (edad <18)
		{
			alert ("la persona es adolescente");
		}
	}*/

}//FIN DE LA FUNCIÓN
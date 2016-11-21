function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	console.log ("la edad es "+edad);
	if (edad <13 || edad >17)
	{
		alert ("la persona no es adolescente");
	}
	

}//FIN DE LA FUNCIÓN
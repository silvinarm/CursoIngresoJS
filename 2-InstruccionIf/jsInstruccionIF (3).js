function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;
	console.log ("la edad es "+edad);
	if (edad > 17)
	{	
		alert ("la persona es mayor de edad");
	} //aca cierra el if
	else
	{
		alert ("la persona es menor de edad");
	}


}//FIN DE LA FUNCIÓN
function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;

	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById ('estadoCivil').value;

	//console.info ("la edad es " +edad " y el estado civil es " +estadoCivil);

	if (edad > 17 && estadoCivil == "Soltero")
	{
		alert ("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN
function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	console.log ("Mes seleccionado: "+mesDelAño);
	switch (mesDelAño){
		case "Febrero":
			alert ("Este mes no tiene más de 29 días");
			break;
		default:
			alert ("Este mes tiene 30 o más días");
			break;
	}

	
	


}//FIN DE LA FUNCIÓN
/* 
	Realizar el algoritmo que pida dos números por prompt, 
	si son iguales que los multiplique, 
	si el primero es mayor que el segunto que los reste y 
	sino que los sume, mostrar el resultado por document.write
*/
function Mostar()
{
	var DiaSemana;
	
	DiaSemana = prompt ("Ingrese día de la semana");
	switch (DiaSemana){
		case "Sábado":
		case "Domingo":
			alert ("Es fin de semana");
			break;
		default:
			alert ("A trabajar!!!");
			break;
	}

}


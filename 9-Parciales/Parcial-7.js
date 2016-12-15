/* 
	Realizar el algoritmo que permita el ingreso por prompt de las notas
	(validar entre 0 y 10) y el sexo (validar el sexo "f" o "m") de 100
	alumnos, informar por alert:
	a) el promedio de notas totales
	b) la nota mas baja
	c) la cantidad de varones que su nota haya sido mayor o igual a 6
*/
function Mostrar()
{
	var notaIngresada;
	var sexo;
	var acumuladoNotas =0;
	var promedioNotas =0;
	var notaMasBaja =10;
	var varonesAprobados =0;
	var iteracion =0;
	var cantidadIteraciones =3;

	while (iteracion <cantidadIteraciones)
	{
		iteracion ++
		notaIngresada = prompt ("Ingresar nota");
		notaIngresada = parseInt (notaIngresada);
		while (notaIngresada < 0 || notaIngresada > 10)
		{
			notaIngresada = prompt ("Reingresar nota");
			notaIngresada = parseInt (notaIngresada);
		}
		sexo = prompt ("Ingrese sexo del alumno");
		while (sexo != 'f' && sexo != 'm')
		{
			sexo = prompt ("Ingrese sexo del alumno");	
		}
		acumuladoNotas = (acumuladoNotas + notaIngresada);
		if (notaIngresada < notaMasBaja)
		{
			notaMasBaja = notaIngresada;
		}
		if (notaIngresada >=6 && sexo == 'm')
		{
			varonesAprobados ++;
		}
	}

	promedioNotas = (acumuladoNotas / cantidadIteraciones);

	alert ("El promedio de notas es: "+promedioNotas+" la nota más baja es: "+notaMasBaja+" y la cantidad de varones aprobados es: "+varonesAprobados);

}//FIN DE LA FUNCIÓN
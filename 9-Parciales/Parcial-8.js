/* 
	Realizar el algoritmo que permita ingresar números positivos 
	(validar que sea positivo) hasta que el usuario quiera e informar
	al terminar el ingreso por document.write
	a) cantidad de numeros pares
	b) el promedio de los numeros ingresados
	c) la suma de todos los numeros
	d) el numero maximo y el minimo
*/
function Mostrar()
{
	var numeroIngresado;
	var cantidadPares=0;
	var promedio;
	var suma=0;
	var cantidadIngresados=0;
	var numeroMinimo;
	var numeroMaximo;
	var salir='n'

	while (salir != 's')
	{
		numeroIngresado = prompt ("Ingrese numero positivo");
		numeroIngresado = parseInt (numeroIngresado);
		while (numeroIngresado < 1)
		{
			numeroIngresado = prompt ("Ingrese numero positivo");
			numeroIngresado = parseInt (numeroIngresado);
		}
		cantidadIngresados ++;
		if (cantidadIngresados == 1)
		{
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
		}
		if (numeroIngresado > numeroMaximo)
		{

		}
		if (numeroIngresado%2 == 0)
		{
			cantidadPares ++;
		}
		suma = (suma+numeroIngresado);

		salir = prompt ("Si desea finalizar presione 's'");
	}

	promedio = (suma / cantidadIngresados);

	document.write ("La cantidad de números pares es: "+cantidadPares+", el promedio de los números ingresados es: "+promedio+", la suma de todos los números es: "+suma+", el número máximo es: "+numeroMaximo+" y el número mínimo es: "+numeroMinimo);
}
//FIN DE LA FUNCIÓN
function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while (contador < 5)
	{
		numeroIngresado = prompt ("Ingrese número");
		acumulador = acumulador + parseInt(numeroIngresado);
		/*contadorIntentos += 1;
	contadorIntentos++;----- Esta es la manera más utilizada
	contadorIntentos--;
	contadorIntentos/=2;*/
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
/* 
	1- Realizar el algoritmo que lea la base por ID de un 
	cuadrado e informar la superficie del mismo por alert
*/
function puntoUno()
{
	var base;
	var superficie;

	base = document.getElementById('base').value;
	superficie = (base*base);
	alert ("La superficie del cuadrado es "+superficie);

}

/*
	2- Realizar el algoritmo que lea un importe de un 
	producto por prompt y muestre el importe final 
	descontando un 25% por fin de temporada
*/
function puntoDos()
{
	var Importe;
	var ImporteFinal;

	Importe = prompt ("Indique el importe del producto");
	ImporteFinal = (Importe * 0.75);
	alert ("El importe final es: "+ImporteFinal);
}

/*
	3- Realizar el algoritmo que tome por ID tres datos: 
	precio1, precio2 y precio3 de una compra y luego muestre
	la suma y el promedio de los precios
*/
function puntoTres()
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;

	precio1 = document.getElementById ('precio1').value;
	precio2 = document.getElementById ('precio2').value;
	precio3 = document.getElementById ('precio3').value;
	precio1 = parseInt (precio1);
	precio2 = parseInt (precio2);
	precio3 = parseInt (precio3);
	suma = (precio1 + precio2 + precio3);
	promedio = (suma/3);
	alert ("La suma de los precios es: "+suma+" y el promedio es: "+promedio);
}

/*
	4- (IF) Realizar el algoritmo que pida dos números por prompt,
	lo sume e informe si el resultado de la suma es "positivo",
	"negativo" o "cero" por document.write
*/
function puntoCuatro()
{
	var numero1;
	var numero2;
	var suma;

	numero1 = prompt ("Ingrese número 1");
	numero2 = prompt ("Ingrese número 2");
	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);
	suma = (numero1+numero2);
	if (suma == 0)
	{
		document.write ("El resultado es cero");
	}
	else
	{
		if (suma > 0)
		{
			document.write ("El número es positivo");
		}
		else
		{
			document.write ("El número es negativo");
		}
	}
}

/*
	5- (SWITCH) Realizar el algoritmo que pida un MES por prompt
	si es "Diciembre" informar por Alert "Se vienen las fiestas",
	si es "Enero" informar por alert "comienza el año", de lo contrario
	informar por alert "no es enero, ni diciembre"
*/
function puntoCinco()
{
	var mes;

	mes = prompt ("Ingrese mes");
	switch (Mes) {
		case "Diciembre":
		alert ("Se vienen las fiestas");
		break;
		case "Enero":
		alert ("Comienza el año");
		break;
		default:
		alert ("No es enero, ni diciembre");
		break;
	}
}
/*
	6- Realizar el algoritmo que pida el peso en kilos (validar que sea mayor
	a 0, "cero") de cada uno de los 50 contenedores (pedir 50 veces) de un 
	déposito por prompt, e informar cuál fue el más pesado y cuál fue el menos pesado.

*/
function PuntoSeis()
{
	var contador;
	var pesoIngresado;
	var mayorPeso;
	var menorPeso;

	contador = 1;
	while (contador<51)
	{
		pesoIngresado = prompt ("Ingrese peso del contenedor número "+contador);
		pesoIngresado = parseInt (pesoIngresado);
		while (pesoIngresado > 0)
		{
			if (contador == 1)
			{
				mayorPeso = pesoIngresado;
				menorPeso = pesoIngresado;
			}
			else
			{
				if (pesoIngresado > mayorPeso)
				{
					mayorPeso = pesoIngresado;
				}
				if (pesoIngresado < menorPeso) 
				{
					menorPeso = pesoIngresado;
				}
			}
			contador++;
		}
	}

document.write ("El mayor peso fue: "+mayorPeso+" y el menor peso fue "+menorPeso);


}

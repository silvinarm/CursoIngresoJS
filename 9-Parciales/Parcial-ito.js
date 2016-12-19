/*Parcial*/

/*ejercicio 1*/

function Mostrar ()
{
	var base;
	var perimetro;

	base = document.getElementById('base');
	base = parseInt (base);
	perimetro = (base*4);
	alert ("El perímetro del cuadrado es: "+perimetro);

}

/*ejercicio 2*/

function Mostrar ()
{
	var ImporteIngresado;
	var ImporteFinal;

	ImporteIngresado = prompt ("Ingrese el importe del producto");
	ImporteIngresado = parseInt (ImporteIngresado);
	ImporteFinal = (ImporteIngresado * 1.21);
	alert ("El importe final es: $"+ImporteFinal);

}

/*ejercicio 3*/

function Mostrar ()
{
	var largo;
	var ancho;
	var perimetro;
	var cantidadAlambre;

	largo = document.getElementById ('largo');
	largo = parseInt (largo);
	ancho = document.getElementById ('ancho');
	ancho = parseInt (ancho);
	perimetro = ((largo*2)+(ancho*2));
	cantidadAlambre = (perimetro * 3);
	alert ("Se necesitan "+cantidadAlambre+" metros de alambre");

}

/*ejercicio 4*/

function Mostrar ()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt ("Ingrese el primer número");
	numeroUno = parseInt (numeroUno);
	numeroDos = prompt ("Ingrese el segundo número");
	numeroDos = parseInt (numeroDos);
	if (numeroUno == numeroDos)
	{
		resultado = (numeroUno*numeroDos);
	}
	else
	{
		if (numeroUno > numeroDos)
		{
			resultado = (numeroUno-numeroDos);
		}
		else
		{
			resultado = (numeroUno+numeroDos);
		}

	document.write ("El resultado es: "+resultado);
	
}

/*ejercicio 5*/

function Mostrar ()
{
	var dia;

	dia = prompt ("Ingrese día de la semana");
	switch (dia){
		case "Sabado":
		case "Domingo":
			alert ("Es fin de semana");
			break;
		default:
			alert ("A trabajar!!");
			break;
	}
}

/*ejercicio 6*/

function Mostrar ()
{
	var contador =0;
	var importe;
	var mayorImporte;
	var menorImporte;

	while (contador <24)
	{
		contador ++;
		importe = prompt ("Ingrese el importe correspondiente al día "+contador);
		importe = parseInt (importe);
		while (importe < 1)
		{
			importe = prompt ("Reingrese el importe correspondiente al día "+contador);
			importe = parseInt (importe);
		}
		if (contador ==1)
		{
			mayorImporte = importe;
			menorImporte = importe;
		}
		else
		{
			if (importe > mayorImporte)
			{
				mayorImporte = importe;
			}
			if (importe < menorImporte)
			{
				menorImporte = importe;
			}
		}

	}

	document.write ("El mayor importe de ventas fue: "+mayorImporte+" y el menor importe de ventas fue: "+menorImporte);
}

/*ejercicio 7*/

function Mostrar ()
{
	var nota;
	var sexo;
	var sumaNotas=0;
	var promedio=0;
	var notaMasBaja=10;
	var varonesAprobados=0;
	var contador=0;

	while (contador < 100)
	{
		contador ++;
		nota = prompt ("Ingresar nota del alumno "+contador);
		nota = parseInt (nota);
		while (nota < 0 || nota > 10)
		{
			nota = prompt ("Reingresar nota del alumno "+contador);
			nota = parseInt (nota);
		}
		sexo = prompt ("Ingrese el sexo del alumno "+contador+", 'f' para femenino y 'm' para masculino");
		while (sexo != 'f' && sexo != 'm')
		{
			sexo = prompt ("Reingrese el sexo del alumno "+contador+", 'f' para femenino y 'm' para masculino");
		}
		sumaNotas = (sumaNotas+nota);
		if (nota < notaMasBaja)
		{
			notaMasBaja = nota;
		}
		if (nota >=6 && sexo ='m')
		{
			varonesAprobados ++;
		}

	}
	promedio = (sumaNotas/100);
	alert ("El promedio de las notas totales es: "+promedio+", la nota más baja es: "+notaMasBaja+" y la cantidad de varones aprobados es: "+varones aprobados);


/*ejercicio 8*/

function Mostrar ()
{
	var numeroIngresado;
	var salir = 'n';
	var numerosPares=0;
	var contadorVueltas=0;
	var promedio; 
	var suma = 0;
	var numeroMaximo;
	var numeroMinimo;

	while (salir !='s')
	{
		contadorVueltas ++;
		numeroIngresado = prompt ("Ingrese un número positivo");
		numeroIngresado = parseInt (numeroIngresado);
		while (numeroIngresado<1)
		{
			numeroIngresado = prompt ("Ingrese un número positivo");
			numeroIngresado = parseInt (numeroIngresado);
		}
		if (numeroIngresado%2 == 0)
		{
			numerosPares ++;
		}
		suma = (suma+numeroIngresado);
		if (contadorVueltas == 1)
		{
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
		}
		else
		{
			if (numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
			if (numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
		}

	}
	promedio = (suma/contadorVueltas);
	document.write ("La cantidad de números pares es: "+numerosPares+", el promedio de todos los números ingresados es: "+promedio+", la suma de todos los números es: "+suma+", el número máximo es: "+numeroMaximo+" y el número mínimo es: "+numeroMinimo);

 




}
}



/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

/*<input type="text"  placeholder="Ingrese Precio" id="PrecioUno">
				<input type="text"  placeholder="Ingrese Precio" id="PrecioDos">
				<input type="text"  placeholder="Ingrese Precio" id="PrecioTres">*/


function Sumar () 
{	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var sumar;
	console.log ("hola");

	PrecioUno = document.getElementById('PrecioUno').value;
	PrecioUno = parseInt (PrecioUno);
	PrecioDos = document.getElementById('PrecioDos').value;
	PrecioDos = parseInt (PrecioDos);
	PrecioTres = document.getElementById('PrecioTres').value;
	PrecioTres = parseInt (PrecioTres);
	sumar = (PrecioUno + PrecioDos + PrecioTres);
	alert  (sumar);
	}

function Promedio () 
{	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var promedio;

	PrecioUno = document.getElementById('PrecioUno').value;
	PrecioUno = parseInt (PrecioUno);
	PrecioDos = document.getElementById('PrecioDos').value;
	PrecioDos = parseInt (PrecioDos);
	PrecioTres = document.getElementById('PrecioTres').value;
	PrecioTres = parseInt (PrecioTres);
	promedio = ((PrecioUno + PrecioDos + PrecioTres)/3);
	alert  (promedio);
	
}
function PrecioFinal () 
{	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var preciofinal;

	PrecioUno = document.getElementById('PrecioUno').value;
	PrecioUno = parseInt (PrecioUno);
	PrecioDos = document.getElementById('PrecioDos').value;
	PrecioDos = parseInt (PrecioDos);
	PrecioTres = document.getElementById('PrecioTres').value;
	PrecioTres = parseInt (PrecioTres);
	preciofinal = ((PrecioUno + PrecioDos + PrecioTres)*1.21);
	alert  (preciofinal);
	
	
}
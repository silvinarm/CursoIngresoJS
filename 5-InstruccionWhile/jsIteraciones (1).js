function Mostrar()
{
	//alert('iteración while');
	var contador;
	contador = 0;

	document.write ("<h1>Bienvenidos</h1>");

	while (contador<10)
	{
		contador++; 
		document.write ("<br>El contador es: "+contador);
	}
	document.write  ("<p>Terminó</p>");

}//FIN DE LA FUNCIÓN
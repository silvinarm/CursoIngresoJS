function Mostrar()
{
	//alert('iteración while');
	var contador;
	contador = 10;

	document.write ("<h1>Bienvenidos</h1>");

	while (contador>0)
	{
		document.write ("<br>El contador es: "+contador);
		contador--; 
	}
	document.write  ("<p>Terminó</p>");

}//FIN DE LA FUNCIÓN
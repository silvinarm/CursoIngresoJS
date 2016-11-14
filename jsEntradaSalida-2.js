/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/

/*para definir una variable pongo var el_nombre ;
luego defino el_nombre = "xxx"

EJ

function Mostar()
{
	var producto ;
	producto = "samsung";
	alert (producto);
}
si lo que inserto es un valor variable va a mostrar ese valor

para concatenar usamos el + -> Ejemplo alert ("su producto es: " +producto+ " el precio es " +precio);
*/

function Mostar()
{
	var producto ;
	producto = prompt ("ingrese marca","sin marca");
	var precio ;
	precio = prompt ("ingrese precio","999");
	alert ("su producto es: " +producto+ " el precio es " +precio);
}


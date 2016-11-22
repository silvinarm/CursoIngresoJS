/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{	var CantidadLamparas;
	var Marca;
	var ValorUnitario;
	var Precio;
	var PrecioSinImpuesto;
	var PrecioFinal;
	var Impuesto;

	CantidadLamparas = document.getElementById('Cantidad').value;
	Marca = document.getElementById ('Marca').value;
	
	ValorUnitario = 35;
	console.log (CantidadLamparas+" lámparas de la marca "+Marca);

	Precio = (CantidadLamparas*ValorUnitario);
	console.log ("El precio sin descuento es $"+Precio);
	if (CantidadLamparas>5)
	{
		PrecioSinImpuesto = (CantidadLamparas*ValorUnitario*0.5);
	}
	else
	{
		if (CantidadLamparas <3)
		{
			PrecioSinImpuesto = (CantidadLamparas*ValorUnitario);
		}
		else
		{
			if (CantidadLamparas == 5)
			{
				if (Marca == 'ArgentinaLuz')
				{
					PrecioSinImpuesto = (CantidadLamparas*ValorUnitario*0.6);
				}
				else 
				{
					PrecioSinImpuesto = (CantidadLamparas*ValorUnitario*0.7);
				}
			}
			if (CantidadLamparas == 4)
			{
				if (Marca == 'ArgentinaLuz'|| Marca == 'FelipeLamparas' )
				{
					PrecioSinImpuesto = (CantidadLamparas*ValorUnitario*0.75);
				}	
				else
				{
					PrecioSinImpuesto = (CantidadLamparas*ValorUnitario*0.8);
				}
			}
			if (CantidadLamparas == 3)
			{
				if (Marca == 'ArgentinaLuz')
				{
					PrecioSinImpuesto = (CantidadLamparas*ValorUnitario*0.85);
				}
				else 
				{
					if (Marca == 'FelipeLamparas')
					{
						PrecioSinImpuesto = (CantidadLamparas*ValorUnitario*0.9);
					}
					else
					{
						PrecioSinImpuesto = (CantidadLamparas*ValorUnitario*0.95);
					}
				}

			}


		}
	}
	if (PrecioSinImpuesto>=120)
	{
		PrecioFinal = (PrecioSinImpuesto*1.10);
		Impuesto = (PrecioFinal-PrecioSinImpuesto);
		alert ("IIBB usted pagó "+Impuesto);
	}
	else
	{
		PrecioFinal = PrecioSinImpuesto;
	}
	document.getElementById('precioDescuento').value = PrecioFinal;





 	
}

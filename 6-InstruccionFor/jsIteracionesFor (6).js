function Mostrar()

{
	var numerorandom;
	var contador = 0;
	var contadoruno = 0;
	var contadordos = 0;
	var contadortres = 0;
	var contadorcuatro = 0;
	var contadorcinco = 0;
	var contadorseis = 0;
	var contadorsiete = 0;
	var contadorocho = 0;
	var contadornueve = 0;
	var contadordiez = 0;
	var total;
	var contadorpar = 0;
	var contadorimpar = 0;
	var sumapares = 0;
	var sumaimpares = 0;
	var salierontodos =0;
	var contadorsalierontodos= 0;

	for (contador=0;contador<10000;contador++)
	{
		numerorandom = Math.floor ((Math.random () *10 )+1);
		total = (contadoruno+contadordos+contadortres+contadorcuatro+contadorcinco+contadorseis+contadorsiete+contadorocho+contadornueve+contadordiez);
		switch (numerorandom) {
			case 1:
			contadoruno++;
			break;
			case 2:
			contadordos++;
			break;
			case 3:
			contadortres++;
			break;
			case 4:
			contadorcuatro++;
			break;
			case 5:
			if ((contadorcinco/total*100)<=8)
			{
				contadorcinco++;
			}
			else
			{
				contador--;
				continue;
			}
			break;
			case 6:
			contadorseis++;
			break;
			case 7:
			contadorsiete++;
			break;
			case 8:
			contadorocho++;
			break;
			case 9:
			contadornueve++;
			break;
			case 10:
			contadordiez++;
			break;
		}
		if (numerorandom%2 == 0)
		{
			contadorpar ++;
			sumapares = (sumapares+numerorandom);
		} 
		else
		{
			contadorimpar ++;
			sumaimpares = (sumaimpares+numerorandom);
		}
		if (contadoruno > 0 && contadordos > 0 && contadortres >0 && contadorcuatro >0 && contadorcinco >0 && contadorseis >0 && contadorsiete >0 && contadorocho >0 && contadornueve >0 && contadordiez >0)
		{
			contadorsalierontodos ++;
			if (contadorsalierontodos ==1) 
			{
				console.log ("Salieron todos los numeros en la iteracion: "+contador);
			}
		}

	}
	total = (contadoruno+contadordos+contadortres+contadorcuatro+contadorcinco+contadorseis+contadorsiete+contadorocho+contadornueve+contadordiez);
	console.log ("El total de iteraciones es: "+total);
	console.log ("Número 1: "+contadoruno+ " y salió "+parseInt(contadoruno/total*100)+"% de las veces" );
	console.log ("Número 2: "+contadordos+ " y salió "+parseInt(contadordos/total*100)+"% de las veces" );
	console.log ("Número 3: "+contadortres+ " y salió "+parseInt(contadortres/total*100)+"% de las veces" );
	console.log ("Número 4: "+contadorcuatro+ " y salió "+parseInt(contadorcuatro/total*100)+"% de las veces" );
	console.log ("Número 5: "+contadorcinco+ " y salió "+parseInt(contadorcinco/total*100)+"% de las veces" );
	console.log ("Número 6: "+contadorseis+ " y salió "+parseInt(contadorseis/total*100)+"% de las veces" );
	console.log ("Número 7: "+contadorsiete+ " y salió "+parseInt(contadorsiete/total*100)+"% de las veces" );
	console.log ("Número 8: "+contadorocho+ " y salió "+parseInt(contadorocho/total*100)+"% de las veces" );
	console.log ("Número 9: "+contadornueve+ " y salió "+parseInt(contadornueve/total*100)+"% de las veces" );
	console.log ("Número 10: "+contadordiez+ " y salió "+parseInt(contadordiez/total*100)+"% de las veces" );
	console.log ("El porcentaje de números pares es: "+parseInt(contadorpar/total*100)+"%");
	console.log ("El porcentaje de números impares es: "+parseInt(contadorimpar/total*100)+"%");
	console.log ("La suma de los pares es: "+sumapares);
	console.log ("La suma de los impares es: "+sumaimpares);
}



//generar un numero random del 1 al 10

/*{
	var numeroIngresado;
	var contador;
	var numerosPares;
	var contadorPares;

	numeroIngresado = prompt ("Ingresar número");
	numeroIngresado = parseInt (numeroIngresado);
	contadorPares = 0;

	for (contador=1;contador<=numeroIngresado;contador++)
	{
		if (contador%2==0)
		{
			contadorPares++;
		}
	}
	document.write (contadorPares);




}//FIN DE LA FUNCIÓN*/
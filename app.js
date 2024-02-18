/*let titulo = document.querySelector('h1');
titulo.innerHTML ='Bienvenidos al mundo dev';

let parrafo = document.querySelector('p');
parrafo.innerHTML ='Ingresa un numero del 1 al 10';

function intentoDeUsuario(){
	alert('Click desde el boton');
}*/

let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return;
}
	/*asignarTextoElemento('h1','Juego del numero secreto!');
	asignarTextoElemento('p','Indica un numero del 1 al 10');*/
	
function verificarIntento(){
	/*alert('Click desde el boton');*/
	/*let numeroDeUsuario = document.querySelector('input');*/
	let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);		
	if (numeroDeUsuario === numeroSecreto){
		asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else{
		//el usuaario no acerto
		if (numeroDeUsuario > numeroSecreto){
			asignarTextoElemento('p','El numero secreto es menor');
		}else{
			asignarTextoElemento('p','El numero secreto es mayor');
		}
		intentos++;
		limpiarCaja();
	}
	return;
}

function limpiarCaja(){
	let valorCaja = document.querySelector('#valorUsuario').value = '';
	/*valorCaja.value = '';   dar valor 2da forma*/ 
}

function condicionesIniciales(){
	asignarTextoElemento('h1','Juego del numero secreto!');
	asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
	numeroSecreto = generarNumeroSecreto();
	intentos = 1;
}

function generarNumeroSecreto(){
	let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
	
	//si ya sorteamos todos los numeros
	if(listaNumerosSorteados.length == numeroMaximo){
		asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
	}else{
		//si el numero generado esta incluido en la lista
		if(listaNumerosSorteados.includes(numeroGenerado)){
			return generarNumeroSecreto();
		}else{
			listaNumerosSorteados.push(numeroGenerado);
			return numeroGenerado;
		}	
	}
	
}

function resetGame(){
	//limpiar la caja
	limpiarCaja();
	//reestablecer el texto p
	condicionesIniciales();
	//generar el numero aleatorio	
	//desactivar boton de nuevo juego
	document.querySelector('#reiniciar').setAttribute('disabled',true);
	//inicializar el numero de intentos	
}

condicionesIniciales();



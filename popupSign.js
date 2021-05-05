var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

/*overlay.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});*/

var btnAbrirPopupRegistro = document.getElementById('btn-abrir-popup-registro'),
	overlayRegistro = document.getElementById('overlay-registro'),
	popupRegistro = document.getElementById('popup-registro'),
	btnCerrarPopupRegistro = document.getElementById('btn-cerrar-popup-registro');

	btnAbrirPopupRegistro.addEventListener('click', function(){
	overlayRegistro.classList.add('active');
	popupRegistro.classList.add('active');
});

btnCerrarPopupRegistro.addEventListener('click', function(e){
	e.preventDefault();
	overlayRegistro.classList.remove('active');
	popupRegistro.classList.remove('active');
});

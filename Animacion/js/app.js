/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
//console.log( "Antes" );
//alert( "Evento" );
/*document.addEventListener('deviceready', function() {
    alert( "Evento" );
    console.log('hola');
}, false);*/
var url='http://54.191.211.214/elearning/'; 

function clase(num,tit){
	var iframe='<iframe class="anima" src="'+url+num+'"> </iframe>';
	//var iframe='hola';
    $('#memo').val(iframe);
    $('#titulo').html(tit);
    $('#animacion').html(iframe);
    //var nu = $('#memo').val();
    //console.log(nu);
    
    window.location.href = "#drawer-starred";
}

function limpiar(){
	$('#titulo').html('nada');
	$('#animacion').html('nada');
	window.location.href = "#drawer-home";
}
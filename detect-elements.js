/*
* Script para detectar objectos en pantalla
* Por: Harold "Eres un sol" Muñoz
*/

//Elementos que seran verificados
var $elem_1 = $('element_1');
var $elem_2 = $('element_2');

$(function() {
    
    (isVisible(elem_1))? elem_2.addClass('slidein-left') : return 0;
    
});

//Funcion que detecta el scroll
$(window).scroll(function() {

    (isVisible(elem_1))? elem_2.addClass('slidein-left') : return 0;
    
});

//Funcion para verificar que algun elemento este visible en pantalla
function isVisible(_element,test = false){
    var $elem = _element;
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    if(test)
        console.log('dtop:',docViewTop,'dbottom:',docViewBottom);			

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    if(test)
        console.log('etop:',elemTop,'ebottom:',elemBottom);			

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

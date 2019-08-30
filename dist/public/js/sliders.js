"use strict";

var sliders = $('#sliders');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');
$('#sliders section:last').insertBefore('#sliders section:first');
sliders.css('margin-left', '-' + 100 + '%');

function moverD() {
  sliders.animate({
    marginLeft: '-' + 200 + '%'
  }, 700, function () {
    $('#sliders section:first').insertAfter('#sliders section:last');
    sliders.css('margin-left', '-' + 100 + '%');
  });
}

function moverI() {
  sliders.animate({
    marginLeft: 0
  }, 700, function () {
    $('#sliders section:last').insertBefore('#sliders section:first');
    sliders.css('margin-left', '-' + 100 + '%');
  });
}

siguiente.on('click', function () {
  moverD();
});
anterior.on('click', function () {
  moverI();
});
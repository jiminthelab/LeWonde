var lectureZen = document.querySelector('.btn_lecture_zen');
var overlay = '.fond_overlay.offre_decouverte';
var ad = '.overlay.offre_decouverte';

lectureZen.click();

function checkExist(dom) {
  return document.querySelector(dom);
}

var checkExistence = setInterval(function() {
  if (checkExist(ad) && checkExist(overlay)) {
    checkExist(ad).remove();
    checkExist(overlay).remove();
    clearInterval(checkExistence);
  }
}, 500);


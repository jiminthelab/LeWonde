var overlay = '.fond_overlay.offre_decouverte';
var ad      = '.overlay.offre_decouverte';
var adExists;
var adsPopped;

function checkExist(dom) {
  return document.querySelector(dom);
}

function addToList() {
  var listElems = [];
  for (var i in arguments) {
    listElems.push(arguments[i])
  }
  return listElems;
}

function passTest(valid) {
  for (var val of valid) {
    return !val;
  }
}

function reccursivCheck() {
  var valid = addToList(overlay, ad).map((e) => checkExist(e) !== null);
  return passTest(valid);
}

document.querySelector('.btn_lecture_zen').click();

adExists = setInterval(function() {
  if (!reccursivCheck()) {
    checkExist(ad).remove();
    checkExist(overlay).remove();
    clearInterval(adExists);    
  }
}, 500);

adsPopped = checkExist(ad) && checkExist(overlay);

function loopImageBox(target){
  for (var i = 0; i < 5; i++) {
    if(i == target){
      document.querySelectorAll('.imageBox')[i].setAttribute('id', 'imageBoxHover');
      modal.style.display = 'block';
      imgModal.src = document.querySelectorAll('.imageEvent')[i].src;
      captionModal.innerHTML = "<dfn>" + document.querySelectorAll('.imageEvent')[i].title + "</dfn>";
    }
    else{
      document.querySelectorAll('.imageBox')[i].setAttribute('id', ' ');
    }
  }
}

function aFunction(){
  if((document.querySelector('.one').getAttribute('id') == null) || (document.querySelector('.one').getAttribute('id') == " ") ){
    document.querySelector('.one').setAttribute('id', 'imageBoxHover');
    document.querySelector('.makan').setAttribute('onmouseout', 'aThirdFunction()');
  }else{
    return;
  }
}
function aSecFunction() {
  document.querySelector('.makan').setAttribute('onmouseout', ' ');
  loopImageBox(0);
}
function aThirdFunction() {
  document.querySelector('.one').setAttribute('id', ' ');
}

function bFunction(){
  if((document.querySelector('.two').getAttribute('id') == null) || (document.querySelector('.two').getAttribute('id') == " ")){
    document.querySelector('.two').setAttribute('id', 'imageBoxHover');
    document.querySelector('.kumpul').setAttribute('onmouseout', 'bThirdFunction()');
  }else{
    return;
  }
}
function bSecFunction() {
  document.querySelector('.kumpul').setAttribute('onmouseout', ' ');
  loopImageBox(1);
}
function bThirdFunction() {
  document.querySelector('.two').setAttribute('id', ' ');
}


function cFunction(){
  if((document.querySelector('.three').getAttribute('id') == null) || (document.querySelector('.three').getAttribute('id') == " ")){
    document.querySelector('.three').setAttribute('id', 'imageBoxHover');
    document.querySelector('.cukur').setAttribute('onmouseout', 'cThirdFunction()');
  }
  else{
    return;
  }
}
function cSecFunction() {
  document.querySelector('.cukur').setAttribute('onmouseout', ' ');
  loopImageBox(2);
}
function cThirdFunction() {
  document.querySelector('.three').setAttribute('id', ' ');
}


function dFunction(){
  if((document.querySelector('.four').getAttribute('id') == null) || (document.querySelector('.four').getAttribute('id') == " ")){
    document.querySelector('.four').setAttribute('id', 'imageBoxHover');
    document.querySelector('.obrolan').setAttribute('onmouseout', 'dThirdFunction()');
  }
  else{
    return;
  }
}
function dSecFunction() {
  document.querySelector('.obrolan').setAttribute('onmouseout', ' ');
  loopImageBox(3);
}
function dThirdFunction() {
  document.querySelector('.four').setAttribute('id', ' ');
}


function eFunction(){
  if((document.querySelector('.five').getAttribute('id') == null) || (document.querySelector('.five').getAttribute('id') == " ")){
    document.querySelector('.five').setAttribute('id', 'imageBoxHover');
    document.querySelector('.malam').setAttribute('onmouseout', 'eThirdFunction()');
  }

}
function eSecFunction() {
  document.querySelector('.malam').setAttribute('onmouseout', ' ');
  loopImageBox(4);
}
function eThirdFunction() {
  document.querySelector('.five').setAttribute('id', ' ');
}

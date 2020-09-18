//Get Modal
var modal = document.getElementById('myModal');

//Get the image
var imgModal = document.getElementById('myImg');
var captionModal = document.getElementById('caption-modal');
const imageContent = document.querySelectorAll('.imageEvent')

for (let listImage of imageContent){
  listImage.addEventListener('click', function(event){
    const target = event.target;

    modal.style.display = 'block';
    imgModal.src = target.src;
    captionModal.innerHTML = "<dfn>" + target.title + "</dfn>";
  })
}


var kamarSatu = document.querySelectorAll('#choice')[0];
var kamarDua = document.querySelectorAll('#choice')[1];
var kamarTiga = document.querySelectorAll('#choice')[2];

kamarSatu.onclick = function (){
  modal.style.display = 'block';
  imgModal.src = this.src;
  captionModal.innerHTML = "<dfn>" + this.title + "</dfn>";
}

kamarDua.onclick = function (){
  modal.style.display = 'block';
  imgModal.src = this.src;
  captionModal.innerHTML = "<dfn>" + this.title + "</dfn>";
}

kamarTiga.onclick = function (){
  modal.style.display = 'block';
  imgModal.src = this.src;
  captionModal.innerHTML = "<dfn>" + this.title + "</dfn>";
}

//Close The Modal
var span = document.getElementsByClassName('close')[0];

span.onclick = function (){
  modal.style.display = 'none';
}

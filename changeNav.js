const showMenu = document.querySelector('#menuNav');
const showListMenu = document.querySelectorAll('.listMenu');
var a=0;

showMenu.addEventListener('click', showMenuBtn);
function showMenuBtn(){
  if (a==0){
    document.querySelector('.dropdown-nav').style.display = "block";
    a=a+ 1;
  }
  else{
    document.querySelector('.dropdown-nav').style.display = "none";
    a=a-1;
  }
}

for(let viewList of showListMenu){
  viewList.addEventListener('click', function(event){
    const eventListBtn = event.eventListBtn;
    document.querySelector('.dropdown-nav').style.display = "none";
    a=a-1;
  })
}

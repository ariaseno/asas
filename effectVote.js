const countSatu = document.querySelector('#countSatu');
const countDua = document.querySelector('#countDua');
const countTiga = document.querySelector('#countTiga');
let check = '0';
var a=0;
var updateVar = 0;

function action(count){
  count.innerText++;
}
function update(){
  if (updateVar == 0) {
    alert('click 1x Gambar Kamar Untuk Memilih!');


    const input = document.querySelectorAll("#choice")
    for(let kamar of input){
      kamar.addEventListener('click', function(event){
        const target = event.target;

        if (target.classList.contains('satu')){
          if (check === '0') {
            alert("Terima kasih telah memilih!");
            modal.style.display = 'block';
            imgModal.src = target.src;
            captionModal.innerHTML = "<dfn>" + target.title + "</dfn>";
            document.querySelectorAll('.buttonVote')[0].style.backgroundColor = '#bbb';
            document.getElementById('btn').removeAttribute('href');
            action(countSatu);
            check++;
          }
          else{
            return;
          }
        };

        if (target.classList.contains('dua')){
          if (check === '0') {
            alert("Terima kasih telah memilih!");
            document.querySelectorAll('.buttonVote')[0].style.backgroundColor = '#bbb';
            document.getElementById('btn').removeAttribute('href');
            action(countDua);
            check++;
          } else{
            return;
          }

        };

        if (target.classList.contains('tiga')){
          if (check === '0') {
            alert("Terima kasih telah memilih!");
            document.querySelectorAll('.buttonVote')[0].style.backgroundColor = '#bbb';
            document.getElementById('btn').removeAttribute('href');
            action(countTiga);
            check++;
          } else{
              return;
          }
        };
      });
    };
    updateVar++;
  }
  else{
    return;
  }


};
function history(){
  if (a==0) {
    document.getElementById("votingTable").style.display = "table";
    document.querySelectorAll('.buttonVote')[1].style.backgroundColor = '#bbb';
    a++;
  }
  else{
    document.getElementById("votingTable").style.display = "none";
    document.querySelectorAll('.buttonVote')[1].style.removeProperty("background-color");
    a--;
  }
}

document.getElementById("click").addEventListener('click', update);
document.getElementById("historyVote").addEventListener('click', history);

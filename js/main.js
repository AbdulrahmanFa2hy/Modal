let modal = document.getElementById('the-modal')
let modalContent = document.getElementById('img')
let closeModal = document.getElementsByClassName('close')[0]
let caption = document.getElementsByClassName('caption')[0]
let img = document.getElementById('the-img')


img.addEventListener('click', function () {
  modalContent.src = this.src;
  caption.innerHTML = this.alt;
  modal.style.display = 'block'
})

closeModal.onclick = function () {
  this.parentElement.style.display = 'none'
}

document.onkeydown = function(ev){
  if(ev.keyCode == '27'){
    modal.style.display = 'none'
  }
}
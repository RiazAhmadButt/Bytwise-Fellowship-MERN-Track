let modalBtn = document.querySelector('#modalBtn');
let closeBtn = document.querySelector('#closeBtn');
let modalData = document.querySelector('#modalData');

modalBtn.addEventListener('click', function() {
  modalData.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modalData.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modalData) {
    modalData.style.display = 'none';
  }
});
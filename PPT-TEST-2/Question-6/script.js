const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function openModal() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Disable scrolling
}

function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling
}

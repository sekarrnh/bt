const lihatDeskripsi = document.querySelectorAll('.lihat-deskripsi');
const tutupDeskripsi = document.querySelectorAll('.tutup-deskripsi');

lihatDeskripsi.forEach((button) => {
  button.addEventListener('click', () => {
    const deskripsi = button.nextElementSibling;
    deskripsi.style.display = 'block';
  });
});

tutupDeskripsi.forEach((button) => {
  button.addEventListener('click', () => {
    const deskripsi = button.parentNode;
    deskripsi.style.display = 'none';
  });
});

const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
});
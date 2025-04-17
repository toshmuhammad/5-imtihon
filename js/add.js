const form = document.querySelector('#formLogin');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const price = document.getElementById('price').value.trim();
  const description = document.getElementById('desc').value.trim();

  if (!name || !price || !description) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  let cars = JSON.parse(localStorage.getItem('cars')) || [];
  cars.unshift({ name, price, description });
  localStorage.setItem('cars', JSON.stringify(cars));

  window.location.href = 'index.html';
});

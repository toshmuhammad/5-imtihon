// bu kod logindan otish uchun start
const isLoggedIn = localStorage.getItem('isLoggedIn');
if (isLoggedIn !== 'true') {
  window.location.href = 'login.html';
}
const logoutBtn = document.getElementById('logoutBtn');

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
  });
}
// bu kod logindan otish uchun end


// bu kod dark mode light mode uchun start
const toggleBtn = document.getElementById("orqaFon");
const malumotlars = document.querySelector(".malumotlar")
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// bu kod dark mode light mode uchun end




const malumotlar = document.querySelector('.malumotlar')
fetch("https://json-api.uz/api/project/fn37/cars")
  .then(response => {
    if (!response.ok) {
      throw new Error("sizda hato yoq anu tarmoqda xato bor: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("kegan narsa:", data);
    data.data.forEach(car => {
      malumotlar.innerHTML += `
      <div class="card">
          <h3>${car.name}</h3>
          <p>${car.price}</p>
          <p>${car.description}</p>
        </div>`;
    });
  })
  .catch(error => {
    console.error("nimadir xato siz buni bilarmidingiz:", error);
  });


let localCars = JSON.parse(localStorage.getItem('cars')) || [];
localCars.forEach(car => {
  malumotlar.innerHTML += `
    <div class="card">
      <h3>${car.name}</h3>
      <p>${car.price}</p>
      <p>${car.description}</p>
    </div>`;
});
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
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// bu kod dark mode light mode uchun end


export function localAddProduct(what, where) {
  const
}



fetch("https://json-api.uz/api/project/fn37/cars", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    ism: "Toshmuhammad",
    yosh: 15
  })
})
.then(response => response.json())
.then(data => {
  console.log("Javob:", data);
})
.catch(error => {
  console.error("Xatolik:", error);
})
.finally(() => {});
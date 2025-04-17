// bu kod logindan otish uchun. start
const form = document.getElementById('formLogin');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (username === 'fn37' && password === 'fn37') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Login yoki parol notogri. Login: fn37 Parol: fn37');
    }
});
// bu kod logindan otish uchun. end
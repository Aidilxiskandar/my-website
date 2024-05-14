document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check (In a real application, you'd validate against a database)
    if (username === 'user' && password === 'password'){
        window.location.href = 'main.html';
    } else {
        alert('Invalid username or password');
    }
});

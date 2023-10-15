// Simulated user data
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

document.getElementById('login-button').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirect to the user's dashboard
        // Replace this with actual logic
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
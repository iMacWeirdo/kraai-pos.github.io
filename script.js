document.getElementById('loginForm').onsubmit = async function(event) {
    event.preventDefault();
    const username = this[0].value;
    const password = this[1].value;

    const response = await fetch('https://script.google.com/macros/s/AKfycbzN_eTpTZNbfdkleUqx1zQYbhCurCVE7a7mdkJ-0LJVceeWxw6__mWhO9HGhSHVuJ8/exec', {
        method: 'POST',
        body: JSON.stringify({ action: 'login', username, password }),
        headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();
    alert(result);
};

function createAccount() {
    // Similar fetch call to create user
}

function processPayment() {
    // Implement payment processing logic
}

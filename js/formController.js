document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = loginForm.elements['email'].value;
        const password = loginForm.elements['password'].value;

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: email, password: password }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Falha no login');
                }
                return response.json();
            })
            .then(data => {
                if (data.token) {
                    alert('Login bem-sucedido!');
                    console.log('Login bem-sucedido:', data);
                    window.location.href = 'administracao.html';
                } else {
                    alert('Erro no login. Verifique suas credenciais.');
                    console.log('Erro no login:', data);
                }
            })
            .catch(error => {
                alert('Erro no login: ' + error.message);
                console.error('Erro na requisição:', error);
            });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        console.log('Enviando Formulário...'); 
        fetch('http://localhost:3001/adicionarAnimal', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                console.error('Resposta do Servidor:', response); 
                throw new Error('Falha no envio dos dados');
            }
            return response.text();
        })
        .then(data => {
            console.log('Resposta Recebida:', data); 
            alert('Animal adicionado com sucesso!');
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao adicionar animal.');
        });
    });
});

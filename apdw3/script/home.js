const url = 'https://go-wash-api.onrender.com/api/auth/address';

async function mostrarEnderecos() {
    const token = localStorage.getItem('token');

    let resposta = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });
    let data = await resposta.json();

    const container = document.querySelector('.conteiner');
      data.data.forEach(endereco => {
        const enderecoElement = document.createElement('p');
        enderecoElement.textContent = endereco.formatted_address;
        container.appendChild(enderecoElement);
      });
    
}

document.addEventListener("DOMContentLoaded", mostrarEnderecos);
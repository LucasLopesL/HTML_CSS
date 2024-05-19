const url = "https://go-wash-api.onrender.com/api/auth/address";

async function cadastrarEndereco() {
  const token = localStorage.getItem('token');

  var title = document.getElementById("title");
  var cep = document.getElementById("cep");
  var address = document.getElementById("address");
  var number = document.getElementById("number");
  var complement = document.getElementById("complement");

  // Validação dos dados via JavaScript
  if (!title.value) {
    alert("Por favor, preencha o campo CEP.");
    return;
  }

  if (!cep.value) {
    alert("Por favor, preencha o campo CEP.");
    return;
  }

  if (!address.value) {
    alert("Por favor, preencha o campo CEP.");
    return;
  }

  if (!number.value) {
    alert("Por favor, preencha o campo CEP.");
    return;
  }

  const addressData = {
    title: title.value,
    cep: cep.value,
    address: address.value,
    number: number.value,
    complement: complement.value,
  };

  try {
    let resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(addressData),
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
      }
    });

    // Log da resposta bruta para depuração
    const respostaTexto = await resposta.text();
    console.log('Resposta bruta:', respostaTexto);

    // Tente analisar a resposta como JSON
    try {
      const data = JSON.parse(respostaTexto);
      if (resposta.ok) {
        console.log('Endereço cadastrado com sucesso:', data);
        if (data.data == undefined) {
          alert(
            "Erro ao cadastrar endereço. Por favor, verifique os dados inseridos."
          );
          return;
        }
        alert("Endereço cadastrado com sucesso");
      
        window.location.href = "home.html";
      } else {
        console.error('Erro ao cadastrar endereço:', data.message || 'Erro desconhecido');
      }
    } catch (e) {
      console.error('Erro ao analisar JSON:', e, 'Resposta:', respostaTexto);
    }

  } catch (error) {
    console.error('Erro de rede:', error);
  }
}

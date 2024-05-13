const url = "https://api-go-wash-efc9c9582687.herokuapp.com/api/address";

async function cadastrarEndereco() {
  var cep = document.getElementById("cep");
  // Validação dos dados via JavaScript
  if (!cep.value) {
    alert("Por favor, preencha o campo CEP.");
    return;
  }

  // Etapa de validação dos dados se estão sendo enviados na API
  console.log("Enviando dados para a API:", {
    cep: cep.value,
    // adicione outros campos de endereço conforme necessário
  });

  let resposta = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      cep: cep.value,
      // adicione outros campos de endereço conforme necessário
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await resposta.json();

  // Apresentação das mensagens de erro retornadas pela API
  if (data.data.statusCode != 200) {
    alert(
      "Erro ao cadastrar endereço. Por favor, verifique os dados inseridos."
    );
    return;
  }
  alert("Endereço cadastrado com sucesso");

  window.location.href = "home.html";
}

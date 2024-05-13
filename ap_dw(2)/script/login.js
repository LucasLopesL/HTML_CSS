const url = "https://api-go-wash-efc9c9582687.herokuapp.com/api/login";

async function fazerLogin() {
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");

  // Validação dos dados via JavaScript
  if (!email.value || !senha.value) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Etapa de validação dos dados se estão sendo enviados na API
  console.log("Enviando dados para a API:", {
    email: email.value,
    senha: senha.value,
  });

  let resposta = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      senha: senha.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await resposta.json();

  // Apresentação das mensagens de erro retornadas pela API
  if (data.data.statusCode != 200) {
    alert("Erro ao fazer login. Por favor, verifique seu e-mail e senha.");
    return;
  }
  alert("Login realizado com sucesso");
  // Redirecionar para a página de perfil do usuário
  window.location.href = "home.html";
}

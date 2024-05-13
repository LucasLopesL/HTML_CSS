const url = "https://api-go-wash-efc9c9582687.herokuapp.com/api/user";

async function cadastroUsuario() {
  var name = document.getElementById("name");
  var cpf_cnpj = document.getElementById("cpf_cnpj");
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");
  var birthday = document.getElementById("birthday");
  var user_type = document.getElementById("user_type");

  // Validação dos dados via JavaScript
  if (!name.value) {
    alert("Por favor, preencha o campo Nome.");
    return;
  }

  if (!cpf_cnpj.value) {
    alert("Por favor, preencha o campo CPF / CNPJ.");
    return;
  }
  if (!senha.value) {
    alert("Por favor, preencha o campo SENHA.");
    return;
  }

  if (!email.value) {
    alert("Por favor, preencha o campo Email.");
    return;
  }

  if (!email.value) {
    alert("Por favor, preencha o campo Senha.");
    return;
  }

  if (!birthday.value) {
    alert("Por favor, preencha o campo Data de Nascimento.");
    return;
  }

  if (user_type.value === 1) {
    alert("Por favor, preencha o campo Termos de Usuario.");
    return;
  }

  let resposta = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      user_type_id: 1,
      password: senha.value,
      cpf_cnpj: cpf_cnpj.value,
      terms: user_type.value,
      birthday: birthday.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Apresentação das mensagens de erro retornadas pela API
  let NovaResposta = await resposta.json();

  if (NovaResposta.data.statusCode == 422) {
    if (NovaResposta.data.errors.name) {
      alert(NovaResposta.data.errors.name[0]);
    }
    if (NovaResposta.data.errors?.cpf_cnpj) {
      alert(NovaResposta.data.errors.cpf_cnpj[0]);
    }
    if (NovaResposta.data.errors.email) {
      alert(NovaResposta.data.errors.email[0]);
    }
    if (NovaResposta.data.errors.senha) {
      alert(NovaResposta.data.errors.senha[0]);
    }
    if (NovaResposta.data.errors.birthday) {
      alert(NovaResposta.data.errors.birthday[0]);
    }
    return;
  }
  alert("Cadastro feito com sucesso");

  // Validar se após o cadastro do usuário ele está sendo direcionado para a tela de login
  window.location.href = "login.html";
}

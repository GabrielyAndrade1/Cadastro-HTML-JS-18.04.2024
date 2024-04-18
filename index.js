
const nomeCompleto = document.getElementById("nomeCompleto");
const dataNascimento = document.getElementById("dataNascimento");;
const email = document.getElementById("email");;
const senha = document.getElementById("senha");
const tabelaCadastroDiv = document.getElementById("tabelaCadastro");

function cadastrarUsuario(){
    console.log(nomeCompleto.value);
    console.log(dataNascimento.value);
    console.log(email.value);
    console.log(senha.value);

    paragrafo = document.createElement("p");

    paragrafo.innerHTML += `<span style="background-color: green; color: red">Nome:
    ${nomeCompleto.value}</span>`;
    paragrafo.innerHTML += `<span style="background-color: black; color:white">Data de Nascimento:
    ${dataNascimento.value}</span>`;
    paragrafo.innerHTML += `<span style="background-color: yellow; color: purple">Email:
    ${email.value}</span>`;
    paragrafo.innerHTML += `<span style="background-color:grey; color: blue">Senha:
    ${senha.value}</span>`;

    tabelaCadastroDiv.append(paragrafo);

    console.log("Usuario Cadastrado");
}
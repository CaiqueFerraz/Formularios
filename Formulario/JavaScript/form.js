let senha, login

function ConfirmaLogin() {
    this.senha = document.getElementById('senha').value
    this.login = document.getElementById('email').value

    if (this.senha == 'Caique123' && this.login == 'caique.ferraz@fatec.sp.gov.br') {
        window.location.href = ("http://127.0.0.1:5500/formularios.html")
    } else {
        alteraLabel();
    }


}

function alteraLabel(texto) {
    document.getElementById("erro").innerHTML =
        "Usuário ou senha inválido!";
    document.getElementById("email").value = '';
    document.getElementById("senha").value = '';
    document.getElementById("email").focus();
}
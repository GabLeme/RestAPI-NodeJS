function autenticarUsuario() {
    var usuario = document.getElementById('txtEmail').value;
    var senha = document.getElementById('txtSenha').value;
    if (usuario == "" || senha == "") {
        console.log('vazio')
    }
    else {
        let url = 'http://localhost:3000/usuario/login/' + usuario.toString() + '/' + senha.toString();
        $.ajax({
            type: 'GET',
            url: url,
            success: function (response) {
                if (response[0].EMAIL == usuario && response[0].SENHA == senha) {
                    localStorage.setItem("cod_usuario", parseInt(response[0].COD_USUARIO));
                    location.href = "../JSProject/machinesPage.html";
                }
                else {
                    console.log('usuario incorreto');
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}
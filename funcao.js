// gerenciando o lyialte
function mostrarBotao(){
    let usuario = document.getElementById('usuario').value
    if(usuario ==''){
        document.getElementById("entrar").style.display='none'
    } else {
        document.getElementById("entrar").style.display='block'
    }
    return usuario
}

//gravando no local storege
function entrar(){
    let usuario = mostrarBotao()
    localStorage.setItem('nomedeusuario', usuario);
}

//lendo no local storege

function carregando(){
    var senhalocal = localStorage.getItem('nomedeusuario');
    if(senhalocal ==null){
        document.querySelector('.segundoAcesso').style.display='none'
        document.querySelector('.primeiroAcesso').style.display='block'
    }
    if(senhalocal != null){
        document.querySelector('.segundoAcesso').style.display='block'
        document.querySelector('.primeiroAcesso').style.display='none'
    }

    
}
document.getElementById('logar').style.display='none'

function loginn() {
    var senhalocal = localStorage.getItem('nomedeusuario');
    let usuario = document.getElementById('digiteasenha').value;
    if (senhalocal === usuario) {
      document.getElementById('logar').style.display = 'block';
    }
  }
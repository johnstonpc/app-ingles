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


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
});

function showInstallButton() {
  const installButton = document.querySelector('#install-button');
  installButton.style.display = 'block';
  installButton.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário rejeitou a instalação');
      }
      deferredPrompt = null;
    });
  });
}
  

window.onload = () => {
    nome.value = localStorage.getItem('username');
    recado.value = localStorage.getItem('message');

    // loga o usuário e registra o seu identificador
    perfil.onsubmit = (evento) => {
      localStorage.setItem('username', nome.value);
      localStorage.setItem('message', recado.value);
      alert(`Alterações salvas com sucesso!`);
      evento.preventDefault();
    };
}
function previewImagem(){
  var imagem = document.querySelector('input[name=imagem]').files[0];
  var preview = document.querySelector('img');
  
  var reader = new FileReader();
  
  reader.onloadend = function () {
      preview.src = reader.result;
  }
  
  if(imagem){
      reader.readAsDataURL(imagem);
  }else{
      preview.src = "";
  }
}

const botaoDescript = document.querySelector('#btn-descript');

botaoDescript.addEventListener('click', function () {

  textAreaDescript.value = ''
  textAreaDescript.value = descriptografarMensagem(textAreaCript.value)
  textAreaCript.value = ''
  
});

function descriptografarMensagem(mensagem) {
  let msgDescript = mensagem
  
  msgDescript = msgDescript.replace(/ai/gi, "a");

  msgDescript = msgDescript.replace(/enter/gi, "e");

  msgDescript = msgDescript.replace(/imes/gi, "i");

  msgDescript = msgDescript.replace(/ober/gi, "o");

  msgDescript = msgDescript.replace(/ufat/gi, "u");

  return msgDescript
}
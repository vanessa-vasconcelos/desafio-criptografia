const botaoCript = document.querySelector('#btn-cript');
const textAreaCript = document.querySelector('#criptografar');
const textAreaDescript = document.getElementById('descriptografar');

botaoCript.addEventListener('click', function () {
	if (textArea.value.match(/[A-Zà-ýÀ-Ý]/g)) {
		caixaAlerta.style.display = 'block';
		textAreaCript.readOnly = true;
	} else {
		textAreaDescript.value = '';
		textAreaDescript.value = criptografarMensagem(textAreaCript.value);
		textAreaCript.value = '';
	}
});

function criptografarMensagem(mensagem) {
	let msgCript = mensagem.split('');

	for (let i = 0; i <= msgCript.length; i++) {
		if (msgCript[i] === 'a') {
			msgCript[i] = msgCript[i] + 'i';
		}
		if (msgCript[i] === 'e') {
			msgCript[i] = msgCript[i] + 'nter';
		}
		if (msgCript[i] === 'i') {
			msgCript[i] = msgCript[i] + 'mes';
		}
		if (msgCript[i] === 'o') {
			msgCript[i] = msgCript[i] + 'ber';
		}
		if (msgCript[i] === 'u') {
			msgCript[i] = msgCript[i] + 'fat';
		}
	}

	return msgCript.join('');
}

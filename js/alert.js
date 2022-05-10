let msgAlerta = `
<div class="alertBox" style="display:none;">
    <h1>Aviso</h1>
    <p>Protocolo incorreto, deseja converter o seu texto para o padrão?</p>
    <button id="btn-alerta" >Converter Texto</button>
</div>
`;
document.write(msgAlerta);

const btnAlerta = document.getElementById('btn-alerta');
const caixaAlerta = document.querySelector('.alertBox');
const textArea = document.getElementById('criptografar');

btnAlerta.addEventListener('click', function () {
	const mensagem = textArea.value;
	const mensagemLower = mensagem.toLowerCase();
	textArea.value = mensagemLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	caixaAlerta.style.display = 'none';
	textAreaCript.readOnly = false;
});

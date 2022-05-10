const botaoCopiar = document.getElementById('btn-copy');

botaoCopiar.addEventListener('click', function () {
	textAreaDescript.select();
	textAreaDescript.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(textAreaDescript.value); //Usar ao invés do execCommand
	textAreaDescript.value = '';
});

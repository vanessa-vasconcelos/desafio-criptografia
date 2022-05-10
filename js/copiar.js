const botaoCopiar = document.getElementById('btn-copy');

botaoCopiar.addEventListener('click', function() {
    textAreaDescript.select();
    textAreaDescript.setSelectionRange(0, 99999)
    document.execCommand("copy");
    textAreaDescript.value = ''
})
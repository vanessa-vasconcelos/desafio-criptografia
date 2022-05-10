let msg_alerta = `
<div class="alert-box">
    <h1>Aviso</h1>
    <p>Protocolo incorreto, deseja converter o seu texto para o padrão?</p>
    <button id="btn-alerta">Converter Texto</button>
</div>
`
document.write(msg_alerta);

const btnAlerta = document.getElementById('#btn-alerta')


btnAlerta.addEventListener('click', function(){
    const mensagem = textAreaDescript.value
})
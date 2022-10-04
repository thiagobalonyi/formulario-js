const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
} //Aqui essa função é para validar nome com 2 nomes//

form.addEventListener('submit', function(e) {
    let formEvalido = false
    e.preventDefault(); //este código serve para tirar o reload do formulário//

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    //recuperar outras infos//

    const mensagemSucesso = `Montante de: ${valorDeposito.value} deposito para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;

    formEvalido = validaNome(nomeBeneficiario.value)
    if (formEvalido) {
        alert(mensagemSucesso)

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        alert('Nome incompleto')
    }//este código serve para alertar nome incompleto ou deposito feito//
})

console.log(form);
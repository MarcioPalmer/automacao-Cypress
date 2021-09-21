class SeuBarrigaElements {
    campoEmail = () => {return '[data-test=email]'}

    camposenha = () => { return '[data-test=passwd]' }

    botao = () => { return '.btn'}

    alerta = () => { return '.toast-message'}

    botaoConfiguracao = () => { return '[data-test=menu-settings]'}

    contas = () => { return '[href="/contas"]'}

    inputConta = () => { return '[data-test=nome]'}

    botaoExcluir = () => { return ':nth-child(3) > :nth-child(2) > .fa-trash-alt'}

    botaoEditar = () => { return ':nth-child(2) > :nth-child(2) > .fa-edit'}

    botaoMovimentacao = () => { return '[data-test=menu-movimentacao]'}

    inputDescricao = () => { return '[data-test=descricao]'}

    inputValor = () => { return '[data-test=valor]'}

    inputInteressado = () => {return '[data-test=envolvido]'}

    botaoDespesa = () => { return '[data-test=tipo-despesa]'}

    selectBanco = () => { return '[data-test=conta]'}

    inputDtPagamento = () => { return '[data-test=data-pagamento]'}

    botaoSalvar = () => { return '.btn-primary'}

    botaoReceita = () => { return '[data-test=tipo-receita]'}

}

export default SeuBarrigaElements;
export class ContaCorrente {
    agencia;
    cliente;

    //#saldo = 0; # e _ representam que o atributo é privado e pode ser alterada apenas na class
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    //()significa que não é apenas um atributo mas vai fazer algo.
    //valor -  onde vai atuar (parêmetro) variável que vai receber o número (exigencia para ser realizada a função) 
    depositar(valor) {
        if (valor <= 0) {
            return // early return (poupar tempodo de execussão)
        }
        this._saldo += valor;
    }
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
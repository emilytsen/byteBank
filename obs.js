/*
INDEX (PRIMEIRA FASE)
     
conta2.cliente = new Cliente; atribuindo valores de outra forma
conta2.cliente.nome = "Augusto";
conta2.cliente.cpf = 12345678911;

contaCorrenteEmily.#saldo = 10 não vai funcionar, pois o saldo virou uma variável privada (ninguém pode alterar depois que foi definida na class)

//SACAR DINHAIRO
let valor = 50
if (contaCorrenteEmily.saldo >= valor){
    contaCorrenteEmily.saldo -= valor
}
TRANSFERÊNCIA conta1.transferir(39, conta2);

console.log(conta1.cliente); //só é possívelç através do get (ContaCorente.js)



---------------------------------------------------------------------------------------

CONTACORRENTE (antiga meneira de fazer, essa lógica foi transferida para o Conta)

import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0; //Só acrescenta a cada cadastro... não volta. 
    agencia;
    _cliente;

    //acessor set e get:

    set cliente(novoValor){
        if (novoValor instanceof Cliente){//conta só aceita valor se for do molde cliente;
            this._cliente = novoValor;
        }  
        
    }
    get cliente(){
        return this._cliente;
    }

    //#saldo = 0; # e _ representam que o atributo é privado e pode ser alterada apenas na class
    _saldo = 0;

    get saldo(){
        return this._saldo; 
    }

    get agencia(){
        return this.agencia;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente
        ContaCorrente.numeroDeContas += 1;
    }

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


SUPER: serve para invocar alguma função de uma outra classe.
ex: 
super(0, cliente, agencia); (chamar/invocar constructor de uma outra class) 
super.teste; (chamar/invocar método teste de uma outra class)

class = é um molde
Não servem apenas para dados, servem para comportamentos ou oprerações mais conhecidas como métodos (ex: o sacar ) 
propriedade =  são atribuições dentro dos métodos


-----------------------------------------------------------------
INDEX (SEGUNDA FASE)


const cliente1 = new Cliente("Emily Tsen", 12345678910);
const contaCorrente1 = new ContaCorrente(cliente1, 1001); //saldo já vem zerado;

contaCorrente1.depositar(100);
contaCorrente1.sacar(10); //sacar do ContaCorrente

const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca1.sacar(10); //sacar do Conta

const ContaSalario1 = new ContaSalario(cliente1)
ContaSalario1.depositar(100);
ContaSalario1.sacar(10);

console.log(contaCorrente1);
console.log(contaPoupanca1);
console.log(ContaSalario1)



const cliente2 = new Cliente("Augusto", 12345678911);
const contaCorrente2 = new ContaCorrente(1001, cliente2);
// const conta = new Conta(1001, cliente2); (throw new Error)


contaCorrente2.depositar(300);
contaCorrente2.sacar(100);


console.log(`Número de contas: ${ContaCorrente.numeroDeContas}`)    

--------------------------------------------------------------------------------------------

FUNÇÃO PARA SABER SE ESTÁ LOGADO

//Um ser que seja aultenticavel é aquele que possui um atributo "senha"
export class SistemaAutenticacao{
    static login(funcionario, senha){
        return funcionario._senha == senha; //(vai retornar: true or false)
        //ex: (fuifionario3, 123456);
    }
} 
//polimorfismo, ou seja, esse sistema de autentificação funcionará para qualquer chamada que tenha um atributo "_senha"

INPUT:
let estaLogadoG = SistemaAutenticacao.login(gerente1, 123456)
console.log(estaLogadoG);

*/
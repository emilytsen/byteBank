 //INDEX
     
// conta2.cliente = new Cliente; atribuindo valores de outra forma
// conta2.cliente.nome = "Augusto";
// conta2.cliente.cpf = 12345678911;

//contaCorrenteEmily.#saldo = 10 não vai funcionar, pois o saldo bvirou uma variável privada (ninguém pode alterar depois que foi definida na class)

//SACAR DINHAIRO
// let valor = 50
// if (contaCorrenteEmily.saldo >= valor){
//     contaCorrenteEmily.saldo -= valor
// }
//TRANSFERÊNCIA conta1.transferir(39, conta2);

// console.log(conta1.cliente); //só é possívelç através do get (ContaCorente.js)



//---------------------------------------------------------------------------------------

//CONTACORRENTE (antiga meneira de fazer, essa lógica foiu transferida para o Conta)

// import { Cliente } from "./Cliente.js";

// export class ContaCorrente {
//     static numeroDeContas = 0;
//     agencia;
//     _cliente;

//     //acessor set e get:

//     set cliente(novoValor){
//         if (novoValor instanceof Cliente){//conta só aceita valor se for do molde cliente;
//             this._cliente = novoValor;
//         }  
        
//     }
//     get cliente(){
//         return this._cliente;
//     }

//     //#saldo = 0; # e _ representam que o atributo é privado e pode ser alterada apenas na class
//     _saldo = 0;

//     get saldo(){
//         return this._saldo; 
//     }

//     get agencia(){
//         return this.agencia;
//     }

//     constructor(agencia, cliente){
//         this.agencia = agencia;
//         this._cliente = cliente
//         ContaCorrente.numeroDeContas += 1; 
//     }

//     sacar(valor) {
//         if (this._saldo >= valor) {
//             this._saldo -= valor;
//             return valor;
//         }
//     }
//     //()significa que não é apenas um atributo mas vai fazer algo.
//     //valor -  onde vai atuar (parêmetro) variável que vai receber o número (exigencia para ser realizada a função) 
//     depositar(valor) {
//         if (valor <= 0) {
//             return // early return (poupar tempodo de execussão)
//         }
//         this._saldo += valor;
//     }
//     transferir(valor, conta) {
//         const valorSacado = this.sacar(valor);
//         conta.depositar(valorSacado);
//     }
// }


//SUPER: serve para invocar alguma função de uma outra classe.
//ex: 
//super(0, cliente, agencia); (chamar constructor de uma outra class) 
//super.teste; (chamar método teste de uma outra class)
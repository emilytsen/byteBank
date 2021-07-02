    import {
        Cliente
    } from "./Cliente.js";
    import {
        ContaCorrente
    } from "./ContaCorrente.js";
    import {
        ContaPoupanca
    } from "./ContaPoupanca.js";
    import {
        Conta
    } from "./Conta.js";




    const cliente1 = new Cliente("Emily Tsen", 12345678910);
    // cliente1.nome = "Emily"; //antiga forma de se fazer;
    // cliente1.cpf = 12345678910;

    const contaCorrente1 = new Conta(0, cliente1, 1001);
    //  conta1.agencia = 1001;
    //  conta1._cliente = cliente1
    //contaCorrenteEmily.#saldo = 10 não vai funcionar, pois o saldo bvirou uma variável privada (ninguém pode alterar depois que foi definida na class)
    
    contaCorrente1.depositar(500);
    const valorSacado = contaCorrente1.sacar(100); //vai receber o return
    //SACAR DINHAIRO
    // let valor = 50
    // if (contaCorrenteEmily.saldo >= valor){
    //     contaCorrenteEmily.saldo -= valor
    // }
    //TRANSFERÊNCIA conta1.transferir(39, conta2);

    const contaPoupanca1 = new Conta(50, cliente1, 1001);


    console.log(contaCorrente1);
    console.log(contaPoupanca1);






    const cliente2 = new Cliente("Augusto", 12345678911);
    const conta2 = new Conta(1001, cliente2);

    // conta2.cliente = new Cliente; atribuindo valores de outra forma
    // conta2.cliente.nome = "Augusto";
    // conta2.cliente.cpf = 12345678911;
    conta2.depositar(300);
    conta2.sacar(100);

   
    
    console.log(`Número de contas: ${ContaCorrente.numeroDeContas}`)
    // console.log(conta1.cliente); //só é possívelç através do get (ContaCorente.js)
    // console.log(conta1.saldo);
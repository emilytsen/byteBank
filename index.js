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

    const contaCorrente1 = new ContaCorrente(cliente1, 1001); //saldo já vem zerado;

    contaCorrente1.depositar(100);
    contaCorrente1.sacar(10); //sacar do ContaCorrente

    const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
    contaPoupanca1.sacar(10); //sacar do Conta

    console.log(contaCorrente1);
    console.log(contaPoupanca1);




    const cliente2 = new Cliente("Augusto", 12345678911);
    const conta2 = new Conta(1001, cliente2);


    conta2.depositar(300);
    conta2.sacar(100);


    console.log(`Número de contas: ${ContaCorrente.numeroDeContas}`)
export class SistemaAutenticacao{
    static login(funcionario, senha){
        return funcionario._senha == senha; //(vai retornar: true or false)
        //ex: (fuifionario3, 123456);
    }
    
} 
//Um ser que seja aultenticavel é aquele que possui um método autenticar;
//DUCK TYPE 
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
        /*
        ex: (funcionario3, 123456);
        Na classe de funcionario3 existe um método "autenticar"? rodar...;
        A função desse método é verdadeira ou falsa? retornar...;
        */
    
    }
} 
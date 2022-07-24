// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*let employee = {};
employee.code = 10;
employee.name = "John";*/


//Resposta 1
let employee1: {code: number, name: string} = {
    code: 10,
    name: "John"
};

//Resposta 2
interface Funcionario{
    code: number,
    nome: String
}

let employee2: Funcionario = {
    code: 10,
    nome: "John"
}
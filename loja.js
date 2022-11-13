/*

1. Criar uma classe Funcionário que possui as propriedades Nome e Salário;

2. Criar a classe Gerente que herda da classe Funcionário e possui a propriedade
Departamento;

3. Criar a classe Vendedor que também herda de Funcionário e possui a propriedade
PercentualComissao;

4. Na classe Gerente implementar um método ExibirInformacoes() que deve exibir no
console todas as propriedades de um gerente: Nome, Salário e Departamento;

5. Na classe Vendedor implementar um método CalcularSalario() que deve retornar o
valor do Salário acrescido do PercentualComissao;

6. Na classe Vendedor implementar o método ExibirInformacoes() que deve exibir no
console as seguintes informações do Vendedor: Nome, Salario, Salario com
comissão e o PercentualComissao.

PARTE 2

1. Criar uma classe Produto com as propriedades Nome e Valor;

2. Criar a classe Venda com as propriedades Vendedor que deve ser um objeto da
classe Vendedor criada anteriormente, ListaDeProdutos que deve ser um array e
ValorTotal;

3. Na classe Venda implementar um método AdicionarProduto(), esse método deve
criar um novo Produto e adicionar ele na propriedade ListaDeProdutos;

4. Na classe Venda implementar um método CalcularTotal() que deve somar os valores
de todos os Produtos na ListaDeProdutos e salvar na propriedade ValorTotal o
resultado dessa soma;

5. Na classe Venda implementar um método FinalizarVenda() que deve exibir no
console o nome do Vendedor e o ValorTotal da venda.


*/

class Funcionario{
    Nome 
    Salario 

    constructor(){
        this.Nome = prompt("Informe o nome do funcionario.")
        this.Salario = prompt("Informe o valor do salario.")
        nomes[indexFuncionario] = this.Nome
        salarios[indexFuncionario] = this.Salario
        indexFuncionario++
    }
}

class Gerente extends Funcionario{
    departamento = []

    constructor(){
        super()
        this.departamento = prompt("Informe o seu departamento.")
        nomesGerente[indexGerente] = nomes[indexFuncionario - 1]
        salariosGerente[indexGerente] = salarios[indexFuncionario - 1]
        departamentos[indexGerente] = this.departamento
        indexGerente++
    }

    ExibirInformacoes(nomeGerente){
        for (let index = 0; index < indexGerente; index++) {
                if(nomeGerente == nomesGerente[index]){
                    alert("Nome do gerente: + " + nomesGerente[index] + "\n" + "Salario do gerente: " + salariosGerente[index] + "\n" + "Departamento do gerente: " + departamentos[index])
                }else{
                    alert("Não existe nenhum gerente com esse nome no nosso sitesma.")
                }
        }
    }


    
}

class Vendedor extends Funcionario{
    PercentualComissao = []

    constructor(){
       super()
       this.PercentualComissao = parseInt(prompt("Informe o percentual da sua comissão."))
       nomesVendedor[indexVendedor] = nomes[indexFuncionario - 1]
       salariosVendedor[indexVendedor] = salarios[indexFuncionario - 1]
       PercentualComissoes[indexVendedor] = this.PercentualComissao

    }
}

let gerente
let vendedor
let nomes = []
let salarios = []
let nomesGerente = []
let salariosGerente = []
let nomesVendedor = []
let salariosVendedor = []
let departamentos = []
let PercentualComissoes = []
let indexFuncionario = 0
let indexGerente = 0
let indexVendedor = 0
let nomeGerente
        let desejar = "0"

        do {
            desejar = prompt("O que deseja fazer?" + "\n" + "1 = novo gerente. " + "\n" + "2 = novo vendedor." + "\n" + "3 = Pesquisar gerente (Só pode pesquisar se já existir um gerente cadastrado)." + "\n" + "4 = Devolver o Livro." + "\n" + "5 = Sair do site")
            switch (desejar) {
                case "1":
                    gerente = new Gerente()
                    break;
                case "2":
                    vendedor = new Vendedor()
                    break;

                case "3":
                    nomeGerente = prompt("Informe o nome do gerente que deseja buscar. ")
                    gerente.ExibirInformacoes(nomeGerente)
                    break;

                case "4":
                  
                    break;

                case "5":
                    alert("Obrigado por usar nosso site!")
                    break;

                default:
                    break;
            }
        } while (desejar != "5");
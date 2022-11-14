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

2. Criar a classe Venda com as  propriedades Vendedor que deve ser um objeto da
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
        this.Salario = parseInt(prompt("Informe o valor do salario."))
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
        let cont2 = 0
        for (let index = 0; index < indexGerente; index++) {
                if(nomeGerente == nomesGerente[index]){
                    alert("Nome do gerente: + " + nomesGerente[index] + "\n" + "Salario do gerente: " + salariosGerente[index] + "\n" + "Departamento do gerente: " + departamentos[index])
                    cont2++
                }
        }

        if(cont2 = 0){
            alert("Não existe nenhum gerente com esse nome no nosso sitesma.")
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
       indexVendedor++
    }

    CalcularSalario(nomeVendedor){
        let cont = 0
        for (let index = 0; index < indexVendedor; index++) {
                if(nomeVendedor == nomesVendedor[index]){
                    salarioPercentual[index] = (salariosVendedor[index]/100) * (100 + PercentualComissoes[index])
                    alert("o seu salario acrescido do percentual é: " + salarioPercentual[index])
                    cont++
                }
        }

        if(cont = 0){
            alert("Não existe nenum vendedor com este nome!")
        }
    }

    ExibirInformacoes(nomeVendedor){
        let cont = 0
        for (let index = 0; index < indexVendedor; index++) {
                if(nomeVendedor == nomesVendedor[index]){
                    salarioPercentual[index] = (salariosVendedor[index]/100) * (100 + PercentualComissoes[index])
                    cont++
                }
        }

        if(cont == 0){
            alert("Não existe nenum vendedor com este nome!")
        }

        let cont3 = 0
        for (let index = 0; index < indexVendedor; index++) {
                if(nomeVendedor == nomesVendedor[index]){
                    alert("Nome do vendedor: " + nomesVendedor[index] + "\n" + "Salario do vendedor: " 
                    + salariosVendedor[index] + "\n" + "Salario percentual do vendedor: " + salarioPercentual[index] + "\n" + "Percentual do vendedor: " + PercentualComissoes[index])
                    cont3++
                }
        }

    }
}

class Produto{
    NomeProduto
    ValorProduto
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
let nomeVendedor
let desejar = "0"
let salarioPercentual = []

        do {
            desejar = prompt("O que deseja fazer?" + "\n" + "1 = novo gerente. " + "\n" + "2 = novo vendedor." 
            + "\n" + "3 = Pesquisar gerente (Só pode pesquisar se já existir um gerente cadastrado)." 
            + "\n" + "4 = Calcular o salario do vendedor acrescido do percentual de vendas." + "\n" + "5 = Exibir informações de um vendedor" + "\n" + "6 = Sair do site")
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
                    nomeVendedor = prompt("Informe o nome do vendedor que deseja calcular o salario.")
                    vendedor.CalcularSalario(nomeVendedor)
                    break;

                case "5":
                    nomeVendedor = prompt("Informe o nome do vendedor que deseja buscar. ")
                    vendedor.ExibirInformacoes(nomeVendedor)
                    break;

                case "6":
                    alert("Obrigado por usar nosso site!")
                    break;

                default:
                    break;
            }
        } while (desejar != "6");
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
    }
}

class Gerente extends Funcionario{
    departamento 

    constructor(){
        super()
        this.departamento = prompt("Informe o seu departamento.")
       
    }

    ExibirInformacoes(nomeGerente){
        let cont2 = 0
        for (let index = 0; index < gerentes.length; index++) {
                if(nomeGerente == gerentes[index].Nome){
                    alert("Nome do gerente: " + gerentes[index].Nome + "\n" + "Salario do gerente: " + gerentes[index].Salario + "\n" + "Departamento do gerente: " + gerentes[index].departamento)
                    cont2++
                }
        }

        if(cont2 = 0){
            alert("Não existe nenhum gerente com esse nome no nosso sitesma.")
        }
    }


    
}

class Vendedor extends Funcionario{
    PercentualComissao 

    constructor(){
       super()
       this.PercentualComissao = parseInt(prompt("Informe o percentual da sua comissão."))
        
    }

    CalcularSalario(nomeVendedor){
        let cont = 0
        for (let index = 0; index < vendedores.length; index++) {
                if(nomeVendedor == vendedores[index].Nome){
                    salarioPercentual[index] = (vendedores[index].Salario/100) * (100 + vendedores[index].PercentualComissao)
                    alert("o seu salario acrescido do percentual é: " + salarioPercentual[index])
                    cont++
                }
        }

        if(cont == 0){
            alert("Não existe nenum vendedor com este nome!")
        }
    }

    ExibirInformacoes(nomeVendedor){
        let cont = 0
        for (let index = 0; index < vendedores.length; index++) {
                if(nomeVendedor == vendedores[index].Nome){
                    salarioPercentual[index] = (vendedores[index].Salario/100) * (100 + vendedores[index].PercentualComissao)
                    cont++
                }
        }

        if(cont == 0){
            alert("Não existe nenum vendedor com este nome!")
        }

        for (let index = 0; index < vendedores.length; index++) {
                if(nomeVendedor == vendedores[index].Nome){
                    alert("Nome do vendedor: " + vendedores[index].Nome + "\n" + "Salario do vendedor: " 
                    + vendedores[index].Salario + "\n" + "Salario percentual do vendedor: " + salarioPercentual[index] + "\n" + "Percentual do vendedor: " + vendedores[index].PercentualComissao)
                }
        }

    }
}

class Produto{
    NomeProduto
    ValorProduto

    constructor(){
        this.NomeProduto = prompt("Informe o nome do produto.")
        this.ValorProduto = parseInt(prompt("Informe o valor do produto"))
    }
}

class Vendas{
    Vendedor
    ListaDeProdutos = []
    ValorTotal = 0

    constructor(vendedor){
        this.Vendedor = vendedor

        do {
            contador = 0
            desejar = prompt("Deseja adicionar um produto ou finalizar sua compra? 1 = adicionar mais produtos e 2 = finalizar")
            if(desejar == "1"){
                produtoVenda = prompt("Qual nome do produto que deseja adicionar ao seu carrinho?")
                for (let index = 0; index < produtos.length; index++) {
                    if(produtoVenda == produtos[index].NomeProduto){
                        alert("Produto adicionado com sucesso!")
                        produtoVenda = produtos[index]
                        this.AdicionarProduto(produtoVenda)
                        contador++
                    }
                }

                if(contador == 0){
                    alert("Não existe produto com este nome!")
                }
            }

            if(desejar == "2"){
                alert("Obrigado por usar nossos serviços!")
                this.CalcularTotal()
            }
        } while (desejar != "2");
    }

    AdicionarProduto(produto){
        this.ListaDeProdutos.push(produto)
    }

    CalcularTotal(){
        for (let index = 0; index < this.ListaDeProdutos.length; index++) {
            this.ValorTotal = this.ValorTotal + this.ListaDeProdutos[index].ValorProduto
        }
            this.FinalizarVenda()
    }

    FinalizarVenda(){
        alert("O nome do vendedor responsavel pela venda é: " + this.Vendedor + "." + "\n" + "O valor total da compra foi de: " + this.ValorTotal)
    }
}


let gerente
let vendedor
let nomeGerente
let nomeVendedor
let produto
let venda
let desejar = "0"
let salarioPercentual = []
let gerentes = []
let vendedores = []
let produtos = []
let vendas = []
let produtoVenda
let contador = 0

        do {
            desejar = prompt("O que deseja fazer?" 
            + "\n" + "1 = novo gerente. " 
            + "\n" + "2 = novo vendedor." 
            + "\n" + "3 = Pesquisar gerente (Só pode pesquisar se já existir um gerente cadastrado)." 
            + "\n" + "4 = Calcular o salario do vendedor acrescido do percentual de vendas." 
            + "\n" + "5 = Exibir informações de um vendedor." 
            + "\n" + "6 = Criar um produto da loja."
            + "\n" + "7 = Criar uma venda." 
            + "\n" + "8 = Sair do site" + "\n")
            switch (desejar) {
                case "1":
                    gerente = new Gerente()
                    gerentes.push(gerente)
                    break;
                case "2":
                    vendedor = new Vendedor()
                    vendedores.push(vendedor)
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
                    produto = new Produto()
                    produtos.push(produto)
                break;

                case "7":
                    let cont = 0
                    nomeVendedor =  prompt("Informe o nome do vendedor que está realizando está venda.")

                                for (let index = 0; index < vendedores.length; index++) {
                                    if(nomeVendedor == vendedores[index].Nome){
                                        nomeVendedor = vendedores[index].Nome
                                        cont++
                                    }
                                }
        
                                if(cont == 0){
                                    alert("Não existe nenum vendedor com este nome!")
                                }


                    venda = new Vendas(nomeVendedor)
                    vendas.push(venda)
                break;

                default:
                    alert("Ops! Não possuimos esta opção, tente novamente!")
                    break;
            }
        } while (desejar != "8");
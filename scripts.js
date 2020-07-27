function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade

}

function verificaMaisVelho(pessoas) {
    let maiorIdade;
    let pessoaMaisVelha;

    for (let pessoa of pessoas) {
        if (typeof maiorIdade == 'undefined') {
        maiorIdade = pessoa.idade
        pessoaMaisVelha = pessoa
        } else {
            if (pessoa.idade > maiorIdade) {
                maiorIdade = pessoa.idade
                pessoaMaisVelha = pessoa

            }
        }
    }
    return pessoaMaisVelha
}

function listaRegistros(registros) {

    console.log('eses são todas as pessoas cadastradas')
    registros.forEach( registro => {
        console.log(`${registro.nome} possui ${registro.idade} anos `)
    } )
}


let registros = []

while (true) {

    let nome = prompt("Qual é seu nome?")
    let idade = prompt("Qual é sua idade?")
    idade = Number(idade)

    let pessoa = new Pessoa(nome, idade)

    registros.push(pessoa)

    let repetir = prompt("Gostaria registrar outra pessoa? S/N ")

    if ('n' == repetir) {
        break;
    }
}

listaRegistros(registros)  
let maisVelho = verificaMaisVelho(registros)
console.log(`A pessoa mais velha é ${maisVelho.nome} com ${maisVelho.idade} anos`)

//  alert("primeira pessoa")

//    let nome= prompt("Qual é seu nome?")
//    let idade= prompt("Qual é sua idade?")
//    idade = Number(idade)
    
//alert("segunda pessoa")

//    let nome2= prompt("Qual é seu nome?")
//    let idade2= prompt("Qual é sua idade?")
//    idade2 = Number(idade2)
//
//    if ( idade > idade2 ) {
//        console.log ("A primeira pessoa é mais velha")
//    } else if ( idade2 >  idade ) {
//        console.log ("A segunda pessoa é mais velha")
//    } else {
//        console.log("As duas possuem a mesma idade")
 //   }

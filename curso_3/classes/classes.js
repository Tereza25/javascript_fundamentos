//classes sempre começam com letra maiúscula, por baixo dos panos ela funciona como uma função. Chamamos isso de sintax sugar (açucar sintático).

class Estudante {
  constructor(nome, idade, matricula, pagamentoMensal) {
    this.nome = nome;
    this.idade = idade;
    this.matricula = matricula;
    this.pagamentoMensal = pagamentoMensal;
  }

  depositar(valor) {
    this.pagamentoMensal += valor;
  }

  exbibirPagamento() {
    console.log(this.pagamentoMensal);
  }
}

class EstudanteBolsista extends Estudante{
  constructor(nome, idade, matricula, pagamentoMensal, descontoBolsa){
    super(nome, idade, matricula, pagamentoMensal, descontoBolsa)
    this.descontoBolsa = descontoBolsa
  }

  aplicarDesconto(desconto){
    this.descontoBolsa = desconto
  }
}

const tereza = new EstudanteBolsista("Tereza", "32", "123456", 250, -0.5);

console.log(tereza);


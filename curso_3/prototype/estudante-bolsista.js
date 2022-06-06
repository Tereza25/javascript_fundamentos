function Estudante (nome, idade, matricula){
  this.nome=nome
  this.idade=idade
  this.matricula=matricula
};

function EstudanteBolsista (nome, idade, matricula, descontoBolsa)
{
  Estudante.call(this, nome, idade, matricula)
  this.descontoBolsa=descontoBolsa
};

const tereza = new EstudanteBolsista("Tereza", "32", "123456", 50);

console.log(tereza);


//Vamos agora utilizar um método chamado prototype. Quase todo objeto em Javascript tem associado a ele um segundo objeto, seu protótipo, que lhe confere uma série de atributos e funções. Usamos o método agora para acessar os atributos de Estudante bolsa, e plicar uma função para atualizar o valor da chave descontoBolsa.


EstudanteBolsista.prototype.aplicarBolsa = function (desconto){
  this.descontoBolsa = desconto
}

tereza.aplicarBolsa(100)

console.log(tereza.descontoBolsa)


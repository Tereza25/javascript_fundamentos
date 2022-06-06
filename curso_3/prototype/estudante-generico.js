function Estudante (nome, idade, matricula){
  this.nome=nome
  this.idade=idade
  this.matricula=matricula
};

const tereza = new Estudante("Tereza", "32", "123456");

console.log(tereza);

//Criamos a função function Estudante(), ela vai servir para nós aqui como uma função construtora, então criei um objeto agora estudante com base nessa função, então essa função vai sempre possuir para mim um objeto estudante, e eu vou usar ela aqui agora como uma função construtora.

//Usamos essa palavra new, a palavra-chave, para dizer que justamente estamos utilizando a partir da nossa função cliente, estamos criando um new, criando um novo estudante, chamamos isso de instância, então a nossa const tereza é uma nova instância de estudante, criado a partir da nossa função construtora.
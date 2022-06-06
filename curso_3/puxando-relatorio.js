//Puxando o relatório, temos que percorrer o objeto e extrair informações básicas do cliente em um formato mais legível, no caso, legível aqui é para quem não vai ler o código.

const estudante = {
  nome: "Tereza",
  idade: 32,
  matricula: "123456",
  cursos: [
    {
      nomeCurso: "back-end",
      disciplinas: 10,
      cargaHoraria: "120h",
    },
    {
      nomeCurso: "banco de dados",
      disciplinas: 7,
      cargaHoraria: "100h",
    },
  ],
  pagamentoMensal: 0,
  pagamento: function (valor) {
    this.pagamentoMensal += valor;
  },
};
estudante.pagamento(85);
//console.log(estudante.pagamentoMensal)

let relatorio = "";

for (let info in estudante) { 
  if (
    typeof estudante[info] === "object" ||
    typeof estudante[info] === "function"
  ) {
    continue;
  } else {
    relatorio += `
	${info} ==> ${estudante[info]} 
	`;
  }
}

// console.log(relatorio);

// console.log(Object.entries(estudante)) 

console.log(Object.values(estudante)) 

///Foi usado o método for...in, é parecido com o for clássico, que percorre o objeto pelas chaves. 
//Adicionamos uma propriedade que irá registrar a entrada de um depósito, como registro de um pagamento de matrícula.

const estudante = {
	nome: "Tereza",
	idade: 32,
  matricula: "123456",
	cursos: [{
		nomeCurso: "back-end",
		disciplinas: 10,
		cargaHoraria: "120h"
	}, 
  {
    nomeCurso: "banco de dados",
    disciplinas: 7,
    cargaHoraria: "100h"
  }
  ],
  pagamentoMensal: 0,
  pagamento: function(valor){
    this.pagamentoMensal += valor
  }
};

console.log(estudante.pagamentoMensal);
estudante.pagamento(85)
console.log(estudante.pagamentoMensal)

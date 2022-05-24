//função

function mediaPort(prova, redacao) {
  return (prova + redacao)/2;
};

console.log(mediaPort(10, 5)) 

// expressão de função

const mediaHist = function(prova, redacao) {return (prova + redacao)/2};
console.log(mediaHist(9, 7))

// Arrow function

const mediaMat = (prova, atividades) => {
  if (prova > 10 || atividades > 10) {
    return `somente notas de 0 a 10`
  } else {
    return (prova + atividades)/2
  }
}

console.log(mediaMat(15, 4));
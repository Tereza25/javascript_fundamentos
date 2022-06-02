import chalk from 'chalk';
import fs from 'fs';


// console.log(chalk.blue('Cadastro válido'));

// console.log(chalk.red('Cadastro inválido'));


function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.readFile(caminhoDoArquivo, encoding, (erro, dados) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.blue(dados));
  })
}

pegaArquivo('./arquivos/textoBiblioteca.md');
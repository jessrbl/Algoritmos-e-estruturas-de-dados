// PESQUISA BINÁRIA

const arrayDeNumeros = [1, 10, 50, 80, 75, 15, 20, 30, 100, 82, 91, 5, 7, 16, 4, 12, 77, 33, 40];
const arrayDeNumerosOrdenado = arrayDeNumeros.sort((a, b) => a - b); 

function pesquisaBinaria(meuNumero) {
    let baixo = 0;
    let alto = arrayDeNumerosOrdenado.length - 1;
    let iteracoes = 0; 

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        let chute = arrayDeNumerosOrdenado[meio];

        if (chute === meuNumero) return { meio: meio, iteracoes: iteracoes }

        if (chute > meuNumero) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }

        iteracoes++; 
    }

    return { index: -1, iteracoes: iteracoes }; 
}

const resultado = pesquisaBinaria(80);
console.log('Iterações:', resultado.iteracoes);
console.log('terminei');

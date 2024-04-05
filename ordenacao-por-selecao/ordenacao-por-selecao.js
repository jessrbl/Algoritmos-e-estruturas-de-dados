function ordenacaoPorSelecao(arr) {
    const novoArr = []; 

    while (arr.length > 0) { 
        let menorIndice = 0; 

        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < arr[menorIndice]) {
                menorIndice = j;
            }
        }

        novoArr.push(arr[menorIndice]);

        arr.splice(menorIndice, 1);
    }

    return novoArr; 
}

const arr = [7, 8, 1, 10, 20, 4];
const resultado = ordenacaoPorSelecao(arr);

console.log(resultado); 




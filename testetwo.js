function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    // Verifica se o número é 0 ou 1, pois eles são exceções na sequência de Fibonacci
    if (numero === 0 || numero === 1) {
        console.log("O número pertence à sequência de Fibonacci.");
        return;
    }

    let c = a + b;
    
    while (c <= numero) {
        if (c === numero) {
            console.log("O número pertence à sequência de Fibonacci.");
            return;
        }
        a = b;
        b = c;
        c = a + b;
    }
    
    console.log("O número não pertence à sequência de Fibonacci.");
}

// Informe o número que deseja verificar
const numero = 13; // Você pode alterar esse valor para testar outros números
verificaFibonacci(numero);

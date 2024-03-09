// Sequência a)
function proximoNumeroA() {
    let sequenciaA = [1, 3, 5, 7];
    let ultimoNumero = sequenciaA[sequenciaA.length - 1];
    let proximo = ultimoNumero + 2;
    return proximo;
}

// Sequência b)
function proximoNumeroB() {
    let sequenciaB = [2, 4, 8, 16, 32, 64];
    let ultimoNumero = sequenciaB[sequenciaB.length - 1];
    let proximo = ultimoNumero * 2;
    return proximo;
}

// Sequência c)
function proximoNumeroC() {
    let sequenciaC = [0, 1, 4, 9, 16, 25, 36];
    let ultimoNumero = sequenciaC[sequenciaC.length - 1];
    let proximo = Math.pow(Math.sqrt(ultimoNumero) + 1, 2);
    return proximo;
}

// Sequência d)
function proximoNumeroD() {
    let sequenciaD = [4, 16, 36, 64];
    let ultimoNumero = sequenciaD[sequenciaD.length - 1];
    let proximo = Math.pow(Math.sqrt(ultimoNumero) + 2, 2);
    return proximo;
}

// Sequência e)
function proximoNumeroE() {
    let sequenciaE = [1, 1, 2, 3, 5, 8];
    let ultimoNumero = sequenciaE[sequenciaE.length - 1];
    let penultimoNumero = sequenciaE[sequenciaE.length - 2];
    let proximo = ultimoNumero + penultimoNumero;
    return proximo;
}

// Sequência f)
function proximoNumeroF() {
    let sequenciaF = [2, 10, 12, 16, 17, 18, 19];
    let ultimoNumero = sequenciaF[sequenciaF.length - 1];
    let diferenca = sequenciaF[1] - sequenciaF[0];
    let proximo = ultimoNumero + diferenca;
    return proximo;
}

console.log("Sequência a):", proximoNumeroA());
console.log("Sequência b):", proximoNumeroB());
console.log("Sequência c):", proximoNumeroC());
console.log("Sequência d):", proximoNumeroD());
console.log("Sequência e):", proximoNumeroE());
console.log("Sequência f):", proximoNumeroF());

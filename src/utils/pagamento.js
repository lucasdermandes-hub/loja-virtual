export function verificarDigitosIguais(numeroCartao) {
    const limpo = numeroCartao.replace(/[\s-]/g, "");

    if (limpo.length !== 16) return false;

    return limpo.split("").every((digito) => digito === limpo[0]);
}



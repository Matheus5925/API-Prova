
export function CorPrimaria (cor) {

    let msg = " "; 
    if (cor == 'azul' || cor == 'amarelo' || cor == 'vermelho') {
        msg = true
    }
    else{
        msg = false;
    }

    return msg;
}

export function IngressoCinema(QtdInteira, QtdMeias, DiaSemana, Nacionalidade) {
    
    let total = 0;
    if (DiaSemana == "quarta" || DiaSemana == "quarta-feira") {
       total = (QtdInteira + QtdMeias) * 14.25; 
    }
    else if (Nacionalidade == "brasileira") {
        total = (QtdInteira + QtdMeias) * 5;
    }
    else {
        total = (QtdInteira * 28.5) + (QtdMeias * 14.25);
    }

    return total;
}

export function FreqCaracter(texto, caracter) {
    
    let Freq = 0;
    for (let i = 0; i < texto.length; i++) {
       if (texto[i]  == caracter){
           Freq++
       }
   }

   return Freq;
}

export function maiorNumero(numeros) {
    let maior = Number.MIN_VALUE;
    for (let item of numeros) {
        if (item > maior) {
            maior = item;
        }
    }
    return maior;
}
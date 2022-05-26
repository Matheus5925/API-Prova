import { CorPrimaria, IngressoCinema, FreqCaracter, maiorNumero } from './services.js';

import { Router } from "express";

const server = Router();

server.get('/dia2/corprimaria/:cor', (req, resp) =>{
    let cor = req.params.cor;

    const msg = CorPrimaria(cor);

    resp.send({
        confirmacao: msg
    })
})

server.post('/dia2/ingressoCinema', (req, resp) => {
    let {QtdInteira, QtdMeias, DiaSemana, Nacionalidade} = req.body;

    const total = IngressoCinema(QtdInteira,QtdMeias,DiaSemana,Nacionalidade)

    resp.send({
        total: total
    })
    
})

server.get('/dia2/FreqCaracter', (req, resp) =>{
    let texto = req.query.texto;
    let caracter = req.query.caracter;

    const Freq = FreqCaracter(texto, caracter)

   resp.send({
       Frequencia: Freq
   })
})

server.post('/dia2/maiornumero', (req, resp) =>{
    let numeros = req.body;
    const maior = maiorNumero(numeros);
    
    resp.send({
        maior: maior
    })
})

export default server;
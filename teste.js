server.get('/dobro/:numero', (req, resp) =>{
    let numero = req.params.numero;

    let dobro = numero * 2 ;
    resp.send({
        dobro: dobro
    })
})

server.get('/somar', (req, resp) =>{
    let a = Number(req.query.a)
    let b = Number(req.query.b)

    let x = a + b;

    resp.send({
        soma: x
    })
})

server.post('/somar', (req, resp) =>{
    let a = req.body.a;
    let b = req.body.b;

    let x = a + b;

    resp.send({
        soma: x
    })
})

server.post ('/media', (req, resp) =>{
    let {n1, n2, n3} = req.body;

    let media = (n1+n2+n3) / 3;
    resp.send({
        resultado: media
    })
})

server.get('/temperatura', (req, resp) =>{

    let temperatura = Number(req.query.temperatura);

    let msg = " ";

    if (temperatura < 37.5) {
        msg = "Não está com febre";
    }
    else if (temperatura < 35) {
        msg = "Morreu é ??"
    }
    else if (temperatura >= 37.5) {
        msg = "Você está com febre!!"
    }

    resp.send({
        resultado: msg
    })
})

server.get('/tabuada', (req, resp) =>{
    let multiplicador = Number(req.query.multiplicador);

    let cont = [];
    for (let i = 1; i <= 10; i++) {
        cont[i] = multiplicador * i
    }

    resp.send({
        tabuada: [cont]
    })
})

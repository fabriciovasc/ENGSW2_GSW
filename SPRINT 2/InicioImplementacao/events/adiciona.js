const { adiciona } = require('../modelos/vagas');

describe("Suite de testes.", function () {
    this.timeout(Infinity);

    it("SUCESSO: Criar vaga.", async () => {
        //GIVEN
        let event = {
            body: JSON.stringify({
                area: "marketing",
                objetivo: "publicação",
                requerido: "experiencia publicação",
                experiencia: true,
                id: "2",
            })
        };

        //WHEN
        let resposta = await adiciona(event);
        console.log(JSON.stringify(resposta));

        //THEN
        expect(resposta.statusCode).to.be.eql(201);
        
    })

})

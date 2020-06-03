const { adiciona } = require('../modelos/vagas');

describe("Suite de testes.", function () {
    this.timeout(Infinity);

    it("SUCESSO: Criar vaga.", async () => {
        //GIVEN
        let event = {
            body: JSON.stringify({
                area: "ti",
                objetivo: "desenvolvimento backend",
                requerido: "experiencia com desenvolcimento",
                experiencia: true,
                id: "3",
            })
        };

        //WHEN
        let resposta = await adiciona(event);
        console.log(JSON.stringify(resposta));

        //THEN
        expect(resposta.statusCode).to.be.eql(201);
        
    })

})

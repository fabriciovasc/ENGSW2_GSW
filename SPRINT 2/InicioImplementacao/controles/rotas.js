const Vagas = require('../modelos/vagas');

module.exports = app => {
    app.get('/vagas', (req, res) => {
        Vagas.lista(res);
    });

    app.get('/vagas/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Vagas.buscaporId(id, res);
    })
    
    app.post('/vagas', (req, res) => {
        const vaga_nova = req.body;

        Vagas.adiciona(vaga_nova, res);
    })

    app.patch('/vagas/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Vagas.altera(id, valores, res);
    })

    app.delete('/vagas/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Vagas.deleta(id, res);
    })
}
const Vagas = require('../modelos/vagas');
const Candidato = require('../modelos/candidatos');

module.exports = app => {

    //--------------------- vagas ----------------------------------
    app.get('/vagas', (req, res) => {
        Vagas.lista(res);
    })

    app.get('/vagas/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Vagas.buscaporId(id, res);
    })
    
    app.post('/vagas',  (req, res) => {
        const nova_vaga = req.body;

        Vagas.adiciona(nova_vaga);
    })

    app.delete('/vagas/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Vagas.deleta(id, res);
    })

    //---------------------------------------------------------------
    //--------------------- candidatos-------------------------------

    app.get('/candidato/:cpf', (req, res) => {
        const cpf = (req.params.cpf);

        Candidato.buscaCandidatoCpf(cpf, res);
    })
    
    app.post('/candidato', (req, res) => {
        const candidato = req.body;

        Candidato.adiciona(candidato, res);
    })

    app.delete('/candidato/:id', (req, res) => {
        const cpf = (req.params.cpf);

        Candidato.deleta(cpf, res);
    })
}
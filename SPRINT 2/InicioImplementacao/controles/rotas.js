const Vagas = require('../modelos/vagas');
const Candidato = require('../modelos/candidatos');
const Login = require('../modelos/login');

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
        const vaga = req.body;
        console.log(vaga);
        Vagas.adiciona(vaga, res);
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
        const candidato = req.query;

        Candidato.adiciona(candidato, res);
    })

    app.delete('/candidato/:id', (req, res) => {
        const cpf = (req.params.cpf);

        Candidato.deleta(cpf, res);
    })

    //---------------------------------------------------------------
    //-------------------------login---------------------------------

    /* 
    começa no /login, clica em quero me cadastrar, vai pro /cadastro, 
    finaliza o cadastro, vai pro /login novamente, ele faz o login,
    vai pro /home, que vai ter as outras parada lá.
    */

    app.post('/cadastro', function(req, res) {
        const candidato = req.query;

        Login.cadastro(candidato, res)
    })

    app.post('/login', function(req, res) {
        const info = req.body;

        Login.login(info, res);
    });
    
    app.get('/inicio', function(req, res) {
        if (req.session.loggedin) {
            res.send('Bem vindo, ' + req.session.nome + '!');
        } else {
            res.send('Por favor faça login!');
        }
        res.end();
    });
}

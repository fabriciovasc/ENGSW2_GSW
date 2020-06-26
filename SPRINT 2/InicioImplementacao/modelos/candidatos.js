const conexao = require('../infraestrutura/conexao');

class Candidato {

    adiciona(candidato, res) {
        conexao.query('INSERT INTO candidatos SET ?', candidato, (err) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json(candidato);
            }
        });
    }

    buscaCandidatoCpf(cpf, res){
        const sql = `SELECT * FROM candidato WHERE cpf =${cpf}`;

        conexao.query(sql, (erro, resultados) => {
            const candidatoResult = resultados[0];
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(candidatoResult);
            }
        })
    }

    deleta(cpf, res){
        const sql = 'DELETE FROM candidato WHERE cpf=?';

        conexao.query(sql, cpf, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({cpf});
            }
        })
    }
}

module.exports = new Candidato;

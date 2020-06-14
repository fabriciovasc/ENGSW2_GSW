const conexao = require('../infraestrutura/conexao');

class Candidato {

    adiciona(candidato, res){ 

        //refatorar esta função
        const candidato_novo = {...candidato};

        /*const candidato_novo = [
            nome = candidato.nome,
            cpf = candidato.cpf,
            telefone = candidato.telefone,
            email = candidato.email
        ];*/
            
        const sql = 'INSERT INTO candidato'

        conexao.query(sql, candidato_novo, (erro) => {
            if (erro){
                res.status(400).json(erro);
            } else {
                res.status(201).json(candidato_novo);
            }
        })
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
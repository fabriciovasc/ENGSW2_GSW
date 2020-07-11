const conexao = require('../infraestrutura/conexao');

class Vagas {

    adiciona(vaga, res) {
        const query = conexao.query('INSERT INTO vagas SET ?', vaga, (err) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json(vaga);
            }
        });
    }

    lista(res){
        const sql = 'SELECT * FROM vagas'

        conexao.query(sql, (erro, resultados) => {
            if (erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    buscaporId(id, res){
        const sql = `SELECT * FROM vagas WHERE id =${id}`;

        conexao.query(sql, (erro, resultados) => {
            const vagaResultado = resultados[0];
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(vagaResultado);
            }
        })
    }

//---------------------------filtro da área-----------------------

    buscaPorArea(area, res){
        const sql = `SELECT * FROM vagas WHERE area=${area}`;

        conexao.query(sql, (erro, resultados) => {
            const vagaPorArea = resultados[0];
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(vagaPorArea);
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM vagas WHERE id=?';

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({id});
            }
        })
    }
}

module.exports = new Vagas;

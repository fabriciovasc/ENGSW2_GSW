const conexao = require('../infraestrutura/conexao');

class Vagas {
    
    adiciona(vaga, res) { 

        const vaga_nova = {...vaga};
            
        const sql = "INSERT INTO vagas(area, objetivo, requerido, experiencia, id) VALUES (?, ?, ?, ?, ?)";

        conexao.query(sql, vaga_nova, (erro, resultados) => {
            if (erro){
                res.status(400).json(erro);
            } else {
                res.status(201).json(vaga);
            }
        })
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

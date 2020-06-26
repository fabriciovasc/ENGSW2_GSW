const conexao = require('../infraestrutura/conexao');

class Vagas {
    
    adiciona(area, objetivo, requerido, experiencia, res) { 

        const vaga_nova = {
            area: area,
            objetivo: objetivo,
            requerido: requerido,
            experiencia: experiencia
        };

        console.log(vaga_nova);
            
        const sql = `INSERT INTO vagas(area, objetivo, requerido, experiencia) VALUES ?`

        conexao.query(sql, vaga_nova, (erro, resultados) => {
            if (erro){
                console.log(erro);
            } else {
                console.log(vaga_nova);
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

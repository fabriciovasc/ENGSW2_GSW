const conexao = require('../infraestrutura/conexao');

class Vagas {

    adiciona(area, objetivo, requerido, experiencia) {

        console.log("area:", area);
        console.log("objetivo:", objetivo);
        console.log("requerido:", requerido);
        console.log("experiencia:", experiencia);

        /* Adicionar
        cargaHoraria: number;
        inicioVaga: string;
        fimVaga: string;
        beneficios: array; */

        const sql = `INSERT INTO vagas(area, objetivo, requerido, experiencia) VALUES('${area}', '${objetivo}', '${requerido}', ${experiencia})`

        conexao.query(sql, (err) => {
            if (err) {
                return(err);
            } else {
                return("sucesso");
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

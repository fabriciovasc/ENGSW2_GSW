const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Vagas {
    
    adiciona(vaga, res){

        const data = moment(vaga.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const datavalida = moment(data).isSameOrAfter(dataCriacao);
        const validacoes = [
            {
                nome: 'data',
                valido: datavalida,
                mensagem: 'Data invalida'
            }
        ];

        const erros = validacoes.filter(campo => !campo.valido);
    
        const erroexiste = erros.length;

        if (erroexiste){
            res.status(400).json("Erro");
        } else {
            const vaga_nova = {...vaga};
            
            const sql = 'INSERT INTO vagas SET ?';

            conexao.query(sql, vaga_nova, (erro, resultados) => {
                if (erro){
                    res.status(400).json(erro);
                } else {
                    res.status(201).json(vaga);
                }
            })
        }
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
            const atendimentos = resultados[0];
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(atendimentos);
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

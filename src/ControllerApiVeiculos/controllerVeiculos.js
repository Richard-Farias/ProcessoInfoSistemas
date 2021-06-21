const connection = require('../DataBaseApiVeiculos/connectionApiVeiculos');

module.exports = {

    async  create(req, res) {
        const { placa, chassi, renavam, modelo, marca, ano } = req.body;
        try {
            const dados = await connection('veiculos').insert({

                placa,
                chassi,
                renavam,
                modelo,
                marca,
                ano
            });
            if (dados) {
                res.status(200).json(dados) 
            } else {
                res.status(404).json({ message: "Dados Inexistentes" })
            }
        } catch (e) {

            res.status(500).json({ message: "Erro ao conectar servidor", error: e })
        }


    },
    async index(req, res) {
        try {
            const dados = await connection('veiculos').select('*');

            if (dados) {
                res.status(200).json(dados )
            } else {
                res.status(404).json({ message: "Dados Inexistentes"})
            }
        } catch (e) {

            res.status(500).json({  message: "Erro ao conectar servidor", error: e })
        }



    },
    async update(req, res) {
        const changes = req.body;
        let id = req.params.id;
        try {

            const dados = await connection('veiculos').where("id", id).update(changes);

            if (dados) {
                res.status(200).json({ ID: req.params.id })
            } else {
                res.status(404).json({ message: "Dados Inexistentes" })
            }
        } catch (e) {
            res.status(500).json({ message: "Erro ao conectar servidor", error: e })
        }

    },
    async delete(req, res) {
        const id = req.params.id;
        try {
            const dados = await connection('veiculos').where('id', id).delete();
            if (dados) {
                res.status(200).json({ ID: id })
            } else {
                res.status(404).json({ message: "Dados Inexistentes"})
            }


        } catch (e) {
            res.status(500).json({  message: "Erro ao conectar servidor", error: e });
        }



    }

}
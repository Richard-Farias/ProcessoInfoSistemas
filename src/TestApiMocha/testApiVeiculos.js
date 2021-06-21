
const chai = require('chai')
const expect = chai.expect;
const crud = require('../ControllerApiVeiculos/controllerVeiculos');


const chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('Get', () => {
    it("Get Carros", () => {
        chai.request("http://localhost:1808").get('/')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                }
                chai.expect(res).have.status(200);
            })

    })

    describe('POST', () => {
        it("POST Carros", () => {
            chai.request("http://localhost:1808").post('/')
                .send({

                    "placa": "HHP-123",
                    "chassi": "0000000000000000000",
                    "renavam": "0000000000",
                    "modelo": "Carro Teste",
                    "marca": "Teste",
                    "ano": "2059"
                })
                .end((err, res) => {
                    if (err) {
                        console.log(err)
                    }
                    chai.expect(res).have.status(200);
                })
        })
    })
    describe('PUT', () => {
        it('Put Carros', () => {
            chai.request("http://localhost:1808").put('/alterar/5')
                .send({
                    "placa": "TEST-0000",
                    "chassi": "99999999999",
                    "renavam": "999999999",
                    "modelo": "Carro Alterado",
                    "marca": "Alterado",
                    "ano": "1999"})
                .end(function (err, res) {
                    
                    expect(res).to.have.status(200);
                });
        });
    })

    describe('DELETE', () => {
        it('Delete Carros', ()=>{
            chai.request("http://localhost:1808").delete('/delete/6')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                }
                chai.expect(res).have.status(200);
            })
        });
    })
});
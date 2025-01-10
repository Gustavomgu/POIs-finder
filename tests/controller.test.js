import request from 'supertest';
import app from '../app';
import * as service from '../services/service';

jest.mock('../services/service');

describe('Testes para as rotas da API', () => {

    it('Deve salvar um ponto com sucesso', async () => {
        service.Save.mockResolvedValue({ name: 'Point1', pointX: 10, pointY: 20 });

        const response = await request(app)
            .post('/')
            .send({
                name: 'Point1',
                pointX: 10,
                pointY: 20,
            });

        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Point1');
        expect(response.body.pointX).toBe(10);
        expect(response.body.pointY).toBe(20);
    });

    it('Deve retornar erro quando a função Save falha', async () => {
        service.Save.mockRejectedValue(new Error('Erro ao salvar ponto'));

        const response = await request(app)
            .post('/')
            .send({
                name: 'Point1',
                pointX: 10,
                pointY: 20,
            });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Erro ao salvar ponto');
    });

    it('Deve retornar todos os pontos', async () => {
        service.GetAll.mockResolvedValue([
            { name: 'Point1', pointX: 10, pointY: 20 },
            { name: 'Point2', pointX: 30, pointY: 40 },
        ]);

        const response = await request(app)
            .get('/GetAll');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[0].name).toBe('Point1');
    });

    it('Deve retornar pontos próximos a uma localização', async () => {
        service.GetAllCloseTo.mockResolvedValue([
            { name: 'Point1', pointX: 10, pointY: 20 },
            { name: 'Point2', pointX: 12, pointY: 22 },
        ]);

        const response = await request(app)
            .get('/GetAllClose')
            .send({
                pointX: 10,
                pointY: 20,
                radius: 5
            });

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[0].name).toBe('Point1');
    });
});

// tests/utils/calcularDistancia.test.js
const service = require('../service');

describe('calcularDistancia', () => {
    it('deve calcular a distância corretamente entre dois pontos', () => {
        const distancia = service.calcularDistancia(0, 0, 3, 4);
        expect(distancia).toBe(5); // Distância esperada entre (0, 0) e (3, 4)
    });

    it('deve retornar 0 se os pontos forem iguais', () => {
        const distancia = service.calcularDistancia(1, 1, 1, 1);
        expect(distancia).toBe(0);
    });
});

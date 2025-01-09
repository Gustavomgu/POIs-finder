const { GetAllCloseTo } = require('../src/services/tipoService');

jest.mock('../src/services/tipoService', () => ({
    GetAll: jest.fn(),
    GetAllCloseTo: jest.requireActual('../src/services/tipoService').GetAllCloseTo,
}));

describe('GetAllCloseTo', () => {
    it('deve retornar os tipos próximos ao ponto dado', async () => {
        require('../src/services/tipoService').GetAll.mockResolvedValue([
            { id: 1, pointX: 1, pointY: 1 },
            { id: 2, pointX: 5, pointY: 5 },
            { id: 3, pointX: 2, pointY: 2 },
        ]);

        const result = await GetAllCloseTo(1, 1, 2);

        expect(result).toHaveLength(2);
        expect(result).toEqual([
            { id: 1, pointX: 1, pointY: 1 },
            { id: 3, pointX: 2, pointY: 2 },
        ]);
    });
});

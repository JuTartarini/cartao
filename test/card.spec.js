const { assert } = require('chai');
const cardValidator = require('../index');

describe('Retorna true or false para validar números de cartões de credito ', () => {
    describe('Cartões válidos:', () => {
      it('Mastercard - 5555666677778884', () => {
        assert.equal(cardValidator('5555666677778884'), true);
      });
      it('Visa - 4012001037141112', () => {
        assert.equal(cardValidator('4012001037141112'), true);
      });
      it('Elo - 6362970000457013', () => {
        assert.equal(cardValidator('6362970000457013'), true);
      });
      it('Americacan Express - 376449047333005', () => {
        assert.equal(cardValidator('6362970000457013'), true);
      });
      it('Dinners Club - 36490102462661', () => {
        assert.equal(cardValidator('36490102462661'), true);
      });
      it('Hiper - 6370950000000005', () => {
        assert.equal(cardValidator('6370950000000005'), true);
      });
      it('Hipercard - 6062825624254001', () => {
        assert.equal(cardValidator('6062825624254001'), true);
      });
    });


    describe('Cartões inválidos:', () => {
      it('Vazio', () => {
        assert.equal(cardValidator(''), false);
      });
      it('Cartão inválido - 6062825624254005', () => {
        assert.equal(cardValidator('6062825624254005'), false);
      });
      it('Cartão válido com espaço no início - 6062825624254001', () => {
        assert.equal(cardValidator(' 6062825624254001'), false);
      });
      it('Cartão válido com espaço no fim 6062825624254001 ', () => {
        assert.equal(cardValidator('6062825624254001 '), false);
      });
      it('Cartão válido com espaço no meio 606282 5624254001', () => {
        assert.equal(cardValidator('606282 5624254001'), false);
      });
      it('Cartão válido com letras a6062825624254001', () => {
        assert.equal(cardValidator('a6062825624254001'), false);
      });
      it('Números inválidos - 0000111122223333', () => {
        assert.equal(cardValidator('0000111122223333'), false);
      });
      it('Letras - divirta-se', () => {
        assert.equal(cardValidator('divirta-se'), false);
      });
    });
  });
  
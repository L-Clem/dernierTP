// test.js

const assert = require('assert');
const somme = require('./somme');

// Tests unitaires
describe('somme()', function() {
  it('Avec les valeurs de paramètres 2 et 3, la fonction somme() est sensée retourner la valeur 5', function() {
    assert.strictEqual(somme(2, 3), 5);
  });

  it('Avec les valeurs de paramètres -1 et 4, la fonction somme() est sensée retourner la valeur 3', function() {
    assert.strictEqual(somme(-1, 4), 3);
  });

  it('Avec les valeurs de paramètres 7 et null, la fonction somme() devrait lancer une exception "Paramètre invalide."', function() {
    assert.throws(() => somme(7, null), SyntaxError, "Paramètre invalide.");
  });

  it('Avec les valeurs de paramètres "a" et 3, la fonction somme() devrait lancer une exception "Paramètre invalide."', function() {
    assert.throws(() => somme('a', 3), SyntaxError, "Paramètre invalide.");
  });
});

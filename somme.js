// La fonction somme() retourne la somme des nombres passés en paramètre. 
// Tout paramètre manquant aura 0 comme valeur par défaut. 
// Si un des paramètre n'est pas de type `number`, la fonction lèvera une 
// exception avec le message d'erreur "paramètre invalide". 


/**
 * Retourne la somme des nombres passés en paramètre.
 * @param {number|null} [cumulande=0] - L'opérande avec lequel le cumulateur est ajouté pour obtenir la somme.
 * @param {number|null} [cumulateur=0] - L'opérande avec lequel le cumulande est ajouté pour obtenir la somme.
 * @throws {SyntaxError} - Paramètre invalide.
 * @returns {number}
 */
function somme(cumulande = 0, cumulateur = 0) {
    if (typeof cumulande !== 'number' || typeof cumulateur !== 'number') {
        throw new SyntaxError("Paramètre invalide.");
    }

    return cumulande + cumulateur;
}


module.exports = somme;
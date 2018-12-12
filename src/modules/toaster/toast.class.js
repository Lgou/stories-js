/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aélion
 * @version 1.0.0
 */

export class Toast {
    constructor(params) {
        if (!params.hasOwnProperty('background')) {
        // Paramètre de définition de la couleur de fond de toast
        this.backgroundClass = 'danger';
        }

        if (!params.hasOwnProperty('duration')) {
            // Durée d'affichage du toast(en secondes)
            this.duration = 3;
        } else { 
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = params.message;
        }}
            
    setBackground(cssClass) {
        this.backgroundClass = cssClass;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    toastIt() {
        const toaster = $('<div>'); // je créé un nouvel élément en mémoire dans le DOM via le div (sans mettre la balise de fin)

        // On lui ajoute des classes
        toaster
            .addClass('toast')    // méthode jquery pour créer une classe toast en mémoire
            .addClass(this.backgroundClass)
            .addClass('animated')
            .addClass('fadeInDownBig')
            
            .html(this.message);

            // Ajoute le toaster au document lui-même (au body du doc html)
        toaster.appendTo($('body'));

        
        // Affiche pendant un certain temps
        setTimeout(
            function() {
                // Ici, quand on arrive au bout de l'intervalle de temps on enlève le toaster --> setTimeout est une fonction prédéfinie de Javascript qui a 2 paramètres (une fonction qui se déclenche après une certain durée)
                toaster.remove();
            },
            this.duration * 1000
        );
    }
}
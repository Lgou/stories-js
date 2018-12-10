/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aélion
 * @version 1.0.0
 */

class Toast {
    constructor() {
        // Paramètre de définition de la couleur de fond de toast
        this.backgroundClass = 'danger';

        // Durée d'affichage du toast (en secondes)
        this.duration = 3;
    } 


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
            
            .html('Hello toaster');

            // Ajoute le toaster au document lui-même (au body du doc html)
        toaster.appendTo($('body'));

        
        // Affiche pendant un certain temps
        setTimeout(
            function() {
                // Ici, quand on arrive au bout de l'intervalle de temps
                toaster.remove();
            },
            this.duration * 1000
        );
    }
}
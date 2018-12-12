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
        } else {
            this.backgroundClass = params.background;
        }


        if (!params.hasOwnProperty('duration')) {
            // Durée d'affichage du toast(en secondes)
            this.duration = 3;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = params.message;
        } else {
            this.message = params.message;
        }

        if (!params.hasOwnProperty('height')) {
            this.height = params.height + 'px';
        } else {
            this.height = params.height;
        }

        if (!params.hasOwnProperty('width')) {
            this.width = params.width + 'px';
        } else {
            this.width = params.width;
        }
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
                .addClass('toast')    // méthode jquery pour créer.css('width', this.width) une classe toast en mémoire
                .addClass(this.backgroundClass)
                .css('width', this.width)
                .css('height', this.height)
                .html('<p>' + this.message + '</p>');

            // Ajoute le toaster au document lui-même (au body du doc html)
            toaster.appendTo($('body'));


            // Affiche pendant un certain temps
            setTimeout(
                function () {
                    // Ici, quand on arrive au bout de l'intervalle de temps on enlève le toaster --> setTimeout est une fonction prédéfinie de Javascript qui a 2 paramètres (une fonction qui se déclenche après une certain durée)
                    toaster.remove();
                },
                this.duration * 1000
            );
        }
    }
    
/**
 * @name Stories Controller
 * @desc Controleur pour l'affichage des stories
 * @author Aélion
 * @version 1.0.0
 */


export class StoriesController {
    constructor() {
        // Définit la vue pour ce contrôleur
        this.view = './src/stories/views/stories.views.html';
    }


    /**
     * Méthode pour récupérer la vue à afficher
     */

    getView() {
        //Récupère le placeholder de mon application
        const app = $('[app2]');

        $.get(
            this.view,
            function (viewContent) {
                app.empty(); //Vide le contenu le cas échéant
                app.html(viewContent);
            }
        );
    }

// $get permet de lire le contenu de this.view et après ça le réinjecte dans la variable viewContent


}


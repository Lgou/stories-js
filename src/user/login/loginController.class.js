/**
 * @name Login Controller
 * @desc Controleur pour la gestion du formulaire de login
 * @author Aélion
 * @version 1.0.0
 */

export class LoginController {
    constructor() {
        // Définit la vue pour ce contrôleur
        this.view = './src/user/login/views/loginform.view.html';
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */

    getView() {
        //Récupère le placeholder de mon application
        const app = $('[app]');

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
import { User } from './user.class';
import { Menu } from './../Menu/menu.class';
import { Toast } from './../modules/toaster/toast.class';

export class Login {
    constructor() {
        //Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        //Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');


        //Définition des attributs login et password
        this.login = $('[name="loginField"]');
        this.password = $('[name="passwordField"]');

        // Définition du listener sur le formulaire
        this.formListener();
        this.submitListener();

    }


    /**
     * formListener Gestionnaire d'évènements sur le formulaire Login (on appelle la méthode comme on veut, si possible en anglais ... 
     * param void permet de dire que la méthode ne prend pas de paramètre et le return que la méthode ne retourne rien)
     * @param void
     * @return void
     */
    formListener() {

        const app = $('[app]');

        app.on(
            'keyup',
            '#loginForm', //Délégation d'évènement...
            // callback : fonction appelée si l'évènement défini survient
            function (event) {
                // Vérifier le contenu des champs
                let login = $('[name=loginField]');
                let password = $('[name=passwordField]');

                // Est-ce que les deux champs sont remplis
                if (
                    password.val() !== '' &&
                    login.val().length >= 5) {
                    // on peut activer le bouton connexion
                    $('#btnLogin').removeAttr('disabled');

                } else {
                    // Non, ça ne le fait pas tout seul, il faut lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }

            }
        );
    }


    submitListener() {
        const app = $('[app]');
        app.on(
            'submit',
            '#loginForm',
            function (event) {

                //Définition des attributs
                let login = $ ('[name="loginField"]');
                let password = $ ('[name="passwordField"]');

                event.preventDefault(); // Empêche l'action par défault...

                //Instancie un nouvel utilisateur
                const user = new User();

                //Définit le login et le password de l'utilisateur

                user.setUsername(login.val());
                user.setPassword(password.val());

                // Gère l'authentification...

                if (user.authenticate() === true) {
                    console.log('Oki, tu peux y aller');
                    const menu = new Menu();
                    menu.setUser(user);


                } else {
                    console.log('ko, tu ne peux pas !');
                    login.val('');
                    password.val('');
                    $('#btnLogin').attr('disabled', 'disabled');

                    // On peut instancier un toast
                    const toast = new Toast(
                        {
                            message: 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                            duration: 2,
                            background: 'danger',
                            width: 200,
                            height: 100
                        }

                    );
                    toast.toastIt();
                }
            }
        );
    }
}


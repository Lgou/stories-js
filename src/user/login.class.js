class Login {
    constructor() {
        //Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        //Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        // Définition du listener sur le formulaire
        this.formListener();

    }


    /**
     * formListener Gestionnaire d'évènements sur le formulaire Login (on appelle la méthode comme on veut, si possible en anglais ... 
     * param void permet de dire que la méthode ne prend pas de paramètre et le return que la méthode ne retourne rien)
     * @param void
     * @return void
     */
    formListener() {
        $('#loginForm').on(
            'keyup',
            // callback : fonction appelée si l'évènement défini survient
            function(event) {
                // Vérifier le contenu des champs
                const login = $('[name=loginField]');
                const password = $('[name=passwordField]');

                // Est-ce que les deux champs sont remplis
                if ( 
                    password.val() !== '' && 
                    login.val().length >=5 ) {
                    // on peut activer le bouton connexion
                    $('#btnLogin').removeAttr('disabled');
                
                } else {
                    // Non, ça ne le fait pas tout seul, il faut lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }

            }
        );


    }
}


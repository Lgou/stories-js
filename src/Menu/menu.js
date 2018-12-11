/** 
* @name : Menu
* @desc : gestion du menu utilisateur
* @author : Aélion
* @version : 1.0.0
*/


export class Menu {
    constructor() {
        this.options = [
            { title: 'Accueil', active: 'always' },
            { title: 'Toutes les stories', active: 'isAdmin' },
            { title: 'Mes stories', active: 'always' },
            {
                title: 'Mon compte', active: 'always', options: [
                    { title: 'Mes prépférences' },
                    { title: 'Changer de mot de passe' },
                    { title: true },
                    { title: 'Déconnexion' }]

            }
        ]
    }

    /** Définition de l'utilisateur connecté */

    setUser(user) {
        this.user = user;
        // Met à jour le menu utilisateur
        this._update();

        // Active ou pas les options
        this._activate();
    }

    _uptdate() {


        // Mise à jour de l'option du menu: (username)

        const userMenu = $('#userMenu');
        userMenu.html(this.user.userName);

        // On définit les options du menu
        const dropdownBlock = $('#userMenuOptions');

        //Virer les options existantes
        dropdownBlock.empty();

        // Recharge les options à partir de la définition
        const userMenuOptions = this.options[3].options;
        for (const options of userMenuOptions) {
            const item = this._makeOption(option);
            item.appendTo(dropdownBlock);
        }

        // En fin de parcours, on affiche le menu
        dropdownBlock.removeClass('hidden');
    }

    _makeOption(option) {
        let item = null;
    }

    _activate() {
        for (let option of this.options) {
            const item = $('[title="' + option.title + '"]');



        }
    }
}
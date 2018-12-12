/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application javascript
 */

import { Login } from './../../src/user/login.class';
import { LoginController } from './../../src/user/login/loginController.class';
import { StoriesController } from '../../src/stories/storiesController.class';
import { UserService } from './../../src/services/user-service.class'


// @version 1.0.1 Passage par contrôleur
const authGuard = new UserService();
if (!authGuard.hasUser()) {

const controller = new LoginController();
controller.getView();

// Créer une instance de la classe Login : le mot clé new permet de créer une instance à partir de la classe login
const login = new Login();
} else {
// @version 1.0.1 Passage par contrôleur
const controller = new StoriesController();
controller.getView();
}

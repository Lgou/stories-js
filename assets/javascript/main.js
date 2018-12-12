/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application javascript
 */

import { Login } from './../../src/user/login.class';
import { LoginController } from './../../src/user/login/loginController.class';

let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';

// Créer une instance de la classe Login : le mot clé new permet de créer une instance à partir de la classe login
const login = new Login();

// @version 1.0.1 Passage par contrôleur
const controller = new LoginController();
controller.getView();



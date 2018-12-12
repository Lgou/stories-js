/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/main.js":
/*!***********************************!*\
  !*** ./assets/javascript/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login = __webpack_require__(/*! ./../../src/user/login.class */ "./src/user/login.class.js");

var _loginController = __webpack_require__(/*! ./../../src/user/login/loginController.class */ "./src/user/login/loginController.class.js");

var _storiesController = __webpack_require__(/*! ../../src/stories/storiesController.class */ "./src/stories/storiesController.class.js");

var _userService = __webpack_require__(/*! ./../../src/services/user-service.class */ "./src/services/user-service.class.js");

// @version 1.0.1 Passage par contrôleur
/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application javascript
 */

var authGuard = new _userService.UserService();
if (!authGuard.hasUser()) {

  var controller = new _loginController.LoginController();
  controller.getView();

  // Créer une instance de la classe Login : le mot clé new permet de créer une instance à partir de la classe login
  var login = new _login.Login();
} else {
  // @version 1.0.1 Passage par contrôleur
  var _controller = new _storiesController.StoriesController();
  _controller.getView();
}

/***/ }),

/***/ "./src/Menu/menu.class.js":
/*!********************************!*\
  !*** ./src/Menu/menu.class.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Menu
 * @desc Gestion du menu utilisateur
 * @author Aélion
 * @version 1.0.0
 */
var Menu = exports.Menu = function () {
    function Menu() {
        _classCallCheck(this, Menu);

        this.options = [{ title: 'Accueil', active: 'always' }, { title: 'Toutes les Stories', active: 'isAdmin' }, { title: 'Mes stories', active: 'always' }, { title: 'Mon compte', active: 'always', options: [{ title: 'Mes préférences' }, { title: 'Changer de mot de passe' }, { divider: true }, { title: 'Déconnexion' }] }];
    }

    /**
     * Définit l'utilisateur connecté
     * @param {*} user 
     */


    _createClass(Menu, [{
        key: 'setUser',
        value: function setUser(user) {
            this.user = user;
            // Met à jour le menu Utilisateur
            this._update();

            // Active ou pas les options
            this._activate();
        }
    }, {
        key: '_update',
        value: function _update() {
            // Mise à jour de l'option du menu : (userName)
            var userMenu = $('#userMenu');
            userMenu.html(this.user.userName);

            // On définit les options du menu
            var dropdownBlock = $('#userMenuOptions');

            // Virer les options existantes
            dropdownBlock.empty();

            // Recharge les options à partir de la définition
            var userMenuOptions = this.options[3].options;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = userMenuOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var option = _step.value;

                    var item = this._makeOption(option);
                    item.appendTo(dropdownBlock);
                }

                // En fin de parcours, on affiche le menu
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            dropdownBlock.removeClass('hidden');
        }
    }, {
        key: '_makeOption',
        value: function _makeOption(option) {
            var item = null;

            if (option.hasOwnProperty('title')) {
                // link logic here
                item = $('<a>');
                item.addClass('dropdown-item').attr('href', '#').html(option.title);
                // <a class="dropdown-item" href="#">Action</a>
            } else {
                // divider logic here
                // <div class="dropdown-divider"></div>
                item = $('<div>');
                item.addClass('dropdown-divider');
            }
            return item;
        }
    }, {
        key: '_activate',
        value: function _activate() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var option = _step2.value;

                    var item = $('[title="' + option.title + '"]');

                    if (option.active === 'always') {
                        item.removeClass('disabled');
                    } else if (option.active === 'isAdmin' && this.user.group === 'Administrateur') {
                        item.removeClass('disabled');
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return Menu;
}();

/***/ }),

/***/ "./src/modules/toaster/toast.class.js":
/*!********************************************!*\
  !*** ./src/modules/toaster/toast.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Toast
 * @desc Affiche un toast (snackbar)
 * @author Aélion
 * @version 1.0.0
 */

var Toast = exports.Toast = function () {
    function Toast(params) {
        _classCallCheck(this, Toast);

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

    _createClass(Toast, [{
        key: 'setBackground',
        value: function setBackground(cssClass) {
            this.backgroundClass = cssClass;
        }
    }, {
        key: 'setDuration',
        value: function setDuration(duration) {
            this.duration = duration;
        }
    }, {
        key: 'toastIt',
        value: function toastIt() {
            var toaster = $('<div>'); // je créé un nouvel élément en mémoire dans le DOM via le div (sans mettre la balise de fin)

            // On lui ajoute des classes
            toaster.addClass('toast') // méthode jquery pour créer.css('width', this.width) une classe toast en mémoire
            .addClass(this.backgroundClass).css('width', this.width).css('height', this.height).html('<p>' + this.message + '</p>');

            // Ajoute le toaster au document lui-même (au body du doc html)
            toaster.appendTo($('body'));

            // Affiche pendant un certain temps
            setTimeout(function () {
                // Ici, quand on arrive au bout de l'intervalle de temps on enlève le toaster --> setTimeout est une fonction prédéfinie de Javascript qui a 2 paramètres (une fonction qui se déclenche après une certain durée)
                toaster.remove();
            }, this.duration * 1000);
        }
    }]);

    return Toast;
}();

/***/ }),

/***/ "./src/services/user-service.class.js":
/*!********************************************!*\
  !*** ./src/services/user-service.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name UserService
 * @desc Service de gestion de la persistence de l'utilisateur
 * @author Aélion
 * @version 1.0.0
 */

var UserService = exports.UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);
    }

    /**
     * Lit localStorage pour récupérer un éventuel  utilisateur
     * @return boolean
     * 
     */


    _createClass(UserService, [{
        key: 'hasUser',
        value: function hasUser() {
            var user = JSON.parse(localStorage.getItem('storiesUser'));
            if (user) {
                return true;
            }
            return false;
        }
    }]);

    return UserService;
}();

/***/ }),

/***/ "./src/stories/storiesController.class.js":
/*!************************************************!*\
  !*** ./src/stories/storiesController.class.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Stories Controller
 * @desc Controleur pour l'affichage des stories
 * @author Aélion
 * @version 1.0.0
 */

var StoriesController = exports.StoriesController = function () {
    function StoriesController() {
        _classCallCheck(this, StoriesController);

        // Définit la vue pour ce contrôleur
        this.view = './src/stories/views/stories.views.html';
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */

    _createClass(StoriesController, [{
        key: 'getView',
        value: function getView() {
            //Récupère le placeholder de mon application
            var app = $('[app2]');

            $.get(this.view, function (viewContent) {
                app.empty(); //Vide le contenu le cas échéant
                app.html(viewContent);
            });
        }

        // $get permet de lire le contenu de this.view et après ça le réinjecte dans la variable viewContent


    }]);

    return StoriesController;
}();

/***/ }),

/***/ "./src/user/login.class.js":
/*!*********************************!*\
  !*** ./src/user/login.class.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(/*! ./user.class */ "./src/user/user.class.js");

var _menu = __webpack_require__(/*! ./../Menu/menu.class */ "./src/Menu/menu.class.js");

var _toast = __webpack_require__(/*! ./../modules/toaster/toast.class */ "./src/modules/toaster/toast.class.js");

var _storiesController = __webpack_require__(/*! ../stories/storiesController.class */ "./src/stories/storiesController.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = exports.Login = function () {
    function Login() {
        _classCallCheck(this, Login);

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


    _createClass(Login, [{
        key: 'formListener',
        value: function formListener() {

            var app = $('[app]');

            app.on('keyup', '#loginForm', //Délégation d'évènement...
            // callback : fonction appelée si l'évènement défini survient
            function (event) {
                // Vérifier le contenu des champs
                var login = $('[name=loginField]');
                var password = $('[name=passwordField]');

                // Est-ce que les deux champs sont remplis
                if (password.val() !== '' && login.val().length >= 5) {
                    // on peut activer le bouton connexion
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    // Non, ça ne le fait pas tout seul, il faut lui dire
                    $('#btnLogin').attr('disabled', 'disabled');
                }
            });
        }
    }, {
        key: 'submitListener',
        value: function submitListener() {
            var app = $('[app]');
            app.on('submit', '#loginForm', function (event) {

                //Définition des attributs
                var login = $('[name="loginField"]');
                var password = $('[name="passwordField"]');

                event.preventDefault(); // Empêche l'action par défault...

                //Instancie un nouvel utilisateur
                var user = new _user.User();

                //Définit le login et le password de l'utilisateur

                user.setUsername(login.val());
                user.setPassword(password.val());

                // Gère l'authentification...

                if (user.authenticate() === true) {
                    console.log('Oki, tu peux y aller');
                    var menu = new _menu.Menu();
                    menu.setUser(user);
                } else {
                    console.log('ko, tu ne peux pas !');
                    login.val('');
                    password.val('');
                    $('#btnLogin').attr('disabled', 'disabled');

                    // On peut instancier un toast
                    var toast = new _toast.Toast({
                        message: 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                        duration: 2,
                        background: 'danger',
                        width: 200,
                        height: 100
                    });
                    toast.toastIt();
                }
            });
        }
    }]);

    return Login;
}();

/***/ }),

/***/ "./src/user/login/loginController.class.js":
/*!*************************************************!*\
  !*** ./src/user/login/loginController.class.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Login Controller
 * @desc Controleur pour la gestion du formulaire de login
 * @author Aélion
 * @version 1.0.0
 */

var LoginController = exports.LoginController = function () {
    function LoginController() {
        _classCallCheck(this, LoginController);

        // Définit la vue pour ce contrôleur
        this.view = './src/user/login/views/loginform.view.html';
    }

    /**
     * Méthode pour récupérer la vue à afficher
     */

    _createClass(LoginController, [{
        key: 'getView',
        value: function getView() {
            //Récupère le placeholder de mon application
            var app = $('[app]');

            $.get(this.view, function (viewContent) {
                app.empty(); //Vide le contenu le cas échéant
                app.html(viewContent);
            });
        }

        // $get permet de lire le contenu de this.view et après ça le réinjecte dans la variable viewContent


    }]);

    return LoginController;
}();

/***/ }),

/***/ "./src/user/user.class.js":
/*!********************************!*\
  !*** ./src/user/user.class.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aélion
 * @version 1.0.0
 */

var User = exports.User = function () {
    function User() {
        _classCallCheck(this, User);
    }
    /**
     * Définit le username de l'utilisateur 
     * @param {*} username
     * 
     */


    _createClass(User, [{
        key: 'setUsername',
        value: function setUsername(userName) {
            this.userName = userName;
        }

        /**
                  * Définit le username de l'utilisateur 
                  * @param {*} username
                  * 
                  */

    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            this.password = password;
        }
    }, {
        key: 'authenticate',
        value: function authenticate() {
            if (this.userName === 'lgourves' && this.password === 'lg') {
                this.group = 'Administrateur';
                // Ajout de l'utilisateur dans localStorage
                var persistentUser = {
                    userName: this.userName,
                    group: this.group
                };
                localStorage.setItem('storiesUser', JSON.stringify(persistentUser));
                return true;
            }

            return false;
        }
    }]);

    return User;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map
/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aélion
 * @version 1.0.0
 */

 class User {
     constructor () {}
         /**
          * Définit le username de l'utilisateur 
          * @param {*} username
          * 
          */
         setUsername(userName) {
             this.userName = userName;
         }

/**
          * Définit le username de l'utilisateur 
          * @param {*} username
          * 
          */

         setPassword(password) {
             this.password = password;
         }

         authenticate() {
             if (this.userName === 'lgourves' && this.password === 'lg' ) {
                 this.group = 'Administrateur';
                 return true;
             }

             return false;
         
            }
     }
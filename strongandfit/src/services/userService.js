import axios from "axios";
//import configuration from './configuration.js';

const userService = {
    userDataKey: 'userData',
    baseURI: 'http://localhost/strongandfit/public',

    getToken: function(username, password) {

        // On envoie des données vers l'API
        return axios.post(
            userService.baseURI + '/wp-json/jwt-auth/v1/token',
            {
                username: username,
                password: password
            }        
            ).then(response => { // On récupère la réponse retournée par l'API
            if(response.data.code === 'jwt_auth_valid_credential') {
                const stringData = JSON.stringify(response.data.data); //Conversion des données visées en chaîne de caractère
                // Enregistrement des data en session storage
                window.sessionStorage.setItem(userService.userDataKey, stringData);
                // On retourne les informations de l'utilisateur connecté
                return response.data.data;
            }
            else {
                return false;
            }
        });
    },

    getCurrentUserData: function() {
        // On récupère les données stockées dans le session storage
        const json = window.sessionStorage.getItem(userService.userDataKey);
    
        //Si l'utilisateur est connecté, on retourne les informations stockées dans le sessionStorage
        if(json) {
            let currentUserData = JSON.parse(json);
            return currentUserData;
        }
        else {
            // Si l'utilisateur n'est pas connecté, false est retourné car sessionStorage ne contient pas d'informations
            return false
        }
      },

    deleteCurrentUserData: function() {
        window.sessionStorage.removeItem(userService.userDataKey);
        localStorage.clear();
    },
}

export default userService;
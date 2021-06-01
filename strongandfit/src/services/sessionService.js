import axios from 'axios';
import configuration from './configuration.js';
import userService from './userService.js';

const sessionService = {

    baseURI: configuration.backendBaseURI,

    getSessionsByAuthorId: function() {
        const currentUserData = userService.getCurrentUserData();
        const authorId = currentUserData.id;

        return axios.get(sessionService.baseURI + '/wp-json/wp/v2/session?_embed=1&author=' + authorId)
        .then(sessionService.handleGetSessionsResponse);
    },

    createSession: function(time, programId, title) {
        const currentUserData = userService.getCurrentUserData();

        if(currentUserData) {

            const token = currentUserData.token;
            //console.log('createSession :' + programId);
            return axios.post(
      
              userService.baseURI + '/wp-json/strongandfit/v1/session-create',
              {
                title: title,
                content: 'Bravo ! Vous avez complété cette séance, prêt à la refaire ?',
                user_time: time,
                program_id: programId
              },
      
              // ajout du token d'indentification dans les headers de la requête http
              {
                headers: {
                  Authorization: 'Bearer ' + token
                }
              }
            ).then(response => {
              return response.data;
            });
          }
          else {
            return false;
          }
    },

    handleGetSessionsResponse: function(response) {
        return response.data;
    },
}

export default sessionService;
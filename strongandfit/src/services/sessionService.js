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

    handleGetSessionsResponse: function(response) {
        return response.data;
    },
}

export default sessionService;
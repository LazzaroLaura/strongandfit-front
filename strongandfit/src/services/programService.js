import axios from 'axios';
import configuration from './configuration.js';

const programService = {

    baseURI: configuration.backendBaseURI,

    getPrograms: function() {
        return axios.get(programService.baseURI + '/wp-json/wp/v2/program?_embed=1')
          .then(programService.handleGetProgramsResponse);
      },

    handleGetProgramsResponse: function(response) {
        console.log('response' + response);
        return response.data;
    }
}

export default programService;
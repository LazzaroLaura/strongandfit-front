import axios from 'axios';
import configuration from './configuration.js';

const programService = {

    baseURI: configuration.backendBaseURI,

    getPrograms: function() {
        return axios.get(programService.baseURI + '/wp-json/wp/v2/program?_embed=1')
          .then(programService.handleGetProgramsResponse);
    },

    getProgramZones: function() {
        return axios.get(programService.baseURI + '/wp-json/wp/v2/zone')
        .then(programService.handleGetProgramsResponse);
    },

    getProgramTypes: function() {
        return axios.get(programService.baseURI + '/wp-json/wp/v2/type')
        .then(programService.handleGetProgramsResponse);
    },

    getProgramsByTypeAndZone: function(zoneId, typeId) {

        return axios.get(programService.baseURI + '/wp-json/wp/v2/program?_embed=1&zone=' + zoneId + '&tax_relation=AND&type=' + typeId)
        .then(programService.handleGetProgramsResponse);
    },

    handleGetProgramsResponse: function(response) {
        return response.data;
    },
}

export default programService;
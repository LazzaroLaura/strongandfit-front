<template>
    <fieldset>
        Choix de la zone

        <select v-model="selected" @change="$emit('change', selected)">
            <option></option>
            <option
                v-for="currentProgramZone in programZones"
                :key="currentProgramZone.id"
                :value="currentProgramZone.id"
            >
                {{currentProgramZone.name}}
            </option>

        </select>
    </fieldset>
</template>


<script>

import programService from '../services/programService.js';

export default {

    created() {
        programService.getProgramZones().then((programZones) => {
            console.log('%c' + 'La réponse récupérée par le service Program Zone est disponible', 'color: #0bf; font-size: 1rem; background-color:#fff');
            console.log(programZones);
            this.programZones = programZones;
        });
    },

    data: function() {
        return {
            selected: 0,
            programZones: [

            ]
        }
    },

}


</script>


<style scoped>

</style>
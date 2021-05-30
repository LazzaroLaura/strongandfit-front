<template>
    <fieldset>
        Choix du type

        <select v-model="selected" @change="$emit('change', selected)">

            <option></option>
            <option
                v-for="currentProgramType in programTypes"
                :key="currentProgramType.id"
                :value="currentProgramType.id"
            >
                {{currentProgramType.name}}
            </option>

        </select>
    </fieldset>
</template>


<script>

import programService from '../services/programService.js';

export default {

    created() {
        programService.getProgramTypes().then((programTypes) => {
            console.log('%c' + 'La réponse récupérée par le service Program Type est disponible', 'color: #0bf; font-size: 1rem; background-color:#fff');
            console.log(programTypes);
            this.programTypes = programTypes;
        });
    },

    data: function() {
        return {
            selected: 0,
            programTypes: [

            ]
        }
    },


    /*
    methods: {
        sendSelectedType: function() {
            this.$emit('change', this.selected);
        }
    }
    */
}


</script>


<style scoped>

</style>
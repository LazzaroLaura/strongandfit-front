<template>

<div id="select">

    <fieldset>
        Choix de la zone

        <select v-model="selectedZone">
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

    <fieldset>
        Choix du type

        <select v-model="selectedType">

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

    <div>
        <button @click="programsBySearch">Chercher</button>
    </div>

</div>

</template>


<script>

import programService from '../services/programService.js';

export default {

    methods: {
        programsBySearch: function() {

            if(this.selectedZone && this.selectedType) {
                this.$router.push({
                    name: 'programsBySearch',
                    params: {
                        id: this.selectedZone,
                        typeId: this.selectedType
                    }
                });
            }
        }
    },

    created() {
        programService.getProgramZones().then((programZones) => {
            console.log('%c' + 'La réponse récupérée par le service Program Zone est disponible', 'color: #0bf; font-size: 1rem; background-color:#fff');
            console.log(programZones);
            this.programZones = programZones;
        });
        programService.getProgramTypes().then((programTypes) => {
            console.log('%c' + 'La réponse récupérée par le service Program Type est disponible', 'color: #0bf; font-size: 1rem; background-color:#fff');
            console.log(programTypes);
            this.programTypes = programTypes;
        });
    },

    data: function() {
        return {
            selectedZone: null,
            selectedType: null,
            programZones: [

            ],
            programTypes: [

            ],
        }
    },

}


</script>


<style scoped>

#select
{
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: start;
    margin-top: 20px;
    margin-bottom: 20px;
}

</style>
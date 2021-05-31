<template>
    <section>
        <h1>Programme par tri</h1>
        <ProgramThumbnail
            v-for="currentProgram in programs"
            :key="currentProgram.id"
            :recipe="currentProgram"
        />
    </section>
</template>


<script>

import programService from '../services/programService.js';
import ProgramThumbnail from './ProgramThumbnail.vue';

export default {

    components: {
        ProgramThumbnail
    },

    created() {

        const zoneId = this.$route.params.id;
        const typeId = this.$route.params.typeId;
        programService.getProgramsByTypeAndZone(zoneId, typeId).then((programs) => {
            console.log('%c' + 'La réponse récupérée par le service Program By Select est disponible', 'color: #0bf; font-size: 1rem; background-color:#fff');
            console.log(programs);
            this.programs = programs;
        });
    },

    data: function() {
        return {
            programs: [

            ]
        }
    },
}


</script>


<style scoped>

</style>
<template>
    <section>

        <h1>Programmes</h1>
        <ProgramThumbnail
            v-for="currentProgram in programs"
            :key="currentProgram.id"
            :program="currentProgram"
        />

    </section>
</template>


<script>
import ProgramThumbnail from './ProgramThumbnail.vue';
import programService from '../services/programService.js';


export default {

    components: {
        ProgramThumbnail
    },

    created() {
        programService.getPrograms().then((programs) => {
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
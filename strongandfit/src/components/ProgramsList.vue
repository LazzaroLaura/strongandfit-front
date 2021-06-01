<template>
    <section>

    <div v-if="currentUser">

        <ProgramThumbnail
            v-for="currentProgram in programs"
            :key="currentProgram.id"
            :program="currentProgram"
        />
    </div>

    </section>
</template>


<script>
import ProgramThumbnail from './ProgramThumbnail.vue';
import programService from '../services/programService.js';
import userService from '../services/userService.js';

export default {

    components: {
        ProgramThumbnail
    },

    created() {
        programService.getPrograms().then((programs) => {
            this.programs = programs;
        });
    
        this.currentUser = userService.getCurrentUserData();
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
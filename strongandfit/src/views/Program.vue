<template>

    <div v-if="program">
        <article>

            <ProgramFigure v-if="program._embedded['wp:featuredmedia']"
                :image="program._embedded['wp:featuredmedia'][0].source_url"
                :title="program.title.rendered"
            />
            <hl v-else>{{program.title.rendered}}</hl>



            <main>
                <div v-html="program.content.rendered"></div>
            </main>

            <div>
                <router-link :to="{
                    name: 'home'
                }">
                    Revenir sur la home
                </router-link>
            </div>
        </article>

        
    </div>
</template>


<script>

import programService from '../services/programService.js';
import ProgramFigure from '../components/ProgramFigure.vue';


export default {

    created: function() {

        const programId = this.$route.params.id;

        // récupération en ajx des information de la requête
        programService.getProgramById(programId)
            .then(programData => {

                this.program = programData;
            })
        ;
    },

    components: {
        ProgramFigure,
    },

    data: function() {
        return {
            program: null,
        }
    },
}

</script>

<style scoped>


</style>
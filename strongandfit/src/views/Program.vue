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

            <h2>Faire ce programme</h2>
            <div id="app">
                <button @click="start">Start</button>
                <button @click="stop">Stop</button>
                <button @click="reset">Reset</button>
                <p>{{formattedElapsedTime}}</p>
            </div>

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

    name: "App",
    data() {
        return {
        elapsedTime: 0,
        timer: undefined,
        program: null,
        };
    },
    computed: {
        formattedElapsedTime() {
        const date = new Date(null);
        date.setSeconds(this.elapsedTime / 1000);
        const utc = date.toUTCString();
        return utc.substr(utc.indexOf(":") - 2, 8);
        }
    },
    methods: {
        start() {
        this.timer = setInterval(() => {
            this.elapsedTime += 1000;
        }, 1000);
        },
        stop() {
        clearInterval(this.timer);
        },
        reset() {
        this.elapsedTime = 0;
        }
    },


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

    /* data: function() {
        return {
            program: null,
        }
    }, */
}

</script>

<style scoped>


</style>
<template>
    <article v-if="program">

        <ProgramFigure
            v-if="program._embedded['wp:featuredmedia']"
            :image="program._embedded['wp:featuredmedia'][0].source_url"
            :title="program.title.rendered"
        />
        <h2 v-else>{{program.title.rendered}}</h2>

        <div class="excerpt" v-html="program.excerpt.rendered"></div>

    </article>
</template>


<script>

import ProgramFigure from './ProgramFigure.vue';


export default {
    props:{
        program: {
            type: Object,
        },
    },

    components: {
        ProgramFigure
    }
}
</script>


<style scoped>

</style>
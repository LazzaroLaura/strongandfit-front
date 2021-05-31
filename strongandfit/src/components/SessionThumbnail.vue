<template>
    <article v-if="session">

        <Figure
            v-if="session._embedded['wp:featuredmedia']"
            :image="session._embedded['wp:featuredmedia'][0].source_url"
            :title="session.title.rendered"
        />
        <h2 v-else>{{session.title.rendered}}</h2>

        <div class="excerpt" v-html="session.excerpt.rendered"></div>

    </article>
</template>


<script>

import Figure from './Figure.vue';

export default {
    props:{
        session: {
            type: Object,
        },
    },

    components: {
        Figure
    }
}

</script>


<style scoped>

</style>
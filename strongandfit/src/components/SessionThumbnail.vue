<template>
    <article v-if="session">

        <SessionFigure
            v-if="session._embedded['wp:featuredmedia']"
            :image="session._embedded['wp:featuredmedia'][0].source_url"
            :title="session.title.rendered"
            :time="session.user_time"
        />
        <h2 v-else>{{session.title.rendered}}</h2>

        <div class="excerpt" v-html="session.excerpt.rendered"></div>

    </article>
</template>


<script>
import SessionFigure from './SessionFigure.vue';

export default {
    props:{
        session: {
            type: Object,
        },
    },

    components: {
        SessionFigure
    },

    

}

</script>


<style scoped>

</style>
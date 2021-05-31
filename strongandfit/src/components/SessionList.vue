<template>
    <section>

        <div class="contenu">
            <h1>Séances effectuées</h1> 
        </div>

        <SessionThumbnail
        v-for="currentSession in sessions"
                :key="currentSession.id"
                :session="currentSession"
        />

    </section>
</template>

<script>
import sessionService from '../services/sessionService';
import SessionThumbnail from './SessionThumbnail.vue';

export default {
    
    components: {
        SessionThumbnail
    },
    created() {
        sessionService.getSessionsByAuthorId().then((sessions) => {
            console.log('%c' + 'La réponse pour les sessions par user est disponible', 'color: #0bf; font-size: 1rem; background-color:#fff');
            console.log(sessions);
            this.sessions = sessions;
        });
    },
    data: function() {
        return {
            sessions: [
            ]
        }
    },
}

</script>

<style scoped>

</style>
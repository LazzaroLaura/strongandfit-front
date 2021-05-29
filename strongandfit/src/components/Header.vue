<template>

<header>

    <div>

        <h6>Bonjour</h6>

        <router-link :to="{name: 'login'}"> 
            <button>Se connecter</button>
        </router-link>

        <div v-if="currentUser">
            <button @click="disconnect">Déconnexion</button>
        </div>

    </div>

</header>

</template>

<script>
import userService from '../services/userService.js';

export default {
      methods: {
        disconnect: function() {
            // descruction des données dans le session storage
            userService.deleteCurrentUserData();
            // nous "forçons" le header pour qu'il considère qu'il n'y a plus d'utilisateur connecté
            this.currentUser = false;
        },
    },

    created() {
        this.currentUser = userService.getCurrentUserData();
    }
}

</script>

<style scoped>
</style>
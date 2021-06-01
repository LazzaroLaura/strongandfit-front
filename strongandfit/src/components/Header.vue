<template>

<header>

    <div id="header">

            <router-link :to="{name: 'home'}">
                <h1>Strong And Fit</h1>
            </router-link>

            <div v-if="currentUser">
                <h6>Bonjour {{currentUser.displayName}}</h6>
            </div>

            <div v-if="currentUser">
                <router-link :to="{name: 'personnalPage'}"> 
                    <button>Mon espace perso</button>
                </router-link>
            </div>

            <div v-if="!currentUser">
                <router-link :to="{name: 'login'}"> 
                    <button>Se connecter</button>
                </router-link>
                <router-link :to="{name: 'signup'}"> 
                    <button>S'inscrire</button>
                </router-link>
            </div>

            <div v-if="currentUser">
                <button @click="disconnect">Déconnexion</button>
            </div>

            <div>
                <Selects />
            </div>

    </div>

</header>

</template>

<script>
import userService from '../services/userService.js';
import Selects from './Selects.vue';

export default {
      methods: {
        disconnect: function() {
            userService.deleteCurrentUserData();
            this.currentUser = false;
            this.$router.push({
                name: "home"
            });
        },
    },

    components: {
        Selects,
    },

    created() {
        this.currentUser = userService.getCurrentUserData();
    }
}

</script>

<style scoped>
header
{
display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
margin: 0 6px;
}
    
</style>
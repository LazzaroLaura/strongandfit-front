<template>

<header>

    <div id="header">

        <router-link :to="{name: 'home'}">
            <h1>Strong And Fit</h1>
        </router-link>

            <h6>Bonjour {{currentUser.username}}</h6>

            <div v-if="!currentUser">
                <router-link :to="{name: 'login'}"> 
                    <button>Se connecter</button>
                </router-link>
            </div>

            <div v-if="currentUser">
                <button @click="disconnect">Déconnexion</button>
            </div>

            <div>
                <SelectZone />
                <SelectType />
            </div>

    </div>

</header>

</template>

<script>
import userService from '../services/userService.js';
import SelectZone from './SelectZone.vue';
import SelectType from './SelectType.vue';

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
        SelectZone,
        SelectType
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
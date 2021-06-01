<template>

<header>

    <div id="header">

        <div id="top">

            <router-link :to="{name: 'home'}">
                <h1>Strong And Fit</h1>
            </router-link>

          <div id="buttons">  

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

          </div>

        </div>

            <div>
                <Selects />
            </div>

            <div id="banner">
                <img src="../assets/jogging-2343558_1280.jpg" alt="banner" />
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
#top
{
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    margin: 0 6px;
    background-color: lightgrey;
    border-radius: 5px;
}

#buttons
{
    display: flex;
    flex-direction:row;
    align-items: center;
}

button
{
    margin-left: 10px;
    margin-right: 3px;
}

img
{
    height: 10%;
    width: 100%;
    background-repeat: no-repeat;
}
    
</style>
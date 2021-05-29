<template>

<div>

    <div v-if="!currentUser">
        <h1>Veuillez-vous connecter/inscrire pour voir les programmes</h1>
    </div>

    <div v-if="currentUser">
        <h1>Les programmes</h1>
    </div>

    <div>
        <ProgramsList />
    </div>

</div>

</template>

<script>
import userService from '../services/userService.js';
import ProgramsList from '../components/ProgramsList.vue';

export default {

    components: {
        ProgramsList
    },

    created() {
        this.currentUser = userService.getCurrentUserData();
    }
}

</script>

<style scoped>
</style>
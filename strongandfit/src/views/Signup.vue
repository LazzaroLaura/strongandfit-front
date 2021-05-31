<template>
    <section>

        <form @submit="signup">

            <fieldset>
                <label>
                    Identifiant
                    <input name="username" v-model="username"/>
                </label>
            </fieldset>


            <fieldset>
                <label>
                    Email
                    <input name="email" v-model="email"/>
                </label>
                <div class="error"> {{emailError}}</div>
            </fieldset>

            <fieldset>
                <label>
                    Mot de passe
                    <input name="password" type="password" v-model="password"/>
                    <div class="error"> {{passwordError}}</div>
                </label>
            </fieldset>

            <fieldset>
                <label>
                    Confirmation du mot de passe
                    <input name="password" type="password" v-model="passwordConfirmation"/>
                </label>
            </fieldset>

            <fieldset>
                <button>S'inscrire'</button>
            </fieldset>
        </form>


    </section>
</template>

<script>

import userService from '../services/userService.js';

export default {
  methods: {
        signup: function(event) {

            event.preventDefault();
            const email = this.email;
            const regexp = /^(.+?)@(.+?)\.(.+?)$/;
            const isEmail = email.match(regexp);

            if(email.length === 0 ) {
                this.emailError = "Vous n'avez pas saisi d'email";
            }
            else if(!isEmail) {
                this.emailError = "Adresse email invalide";
            }
            else {
                this.emailError = "";
            }

            if(this.passwordConfirmation !== this.password) {
                this.passwordError = 'Vous avez saisi deux mots de passe différents'
            }
            else {
                this.passwordError = '';
            }

            if(!this.emailError && !this.passwordError) {
                this.sendData();
            }
        },


        sendData: function() {
            console.log('Sending data to server');
            userService.signup(
                this.username,
                this.password,
                this.email,
                console.log('email est :' + this.email),
            ).then(result => {
                console.log('%c' + "Resultat de l'inscription", 'color: #0bf; font-size: 1rem; background-color:#fff');
                console.log(result);
            });
        }
    },

    data: function() {
        return {
            username: '',
            email: '',
            password: '',
            emailError: null,
            passwordError: null,
            passwordConfirmation: null
        }
    },
}

</script>


<style scoped>

section {
    margin: 2rem;
}

.error {
    color: #f00;
}
</style>
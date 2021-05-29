<template>
    <div>

            <h1>Hey</h1>
            
            <form @submit="Login">

            <div>
                <input name="username" v-model="username" />
                <label>pseudo</label>		
            </div>

            <div>		
                <input name="password" type="password" v-model="password" />
                <label>password</label>
            </div>

            <!--Add link files CSS demo-->
            <button type="submit" formaction="#">Log in</button>

        </form>	

    </div>
</template>

<script>
import userService from "../services/userService.js";

export default {
    methods: {
        Login: function(event) {
            event.preventDefault();

                this.authentification(
                    this.username,
                    this.password
                );
            
        },
    
    authentification: function(username, password) {
            //userService not create yet ! 
            userService.getToken(username, password)
                .then(userData => {
                    if(userData) {
                        this.$emit('userConnected', userData);
                    }
                    else {
                        alert("Mauvais identifiants");
                    }
                }
            );    
        }
    },
    data: function() {
        return {
            username: '',
            password: ''
        }
    },
}


</script>

<style scoped>

</style>
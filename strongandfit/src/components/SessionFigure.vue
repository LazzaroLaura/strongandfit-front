<template>
    <figure>
        <figcaption>
            <h2> {{title}} </h2>
        </figcaption>
        <img :src="image"/>
        <h3>Votre temps pour ce programme : {{time}}</h3>
    </figure>
</template>

<script>

export default {
    props: {
        image: String,
        title: String,
        time: String
    },
}

</script>

<style scoped>
img {
        max-width: 50%;
    }
</style>
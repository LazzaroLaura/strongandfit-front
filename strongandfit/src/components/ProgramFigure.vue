<template>
    <figure>
        <figcaption>
            <h2> {{title}} </h2>
        </figcaption>
        <img :src="image"/>
    </figure>
</template>

<script>

export default {
    props: {
        image: String,
        title: String
    }
}

</script>

<style scoped>
img {
        max-width: 50%;
    }
</style>
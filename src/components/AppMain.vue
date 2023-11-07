<script>
import AppCard from './AppCard.vue';
import productsJson from '../db.json';

export default {
    components: {
        AppCard,
    },

    name: 'AppMain',
    data() {
        return {
            productsJson: productsJson.products,
        };
    },
};
</script>

<template>
    <main class="justify-around">
        <div class="container">
            <div class="row">
                <AppCard v-for="product in productsJson" :product="product" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
</style>

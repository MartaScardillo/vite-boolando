<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    components: {
        AppCard,
    },

    name: 'AppMain',
    data() {
        return {
            store,
        };
    },

    created() {
        axios.get('http://localhost:3000/products').then((Response) => {
            this.store.products = Response.data;
        });
    },
};
</script>

<template>
    <main class="justify-around">
        <div class="container">
            <div class="row">
                <AppCard v-for="product in store.products" :product="product" />
            </div>
        </div>
    </main>
    <!-- <h2 style="color: black">{{ store.count }}</h2> -->
</template>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
</style>

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
            open: false,
        };
    },

    created() {
        axios.get('http://localhost:3000/products').then((response) => {
            const products = response.data;

            products.forEach((product) => {
                // Scorro tutti i prodotti
                product.badges.forEach((badge) => {
                    // Scorro tutti i badge
                    if (badge.type === 'discount') {
                        // Se il badge è un discount
                        const discountValue = parseFloat(badge.value);
                        const finalPrice = (
                            (product.price * (100 + discountValue)) /
                            100
                        ).toFixed(2);
                        product.finalPrice = finalPrice;
                    }
                });
            });
            console.log(products);
            this.store.products = products;
        });
    },

    methods: {
        showModal(product) {
            this.open = true;
            this.selectedProduct = product;
        },

        closeModal() {
            this.open = false;
            this.selectedProduct = {};
        },
    },
};
</script>

<template>
    <main class="justify-around">
        <div class="container">
            <div class="row">
                <AppCard
                    v-for="product in store.products"
                    :product="product"
                    @show="showModal"
                />
            </div>
        </div>

        <div class="modal" v-if="open">
            <div class="card d-flex">
                <div class="card_header">
                    <img :src="selectedProduct.frontImage" alt="" />
                </div>
                <div class="card_body d-flex justify-between">
                    <div class="info">
                        <span>{{ selectedProduct.brand.toUpperCase() }}</span>
                        <span>{{ selectedProduct.name }}</span>
                        <span>{{ selectedProduct.finalPrice }}€</span>
                    </div>
                    <font-awesome-icon
                        @click="closeModal"
                        :icon="['fas', 'xmark']"
                        class="pointer"
                    />
                </div>
            </div>
        </div>
    </main>
    <!-- <h2 style="color: black">{{ store.count }}</h2> -->
</template>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.modal .card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    background-color: $white;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}
.modal::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);
}

.info {
    width: 100%;
    min-width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

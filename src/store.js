// store.js
import { reactive } from 'vue';
import productsJson from '../db.json';

export const store = reactive({
    // count: 0,
    // productsJson: productsJson.products,
    products: [],
});

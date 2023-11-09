import { createApp } from 'vue';

import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faHeart,
    faCartShopping,
    faUser,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

// import { Xmark } from '@fortawesome/free-regular-svg-icons';

library.add(faHeart, faCartShopping, faUser, faXmark);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

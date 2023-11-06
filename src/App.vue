<script>
import AppHeader from './components/AppHeader.vue';

export default {
    components: {
        AppHeader,
    },

    data() {
        return {
            message: 'Hello world!',
        };
    },
};
</script>

<template>
    <AppHeader />
</template>

<style lang="scss">
@use './assets/style/general';
</style>

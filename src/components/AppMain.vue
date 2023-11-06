<script>
import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard,
    },

    name: 'AppMain',
    data() {
        return {};
    },
};
</script>

<template>
    <main class="justify-around">
        <div class="container">
            <div class="row">
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
</style>

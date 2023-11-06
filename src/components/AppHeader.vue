<script>
export default {
    name: 'AppHeader',
    data() {
        return {};
    },
};
</script>

<template>
    <nav>
        <div class="container">
            <div>
                <ul class="row justify-between">
                    <li>
                        <ul class="d-flex">
                            <li>Donna</li>
                            <li>Uomo</li>
                            <li>Bambino</li>
                        </ul>
                    </li>
                    <li>
                        <img
                            src="../assets/img/boolean-logo.png"
                            alt="Boolean logo"
                            class="logo"
                        />
                    </li>
                    <li>
                        <ul class="d-flex">
                            <li>user</li>
                            <li>heart</li>
                            <li>shop</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
nav {
    background-color: $background-orange;
    position: fixed;
    width: 100%;
    height: 70px;
    max-height: 70px;
    background-color: #ff6800;
    z-index: 1;
}

.logo {
    height: 20px;
    width: 100px;
}
</style>

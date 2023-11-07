<script>
export default {
    name: 'AppHeader',
    data() {
        return {};
    },
};
</script>

<template>
    <header class="page-header">
        <nav>
            <div class="container">
                <div class="list row align-center justify-between">
                    <div>
                        <ul>
                            <li class="list_item text_white">
                                <a href="#">Donna</a>
                            </li>
                            <li class="list_item text_white">
                                <a href="#">Uomo</a>
                            </li>
                            <li class="list_item text_white">
                                <a href="#">Bambino</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <img class="logo" src="boolean-logo.png" alt="" />
                    </div>

                    <div>
                        <ul>
                            <li class="btn list_item">
                                <a href="#">User</a>
                            </li>
                            <li class="btn list_item">
                                <a href="#">Heart</a>
                            </li>
                            <li class="btn list_item">
                                <a href="#">Shop</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
nav {
    background-color: $orange;
    position: fixed;
    width: 100%;
    height: 70px;
    max-height: 70px;
    z-index: 1;
}

.logo {
    height: 20px;
    width: 100px;
}

.list {
    height: 70px;
}

.list_item {
    display: inline-block;
    padding: 5px;
}

.btn {
    height: 30px;
    display: inline-block;
    padding: 5px;
}
</style>

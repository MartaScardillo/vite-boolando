<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            categories: ['Donna', 'Uomo', 'Bambino'],
            icons: [
                ['fas', 'user'],
                ['fas', 'heart'],
                ['fas', 'cart-shopping'],
            ],
            logo: './boolean-logo.png',
        };
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
                            <li
                                class="list_item text_white"
                                v-for="category in categories"
                            >
                                <a href="#">{{ category }}</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <img class="logo" :src="logo" alt="" />
                    </div>

                    <div>
                        <ul>
                            <li class="btn list_item" v-for="icon in icons">
                                <a href="#"
                                    ><font-awesome-icon
                                        class="icon"
                                        :icon="icon"
                                    ></font-awesome-icon
                                ></a>
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

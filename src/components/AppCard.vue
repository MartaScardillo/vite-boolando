<script>
export default {
    name: 'AppCard',
    data() {
        return {};
    },

    props: {
        product: Object,
        saluto: String,
    },

    methods: {
        favoriteFunction() {
            this.product.isInFavorites = !this.product.isInFavorites;
        },

        discountCalc() {
            for (let i = 0; i < this.product.badges.length; i++) {
                if (this.product.badges[i].type === 'discount') {
                    const discountValue = parseFloat(
                        this.product.badges[i].value
                    );
                    const finalPrice = (
                        (this.product.price * (100 + discountValue)) /
                        100
                    ).toFixed(2);

                    return finalPrice;
                }
            }
            return this.product.price;
        },
    },
};
</script>

<template>
    <div class="article col-4" @click="$emit('show', product)">
        <a href="#"
            ><img class="article_image" :src="product.frontImage" alt="" /><img
                class="article_image_hover"
                :src="product.backImage"
                alt=""
        /></a>
        <span
            class="heart"
            @click="($event) => favoriteFunction()"
            :class="product.isInFavorites === true ? 'favorite' : ''"
            ><font-awesome-icon :icon="['fas', 'heart']"
        /></span>
        <div class="pop d-flex">
            <span
                class=""
                :class="badge.type"
                v-for="badge in product.badges"
                >{{ badge.value }}</span
            >
        </div>
        <span>{{ product.brand }}</span>
        <p class="details">{{ product.name.toUpperCase() }}</p>
        <span class="discounted-price">{{ discountCalc() }}€</span>
        <span class="price" v-show="product.price != discountCalc()"
            >{{ product.price }}€</span
        >
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.article {
    margin-top: 100px;
    position: relative;
    padding: 0 5px;
}

.col-4 {
    flex-basis: calc((100% / 12) * 4);
}

.article_image {
    position: relative;
}

.article_image_hover {
    position: absolute;
    left: 0;
    opacity: 0;
    padding: 0 5px;

    &:hover {
        opacity: 1;
        transition: all 300ms ease-in-out;
    }
}

.heart {
    position: absolute;
    top: 10px;
    right: 0;
    background-color: $white;
    width: 50px;
    height: 50px;
    font-size: 35px;
    text-align: center;
    line-height: 50px;
}

.pop {
    position: absolute;
    bottom: 80px;
    left: 5px;
    right: 5px;
}

.discount {
    background-color: $red;
    color: $white;
    width: 50px;
    text-align: center;
    padding: 5px;
    order: -1;
    margin-left: 15px;
}

.tag {
    background-color: $green;
    color: $white;
    margin-left: 15px;
    padding: 5px;
}

.details {
    font-size: 20px;
}

.discounted-price {
    color: $red;
}

.price {
    text-decoration-line: line-through;
}

.favorite {
    color: $red;
}
</style>

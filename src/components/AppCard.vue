<script>
export default {
    name: 'AppCard',
    data() {
        return {};
    },
};
</script>

<template>
    <div class="article col-4">
        <a href="#"
            ><img class="article_image" src="../assets/img/1.webp" alt="" /><img
                class="article_image_hover"
                src="../assets/img/1b.webp"
                alt=""
        /></a>
        <span class="heart">&hearts;</span>
        <div class="pop d-flex">
            <span class="discount">-50%</span>
            <span class="sustain">Sostenibilità</span>
        </div>
        <span>Levi's</span>
        <p class="details">RELAXED FIT TEE UNISEX</p>
        <span class="discounted-price">14,99&euro;</span>
        <span class="price">29,99&euro;</span>
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
}

.sustain {
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
</style>

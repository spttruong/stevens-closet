<template>
    <div class='home-page' v-if='outfits'>
        <h1>Featured Outfit</h1>
        <h4>To learn more about an outfit, click on a title or thumbnail!</h4>
        <div class='random-outfits-container'>
            <show-outfit :outfit='randomOutfit'></show-outfit>
        </div>
        <div class='welcome-message'>
            <footer>This is a visual tool to expedite outfit selection. Use the nav bar on the right to get started.</footer>
        </div>
    </div>
</template>

<script>
import ShowOutfit from './../ShowOutfit.vue';

export default {
    name: 'HomePage',
    components: { ShowOutfit },
    data: function() {
        return {
        }
    },
    computed: {
        outfits: function() {
            return this.$store.state.outfits;
        },
        randomOutfit: function() {
            return this.outfits[Math.floor(Math.random() * this.outfits.length)];
        }
    },

    mounted() {
        this.$store.dispatch('setOutfits');
    }
}
</script>

<style scoped>
.home-page {
    text-align: center;
}

.random-outfits-container {
    display: flex;
    justify-content: center;
}
</style>
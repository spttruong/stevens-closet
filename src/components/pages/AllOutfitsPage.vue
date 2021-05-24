<template>
    <div id='outfits-home'>
        <h1>All Outfits</h1>
        <h4>To learn more about an outfit, click on a title or thumbnail!</h4>
        <div id='outfits-container'>
            <show-outfit 
                v-for='outfit in outfits' 
                :key='outfit.id' 
                :outfit='outfit'>
            </show-outfit>
        </div>
    </div>
</template>

<script>

import ShowOutfit from './../ShowOutfit.vue';

export default {
    name:'AllOutfitsPage',
    components: { ShowOutfit },
    computed: {
        outfits: function() {
            return this.$store.state.outfits;
        }
    },
    mounted() {
        this.$store.dispatch('setOutfits');
    }
}
</script>

vue <style scoped>
#outfits-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
}

@media(max-width:600px) {
    #outfits-home {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
}

h1, h4 {
    text-align: center;
}
</style>
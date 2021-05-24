<template>
    <div id='favorite-outfits-page' v-if='favoriteOutfits'>
        <div class='favorites-welcome-message'>
            <h1>Favorite Outfits</h1>
            <h3 v-if='favoriteOutfits.length == 0'>Looks like you haven't added any outfits to favorites.</h3>
        </div>
        <div id='favorite-outfits-container'>
            <show-outfit 
                v-for='outfit in favoriteOutfits' 
                :key='outfit.id' 
                :outfit='outfit'>
            </show-outfit>
        </div>
    </div>
</template>

<script>

import ShowOutfit from './../ShowOutfit.vue';

export default {
    name:'FavoriteOutfitsPage',
    components: { ShowOutfit },
    data: function() {
        return {    
        };
    },
    computed: {
        outfits: function() {
            return this.$store.state.outfits;
        },
        favoriteOutfits: function() {
            return this.$store.state.favoriteOutfits;
        },
    },
    mounted() {
        this.$store.dispatch('setOutfits');
        this.$store.dispatch('setFavorites');
    },
}
</script>

<style scoped>
.favorites-welcome-message{
    text-align: center;
}

#favorite-outfits-container {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
}

@media(max-width:600px) {
    #favorite-outfits-home {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
}
</style>
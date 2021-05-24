<template>
        <div class='favorites-action'>
            <button class='add-favorites-button' @click='addToFavorite(outfitId)'>Add or Remove from Favorites</button>
        
            <transition name='fade'>
                    <div class='add-alert' v-if='addAlert'>Added to Favorites</div>
            </transition>
        
            <transition name='fade'>
                    <div class='rm-alert' v-if='rmAlert'>Removed from Favorites</div>
            </transition>
        </div>
</template>

<script>
import * as app from './../app.js';

export default {
    name: 'AddToFavoritesButton',
    props: ['outfitId'],
    data: function() {
        return { 
            favorited: Boolean,
            addAlert: false,
            rmAlert: false,
        };
    },
    methods: {
        addToFavorite: function(outfitId) {
            let favorites = new app.Favorites();
            if (this.favorited == false) {
                favorites.add(outfitId);
                this.addAlert = true;
                this.favorited = true;
                setTimeout(() => (this.addAlert = false), 2000);
            } else if (this.favorited == true) {
                favorites.remove(outfitId);
                this.rmAlert = true;
                this.favorited = false;
                setTimeout(() => (this.rmAlert = false), 2000);
            }

            // Update Vuex store each time favorites are added/removed
            this.$store.dispatch('setFavorites');
        }
    },
    mounted() {
        // on mounted, checks if outfit is already favorited in localStorage
        var favorites = new app.Favorites();
        
        if (favorites.getItem(this.outfitId)) {
            this.favorited = true;
        } else {
            this.favorited = false;
        }
    }
}
</script>

<style scoped>
.add-favorites-button {
    border: none;
    border-radius: 4px;
    background-color: white;
    text-decoration: none;
    font-size: 14px;
    color:rgb(63, 56, 46);
    z-index: +2;
}

.add-favorites-button:hover {
    color: white;
    background-color: grey;
}

.add-alert {
    background-color: rgba(144, 252, 144, 0.432);
    color:black;
    font-size: 1em;
}

.rm-alert {
    background-color: rgba(241, 119, 119, 0.527);
    color:black;
    font-size: 1em;
}
</style>
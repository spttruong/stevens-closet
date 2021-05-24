<template>
  <div class="outfit-preview">
    <router-link :to="{ name: 'outfit', params: { id: outfit.id } }">
      <div data-test="outfit-title" class="outfit-title">
        {{ getOutfitDetails(outfit.id)['title'] }}
      </div>
    </router-link>

    <add-to-favorites-button
      data-test="favorites-button"
      :outfitId="outfitId"
    ></add-to-favorites-button>

    <router-link :to="{ name: 'outfit', params: { id: outfit.id } }">
      <img
        data-test="outfit-image"
        class="outfit-image-thumb"
        :src="'./../assets/images/outfits/' + outfit.id + '.jpeg'"
        :alt="'Image of outfit titled ' + outfit.title"
      />
    </router-link>
  </div>
</template>

<script>
import * as app from './../app.js';

import AddToFavoritesButton from './AddToFavoritesButton.vue';

export default {
  name: 'ShowOutfit',
  props: ['outfit'],
  components: { AddToFavoritesButton },
  data: function() {
    return {
      favorited: Boolean,
    };
  },
  computed: {
    outfitId: function() {
      return this.outfit.id;
    },
  },
  methods: {
    getOutfitDetails(outfitId) {
      return this.$store.getters.getOutfitById(outfitId);
    },
  },
  mounted() {
    // on mounted, checks if outfit is already favorited in localStorage
    var favorites = new app.Favorites();

    if (favorites.getItem(this.outfit.id)) {
      this.favorited = true;
    } else {
      this.favorited = false;
    }
  },
};
</script>

<style scoped>
/* Viewing all outfits in thumbnail/preview mode */

.outfit-preview {
  max-width: 30%;
  margin: 0.5em;
  text-align: center;
}

@media (max-width: 600px) {
  .outfit-preview {
    max-width: 75%;
  }
}

.outfit-preview a {
  text-decoration: none;
  color: rgb(39, 39, 39);
}

.outfit-title {
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
  max-width: 95%;
}

.outfit-image-thumb {
  max-width: 100%;
  border-radius: 5px;
}
</style>

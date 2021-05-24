<template>
  <div id='filtered-container'>
    <h1>Filtered Outfits</h1>
    <h3 class='category-selector'>
      Select a category to filter:
      <select v-model='category' data-test='category-selection'>
        <option value='casual'>Casual</option>
        <option value='business casual'>Business Casual</option>
        <option value='flannel'>Flannels</option>
        <option value='jacket'>Jackets</option>
        <option value='jeans'>Jeans</option>
        <option value='chinos'>Chinos</option>
        <option value='khakis'>Khakis</option>
        <option value='sneakers'>Sneakers</option>
        <option value='boots'>Boots</option>
        <option value='leather shoes'>Leather Shoes</option>
      </select>
    </h3>

    <div v-if='outfits && category'>
      <div data-test='filtered-outfits-rendered' id='filtered-outfits'>
        <show-outfit
          v-for='outfit in filteredOutfits'
          :key='outfit.id'
          :outfit='outfit'>
        </show-outfit>
      </div>
    </div>
  </div>
</template>

<script>

import ShowOutfit from './../ShowOutfit.vue';


export default {
  name: 'FilteredOutfitsPage',
  components: { ShowOutfit },
  data: function() {
    return {
      category: '',
    };
  },
  computed: {
    outfits: function() {
        return this.$store.state.outfits;
    },
    filteredOutfits: function() {
      function isMatch(outfit) {
        return outfit.categories.includes(this);
      }
      return this.outfits.filter(isMatch, this.category);
    }
  },
  mounted() {
    this.$store.dispatch('setOutfits');
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.category-selector {
  text-align: center;
}
.category-selector select{
  width: 150px;
  height: 30px;
  font-size: 16px;
  color:rgb(0, 0, 0);
  border-radius: 4px;
  background-color: rgb(209, 209, 209);
}

#filtered-outfits {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
}

@media(max-width:600px) {
    #filtered-outfits {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
}

</style>

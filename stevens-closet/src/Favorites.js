// /src/Favorites.js
export default class Favorites {
  /**
   *
   */
  constructor() {
    // Extract JSON favorites string from local storage
    let favorites = localStorage.getItem('favorites');

    // Parse JSON favorites String to `items` object
    this.items = (favorites) ? JSON.parse(favorites) : [];
  }

  /**
   * Getter method for stored favorites object
   */
  getItems() {
    return this.items;
  }

  /**
   * Updates favorites in localstorage
   */
  update() {
    localStorage.setItem('favorites', JSON.stringify(this.items));
  }

  /**
   * Add a new item of the given outfitId
   */
  add(outfitId) {
    // First see if outfit is already saved
    let item = this.getItem(outfitId);

    if (!item) {
      // Outfit is not in favorites, add as new item
      this.items.push({
        id: outfitId
        });
    }

    this.update();
  }

  /**
   * Remove an item from items via outfitId
   */
  remove(outfitId) {
    let item = this.getItem(outfitId);

    let itemIndex = this.items.indexOf(item);

    if (item) {
      this.items.splice(itemIndex, 1);
      this.update();
    }
  }

  /**
   * Get an item from items via outfitId
   * Returns null if outfitId does not exist in items
   */
  getItem(outfitId) {
    return this.items.find(({ id }) => id === outfitId) || null;
  }
}

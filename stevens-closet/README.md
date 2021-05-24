# Project 4

- By: Steven Truong
- Production URL: http://p4.struong.me

## 

## Outline of features

This project is my take on a style/fasion blog.

**Features**:

- 4 pages accessed via Vue Router:
  - `/` page is the home page and displays a randomly selected 'featured' outfit.
  - `/outfits` page that displays all outfits.
    - outfits are retreived from [mock api.](https://my-json-server.typicode.com/spttruong/e28-p3-api/outfits)
  - `/filtered` page that displays filtered outfits.
    - outfits can be filtered by user from a set of pre-determined categories.
  - `/favorites` page that displays favorited outfits.
    - favorited outfits can be saved or removed from `localStorage` via add/remove button.
- User can click on an outfit thumbnail to navigate to `/outfits/:id/` and see a more detailed view of individual outfit.
  - on the `OutfitPostPage.vue` component, form validation via **Vuelidate** is implemented in the form of a very basic comments section.
- State management with Vuex
  - Vuex stores all the outfits by calling the My JSON Server mock api
  - also stores 'favorited' outfits in local storage
  - Components pulls data from the Vuex `state`
- Static deployment on [Netlify](https://app.netlify.com).
- Passed Unit Test and E2E Tests.

## Outside resources

###Resources from P3

W3Schools:

 - [CSS Fixed Sidebar](https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp)
 - [CSS Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

[Flexbox Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)

[Scaling Text to Screen Size](https://css-tricks.com/books/volume-i/scale-typography-screen-size/)

[About the CSS `position` attribute](https://dzone.com/articles/css-position-relative-vs-position-absolute)

[Converting .heic image files to .jpeg on MacOS](https://www.howtogeek.com/398927/)

- browser required a loader to render .heic image formats.
- My workaround was to convert all of them to .jpeg file formats.

[How to get length of object in JavaScript](https://stackoverflow.com/questions/5533192/how-to-get-object-length/5533226)

[Favicon Generator](https://www.favicon-generator.org/)

----------------------------------------------------------

### Resources for P4

[Cypress E2E Testing](Cypress.io)

- [Cypress API documention](https://docs.cypress.io/api/api/table-of-contents.html)

[Vue Testing Utilities](https://vue-test-utils.vuejs.org/)

[Limitations with Vuex](https://github.com/susanBuck/e28-fall19/issues/154)

- Post on the class issues forum that helped me wrap my head around what kind of storage solutions I should rely on for P4 (temporary vs semi-permanent). The Vuex RAM metaphor was very helpful.

[Overview of State Management in Vue.js](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch)

[Vuex Documentation](https://vuex.vuejs.org/)

[Mocking mounted() lifecycle hook in vue-test-utils](https://stackoverflow.com/questions/50278708/vue-test-utils-how-to-test-logic-within-mounted-lifecycle-hook-with-vuex)

- I had a lot of trouble doing unit tests with my components because a lot of them would query state from the Vuex `$store`. I needed to figure out a way to effectively override any store-specific methods like `dispatch()`because it was preventing my test from passing.

## Notes for instructor

1. I didn't find the need to switch to *Firebase* since my project worked fine despite size limitations of *My JSON Server*.
2. I had a difficult time integrating form validation to my project, so I hope the basic "comments section" I added is sufficient. Unfortunately, the comments do not persist and are just proof of concept for Vuelidate.
3. I noticed a bug in which, upon switching back to the home page, the "Featured Outfit" appears to be in the process of picking a random outfit. It seems like the application is shuffling throught the array trying to pick an outfit. I wasn't sure how to fix that.
4. Unfortunately, by the time I was finishing up P4, I had not received a peer review of my P3, so I tried my best to just improve my SPA based on the flaws I noticed from P3. 

**Fixes/changes include:**

- Fixed bug where outfit title was missing when viewing outfits on `/favorites`.
- Made adding and removing favorite outfits more reactive; user no longer needs to refresh page to reflect changes in favorites. Upon clicking the remove button, the outfit disappears.
- Added a proper home page so users have something to look at upon landing on the website.
- Some minor CSS changes for improved visualization.



**Concluding Notes:**

Thank you so much for your amazing semester! I learned a lot and hope to build upon it the skills you've taught me. I'm taking my first steps into the world of software development and coding in general, so thank you for this experience. You're a fantastic instructor! I wish you luck on your future class(es) and/or endeavors.
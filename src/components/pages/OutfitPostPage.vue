<template>
    <div>
        <div class='outfit-post-container' v-show='outfit'>
            
            <div class='outfit-post-visual'>
                <h2 class='outfit-post-title'>{{ outfit.title }}</h2>
                <add-to-favorites-button :outfitId='this.id'></add-to-favorites-button>
                <img class='outfit-post-image' :src='"./../../assets/images/outfits/" + outfit.id + ".png"' :alt='"Image of outfit titled " + outfit.title'>
            </div>

            <div class='outfit-post-details'>
                <ul class='outfit-post-clothes'>
                    <li><strong>Top(s):</strong>
                        <ul>
                            <li v-for='top in tops' :key='top'>{{ top }}</li>
                        </ul>
                    </li>
                    <li v-if='accessories'><strong>Accessories:</strong>
                        <ul>
                            <li v-for='accessory in accessories' :key='accessory'>{{ accessory }}</li>
                        </ul>
                    </li>
                    <li><strong>Bottom:</strong> {{ outfit.clothes.bottom }}</li>
                    <li><strong>Footwear:</strong> {{ outfit.clothes.footwear }}</li>
                </ul>
                <p class='outfit-post-description'><strong>My Thoughts:</strong> <br>{{ outfit.description }}</p>
            </div>
        </div>
        <div>
            <h2>Comments:</h2>
            <p>(comments are not saved and are only used to demonstrate form validation)</p>
            <div class='comment-box' v-for='(newComment, index) in comments' :key='index'>{{ newComment }}</div>
        </div>

        <div class='comment-submit-section'>
            <div 
                class='comment-error-feedback' 
                v-if='!$v.thisComment.required'>
                Uh oh! Can't submit an empty comment.
            </div>
            <div 
                class='comment-error-feedback' 
                v-if='!$v.thisComment.minLength'>
                Comment must be at least 4 characters long.
            </div>
            <textarea 
                :class='{ "comment-error-box": $v.thisComment.$error }'
                rows='5' placeholder='Leave a comment' 
                v-model='thisComment'>
            </textarea>
            <button class='comment-submit-button' @click='addComment(thisComment)'>Submit</button>
        </div>

        
    </div>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

import AddToFavoritesButton from './../AddToFavoritesButton.vue';

export default {
    name: 'OutfitPostPage',
    components: { AddToFavoritesButton },
    props: ['id'],
    data: function() {
        return { 
            thisComment: null,
            comments: [

            ],
        };
    },
    computed: {
        outfit() {
            return this.$store.getters.getOutfitById(this.id);
        },
        tops() {
            return this.outfit.clothes.top;
        },
        accessories() {
            return this.outfit.clothes.accessories;
        },
        commentHasErrors() {
            return this.$v.thisComment.$invalid;
        }
    },
    validations: {
        thisComment: {
            required,
            minLength: minLength(4)
        }
    },
    methods: {
        addComment (comment) {
            if(!this.commentHasErrors) {
                this.comments.push(comment);
                this.thisComment = null;
            }
        }
    }
}
</script>

vue <style scoped>
.outfit-post-container {
    font-size: calc(11px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
    display: flex;
    flex-direction: row;
    height: 100%;
}

@media (max-width: 600px) {
    .outfit-post-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
}

.outfit-post-visual {
    width: 100%;
    min-width: 30%;
}

.outfit-post-image {
    max-width: 100%;
    border-radius: 5px;
}
.outfit-post-clothes {
    list-style: none;
    padding-left: 0;
}

/* post details */
.outfit-post-details {
    position: relative;
    margin-top: 5%;
    margin-left: 2%;
    margin-right: 12%;
}

.outfit-post-clothes ul {
    list-style: none;
    padding-left: 0;
}

.outfit-post-description {
    margin-top: 1em;
}

.comment-box {
    border: rgb(0, 0, 0) solid 2px;
    border-radius: 4px;
    padding: 0.5em;
    margin: 1em;
    font-size: 14px;
    color: rgb(255, 255, 255);
    background-color: rgb(97, 94, 92);
}

.comment-submit-section {
    display: flex;
    flex-direction: column;
}

.comment-submit-button {
    font-size: 12px;
    padding: 0.5em;

}

.comment-error-feedback {
    color: red;
    font-size: 14px;
}

.comment-error-box {
    border-color: red;
    font-size: 14px;
}
</style>

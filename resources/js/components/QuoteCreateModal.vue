<template>
    <div class="quote-create-modal">

        <form action="/" method="post" id="quote-create-form" @submit="submitForm">

            <fieldset class="quote-create-fieldset">
                <label class="quote-create-label">Цитата</label>
                <textarea v-model="quote" name="quote_text" class="quote-create-textarea"></textarea>
            </fieldset>

            <fieldset class="quote-create-fieldset">
                <label class="quote-create-label">Автор</label>
                <input v-model="author" type="text" name="author" class="quote-create-input">
            </fieldset>

            <fieldset class="quote-create-fieldset">
                <label class="quote-create-label">Теги <small>максимум 3</small></label>
                <div class="quote-create-tags-list">
                    <span v-for="tag in tags" :key="tag.id" class="quote-create-tag">
                        <input v-model="selectedTags" type="checkbox" class="quote-create-checkbox" :id="`tag${tag.id}`" :value="tag.id" :disabled="selectedTags.length > 2 && selectedTags.indexOf(tag.id) === -1">
                        <label class="quote-create-tag-label" :for="`tag${tag.id}`">{{tag.tag_name}}</label>
                    </span>
                </div>
            </fieldset>

            <fieldset class="quote-create-errors">
                <p v-for="error in errors" :key="error">{{error}}</p>
            </fieldset>

            <fieldset class="quote-create-buttons">
                <button type="submit" class="quote-create-button">Опубликовать</button>
            </fieldset>
        </form>

    </div>
</template>

<script>
import Api from '../service/api';

export default {
    data() {
        return {
            quote: null,
            author: null,
            selectedTags: [],
            errors: [],
        }
    },
    computed: {
        tags() {
            return this.$store.getters['tags/tags']
        },
        quotes() {
            return this.$store.getters['quotes/quotes'];
        }
    },
    methods: {
        hideModal() {
            this.$store.commit('modal/hideModal')
        },
        submitForm(e) {
            e.preventDefault();
            this.errors = [];

            if (this.selectedTags.length == 0) {
                this.errors.push('Хотя бы один тег должен быть выбран');
            }

            if (this.quote == null) {
                console.log(this.quote)
                this.errors.push('Поле "Цитата" не может быть пустым');
            }

            if (this.author == null) {
                this.errors.push('Поле "Автор" не может быть пустым');
            }

            if (this.errors.length > 0) {
                return;
            }
            const form = document.querySelector('#quote-create-form');
            const body = new FormData(form);
            let stringTags = this.selectedTags.join(',');
            body.append('tags', stringTags);

            Api().post('/quotes', body)
                .then( response => {
                    this.$store.dispatch('quotes/loadQuotes', this.quotes.current_page);
                    this.hideModal();
                });
        }
    },
    mounted() {
        this.$store.dispatch('tags/loadTags');
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/_variables.scss';
.quote-create-fieldset {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.quote-create-textarea {
    min-height: 150px;
    resize: none;
    border: 1px solid $black;
    border-radius: 5px;
}

.quote-create-input {
    border: 1px solid $black;
    border-radius: 5px;
    padding: 3px 10px;
}

.quote-create-tag {
    margin-right: .5rem
}
.quote-create-tag-label {
    border: 1px solid $black;
    padding: 3px 10px;
    border-radius: 15px;
    transition: .3s ease-in-out;
}

input[type=checkbox] {
    display: none;
}
input[type="checkbox"]:checked + .quote-create-tag-label {
    background-color: $black;
    color: #fff;
}

.quote-create-buttons {
    display: flex;
    justify-content: flex-end;
}

.quote-create-button {
    border: none;
    padding: 10px 15px;
    color: #fff;
    background-color: $black;
}
</style>

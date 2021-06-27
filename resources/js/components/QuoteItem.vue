<template>
    <div class="quote bg-white" @click="openPage(quote.id)">
        <blockquote class="text">
            {{quote.quote_text}}
        </blockquote>
        <div class="footer">
            <div class="info">
                <div class="author">
                    {{quote.author}}
                </div>
                <div class="date">
                    {{quote.formatted_date}}
                </div>
            </div>
            <div class="tag-list">
                <small v-for="tag in quote.tags" :key="tag.id" class="tag">
                    {{tag.tag_name}}
                </small>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        quote: Object
    },
    methods: {
        openPage(id) {
            this.$router.push({ path: `/quote/${id}` })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../sass/_variables.scss';
.quote {
    box-shadow: 0px 2px 5px rgba(33, 37, 41, .1);
    padding: 15px 30px;
    transition: .3s all ease-in-out;
    cursor: pointer;
    margin-bottom: 20px;

    @media (max-width: $tablet-width) {
        padding: 10px 15px;
    }
}

.quote:hover {
    box-shadow: 0px 4px 15px rgba(33, 37, 41, .25);
}


.text {
    font-size: 1rem;
    text-align: justify;
}

.tag-list {
    display: flex;

    @media (max-width: $tablet-width) {
        justify-content: center;
        flex-wrap: wrap;
    }
}


.info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.author {
    margin-right: 5px;
}

.date {
    margin-left: 5px;
}


.tag {
    border: 1px solid $black;
    padding: 3px 10px;
    border-radius: 15px;
    margin-right: 5px;
    @media (max-width: $tablet-width) {
        margin: 0 5px 5px 5px;
    }
}
</style>

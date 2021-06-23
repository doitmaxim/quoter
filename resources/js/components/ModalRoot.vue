<template>
    <transition name="modal">
        <div class="backdrop"
            v-if="visible"
            @click="hideModal"
        >
            <div 
                class="dialog bg-white"
                @click.stop
            >
                <div class="header">
                    <div class="title">
                        {{title}}
                    </div>
                    

                    <div 
                        class="close"
                        @click="hideModal"
                    >
                        x
                    </div>
                </div>
                <div class="body">
                    <component :is="loadComponent"></component>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>

export default {
    methods: {
        hideModal() {
            this.$store.commit('modal/hideModal')
        }
    },
    computed: {
        title() {
            const title = this.$store.getters['modal/getModalTitle']
            if (!title) return
            console.log(title)
            return title
        },
        visible() {
            return this.$store.getters['modal/checkVisible']
        },
        loadComponent() {
            const componentName = this.$store.getters['modal/getModalComponent']
            if (!componentName) return
            return () => import(`./${ componentName }.vue`);
        }
    }

}
</script>
<style lang="scss" scoped>
@import '../../sass/_variables.scss';
.backdrop {
    background-color: transparentize($black, .6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialog {
    width: 50%;
    margin: 0 auto;
    padding: 10px 15px;
    transition: .2s ease-in-out;


    @media (max-width: $desktop-width) {
        width: 99%;
    }
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.title {
    font-size: 18px;
    font-weight: bold;
}



.modal-enter-active, .modal-leave-active {
    transition: .2s ease-in-out;
}
.modal-enter .dialog, .modal-leave-to .dialog {
    transform: translateY(100%);
}
</style>
<template>
    
    <div class="home-image-modal">
        <div class="home-image-modal-menu">
            asdasdasd
        </div>
    </div>

</template>

<script>
export default {
    computed: {

    },
    methods: {
        forceDownload(response, title) {
            console.log(title)
            const url = window.URL.createObjectURL( new Blob([response.data]) )
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', title)
            document.body.appendChild(link)
            link.click()
        }
    }

}
</script>
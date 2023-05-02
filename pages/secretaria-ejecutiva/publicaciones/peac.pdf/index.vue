<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'Peac',
    computed: {
        redireccionarPeac() {
            window.location.assign('peac/peac.pdf')
        }
    },
    beforeMount() {
       this.redireccionarPeac()
    },
    
    
    
    }
</script>
<style lang="scss" scoped>

</style>
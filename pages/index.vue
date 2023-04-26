<template>
<div>

    <v-container>

        <Carrusel />

        <Data />
        <Organismos />

    </v-container>
</div>
</template>

<script>
import Carrusel from '@/components/Carousel'
import Organismos from '@/components/Organismos'
import Data from '@/components/Datos'
import lineUp from '@/components/LineUp'
export default {
    name: 'IndexPage',
    components: {
        Carrusel,
        Organismos,
        Data,
        lineUp
    },

}
</script>

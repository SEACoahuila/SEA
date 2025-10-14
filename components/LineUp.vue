<template>
<div>
    <v-card class="pa-3"  color="#f0f0f0">
        <v-row justify="center" >

            <v-col align-self="center"  align="center"  class="pa-1" cols="1" lg="" v-for=" (i,index) in cc" :key="index">
                <a :href="i.web">
                <v-img :width="i.size - 10" 
                :lazy-src="require('@/static/img/' + i.img)"
                :src="require('@/static/img/' + i.img)"
                ></v-img></a>

            </v-col>
        </v-row>

    </v-card>

</div>
</template>

<script>
export default {
    data() {
        return {
            cc: [
                {
                    img: 'ASEC.png',
                    web: 'https://www.asecoahuila.gob.mx/',
                    size: '170'
                },
                {
                    img: 'cc-fehc.png',
                    web: 'https://sitio.fgecoahuila.gob.mx/',
                    size: '160'
                },
                {
                    img: 'cc-sefirc.png',
                    web: 'http://www.sefircoahuila.gob.mx/',
                    size: '200'
                },
                {
                    img: 'cc-pjecz.png',
                    web: 'https://www.pjecz.gob.mx/',
                    size: '150'
                },

                {
                    img: 'cc-tjacz.png',
                    web: 'http://www.tjacoahuila.org/',
                    size: '150'
                },
                {
                    img: 'cpc.png',
                    web: 'https://www.cpccoahuila.org.mx/',
                    size: '85'
                },
                {
                    img: 'sea-icon.png',
                    web: '#',
                    size: '75'
                },
                

            ]
        }
    },

}
</script>

<style lang="scss" scoped>

</style>

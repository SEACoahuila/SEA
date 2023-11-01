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
                    size: '150'
                },
                {
                    img: 'FEHC -vertical.png',
                    web: 'https://www.fehc.gob.mx/',
                    size: '85'
                },
                {
                    img: 'cc-sefirc.png',
                    web: 'http://www.sefircoahuila.gob.mx/',
                    size: '120'
                },
                {
                    img: 'pj-logo-azul.png',
                    web: 'https://www.pjecz.gob.mx/',
                    size: '100'
                },
                {
                    img: 'cc-ica.png',
                    web: 'http://www.icai.org.mx/',
                    size: '110'
                },

                {
                    img: 'cc-tjacz.png',
                    web: 'http://www.tjacoahuila.org/',
                    size: '100'
                },
                {
                    img: 'cpc.png',
                    web: 'https://www.cpccoahuila.org.mx/',
                    size: '90'
                },
                {
                    img: 'sea-icon.png',
                    web: '#',
                    size: '80'
                },
                

            ]
        }
    },

}
</script>

<style lang="scss" scoped>

</style>

<template>
    <div>
        <v-container>
            <v-row justify="center" align="center" class="mt-5">

                <v-col cols="12" align="center">

                </v-col>
                <v-col cols="12" lg="8" sm="12" v-for="(e, i) in btnitem" :key="i">

                    <v-card class="pa-2 mx-auto text-justify" tile color="article">
                        <v-row align="center">
                            <v-col cols="12" lg="6" sm="12" align="center" justify="center">

                                <h2> {{ e.title }}</h2>
                                <v-card-subtitle class="text-justify">
                                    {{ e.desc }}
                             
                                </v-card-subtitle>
                                <div class="mt-5" v-if="e.button">
                                        <a :href=e.buttonlink >

                                            <v-btn color="#54865A" elevation="2"  outlined> {{ e.button }}</v-btn>
                                        </a>
                                </div>
                                <div class="mt-2" v-if="e.button2">
                                        <a :href=e.button2link >

                                            <v-btn color="#d9a79e" elevation="2"  outlined> {{ e.button2 }}</v-btn>
                                        </a>
                                </div>
                            </v-col>

                            <v-col cols="12" lg="6" sm="12">
                                <nuxt-link :to="e.link">

                                    <v-hover>

                                        <v-img slot-scope="{ hover }" v-if="hover"
                                            :src="require('@/static/img/botonera/' + e.src2)">
                                        </v-img>
                                        <v-img v-else :src="require('@/static/img/botonera/' + e.src1)">
                                        </v-img>

                                    </v-hover>
                                </nuxt-link>

                            </v-col>

                        </v-row>
                    </v-card>

                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        btnitem: [
            {
                title: 'Política Estatal Anticorrupción',
                desc: 'Conoce aquí el documento rector que guía los esfuerzos de las instituciones públicas y ciudadanas en materia de prevención, control y combate de los hechos de corrupción.',
                src1: 'peac1.jpg',
                src2: 'peac2.jpg',
                link: '/peac'
            },
            {
                title: 'Programa de Implementación de la Política Estatal Anticorrupción',
                desc: 'Conoce aquí el documento que establece las prioridades, objetivos, estrategias, líneas de acción e indicadores de la Política Estatal Anticorrupción de Coahuila.',
                src1: 'pipeac1.png',
                src2: 'pipeac2.png',
                link: '/pipeac',
                button: "Plataforma monitor SEA Coahuila",
                buttonlink: "https://monitor.seacoahuila.org.mx/",
                button2: "Manual de usuario",
                button2link:"https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FhydCDe7h1EAolvzP0tq0%2FManual%20del%20Usuario%20Plataforma%20Monitor%20SEA%20Coahuila.pdf?alt=media&token=e6e7fca1-cc2c-47ce-8dd7-b006a6b482ba"

            },
            {
                title: 'Sistema Estatal de Información',
                desc: 'Sistema de inteligencia para construir integridad y combatir la corrupción, que creará valor para el gobierno y la sociedad, a partir de grandes cantidades de datos.',
                src1: 'sistema1.jpg',
                src2: 'sistema1.jpg',
                link: '/sei'
            },
            {
                title: 'Revista Azimut',
                desc: 'Lee el más reciente número de nuestra revista Azimut, en el que abordamos cómo la pandemia ha evidenciado que la corrupción impacta de manera diferenciada a los más vulnerables.',
                src1: 'azimut1.jpg',
                src2: 'azimut2.jpg',
                link: '/azimut'
            },

        ],


    }),
}
</script>

<style lang="scss" scoped></style>

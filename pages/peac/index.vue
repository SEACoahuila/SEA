<template>
    <v-container>

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3  text-h4 ">{{ page.title }}</div>

                </v-alert>

                <!--  STEP = 1 Inicio de botones principales -->
                <v-card class="mt-3 ">
                    <v-col align="center" justify="center">
                        <v-row>
                            <v-col cols="12" md="3" xs="12" v-for="(e, i) in botones" :key="i">
                                <v-card color="bluegreyt" :href="require('@/static/peac/' + e.doc)">

                                    <v-card-actions class="justify-center">
                                        <v-avatar size="35" color="" tile>

                                            <img :src="require('@/pages/peac/icons/' + e.icon)" alt="alt">
                                        </v-avatar> {{ e.titulo }}
                                    </v-card-actions>

                                </v-card>
                            </v-col>

                        </v-row>

                    </v-col>

                </v-card>
                <!--  STEP = 2 Inicio de  PEAC que es -->
                <v-card class="mt-3 mb-3" color="peac">
                    <v-col aling="center" justify="center">
                        <v-row justify="center" align="center" class="mt-5">

                            <v-col cols="12" align="center">

                            </v-col>
                            <v-col cols="12" lg="8" sm="12" v-for="(e, i) in btnitem" :key="i">

                                <v-card class="pa-2 mb-10 mx-auto text-justify" tile color="article">
                                    <v-row align="center">
                                        <v-col cols="12" lg="6" sm="12" align="center" justify="center">

                                            <h2> {{ e.title }}</h2>
                                            <v-card-subtitle class="text-justify">
                                                {{ e.desc }}
                                            </v-card-subtitle>
                                            <v-divider></v-divider>

                                            <v-btn x-small dark color="amber darken-2"
                                                href="/secretaria-ejecutiva/publicaciones/peac.pdf">PEAC</v-btn>
                                            <span>--</span>
                                            <v-btn x-small dark color="grey darken-3"
                                                href="/secretaria-ejecutiva/publicaciones/peac-anexos.pdf">Anexos</v-btn>

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
                    </v-col>

                </v-card>
                <!--  STEP = 3 Inicio de botones secundarios -->
                <v-card class="mt-3  pa-5">

                    <v-card-title class="justify-center">
                        <div class=" text-xl-h2 text-md-h4"> Datos</div>
                    </v-card-title>

                    <v-col align="center" justify="center">
                        <v-row>
                            <v-col cols="12" md="3" xs="12" v-for="(e, i) in botonesSec" :key="i">
                                <v-card v-if="e.to" color="bluegreyt" :href="e.to">

                                    <v-card-actions class="justify-center">
                                        <v-avatar size="50" color="" tile>

                                            <img :src="require('@/pages/peac/icons/' + e.icon)" alt="alt">
                                        </v-avatar> {{ e.titulo }}
                                    </v-card-actions>

                                </v-card>
                                <v-card v-if="e.doc" color="bluegreyt" :href="require('@/static/peac/' + e.doc)">

                                    <v-card-actions class="justify-center">
                                        <v-avatar size="50" color="" tile>

                                            <img :src="require('@/pages/peac/icons/' + e.icon)" alt="alt">
                                        </v-avatar> {{ e.titulo }}
                                    </v-card-actions>

                                </v-card>
                            </v-col>

                        </v-row>


                    </v-col>

                    <v-card-title class="justify-center">
                    <div class=" text-xl-h2 text-md-h4"></div>
                    </v-card-title>

                    <v-col align="center" justify="center">
                        <v-row justify="center">
                            <v-col cols="12" md="3" xs="12"  v-for="(e, i) in botonesSec2" :key="i" align="center" >
                                <v-card v-if="e.to" color="bluegreyt" :href="e.to">

                                    <v-card-actions class="justify-center" >
                                        <v-avatar size="50" color="" tile>

                                            <img :src="require('@/pages/peac/icons/' + e.icon)" alt="alt">
                                        </v-avatar> {{ e.titulo }}
                                    </v-card-actions>

                                </v-card>
                                <v-card  v-if="e.doc" color="bluegreyt" :href="require('@/static/peac/' + e.doc)">

                                    <v-card-actions class="justify-center" >
                                        <v-avatar size="50" color="" tile>

                                            <img :src="require('@/pages/peac/icons/' + e.icon)" alt="alt">
                                        </v-avatar> {{ e.titulo }}
                                    </v-card-actions>

                                </v-card>
                            </v-col>

                        </v-row>


                    </v-col>

                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'peac',
    data() {
        return {
            page: {
                color: 'amber',
                title: 'Política Estatal Anticorrupción',
                icon: 'mdi-dots-horizontal'
            },
            botones: [{
                titulo: 'Resumen Ejecutivo',
                icon: 'resumen.png',
                doc: 'Resumen ejecutivo.pdf'
            },
            {
                titulo: 'Descargar PEAC',
                icon: 'descarga-peac.png',
                doc: 'peac.pdf'
            },
            {
                titulo: 'Metodología',
                icon: 'Metodologia.png',
                doc: 'metodologia.pdf'
            },
            {
                titulo: 'Datos abiertos',
                icon: 'datos.png',
                doc: 'datosPeac.xlsx'
            },
            ],
            botonesSec: [{
                titulo: 'Política Nacional Anticorrupción',
                icon: 'PNA.png',
                to: 'https://www.sesna.gob.mx/wp-content/uploads/2020/02/Pol%C3%ADtica-Nacional-Anticorrupci%C3%B3n.pdf'
            },
            {
                titulo: 'Indicadores de corrupción',
                icon: 'IA.png',
                doc: 'Fichero.pdf'
            },
            {
                titulo: 'Diseño de Implementación',
                icon: 'proceso-de-implementacion.png',
                doc: 'implementacion.pdf'
            },
            {
                titulo: 'Indicadores de Seguimiento',
                icon: 'indicadores.png',
                to: 'https://n9.cl/6sgdrm'
            },
            ],
            botonesSec2: [
            {
                titulo: 'Percepción de la corrupción',
                icon: 'ipc.png',
                to: 'https://n9.cl/23p4q'
            },
           
            ],
            btnitem: [{
                title: '¿Qué es?:',
                desc: 'La Política Estatal Anticorrupción (PEAC) es el documento rector que guiará los esfuerzos de las instituciones públicas y ciudadanas en materia de prevención, control y combate de los hechos de corrupción. Los insumos con los que se construyó surgen de mecanismos de participación ciudadana, de análisis académico y de alineación con la Política Nacional Anticorrupción (PNA).',
                src1: 'peac1.jpg',
                src2: 'peac2.jpg',
                link: '/peac'
            },

            ],

        }

    }
}
</script>

<style lang="scss" scoped></style>

<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>
                <div align="center" class="text-body-1">Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal</div>

            </v-alert>

            <v-card class="mt-3 ">

                <v-col align="center" justify="center">
                    <v-row>
                        <v-col cols="12" md="4" xs="12" v-for=" (e,i) in botones" :key="i">
                            <v-card color="bluegreyt" :href="e.to">

                                <v-card-actions class="justify-center">
                                    <v-avatar size="35" tile>

                                        <img :src="require('@/pages/sei/icons/' + e.icon)" alt="alt">
                                    </v-avatar> {{ e.titulo }}
                                </v-card-actions>

                            </v-card>
                        </v-col>

                    </v-row>

                </v-col>

            </v-card>

            <v-card class="mt-3 mb-3" color="peac">
                <v-col aling="center" justify="center">
                    <v-row justify="center" align="center" class="mt-5">

                        <v-col cols="12" align="center">

                        </v-col>
                        <v-col cols="12" lg="8" sm="12" v-for="(e,i) in btnitem" :key="i">

                            <v-card class="pa-2 mb-10 mx-auto text-justify" tile color="article">
                                <v-row align="center">
                                    <v-col cols="12" lg="6" sm="12" class="pa-8" align="center" justify="center">

                                        <h3> {{e.title}}</h3>
                                        <v-card-subtitle class="text-justify">
                                            {{e.desc}}
                                        </v-card-subtitle>
                                        <v-card-subtitle class="text-justify">
                                            {{e.desc2}}
                                        </v-card-subtitle>
                                    </v-col>

                                    <v-col cols="12" lg="6" sm="12">
                                        <nuxt-link :to="e.link">

                                            <v-hover>

                                                <v-img slot-scope="{ hover }" v-if="hover" :src="require('@/static/img/botonera/'+ e.src1)">
                                                </v-img>
                                                <v-img v-else :src="require('@/static/img/botonera/'+ e.src1)">
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

            <v-card class="mt-3  pa-5">

                <v-card-title class="justify-center">
                    <div class=" text-xl-h2 text-md-h4"> Datos</div>
                </v-card-title>

                <v-col align="center" justify="center">
                    <v-row>
                        <v-col cols="12" md="4" sm="6" v-for="(e,i) in botonesSec" :key="i">
                            <v-card color="bluegreyt" :href="e.to">

                                <v-card-actions class="justify-center">
                                 
                                        <v-img  
                                        contain
                                        max-width="80"
                                        min-height="80"
                                        class="mr-4"  v-if=" e.logo" :src="require('@/static/img/' + e.icon)" alt="alt"></v-img>
                                  

                                    <div  v-if=" !e.logo">
                                    <v-avatar size="50" color="" tile>

                                        
                                        <img :src="require('@/static/img/' + e.icon)" alt="alt">
                                    </v-avatar> </div>{{ e.titulo }}
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
    name: 'declaraciones',
    data() {
        return {
            page: {
                color: 'green darken-3',
                title: 'Declaraciones',
                icon: 'mdi-book-open-outline'
            },
            botones: [{
                    titulo: 'Bases Plataforma Nacional Digital',
                    icon: 'estandar de datos.png',
                    to: 'https://www.plataformadigitalnacional.org/declaraciones'
                },
                {
                    titulo: 'Diccionario de datos',
                    icon: 'datos abiertos.png',
                    to: 'https://docs.google.com/spreadsheets/d/19Kyq46YwJk9wM7znYLQdLEKfAF8jTF4WmGJINXd9Lwg/edit#gid=0'
                },

            ],
            btnitem: [{
                    title: 'Evolución patrimonial, declaración de intereses y constancia de presentación de declaración fiscal',
                    desc: 'La información de declaraciones de los servidores públicos de los diferentes niveles de gobierno se encuentra contenida en diversos formatos, bases de datos y sistemas de información; cada uno de ellos con particularidades tecnológicas y reglas de negocio distintas que complican la integración y la interoperabilidad de los datos.',
                    desc2: 'Por ello el sistema establece una herramienta que permitirá la consulta de información de las diferentes instituciones.',
                    src1: 'sistema1.jpg',
                    src2: 'sistema2.jpg',
                    link: '/peac'
                },

            ],
            botonesSec: [{
                    logo: true,
                    titulo: 'Plataforma Digital Nacional',
                    icon: 'pdn.png',
                    to: 'https://www.plataformadigitalnacional.org/'
                },
                {
                    logo: true,
                    titulo: 'Consultar declaraciónes patrimoniales',
                    icon: 'declara_net1.png',
                    to: 'https://servidorespublicos.sefircoahuila.gob.mx/'
                },
                {
                    logo: true,
                    titulo: 'Consultar declaraciónes patrimoniales previas al 30/03/2021',
                    icon: 'cc-sefirc.png',
                    to: 'https://www.declaranetcoahuila.gob.mx/sidp/publica/IUListadoDependencias.jsp'
                },

            ],

        }

    }
}
</script>

<style lang="scss" scoped>

        </style>

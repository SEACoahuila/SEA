<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>
                <div align="center" class="text-body-1">{{ page.sub }}</div>

            </v-alert>

            <v-card class="mt-3 ">

                <v-col align="center" justify="center">
                    <v-row>
                        <v-col cols="12" md="4" xs="12" v-for="(e,i) in botones" :key="i">
                            <v-card color="bluegreyt" :href="e.doc">

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
            <v-row justify="center" align="center" class="mt-5">

                <v-col cols="12" align="center" justify='center'>

                    <v-card color="peac" class="pa-5">

                        <v-card-title class=" justify-center">
                            <div class=" text-xl-h3 text-md-h4 mt-5">
                                <v-avatar size="40" tile>

                                    <img :src="require('@/pages/sei/icons/logo_SEI.png')" alt="alt">
                                </v-avatar>

                                Sistema Estatal de Denuncias
                            </div>
                        </v-card-title>
                        <v-divider></v-divider>
                        
                        <v-card-text align="center" class="pa-12">

                            <p class="text-h5">¿Qué es?:</p>
                            <p>Es un canal de comunicación directa entre el ciudadano y las
                                instituciones públicas, con el fin de crear para los ciudadanos un proceso de atención y
                                comunicación efectiva sin intermediarios y por otra parte prevenir y fortalecer a las
                                instituciones en sus procesos en el combate a la corrupción.</p>

                            <p class="text-h5">Módulo ciudadano:</p>
                            <p> Dirigidoal ciudadano que desee emitir y generar un canal de
                                comunicación de manera directa con las instituciones, con el único fin de presentar quejas o denuncias sin intermediarios, con la finalidad de que el órgano encagado de resolver la situación reciba y conteste las peticiónes ciudadanas.</p>

                            <p class="text-h5">Módulo para instituciones públicas del Estado de Coahuila:</p>
                            <p> Dirigido a todas las instituciones públicas del Estado, diseñado para recibir denuncias dentro las mismas
                                instituciones. Donde se pretende brindar atención mediante la captación, registro y emisión de las solicitudes de los ciudadanos, con la finalidad de emitir una resolución correspondiente a cada caso y en base de la legislación aplicable a cada institución.</p>

                        </v-card-text>
                        <v-divider class=""></v-divider>
                      
                <v-col align="center" justify="center">
                    <v-row justify="center" align="center" class="mt-5">

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

                                        <v-hover>

                                            <v-img slot-scope="{ hover }" v-if="hover" :src="require('@/static/img/botonera/'+ e.src1)">
                                            </v-img>
                                            <v-img v-else :src="require('@/static/img/botonera/'+ e.src1)">
                                            </v-img>

                                        </v-hover>

                                    </v-col>

                                </v-row>
                            </v-card>

                        </v-col>

                    </v-row>
                </v-col>

                <v-divider class=""></v-divider>
                        <v-card-text align="center" class="pa-6">

                            <p class="text-h5">Formato para incorporar el sistema estatal de denuncias en las entidades públicas del Estado</p>

                            <p class="text-justify">
                                Con la finalidad de establecer un canal directo es necesaria la integración de el sistema de denuncias con cada institución, por ello cualquier intitución por medio de un servidor públicos
                                en cualquera de las áreas involucradas, como órganos de control interno, titulares de área, directivos, administrativos, recursos humanos, cabildos podrán acceder y llevar a cabo
                                el registro y seguimiento de las denuncias de su plataforma dentro de la institución.
                            </p>
                            <p>Para instituciónes públicas del estado de Coahuila interesadas en incorporar el sistema estatal de denuncias le invitamos a llenar este formato.

                            </p>
                            <v-btn elevation="3" :color="page.color" dark href="https://docs.google.com/forms/d/e/1FAIpQLScKlik-KXfo5uvcO-5OMjcQBP0R4poGSWdG1lP6tquzxu6I_Q/viewform"> Regístro de instituciónes públicas</v-btn>
                        </v-card-text>

                    </v-card>
                </v-col>
            </v-row>
            
            <v-card class="mt-10 pa-5">

                <v-card-title class="justify-center mb-4">
                    <v-icon x-large :color="page.color">mdi-email-edit-outline</v-icon><div class=" text-xl-h3 text-md-h4"> Buzones de quejas</div>
                </v-card-title>
            <v-divider></v-divider>
                <v-col align="center" justify="center">
                    <v-row>
                        <v-col cols="12" md="4" sm="6" v-for="(e,i) in botonesSec" :key="i">
                            <v-card color="bluegreyt" :href="e.to">

                                <v-card-actions class="justify-center">

                                    <v-img contain max-width="80" min-height="80" class="mr-4" v-if=" e.logo" :src="require('@/pages/sei/icons/' + e.icon)" alt="alt"></v-img>

                                    <div v-if=" !e.logo">
                                        <v-avatar size="50" color="" tile>

                                            <img :src="require('@/static/img/' + e.icon)" alt="alt">
                                        </v-avatar>
                                    </div>{{ e.titulo }}
                                </v-card-actions>

                            </v-card>
                        </v-col>

                    </v-row>

                </v-col>

            </v-card>

            <!-- <v-card class="mt-3 mb-3" color="peac">
                <v-col align="center" justify="center">
                    <v-row justify="center" align="center" class="mt-5">

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

                                        <v-hover>

                                            <v-img slot-scope="{ hover }" v-if="hover" :src="require('@/static/img/botonera/'+ e.src1)">
                                            </v-img>
                                            <v-img v-else :src="require('@/static/img/botonera/'+ e.src1)">
                                            </v-img>

                                        </v-hover>

                                    </v-col>

                                </v-row>
                            </v-card>

                        </v-col>

                    </v-row>
                </v-col>

            </v-card> -->

            <!-- Inicio debotoneras denuncia -->

        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'denuncias',
    data() {
        return {
            page: {
                color: 'amber darken-3',
                title: 'Denuncias',
                sub: 'Denuncias públicas de faltas administrativas y hechos de corrupción',
                icon: 'mdi-account-voice'
            },
            botones: [{
                    titulo: 'Bases Plataforma Nacional Digital',
                    icon: 'estandar de datos.png',
                    doc: 'https://www.plataformadigitalnacional.org/denuncias'
                },
                {
                    titulo: 'Diccionario de datos',
                    icon: 'datos abiertos.png',
                    doc: ''
                },

            ],
            btnitem: [{
                    title: 'Sistema de Denuncias del Sistema Estatal de Información',
                    desc: ' Este sistema permite a los ciudadanos, organizaciones y empresas presentar denuncias de forma anónima o identificada, sobre irregularidades, violaciones, malversaciones, abusos, entre otros.',
                    desc2: 'Además, el sistema cuenta con medidas de protección para garantizar la privacidad y seguridad de las denuncias, proporcionando una capacitación continua para los funcionarios encargados del sistema, para garantizar la confidencialidad y la imparcialidad en la investigación.',
                    src1: 'sistema1.jpg',
                    src2: 'sistema2.jpg',
                    link: '#'
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
                    titulo: 'Sistema Estatal de Denuncias SEAC',
                    icon: 'logo_SEI.png',
                    to: 'https://seicoahuila.org.mx/'
                },
                {
                    logo: true,
                    titulo: 'QuejaNet Coahuila',
                    icon: 'quejanet.png',
                    to: 'https://quejanet.tramitescoahuila.gob.mx/sidqcs/'
                },

            ],

        }

    }
}
</script>

<style lang="scss" scoped>

        </style>

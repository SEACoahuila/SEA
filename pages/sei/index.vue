<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>
                <div class="text-caption">(V-1.2.0)</div>

            </v-alert>

            <v-card class="mt-3 ">

                <v-col align="center" justify="center">
                    <v-row>
                        <v-col cols="12" md="4" xs="12" v-for="(e,i) in botones" :key="i">
                            <v-card color="bluegreyt" :href="require('@/static/sei/' + e.doc)">

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

            <v-card class="mt-10 pa-10" color="sei">

                <v-card-title class="justify-center">
                    <div class=" text-xl-h2 text-md-h4"> Módulos </div>
                </v-card-title>
                <v-divider></v-divider>
                <v-row>
                    <v-col cols="12" xl="3" md="6" sm="12" v-for="(i,index) in sistemas" :key="index">
                        <v-card shaped class="mx-auto mt-12 pa-5" color="" min-height="320">
                            <v-col>
                                <v-row align="center" justify="center" class="fill-height">
                                    <v-col align-self="start" class="pa-0" cols="6" md="4" xs="12">
                                        <v-avatar class="profile" size="164">

                                            <div class=" text-h1 text-xl-h1 "> {{ i.numero }}</div>

                                        </v-avatar>

                                    </v-col>
                                    <v-col align-self="start" class="pa-1" cols="8" xl="6" md="8" xs="12">
                                        <v-icon :color="i.color" size="130">{{ i.icon }}</v-icon>
                                        <div style="background-color:grey; height: 2px"></div>
                                    </v-col>

                                    <v-col class="py-0">
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-h6">
                                                    {{i.nombre}}
                                                </v-list-item-title>
                                                <v-divider></v-divider>
                                                <v-list-item-text>{{ i.sub }}</v-list-item-text>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-col>
                                    <div class="text-center">

                                        <v-btn :color="page.color" fab absolute bottom large dark right :to="i.src" >
                                            Ver<v-icon>mdi-monitor-eye</v-icon>
                                        </v-btn>

                                    </div>

                                </v-row>

                            </v-col>

                        </v-card>

                    </v-col>

                </v-row>

            </v-card>

        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'SEI',
    data() {
        return {
            page: {
                color: 'cyan',
                title: 'Sistema Estatal de Información',
                icon: 'mdi-graphql'
            },
            botones: [{
                    titulo: 'Proyecto',
                    icon: 'proyecto.png',
                    doc: 'Proyecto Ejecutivo.pdf'
                },
                // {
                //     titulo: 'Estandarización de datos',
                //     icon: 'estandar de datos.png',
                //     doc: ''
                // },
                // {
                //     titulo: 'Datos',
                //     icon: 'datos abiertos.png',
                //     doc: ''
                // },

            ],
            sistemas: [{
                    numero: 'S1',
                    nombre: 'Declaraciones',
                    sub: 'Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal',
                    icon: 'mdi-book-open-outline',
                    color: 'green darken-3',
                    src: '/sei/declaraciones'
                },
                {
                    numero: 'S2',
                    nombre: 'Servidores en contrataciones',
                    sub: 'Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas',
                    icon: 'mdi-account-tie-outline',
                    color: 'pink darken-3',
                    src: '/sei/servidores'
                },
                {
                    numero: 'S3',
                    nombre: 'Sancionados',
                    sub: 'Servidores públicos y particulares sancionados',
                    icon: 'mdi-scale-balance',
                    color: 'blue darken-3',
                    src: '/sei/sanciones'
                },
                {
                    numero: 'S4',
                    nombre: 'Denuncias',
                    sub: 'Denuncias públicas de faltas administrativas y hechos de corrupción',
                    icon: 'mdi-account-voice',
                    color: 'amber darken-3',
                    src: '/sei/denuncias'
                },
            ],
        }

    }
}
</script>

<style lang="scss" scoped>

    </style>

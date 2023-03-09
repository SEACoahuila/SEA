

<template>
    <v-container >
    
        <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>

            </v-alert>

            <v-card class="mt-10 pa-5" color="article">
                <v-row class="mt-5" v-for=" (e,i) in page.presentacion" >
                    <v-col aling="center" justify="center">
                        <v-card-title class="justify-center">
                            <div class=" text-xl-h3 text-md-h4"> {{e.titulo}}</div>
                        </v-card-title>

                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="12" md="9" sm="12">

                        <p align="center" class="text-justify">
                            {{ e.texto }}
                        </p>

                    </v-col>

                </v-row>

            </v-card>

            <v-card class="mt-10 pa-3">
                <v-card-title class="justify-center">
                    <div class=" text-xl-h2 text-md-h4"> Miembros que integran la Comisión Ejecutiva</div>
                </v-card-title>
                <v-row>
                    <v-col cols="12" md="4" sm="12" v-for=" (i,index) in integrantes" :key="index">
                        <v-card shaped class="mx-auto mt-8 pa-3" color="cc" min-height="300" light>
                            <v-col>
                                <v-row align="center" class="fill-height">
                                    <v-col align-self="start" class="pa-0" cols="6">
                                        <v-avatar class="profile" size="164">
                                            <v-img :src="require('@/static/img/cpc/'+ i.foto)"></v-img>

                                        </v-avatar>

                                    </v-col>
                                    <v-col align-self="start" class="pa-1" cols="6">

                                        <v-img max-width="60%" :src="require('@/static/img/'+ i.img)"></v-img>

                                    </v-col>

                                    <v-col class="py-0">
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-h6">
                                                    {{i.nombre}}
                                                </v-list-item-title>
                                                <v-list-item-text>{{ i.cargo }}</v-list-item-text>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-col>

                                </v-row>

                            </v-col>
                            <div class="text-center">
                                <v-dialog v-model="i.dialog" width="50%">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn :color="page.color" fab small dark absolute top right v-on="on">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-card>
                                        <div>
                                            <v-card-title class="bluegreyt">
                                                Contacto
                                            </v-card-title>

                                            <v-card-text>
                                                <v-list>
                                                    <v-list-item dense>
                                                        {{i.mail}}
                                                    </v-list-item>
                                                </v-list>

                                            </v-card-text>
                                        </div>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" text @click="i.dialog = false">
                                                Cerrar
                                            </v-btn>
                                        </v-card-actions>

                                    </v-card>

                                </v-dialog>
                            </div>

                        </v-card>

                    </v-col>

                </v-row>

            </v-card>

            <v-card class="mt-10 pa-4" color="article">
                <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4">Calendario de sesiones</div>
                        </v-card-title>
                        <v-card-actions class="justify-center">
                            <v-btn>Descargar</v-btn>

                        </v-card-actions>

                    </v-col>

                    <v-col aling="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Acuerdos</div>
                        </v-card-title>

                        <v-card-actions class="justify-center">
                            <!-- :href="require('@/pages/transparencia/art20/' + e.src)" -->
                            <v-row justify="center">
                                <v-btn class="ma-2" v-for="(e,index) in acuerdos" :key="index" label color="" max-width="100%">{{ e.year }}</v-btn>
                            </v-row>
                        </v-card-actions>

                    </v-col>
                </v-row>

            </v-card>

        </v-col>
    </v-row>
    </v-container>
    </template>
    
    <script>
    export default {
        name: 'sei',
        data() {
            return {
                page: {
                    color: 'blue-grey',
                    title: 'Comisión Ejecutiva',
                    icon: 'mdi-cog',
                    presentacion: [{
                        titulo: '¿Que es?',
                        texto: 'Órgano técnico auxiliar de la Secretaría Ejecutiva integrada por el Secretario Técnico y el Consejo de Participación Ciudadana, con excepción del miembro que funja en ese momento como su Presidente.'     },
                    {
                        titulo: 'Objetivo',
                        texto: 'Generar los insumos técnicos necesarios para que el Comité Coordinador realice sus funciones, elaborando propuestas para ser sometidas a la aprobación de dicho Comité, respecto a las políticas integrales en prevención, control, y disuasión de faltas administrativas y hechos de corrupción, asi como la realización de informes, indicadores, evaluaciónes, y seguimiento de respecto a dichas políticas.',
                    },

                ]
            },

            // Termina page

            acuerdos: [

            ],
            integrantes: [
                {
                    nombre: 'Miguel Francisco Crespo Alvarado',
                    cargo: 'Cooordinador de la Comisión Ejecutiva',
                    foto: 'cpc-mfca.jpg',
                    img: 'cc-cpc.png',
                    mail: 'miguel.crespo@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Elidé Alejandrina Acosta Reyes ',
                    cargo: 'Secretaria Técnica del Sistema Estatal Anticorrupción',
                    foto: 'st-ear.jpg',
                    img: 'seac.png',
                    mail: 'elide.acosta@seacoahuila.org.mx'
                },
                {
                    nombre: 'Yolanda Guadalupe Montes Martínez',
                    cargo: 'Integrante de la de la Comisión Ejecutiva',
                    foto: 'cpc-ygmm.jpg',
                    img: 'cc-cpc.png',
                    mail: 'yolanda.montes@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Juan Carlos Guzmán Escobedo',
                    cargo: 'Integrante de la de la Comisión Ejecutiva',
                    foto: 'cpc-jcge.jpg',
                    img: 'cc-cpc.png',
                    mail: 'carlos.guzman@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Karla Samperio Flores',
                    cargo: 'Integrante de la de la Comisión Ejecutiva',
                    foto: 'cpc-ksf.png',
                    img: 'cc-cpc.png',
                    mail: 'karla.samperio@cpccoahuila.org.mx'
                },
             
            ]

        }

    }
}
    </script>
    
    <style lang="scss" >
    
    </style>
    
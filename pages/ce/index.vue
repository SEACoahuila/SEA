

<template>
    <v-container>

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4">{{ page.title }}</div>

                </v-alert>

                <v-card class="mt-10 pa-5" color="article">
                    <v-row class="mt-5" v-for=" (e, i) in page.presentacion">
                        <v-col aling="center" justify="center">
                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> {{ e.titulo }}</div>
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
                        <v-col cols="12" md="4" sm="12" v-for=" (i, index) in integrantes" :key="index">
                            <v-card shaped class="mx-auto mt-8 pa-3" color="cc" min-height="300" light>
                                <v-col>
                                    <v-row align="center" class="fill-height">
                                        <v-col align-self="start" class="pa-0" cols="6">
                                            <v-avatar class="profile" size="164">
                                                <v-img :src="require('@/static/img/cpc/' + i.foto)"></v-img>

                                            </v-avatar>

                                        </v-col>
                                        <v-col align-self="start" class="pa-1" cols="6">

                                            <v-img max-width="60%" :src="require('@/static/img/' + i.img)"></v-img>

                                        </v-col>

                                        <v-col class="py-0">
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title class="text-h6">
                                                        {{ i.nombre }}
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
                                                            {{ i.mail }}
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
                        <!-- <v-col align="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4">Calendario de sesiones</div>
                        </v-card-title>
                        <v-card-actions class="justify-center">
                            <v-btn>Descargar</v-btn>

                        </v-card-actions>

                    </v-col> -->

                        <v-col aling="center" justify="center" cols="12">

                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h3 text-h4 mb-5">Actas de sesiones</div>
                            </v-card-title>

                            <v-card-actions class="justify-center">
                                <v-row justify="center">
                                    <v-col cols="12" v-for="(e, index) in seccionActas" :key="index" align="center">
                                        <h2>{{ e.titulo }}</h2>
                                        <v-divider></v-divider>
                                        <v-btn class="ma-2" v-for="( acta, index) in e.actas" label color=""
                                            :href="acta.link" max-width="100%">{{ acta.nombre }}</v-btn>
                                    </v-col>

                                </v-row>
                            </v-card-actions>

                        </v-col>
                    </v-row>

                </v-card>

                <v-card class="mt-10 pa-4" color="article">
                    <v-row justify="center" align="center">


                        <v-col aling="center" justify="center" cols="12">

                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h3 text-h4 ">Acuerdos</div>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-actions class="justify-center">
                                <v-row justify="center">
                                    <v-col cols="12" v-for="(e, index) in acuerdos" :key="index" align="center">
                                        <h2>{{ e.titulo }}</h2>

                                        <v-btn dark class="ma-2" v-for="( acta, index) in e.actas" label color=""
                                            :href="acta.link" max-width="100%">{{ acta.nombre }}</v-btn>
                                    </v-col>

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
                    titulo: '¿Qué es?',
                    texto: 'Órgano técnico auxiliar de la Secretaría Ejecutiva integrada por la Secretaria Técnica y el Consejo de Participación Ciudadana, con excepción del miembro que fúnja en ese momento como su presidente.'
                },
                {
                    titulo: 'Objetivo',
                    texto: 'Generar los insumos técnicos necesarios para que el Comité Coordinador realice sus funciones, elaborando propuestas para ser sometidas a la aprobación de dicho Comité, respecto a las políticas integrales en prevención, control, y disuasión de faltas administrativas y hechos de corrupción, asi como la realización de informes, indicadores, evaluaciónes, y seguimiento de respecto a dichas políticas.',
                },

                ]
            },

            // Termina page

            seccionActas: [

                {
                    titulo: '2023-2024',
                    actas: [
                        {
                            nombre: 'Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1K86ymgGzPQAC9joL1vsAm_OWsAqsDTNX/view?usp=drive_link',
                        },
                        {
                            nombre: 'Segunda Ordinaria',
                            link: 'https://drive.google.com/file/d/1cjhHjvkFSkQscRIVBuEvFpjK26YkVuO7/view?usp=drive_link',
                        },
                        {
                            nombre: 'Tercera Ordinaria',
                            link: 'https://drive.google.com/file/d/1iAKwW27Kq-16lwxGuJ8UV7ErB7mt0pTq/view?usp=drive_link',
                        },
                        {
                            nombre: 'Cuarta Ordinaria',
                            link: 'https://drive.google.com/file/d/15PNHljQdsUiwE_uVJXPaezf0kfnaXisz/view?usp=drive_link',
                        },
                        {
                            nombre: 'Quinta Ordinaria',
                            link: 'https://drive.google.com/file/d/15Nqpce-NfHVQbDbpnkNOUDOr0dfrkm6a/view?usp=drive_link',
                        },
                        {
                            nombre: 'Sexta Ordinaria',
                            link: 'https://drive.google.com/file/d/1bZ3TTrDhijF1uaNlJpZQ_YOkegVGSXQr/view?usp=drive_link',
                        },
                        {
                            nombre: 'Séptima Ordinaria',
                            link: 'https://drive.google.com/file/d/1oFuALzDn4Zm3MNaUGLFy_OxhctuiJjvC/view?usp=drive_link',
                        },
                        {
                            nombre: 'Octava Ordinaria',
                            link: 'https://drive.google.com/file/d/1_CMTPWgZcxHEZJt0vvB87Pdu1TVUYvc4/view?usp=drive_link',
                        },

                    ]
                },


                {
                    titulo: '2022-2023',
                    actas: [
                        {
                            nombre: 'Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1ObHuFyhDTZPg7hQPrbbkmt-o062_UoQ3/view?usp=drive_link',
                        },
                        {
                            nombre: 'Segunda Ordinaria',
                            link: 'https://drive.google.com/file/d/1AajDaxxOOBuOShi6N9LmQErN17mPy-QH/view?usp=drive_link',
                        },
                        {
                            nombre: 'Tercera Ordinaria',
                            link: 'https://drive.google.com/file/d/1SgKaBBJC5U6SU2vDKCLH9zZljZ9kX5lv/view?usp=drive_link',
                        },
                        {
                            nombre: 'Cuarta Ordinaria',
                            link: 'https://drive.google.com/file/d/1-x6lHByW2jcg3APB7WxxXQzLO43UePyp/view?usp=drive_link',
                        },
                        {
                            nombre: 'Quinta Ordinaria',
                            link: 'https://drive.google.com/file/d/1X5dt2FsNFg3_ES8RUAOxiNie_zL08wC4/view?usp=drive_link',
                        },
                        {
                            nombre: 'Sexta Ordinaria',
                            link: 'https://drive.google.com/file/d/1BCMUWQG6c28pDQEjILxSz7rTGXNc8svQ/view?usp=drive_link',
                        },
                        {
                            nombre: 'Séptima Ordinaria',
                            link: 'https://drive.google.com/file/d/1DN9xzaEhHFKaFyEPKhN6g54xN-6QMHLH/view?usp=drive_link',
                        },
                        {
                            nombre: 'Octava Ordinaria',
                            link: 'https://drive.google.com/file/d/11TLXBFmKzXrin6IFrZ4CqnRqtPo6rxc-/view?usp=drive_link',
                        },
                        {
                            nombre: 'Novena Ordinaria',
                            link: 'https://drive.google.com/file/d/1lDJ-ZChqmlrsiXPfTzTl_mpi8ZS9tEIY/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Ordinaria',
                            link: 'https://drive.google.com/file/d/1zlqyEYp9XzcqljqNzIMiqf_Z1I3YkjNX/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1EOZ1EVJP1fDu6_FYpWYpfvmJe7rhjg2C/view?usp=drive_link',
                        }
                    ]
                },
                {
                    titulo: '2021-2022',
                    actas: [
                        {
                            nombre: 'Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1stwV7KAHylhSruXqwDTpp7Nsma0RZ_go/view?usp=drive_link',
                        },
                        {
                            nombre: 'Segunda Ordinaria',
                            link: 'https://drive.google.com/file/d/1CoAjwvKrgyqObMV_i9vHuovd1IJdwLRN/view?usp=drive_link',
                        },
                        {
                            nombre: 'Tercera Ordinaria',
                            link: 'https://drive.google.com/file/d/1MvuHydxSvLYbJsQzbvGCOxWvSTQnRSn_/view?usp=drive_link',
                        },
                        {
                            nombre: 'Cuarta Ordinaria',
                            link: 'https://drive.google.com/file/d/1OMiYsRY5NB9mMO6ySSgrHZpuXOcDwSfV/view?usp=drive_link',
                        },
                        {
                            nombre: 'Quinta Ordinaria',
                            link: 'https://drive.google.com/file/d/1HwK_tUTO1hDSDdAptc2eECwdbUodIpSe/view?usp=drive_link',
                        },
                        {
                            nombre: 'Sexta Ordinaria',
                            link: 'https://drive.google.com/file/d/1VjmKrlaNdcahRV9ClHcjinfGgN2OUvwJ/view?usp=drive_link',
                        },
                        {
                            nombre: 'Séptima Ordinaria',
                            link: 'https://drive.google.com/file/d/1FbJ5L7IHaIEEMpDbh0ZU5EQkwVKptEoe/view?usp=drive_link',
                        },
                        {
                            nombre: 'Octava Ordinaria',
                            link: 'https://drive.google.com/file/d/1-SNFaTWnduPDx35A2qYy4-bhGji18_bv/view?usp=drive_link',
                        },
                        {
                            nombre: 'Novena Ordinaria',
                            link: 'https://drive.google.com/file/d/1SsZwGyhc0o6PYdFAW6LumpIX6jloOSUG/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Ordinaria',
                            link: 'https://drive.google.com/file/d/124-DmoMGtAbittp0shYzBs7P_2oMpl9N/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1cORXspHpxGI2gKZHyJ_R6EknIHaq1kyg/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Segunda Ordinaria',
                            link: 'https://drive.google.com/file/d/1uMMkEW7d1gI1KKZF81I5_80jTo6x3aR-/view?usp=drive_link',
                        },
                        {
                            nombre: 'Primera Extraordinaria',
                            link: 'https://drive.google.com/file/d/1yPJ5TP_rs-dmnVGKrSlBz2kBwNK_IveC/view?usp=drive_link',
                        },


                    ]
                },

                {
                    titulo: 'Informes',
                    actas: [
                        {
                            nombre: '2022-2023',
                            link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/archivos%2FInforme%20Comisi%C3%B3n%20ejecutiva%202022-2023.pdf?alt=media&token=625a3277-21a3-47f9-9ad6-e6daadcc1fd3&_gl=1*9yv9cm*_ga*MzMwNTI3MDQ5LjE2OTE2MjQ0MDA.*_ga_CW55HF8NVT*MTY5NjUxNjgwNi40LjEuMTY5NjUxNjgzNy4yOS4wLjA',
                        }
                    ]
                },



            ],
            acuerdos: [
                {
                    titulo: 'Calendario de sesiones',
                    actas: [
                        {
                            nombre: 'Calendario',
                            link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/archivos%2FPropuesta%20de%20fechas%20para%20las%20sesiones%20de%20Comisi%C3%B3n%20Ejecutiva.pdf?alt=media&token=69bb8e92-cb88-4ea2-99d9-f248aa283176&_gl=1*gghg4l*_ga*MzMwNTI3MDQ5LjE2OTE2MjQ0MDA.*_ga_CW55HF8NVT*MTY5ODE2MTE4OS45LjEuMTY5ODE2MTI4NS40NC4wLjA',
                        },
                       
                    ]
                },
                {
                    titulo: 'Lineamientos para la Comisión Ejecutiva',
                    actas: [
                        {
                            nombre: 'Lineamientos',
                            link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/archivos%2FLINEAMIENTOS%20PARA%20LA%20COMISIO%CC%81N%20EJECUTIVA.pdf?alt=media&token=91b77538-8eb9-4ed7-87a1-a78fa9432352&_gl=1*tpqmob*_ga*MzMwNTI3MDQ5LjE2OTE2MjQ0MDA.*_ga_CW55HF8NVT*MTY5ODE2MTE4OS45LjEuMTY5ODE2MTMzNC42MC4wLjA',
                        }
                    ]
                },
            ],

            integrantes: [
                {
                    nombre: 'Yolanda Guadalupe Montes Martínez',
                    cargo: 'Cooordinadora de la Comisión Ejecutiva',
                    foto: 'cpc-ygmm.jpg',
                    img: 'cc-cpc.png',
                    mail: 'yolanda.montes@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Elidé Alejandrina Acosta Reyes ',
                    cargo: 'Secretaria Técnica del Sistema Estatal Anticorrupción',
                    foto: 'st-ear.jpg',
                    img: 'seac.png',
                    mail: 'elide.acosta@seacoahuila.org.mx'
                },
                {
                    nombre: 'Juan Carlos Guzmán Escobedo',
                    cargo: 'Integrante',
                    foto: 'cpc-jcge.jpg',
                    img: 'cc-cpc.png',
                    mail: 'carlos.guzman@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Karla Samperio Flores',
                    cargo: 'Integrante',
                    foto: 'cpc-ksf.png',
                    img: 'cc-cpc.png',
                    mail: 'karla.samperio@cpccoahuila.org.mx'
                },

            ]

        }

    }
}
</script>
    
<style lang="scss" ></style>
    
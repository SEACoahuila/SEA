<template>
<v-container>

    <v-row justify="center">
        <v-col cols="12">
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>

            </v-alert>

            <v-card class="mt-10 pa-5" color="article">
                <v-row class="mt-5" v-for="(e,index) in page.presentacion" :key="index">
                    <v-col align="center" justify="center">
                        <v-card-title align-self="center" class="justify-center">
                            <div class=" text-xl-h3 text-md-h4"> {{e.titulo}}</div>
                        </v-card-title>

                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="12" md="9" sm="12" align-self="center">

                        <p align="center" class="text-justify">
                            {{ e.texto }}
                        </p>

                    </v-col>

                </v-row>

            </v-card>

            <v-card class="mt-10 pa-3">
                <v-card-title class="justify-center">
                    <div class=" text-xl-h2 text-md-h4"> Miembros que integran el CPC </div>
                </v-card-title>
                <v-row>
                    <v-col cols="12" md="4" sm="12" v-for="(i,index) in integrantes" :key="index">
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
                                <v-dialog v-model="i.dialog" max-width="450">
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
        </v-col>

        <v-col cols="12" lg="7" sm="12">
            <v-card color="cpc">

                <v-card-title class=" justify-center">
                    <div class=" text-xl-h3 text-md-h4 mt-5">
                        <v-icon large>mdi-webhook</v-icon>Redes Ciudadanas
                    </div>
                </v-card-title>
                <v-divider></v-divider>

                <v-card-text align="center">

                    <p class="text-h5">Misi??n:</p>
                    <p>Ser un instrumento de participaci??n que facilite involucrar a la ciudadan??a en los asuntos de inter??s p??blico, al impulsar proyectos que permitan reforzar las acciones de combate y prevenci??n de la corrupci??n</p>

                    <p class="text-h5">Visi??n:</p>
                    <p>Ser una red ciudadana reconocida por su capacidad para incidir en las decisiones sobre asuntos p??blicos conservando su car??cter ciudadano, apartidista y libre de intereses ajenos a su prop??sito</p>

                </v-card-text>

                <v-card-text align="center" class="pa-6">

                    <p class="text-h5">Formulario de registro para Redes de Organizaciones de Sociedad Civil</p>

                    <p class="text-justify">La Red de Participaci??n Ciudadana Anticorrupci??n (RPC) est?? integrada por organismos, instituciones, colegios, grupos ciudadanos e individuos interesados en consolidar la participaci??n ciudadana en el combate a la corrupci??n mediante el uso de herramientas y metodolog??as adecuadas. Su principal finalidad es la de transversalizar e implementar la pol??tica estatal anticorrupci??n, enfocandose en mecanismos de capacitaci??n, la escucha activa y el impulso de iniciativas nacidas de la sociedad civil organizada en favor de la lucha anticorrupci??n.

                    </p>
                    <p>Si te interesa colaborar con CPC activamente en los proyectos estrat??gicos y/o formar parte de la RPC (Red de Participaci??n Ciudadana) te invitamos a llenar este formato y en breve un consejero se comunicar?? contigo.

                    </p>
                    <v-btn block elevation="3" :color="page.color" dark href="https://forms.gle/bSVMAxGydghpYWUx5"> Registrese Aqu?? </v-btn>
                </v-card-text>
                <v-divider class="ma-8"></v-divider>
                <v-card-text align="center">
                    <p class="text-h5">ANTEPROYECTO</p>
                    <a href="https://www.cpccoahuila.org.mx/osc/objetivo/lineas-estrategicas.pdf">
                        <v-img max-width="450" :src="require('@/static/img/cpc/' + 'plan.jpg')"></v-img>
                    </a>
                </v-card-text>

            </v-card>
        </v-col>

        <v-col cols="12" lg="5" sm="12">
            <v-card color="cpc">

                <v-card-title class="justify-center">
                    <div class=" text-xl-h3 text-md-h4 mt-5">
                        <v-icon large>mdi-webhook</v-icon>Integrantes
                    </div>
                </v-card-title>
                <v-divider></v-divider>

                <v-card-text>

                    <p class="text-h5 justify-center" align="center">Integrantes de la Red de Participaci??n Ciudadana</p>

                    <v-timeline v-for="(i,index) in integrantesRed" :key="index">
                        <v-timeline-item small right color="pink">{{ i }}</v-timeline-item>

                    </v-timeline>

                </v-card-text>
                <v-card-text align-self="center">

                </v-card-text>

            </v-card>
        </v-col>
        <v-col cols="12">

            <v-card class="mt-10 pa-4" color="article">
                <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h3 text-md-h4"> Planes</div>
                        </v-card-title>
                        <v-card-actions class="justify-center">
                            <v-btn v-for=" (e,i) in planes" :key="i" :href="require('@/static/cpc/' + e.src)">{{ e.year }}</v-btn>

                        </v-card-actions>

                    </v-col>

                    <v-col aling="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h3 text-md-h4"> Informes</div>
                        </v-card-title>

                        <v-card-actions class="justify-center">
                            <!-- :href="require('@/pages/transparencia/art20/' + e.src)" -->
                            <v-row justify="center">
                                <v-btn class="ma-2"  v-for="(e,i) in informes" :key="i"  :href="require('@/static/cpc/' + e.src)" label color="" max-width="100%">{{ e.year }}</v-btn>
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
    name: 'CPC',
    data() {
        return {
            page: {
                color: 'purple',
                title: 'CPC',
                icon: 'mdi-account-supervisor-circle-outline',
                presentacion: [{
                        titulo: 'Misi??n',
                        texto: 'Coordinar la participaci??n de la ciudadan??a, la academia y el sector privado e impulsar pol??ticas p??blicas y acciones encaminadas a combatir la corrupci??n en concordancia con el sistema anticorrupci??n del estado de Coahuila.'
                    },
                    {
                        titulo: 'Visi??n',
                        texto: 'Ser la instancia que refleje la perspectiva ciudadana con respecto al combate a la corrupci??n garantizando su incidencia en la agenda p??blica y contribuyendo en la consolidaci??n del sistema anticorrupci??n del estado de Coahuila.'
                    },
                    {
                        titulo: 'Facultades',
                        texto: 'El CPC tiene las facultades de proponer pol??ticas anticorrupci??n, metodolog??as e indicadores de evaluaci??n y, sobretodo, vigilar el funcionamiento del Sistema Estatal Anticorrupci??n. Es por esto que debe trabajar en conjunto con el Comit?? Coordinador y el Secretario T??cnico para la integraci??n del componente ciudadano en la conformaci??n de los informes, recomendaciones y pol??ticas p??blicas que se consideren necesarias para el buen funcionamiento del Sistema.'
                    }

                ]
            },

            // Termina page

            informes: [{
                    year: '2021-2022',
                    src: 'cpc-coahuila-informe-resultados-2021-2022.pdf'
                },
                {
                    year: '2020-2021',
                    src: 'cpc-coahuila-informe-resultados-2020-2021.pdf'
                },
                {
                    year: '2019-2020',
                    src: 'cpc-coahuila-informe-resultados-2019-2020.pdf'
                },
                {
                    year: '2018-2019',
                    src: 'cpc-coahuila-informe-resultados-2018-2019.pdf'
                },

            ],
            planes: [{
                    year: 'Plan de Comunicaci??n',
                    src: 'plan-de-comunicacion-cpc.pdf'
                },
                {
                    year: '2020',
                    src: 'plan-de-trabajo-cpc-2020.pdf'
                },
                {
                    year: '2019',
                    src: 'plan-de-trabajo-cpc-2019.pdf'
                },
                {
                    year: '2018',
                    src: 'plan-de-trabajo-cpc-2018.pdf'
                },

            ],
            integrantes: [{
                    nombre: 'Jafia Pacheco Valtierra',
                    cargo: 'Consejera Presidenta del Consejo de Participaci??n Ciudadana.',
                    foto: 'cpc-jpv.jpg',
                    img: 'cc-cpc.png',
                    mail: 'jafia.pacheco@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Miguel Francisco Crespo Alvarado',
                    cargo: 'Consejero del Consejo de Participaci??n Ciudadana.',
                    foto: 'cpc-mfca.jpg',
                    img: 'cc-cpc.png',
                    mail: 'miguel.crespo@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Yolanda Guadalupe Montes Mart??nez',
                    cargo: 'Consejera del Consejo de Participaci??n Ciudadana.',
                    foto: 'cpc-ygmm.jpg',
                    img: 'cc-cpc.png',
                    mail: 'yolanda.montes@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Juan Carlos Guzm??n Escobedo',
                    cargo: 'Consejero del Consejo de Participaci??n Ciudadana.',
                    foto: 'cpc-jcge.jpg',
                    img: 'cc-cpc.png',
                    mail: 'carlos.guzman@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Karla Samperio Flores',
                    cargo: 'Consejera  del Consejo de Participaci??n Ciudadana.',
                    foto: 'cpc-ksf.png',
                    img: 'cc-cpc.png',
                    mail: 'karla.samperio@cpccoahuila.org.mx'
                },

            ],
            integrantesRed: [
                'UANE',
                'Universidad Carolina',
                'CANACO Monclova',
                'Asociaci??n C??vica de la Laguna',
                'Fundaci??n Merced',
                'AIDH',
                'CANACO Francisco I.Madero',
                'INCIDE FEMME',
                'KYBERNUS COAHUILA',
                'CCI LAGUNA',
                'J??VENES L??DERES DE LA LAGUNA',
                'ANADE LAGUNA',
                'COPARMEX MUJERES'
            ]

        }

    }
}
</script>

<style lang="scss" scoped>

    </style>

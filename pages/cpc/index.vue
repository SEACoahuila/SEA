<template>
    <v-container>

        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1  text-h3 ">{{ page.title }}</div>

                </v-alert>

                <v-card class="mt-10 pa-5" color="article">
                    <v-row class="mt-5" v-for="(e, index) in page.presentacion" :key="index">
                        <v-col align="center" justify="center">
                            <v-card-title align-self="center" class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> {{ e.titulo }}</div>
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
                        <v-col cols="12" md="4" sm="12" v-for="(i, index) in integrantes" :key="index">
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

                        <p class="text-h5">Misión:</p>
                        <p>Ser un instrumento de participación que facilite involucrar a la ciudadanía en los asuntos de
                            interés
                            público, al impulsar proyectos que permitan reforzar las acciones de combate y prevención de
                            la
                            corrupción</p>

                        <p class="text-h5">Visión:</p>
                        <p>Ser una red ciudadana reconocida por su capacidad para incidir en las decisiones sobre
                            asuntos públicos
                            conservando su carácter ciudadano, apartidista y libre de intereses ajenos a su propósito
                        </p>

                    </v-card-text>

                    <v-card-text align="center" class="pa-6">

                        <p class="text-h5">Formulario de registro para Redes de Organizaciones de Sociedad Civil</p>

                        <p class="text-justify">La Red de Participación Ciudadana Anticorrupción (RPC) está integrada
                            por
                            organismos, instituciones, colegios, grupos ciudadanos e individuos interesados en
                            consolidar la
                            participación ciudadana en el combate a la corrupción mediante el uso de herramientas y
                            metodologías
                            adecuadas. Su principal finalidad es la de transversalizar e implementar la política estatal
                            anticorrupción, enfocandose en mecanismos de capacitación, la escucha activa y el impulso de
                            iniciativas
                            nacidas de la sociedad civil organizada en favor de la lucha anticorrupción.

                        </p>
                        <p>Si te interesa colaborar con CPC activamente en los proyectos estratégicos y/o formar parte
                            de la RPC
                            (Red de Participación Ciudadana) te invitamos a llenar este formato y en breve un consejero
                            se
                            comunicará contigo.

                        </p>
                        <v-btn block elevation="3" :color="page.color" dark href="https://forms.gle/bSVMAxGydghpYWUx5">
                            Registrese
                            Aquí </v-btn>
                    </v-card-text>
                    <v-divider class="ma-8"></v-divider>
                    <v-card-text align="center">
                        <p class="text-h5">ANTEPROYECTO</p>
                        <a href="https://www.cpccoahuila.org.mx/_nuxt/img/lineas-estrategicas.88788db.pdf">
                            <v-img max-width="450" :src="require('@/static/img/' + 'plan.jpg')"></v-img>
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

                        <p class="text-h5 justify-center" align="center">Integrantes de la Red de Participación
                            Ciudadana</p>

                        <v-timeline v-for="(i, index) in integrantesRed" :key="index">
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
                            <v-divider class="mb-5"></v-divider>
                            <v-card-actions class="justify-center">
                                <v-row justify="center">
                                    <div v-for="(e, i) in planes" :key="i" class="pa-2">
                                        <v-btn v-if="e.src" :href="require('@/static/cpc/' + e.src)">{{ e.year
                                            }}</v-btn>
                                        <v-btn v-if="e.to" :href="e.to">{{ e.year }}</v-btn>
                                    </div>
                                </v-row>



                            </v-card-actions>
                            <v-divider class="mt-5"></v-divider>
                        </v-col>

                        <v-col aling="center" justify="center" cols="12">

                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> Informes / Declaraciones</div>
                            </v-card-title>
                            <v-divider class="mb-5"></v-divider>
                            <v-card-actions class="justify-center">
                                <!-- :href="require('@/pages/transparencia/art20/' + e.src)" -->
                                <v-row justify="center">
                                    <v-btn class="ma-2" v-for="(e, i) in informes" :key="i" :href="e.src" label color=""
                                        max-width="100%">{{ e.text }}</v-btn>
                                </v-row>
                            </v-card-actions>
                            <v-divider class="mt-5"></v-divider>
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
                    titulo: 'Misión',
                    texto: 'Coordinar la participación de la ciudadanía, la academia y el sector privado e impulsar políticas públicas y acciones encaminadas a combatir la corrupción en concordancia con el sistema anticorrupción del estado de Coahuila.'
                },
                {
                    titulo: 'Visión',
                    texto: 'Ser la instancia que refleje la perspectiva ciudadana con respecto al combate a la corrupción garantizando su incidencia en la agenda pública y contribuyendo en la consolidación del sistema anticorrupción del estado de Coahuila.'
                },
                {
                    titulo: 'Facultades',
                    texto: 'El CPC tiene las facultades de proponer políticas anticorrupción, metodologías e indicadores de evaluación y, sobretodo, vigilar el funcionamiento del Sistema Estatal Anticorrupción. Es por esto que debe trabajar en conjunto con el Comité Coordinador y el Secretario Técnico para la integración del componente ciudadano en la conformación de los informes, recomendaciones y políticas públicas que se consideren necesarias para el buen funcionamiento del Sistema.'
                }

                ]
            },

            // Termina page

            informes: [
                {
                    text: 'Informes anuales de resultados',
                    src: 'https://www.cpccoahuila.org.mx/transparencia/CPC-7'
                },
                {
                    text: 'Declaracion 3 de 3',
                    src: 'https://www.cpccoahuila.org.mx/transparencia/CPC-6'
                },


            ],

            planes: [{
                year: 'Plan de Comunicación',
                src: 'plan-de-comunicacion-cpc.pdf'
            },
            {
                year: '2024-2025',
                to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FlzWpOqQLrhKNTDAec7Vy%2FCPC%202024-25%20(1)%20(2).pdf?alt=media&token=9a51c5ad-b9ec-419d-93a4-3a97326bb6b2'
            },
            {
                year: '2023-2024',
                to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FlzWpOqQLrhKNTDAec7Vy%2FPrograma%20anual%20CPC%202023%202024.pdf?alt=media&token=6497eef6-a382-4211-ae66-8baa1a81a059'
            },
            {
                year: '2022-2023',
                to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/2lIvc2aFyVqrZZw4fJGI%2FYFHlnCOlgSnI90J1wDAs%2Fprograma-anual-cpc-23.pdf?alt=media&token=7501db05-06af-4708-9b8f-7d522b14671a'
            },
            {
                year: '2021-2022',
                to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/2lIvc2aFyVqrZZw4fJGI%2FYFHlnCOlgSnI90J1wDAs%2Fprograma-anual-cpc-22.pdf?alt=media&token=e238731f-1d3d-4c2d-833d-043869fbe9bf'
            },
            {
                year: '2020-2021',
                src: 'plan-de-trabajo-cpc-2020.pdf'
            },
            {
                year: '2019-2020',
                src: 'plan-de-trabajo-cpc-2019.pdf'
            },
            {
                year: '2018-2019',
                to: 'https://www.cpccoahuila.org.mx/_nuxt/img/plan-de-trabajo-cpc-2018.e9efde5.pdf'
            },

            ],
            integrantes: [
               
                {
                    nombre: 'Juan Carlos Guzmán Escobedo',
                    cargo: 'Consejero Presidente del Consejo de Participación Ciudadana.',
                    foto: 'cpc-jcge.jpg',
                    img: 'cc-cpc.png',
                    mail: 'carlos.guzman@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Karla Ivonne Natividad González',
                    cargo: 'Consejera del Consejo de Participación Ciudadana.',
                    foto: 'cpc-king.png',
                    img: 'cc-cpc.png',
                    mail: 'karla.natividad@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Carlos Antonio Franco Flores',
                    cargo: 'Consejero del Consejo de Participación Ciudadana.',
                    foto: 'cpc-caff.png',
                    img: 'cc-cpc.png',
                    mail: 'carlos.franco@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Diana Marisol Flores Rivera',
                    cargo: 'Consejera del Consejo de Participación Ciudadana.',
                    foto: 'cpc-dmfr.png',
                    img: 'cc-cpc.png',
                    mail: 'diana.flores@cpccoahuila.org.mx'
                },


            ],
            integrantesRed: [
                'UANE',
                'Universidad Carolina',
                'CANACO Monclova',
                'Asociación Cívica de la Laguna',
                'Fundación Merced',
                'AIDH',
                'CANACO Francisco I.Madero',
                'INCIDE FEMME',
                'KYBERNUS COAHUILA',
                'CCI LAGUNA',
                'JÓVENES LÍDERES DE LA LAGUNA',
                'ANADE LAGUNA',
                'COPARMEX MUJERES'
            ]

        }

    }
}
</script>

<style lang="scss" scoped></style>

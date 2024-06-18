<template>
    <v-container>

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3  text-h4 ">{{ page.title }}</div>

                </v-alert>


                <!--  STEP = 2 Inicio de  PEAC que es -->
                <v-card class="mt-3 mb-3" color="peac">
                    <v-col aling="center" justify="center">
                        <v-row justify="center" align="center" class="mt-5">

                            <v-col cols="12" align="center">

                            </v-col>
                            <v-col cols="12" lg="8" sm="12" v-for="(e, i) in btnitem" :key="i">

                                <v-card class="pa-2 mb-10 mx-auto text-justify" tile color="article">
                                    <v-row align="center">
                                        <v-col cols="12" lg="12" sm="12" align="center" justify="center">

                                            <h2> {{ e.title }}</h2>
                                            <v-card-subtitle class="text-justify">
                                                {{ e.desc }}
                                            </v-card-subtitle>
                                            <v-card-subtitle class="text-justify">
                                                {{ e.desc2 }}
                                            </v-card-subtitle>
                                            <v-divider></v-divider>

                                            <v-btn x-small dark color="#D09286"
                                                href="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FhydCDe7h1EAolvzP0tq0%2FAnexo%204.pdf?alt=media&token=a4afdcd9-4fc8-4a74-8347-bcd13ea7a0da">ANEXO 4</v-btn>
                                            <span>--</span>
                                            <v-btn x-small dark color="grey darken-3"
                                                href="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FhydCDe7h1EAolvzP0tq0%2FAnexo%205.pdf?alt=media&token=9c4d7735-0d8b-4b0d-8282-cc18adda43da">ANEXO 5</v-btn>

                                        </v-col>

                                    </v-row>
                                </v-card>

                            </v-col>

                            <v-col cols="12" lg="8" sm="12" v-for="(e, i) in btnitem2" :key="i">

                                <v-card class="pa-2 mb-10 mx-auto text-justify" tile color="article">
                                    <v-row align="center">
                                        <v-col cols="12" lg="12" sm="12" align="center" justify="center">

                                            <h2> {{ e.title }}</h2>
                                            <v-card-subtitle class="text-justify">
                                                {{ e.desc }}
                                            </v-card-subtitle>
                                            <v-card-subtitle class="text-justify">
                                                {{ e.desc2 }}
                                            </v-card-subtitle>
                                            <v-divider></v-divider>

                                            <v-btn x-small dark color="#D09286"
                                                href="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FhydCDe7h1EAolvzP0tq0%2FResultados%20Principales%202023.pdf?alt=media&token=6da1bc00-3665-4372-a165-e63e8bb7a604">RESULTADOS PRICIPALES</v-btn>
                                            <span>--</span>
                                            <v-btn x-small dark color="grey darken-3"
                                                href="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FhydCDe7h1EAolvzP0tq0%2FEstudio%20Experiencias%20de%20la%20corrupción%20en%20los%20habitantes%20del%20Estado%20de%20Coahuila.pdf?alt=media&token=b44584cf-0e94-442f-b433-7b61f2025951">ESTUDIO COMPLETO</v-btn>

                                        </v-col>

                                    </v-row>
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
                color: '#D09286',
                title: 'Percepción de la corrupción',
                icon: 'mdi-head-dots-horizontal'
            },

            btnitem: [{
                title: '2019:',
                desc: 'Encuesta Estatal de Percepción de Corrupción y Cultura de la Legalidad 2019',
                desc2: 'Documentos que forman parte de la Política Estatal Anticorrupción con el objetivo de medir la percepción de corrupción y la cultura de la legalidad en Coahuila',
                link: '/peac'
            },

            ],
            btnitem2: [{
                title: '2023:',
                desc: 'Estudio Percepción y Experiencias de la Corrupción en los habitantes del estado de Coahuila 2023.',
                desc2: 'Documentos que dan seguimiento a la encuesta que se utilizó para medir la percepción de los Coahuilenses en el año 2019 para la elaboración de la Política Estatal Anticorrupción Coahuila',
                link: '/peac'
            },
            ]



        }

    },
}
</script>

<style lang="scss" scoped></style>
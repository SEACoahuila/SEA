<template>
    <v-container class="min-height-vh ">

        <v-row>
            <v-col justify="center" align="center" cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3  text-h4">{{ page.title }}</div>

                </v-alert>




            </v-col>
            <v-col cols="12" lg="9" class="pa-0">
                <v-card class="mt-4 pa-5" color="article" height="100%">
                    <v-row class="mt-5" v-for="(e, i) in page.presentacion" :key="i">
                        <v-col align="center" justify="center">
                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> {{ e.titulo }}</div>
                            </v-card-title>

                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="12" md="8" sm="12">

                            <p align="center" justify="center" class="text-justify">
                                {{ e.texto }}
                            </p>

                        </v-col>

                    </v-row>

                </v-card>
            </v-col>

            <v-col cols="12" lg="3">

                <v-card class="mt-4 pa-8" color="article" height="100%">
                    <div align="center" class="mb-5 text-xl-h3 text-md-h4  text-h5">Valores</div>
                    <v-divider class="mb-3"></v-divider>
                    <v-row align="center" justify="center" v-for="(e, index) in Valores" :key="index">
                        <v-col align="center" cols="12" justify="center">
                            <!-- <v-card-title align-self="center" class="justify-center"> -->
                            <div class=""> {{ e.valor }}</div>
                            <!-- </v-card-title> -->

                        </v-col>
                        <!-- <v-divider vertical></v-divider>
                        <v-col cols="12" md="8" align-self="center">

                            <p align-self="center" class="text-justify">
                                {{ e.texto }}
                            </p>
                    
                        </v-col> -->



                    </v-row>

                </v-card>

            </v-col>


        </v-row>

        <v-card class="mt-10 pa-4" color="article">
            <v-row justify="center" align="center">


                <v-col aling="center" justify="center" cols="12">

                    <v-card-title class="justify-center">
                        <div class=" text-xl-h3 text-md-h3 text-h4 ">Otra Información</div>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-actions class="justify-center">
                        <v-row justify="center">
                            <v-col cols="12" v-for="(e, i) in documentos" :key="index" align="center">
                                

                                <v-btn v-if="e.src" class="ma-2"
                                    :href="require('@/static/secretaria-ejecutiva/' + e.src)">{{ e.titulo }}</v-btn>
                                <v-btn v-if="e.to" class="ma-6" :href="e.to">{{ e.titulo }}</v-btn>
                            </v-col>

                        </v-row>
                    </v-card-actions>

                </v-col>
            </v-row>

        </v-card>

       

    </v-container>
</template>

    
<script>
export default {
    name: 'sei',
    data() {
        return {
            page: {
                color: 'pink',
                title: 'Secretaría Ejecutiva',
                icon: 'mdi-cogs',
                presentacion: [{
                    titulo: 'Funciones',
                    texto: 'La Secretaría Ejecutiva tiene por objeto fungir como órgano de apoyo técnico del Comité Coordinador del Sistema Estatal, a efecto de proveerle la asistencia técnica, así como los insumos necesarios para el desempeño de sus atribuciones.'
                },
                {
                    titulo: 'Misión',
                    texto: 'Somos un organismo descentralizado de apoyo técnico al Comité Coordinador del Sistema Anticorrupción de Coahuila, que provee insumos necesarios para el diseño, ejecución y evaluación de políticas públicas en materia de prevención, reducción y combate a la corrupción, faltas administrativas y control de recursos públicos, a fin de dar respuestas efectivas a las exigencias de la sociedad coahuilense.'
                },
                {
                    titulo: 'Visión',
                    texto: 'Seremos un organismo ejemplo a nivel nacional en el diseño, implementación y evaluación de políticas públicas para la prevención, combate, reducción y erradicación de la corrupción, faltas administrativas y control de recursos públicos, generando un alto grado de confianza ciudadana, con un trabajo imparcial, profesional y efectivo.'
                },
                ],
            },
            Valores: [
                {
                    valor: 'Transparencia',
                    texto: ' Implica actuar con rectitud y decoro en el desempeño de las facultades que la Ley otorga a quienes integran el CPC, correspondiendo con creces a la confianza otorgada.',
                },
                {
                    valor: 'Honestidad',
                    texto: ' Conlleva la necesaria alineación de los actos individuales con las aspiraciones del CPC y del Sistema Anticorrupción.',
                },
                {
                    valor: 'Imparcialidad',
                    texto: ' Refiere a la firme decisión de poner al servicio del CPC y del Sistema Anticorrupción, las competencias, conocimientos y habilidades de que dispone cada integrante y dedicando su tiempo efectivo a la implementación de acciones destinadas a prevenir actos de corrupción.',
                },
                {
                    valor: 'Autonomía',
                    texto: ' Señala la férrea voluntad para no escatimar esfuerzos en el cumplimiento de las facultades y atribuciones que por Ley tienen quienes integran el CPC acorde a su conformación como grupo multidisciplinario.',
                },
                {
                    valor: 'Integridad',
                    texto: ' Indica el esfuerzo indispensable que tienen que realizar quienes integran el CPC para comprender las distintas perspectivas ciudadanas con relación al fenómeno de la corrupción, sus causas, efectos y costos.',
                },
                {
                    valor: 'Responsabilidad',
                    texto: ' Supone la madurez para reconocer las consecuencias de cada decisión tomada y cada acción realizada, así como también de las omisiones por parte de cada integrante del CPC.',
                },
                {
                    valor: 'Compromiso Social',
                    texto: ' Implica la disposición para colaborar de manera decidida con la labor del resto de los integrantes del CPC, de las entidades que conforman el Sistema Anticorrupción y de la sociedad en su conjunto.',
                },
                {
                    valor: 'Objetividad',
                    texto: ' Apunta a la necesidad de empatar la acción, individual y colectiva, con el discurso, con el fin de elevar la efectividad y la incidencia del CPC y del Sistema Anticorrupción al que pertenecen.',
                },


            ],
            documentos: [
                {
                    titulo: 'Monitoreo Legislativo',
                    to: 'https://www.seacoahuila.org.mx/SE/monitoreo-legislativo/',
                },
                {
                    titulo: 'Sistema de Gestión Antisoborno',
                    to: "https://www.seacoahuila.org.mx/SE/sga/",
                },




            ]
        }

    }
}
</script>

    
<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>

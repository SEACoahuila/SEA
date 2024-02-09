<template>
    <v-container>

        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-h4 text-xl-h1 text-md-h3 ">{{ page.title }}</div>

                </v-alert>


            </v-col>
        </v-row>

        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
                <v-card :color="item.color" dark>
                    <v-card-title class="text-h6">
                        <div class=" text-xl-h4 text-md-h5"> {{ item.titulo }}</div>
                    </v-card-title>
                    <v-card-text class="white text--primary">
                        <br>
                        <p align="center" class="text-justify">{{ item.texto }}</p>
                        <p align="center" class="text-justify">{{ item.texto2 }}</p>
                        <div v-if="item.doc">
                            <v-btn elevation="3" :color="item.color" class="mx-0" outlined
                                :href="require('@/static/secretaria-ejecutiva/material-capacitaciones/' + item.doc)">
                                Descarga material</v-btn>
                        </div>
                        <div v-if="item.to">
                            <v-btn elevation="3" :color="item.color" class="mx-0" outlined :href="item.to">
                                Formulario en línea aquí</v-btn>
                        </div>
                    </v-card-text>

                </v-card>


            </v-timeline-item>
        </v-timeline>

        <v-divider></v-divider>



        <v-col cols="12">

            <v-card class="mx-auto mb-3" max-width="">
                <v-img :position="center"
                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FFolletos%20Sistema%20de%20Gesti%C3%B3n%20Antisobornos%20.png?alt=media&token=d2292181-788d-4f7d-aa1e-20be0e8c4f9f"
                    height=""></v-img>
            </v-card>
            <v-card class="mx-auto mb-3" max-width="">
                <v-img :position="center"
                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FObjetivos%20Antisoborno.png?alt=media&token=cc9d3878-c4e9-45df-a38a-e94198c2d3e7"
                    height=""></v-img>
            </v-card>
            <v-card color="sga">

                <v-card-title class=" justify-center">
                    <div class=" text-xl-h3 text-md-h4 mt-5">
                        <v-icon large>mdi-web</v-icon>SGA
                    </div>
                </v-card-title>
                <v-divider></v-divider>



                <v-card-text align="center" class="pa-6">

                    <p class="text-h5">Denuncia Antisoborno:</p>

                    <p class="text-justify">


                    </p>
                    <p class="text-justify">En el marco de nuestro compromiso con la transparencia y la ética a través de
                        este
                        canal de denuncias antisoborno bajo la normativa ISO refleja la firme determinación de la Secretaría
                        Ejecutiva del Sistema Anticorrupción del Estado de Coahuila (SESAEC), en erradicar
                        cualquier forma de corrupción y promover un ambiente de integridad.

                        La norma ISO en materia antisoborno establece estándares rigurosos para la prevención,
                        detección y respuesta a actos ilícitos. Este apartado se presenta como un componente
                        esencial de nuestro Sistema de Gestión Antisoborno, proporcionando canales
                        especializados y accesibles para que tanto el personal interno como las partes interesadas
                        externas puedan denunciar posibles actos de soborno de manera confidencial y segura.

                        A través de este canal de denuncia, reforzamos nuestro compromiso con la creación de un
                        entorno organizacional transparente y responsable, donde la denuncia de irregularidades no
                        solo sea aceptada, sino fomentada y protegida.

                    </p>


                </v-card-text>
                <v-divider class="ma-8"></v-divider>


            </v-card>
        </v-col>


        <v-divider class="ma-8"></v-divider>


    </v-container>
</template>

<script>
export default {
    name: 'SGA',
    data() {
        return {
            page: {
                color: '#D9AB2A',
                title: 'Sistema de Gestión Antisoborno',
                icon: 'mdi-web',

            },

            material: 'material_capacitacion_externa.pdf',

            items: [
                {
                    color: '#795A2F',
                    titulo: 'Material de capacitación',
                    texto: 'Para dar cumplimiento a los requisitos del Sistema de Gestión Antisoborno se deben de conocer los siguientes conceptos.',
                    doc: 'material_capacitacion_externa.pdf',
                    icon: 'mdi-human-male-board-poll',
                },

                {
                    color: '#596F51',
                    titulo: 'Denuncia Antisoborno',
                    texto: 'Para facilitar la denuncia de posibles actos de soborno, hemos implementado un canal en línea seguro y confidencial. Invitamos a todos los empleados y partes interesadas a utilizar este formulario para informar cualquier conducta sospechosa o irregular que pueda viola nuestra Política Antisoborno.',
                    texto2: 'Tu contribución es esencial para mantener la integridad de la SESAEC. Aseguramos la confidencialidad de la información proporcionada, y tomaremos medidas rigurosas para abordar cada denuncia de manera justa y objetiva.',
                    to: "https://forms.gle/17YLoEMcogwKdhKg8",
                    icon: 'mdi-text-box-multiple-outline',
                },
            ],



        }

    }
}
</script>

<style lang="scss" scoped></style>

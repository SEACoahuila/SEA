<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-h4 text-xl-h2 text-md-h3 ">{{ page.title }}</div>

                </v-alert>

                <v-card-text class="white text--primary">
                    <p align="center" class="text-md-h6 texto-negrita"> ¿Qué es el Control y Desempeño Institucional
                        (COCODI)? </p>
                    <p align="center" class="text-md-h7"> El COCODI evalúa el desempeño institucional para apoyar la
                        toma de decisiones estratégicas. Supervisa el avance de objetivos, revisa auditorías, valida la
                        cuenta pública y da seguimiento al programa de ética.</p>
                </v-card-text>


            </v-col>
        </v-row>

        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
                <v-card :color="item.color" dark>
                    <v-card-title class="text-h6">
                        <div class=" text-xl-h6 text-md-h6"> {{ item.titulo }}</div>
                    </v-card-title>
                    <v-card-text class="white text--primary">
                        <br>
                        <p align="center" class="text-justify text-md-h7 texto-negrita">{{ item.texto }}</p>

                        <div><v-btn v-if="item.doc" :color="item.color" class="mx-0" outlined
                                :href="require('@/static/secretaria-ejecutiva/material-capacitaciones/' + item.doc)">{{
                                    item.nombre }}</v-btn>
                            <v-btn v-if="item.to" :color="item.color" class="ma-2 text-md-h7" outlined
                                :href="item.to">{{
                                    item.nombre
                                }}</v-btn>
                        </div>
                    </v-card-text>
                </v-card>

            </v-timeline-item>
        </v-timeline>

        <v-card class="mt-10 pa-4" color="article">
            <v-row justify="center" align="center">

               <v-col aling="center" justify="center" cols="12">

                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h3 text-h4 mb-5">Actas</div>
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


        <v-row justify="end" class="mt-4 mb-6">
            <v-btn color="#58609F" outlined class="text-md-h7" :to="'/SE/ciye'">
                <v-icon left>mdi-arrow-left</v-icon>
                Volver
            </v-btn>
        </v-row>

        <v-divider></v-divider>



    </v-container>
</template>

<script>
export default {
    data: () => ({

        page: {
            color: '#77825e',
            title: 'Comité de Control y Desempeño Institucional (COCODI)',
            icon: 'mdi-sort-bool-descending-variant',

        },


        items: [
            //{
            //    color: '#58609F',
            //    titulo: 'Directorio del Subcomité de Hostigamiento Sexual y Acoso Sexual',
            //    nombre: 'Ver',
            //    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F08%20Directorio%20del%20Subcomit%C3%A9%20de%20Hostigamiento%20Sexual%20y%20Acoso%20Sexual..pdf?alt=media&token=40aa3d58-eaa8-4c44-bf07-eac1797e8392",
            //    icon: 'mdi-star',
            //},

        ],

        seccionActas: [

                {
                    titulo: '2025',
                    actas: [
                        {
                            nombre: 'Sesión de Instalación',
                            link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FSesi%C3%B3n%20de%20instalaci%C3%B3n%20del%20COCODI.pdf?alt=media&token=e23460f0-5f6c-4a6e-b5c0-e7425c5bbd93',
                        },
                        {
                            nombre: 'Primera Sesión',
                            link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FPrimera%20Sesi%C3%B3n%20ordinaria%20COCODI.pdf?alt=media&token=de83f40c-4abe-48f4-871a-8c06702d4712',
                        },
                        

                    ]
                },
            ],
             


    }),
}
</script>

<style scoped>
.page {
    padding: 1rem;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #2c3e50;
}

h1 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
}

.texto-negrita {
    font-weight: bold;
}
</style>
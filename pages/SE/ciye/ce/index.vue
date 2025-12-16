<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-h4 text-xl-h2 text-md-h3 ">{{ page.title }}</div>

                </v-alert>

                <v-card-text class="white text--primary">
                    <p align="center" class="text-md-h6 texto-negrita"> ¿Qué es el Comité de Ética? </p>
                    <p align="center" class="text-md-h7"> El CE promueve la cultura de integridad en la institución.
                        Difunde valores, vigila la conducta del personal, previene prácticas no éticas, actualiza el
                        Código de Conducta y reporta faltas a la OIC.</p>
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
            title: 'Comité de Ética',
            icon: 'mdi-scale-balance',

        },
        items: [
            {
                color: '#58609F',
                titulo: 'Código de ética',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F04%20C%C3%B3digo%20de%20%C3%A9tica%20Coahuila.pdf?alt=media&token=936958fc-9398-4157-8088-dbca156957e6",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Integrantes del Comité de ética',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F05%20Integrantes%20del%20Comit%C3%A9%20de%20%C3%A9tica.pdf?alt=media&token=b7a9b3f0-6520-4470-af8b-4e0431262fb1",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Manual de procedimientos para la operación del comité de ética',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F06%20Manual%20de%20procedimientos%20para%20la%20operaci%C3%B3n%20del%20comit%C3%A9%20de%20%C3%A9tica.pdf?alt=media&token=82c0caa9-2e15-4e46-b80d-f1d98a630214",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Formato de denuncia ética',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F07%20Formato%20de%20denuncia%20%C3%A9tica.xlsx?alt=media&token=8d7b9401-8f2d-4ca5-85e7-1938fae38873",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Anexo 14 Formato de presentación de una duda.',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FANEXO%2014%20FORMATO%20DE%20PRESENTACI%C3%93N%20DE%20UNA%20DUDA.docx?alt=media&token=90a6728c-3b0d-4e4b-adaa-5b1cea2b844b",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'ANEXO 8 PROGRAMA DE TRABAJO DE INTEGRIDAD PTI F-017',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FANEXO%208%20%20PROGRAMA%20DE%20TRABAJO%20DE%20INTEGRIDAD%20PTI%20F-017.pdf?alt=media&token=54b3ae69-d8c8-4d78-9b68-a18ff894a0b7",
                icon: 'mdi-star',
            },


            {
                color: '#58609F',
                titulo: 'Correo electrónico para denuncias éticas',
                texto: 'comite.etica@seacoahuila.org.mx',
                icon: 'mdi-star',
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
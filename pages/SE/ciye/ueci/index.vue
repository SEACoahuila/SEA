<template>
    <v-container>

        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-h4 text-xl-h2 text-md-h3 ">{{ page.title }}</div>

                </v-alert>
                <v-card-text class="white text--primary">
                    <p align="center" class="text-md-h6 texto-negrita"> ¿Qué es la Unidad Especializada de Control
                        Interno? </p>
                    <p align="center" class="text-md-h7"> La UECI coordina el sistema de control interno de la
                        institución. Se encarga de definir la base
                        documental, evaluar riesgos, verificar el cumplimiento normativo.</p>
                </v-card-text>

            </v-col>

        </v-row>
        <br></br>

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
            title: 'Unidad Especializada de Control Interno',
            icon: 'mdi-order-bool-ascending-variant',

        },

        items: [
            {
                color: '#58609F',
                titulo: 'Carta compromiso',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F01%20Carta%20Compromiso.pdf?alt=media&token=c8631a77-f240-4056-ae86-9799c52dad5d",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Integrantes de la Unidad Especializada de Control Interno (UECI)',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F02%20Integrantes%20de%20la%20Unidad%20Especializada%20de%20Control%20Interno.pdf?alt=media&token=42e7852d-cbf9-45fc-9dee-eff9261aef36",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Integrantes del Comité de Control y Desempeño Institucional. (COCODI)',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F03%20Integrantes%20del%20Comit%C3%A9%20de%20Control%20y%20Desempe%C3%B1o%20Institucional.%20(COCODI)..pdf?alt=media&token=03d0cf2f-44de-4b2a-97eb-1a882b08b2a9",
                icon: 'mdi-star',
            },

            {
                color: '#58609F',
                titulo: 'Anexo 3 F-DAD-065 Programa anual de trabajo de control interno PTCI',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FAnexo%203%20F-DAD-065%20Programa%20anual%20de%20trabajo%20de%20control%20interno%20PTCI.pdf?alt=media&token=91498b5d-1fed-475e-b1d7-ed73648999b5",
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
<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-h4 text-xl-h2 text-md-h3 ">{{ page.title }}</div>

                </v-alert>

                <v-card-text class="white text--primary">
                    <p align="center" class="text-md-h6 texto-negrita"> ¿Que es el Subcomité de Hostigamiento y Acoso
                        Sexual? </p>
                    <p align="center" class="text-md-h7"> Este Subcomité atiende denuncias de hostigamiento y acoso
                        sexual. Brinda atención inicial, verifica requisitos, integra expedientes, los turna a la
                        autoridad competente y registra todos los casos para seguimiento institucional.</p>
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
            title: 'Subcomité de Hostigamiento Sexual y Acoso Sexual',
            icon: 'mdi-account-group',

        },


        items: [
            {
                color: '#58609F',
                titulo: 'Directorio del Subcomité de Hostigamiento Sexual y Acoso Sexual',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F08%20Directorio%20del%20Subcomit%C3%A9%20de%20Hostigamiento%20Sexual%20y%20Acoso%20Sexual..pdf?alt=media&token=40aa3d58-eaa8-4c44-bf07-eac1797e8392",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Anexo 1, Vías para presentar la denuncia vía administrativa',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F09%20Anexo%201%2C%20V%C3%ADas%20para%20presentar%20la%20denuncia%20v%C3%ADa%20administrativa..jpeg?alt=media&token=63ef9777-ddbc-4a07-a1ea-7f47dc780484",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Anexo 2. Ruta para la atención del hostigamiento sexual y acoso sexual en la vía administrativa',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F10%20Anexo%202.%20Ruta%20para%20la%20atenci%C3%B3n%20del%20hostigamiento%20sexual%20y%20acoso%20sexual%20en%20la%20v%C3%ADa%20administrativa%2C.jpeg?alt=media&token=58fc9b49-46cd-4518-92d8-e61b07ce7fb5",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Formato de denuncia. Anexo 5',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FAnexo%205%20Formato%20de%20denuncia.docx?alt=media&token=1c3ce66a-6660-437f-8db3-4844dc7e2a3c",
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
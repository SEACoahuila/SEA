<template>
    <v-container>
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
                            <v-btn v-if="item.to" :color="item.color" class="ma-2 text-md-h7" outlined :href="item.to">{{
                                item.nombre
                                }}</v-btn>
                        </div>
                    </v-card-text>
                </v-card>

            </v-timeline-item>
        </v-timeline>

        <v-divider></v-divider>



    </v-container>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                color: '#58609F',
                titulo: '01 Carta compromiso',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F01%20Carta%20Compromiso.pdf?alt=media&token=c8631a77-f240-4056-ae86-9799c52dad5d",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: '02 Integrantes de la Unidad Especializada de Control Interno (UECI)',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F02%20Integrantes%20de%20la%20Unidad%20Especializada%20de%20Control%20Interno.pdf?alt=media&token=42e7852d-cbf9-45fc-9dee-eff9261aef36",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: '03 Integrantes del Comité de Control y Desempeño Institucional. (COCODI)',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F03%20Integrantes%20del%20Comit%C3%A9%20de%20Control%20y%20Desempe%C3%B1o%20Institucional.%20(COCODI)..pdf?alt=media&token=03d0cf2f-44de-4b2a-97eb-1a882b08b2a9",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: 'Correo electrónico para denuncias',
                texto: '@seacoahuila.org.mx',
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
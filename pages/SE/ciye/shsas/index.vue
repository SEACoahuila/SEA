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
                titulo: '08 Directorio del Subcomité de Hostigamiento Sexual y Acoso Sexual',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F08%20Directorio%20del%20Subcomit%C3%A9%20de%20Hostigamiento%20Sexual%20y%20Acoso%20Sexual..pdf?alt=media&token=40aa3d58-eaa8-4c44-bf07-eac1797e8392",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: '09 Anexo 1, Vías para presentar la denuncia vía administrativa',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F09%20Anexo%201%2C%20V%C3%ADas%20para%20presentar%20la%20denuncia%20v%C3%ADa%20administrativa..jpeg?alt=media&token=63ef9777-ddbc-4a07-a1ea-7f47dc780484",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: '10 Anexo 2. Ruta para la atención del hostigamiento sexual y acoso sexual en la vía administrativa',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F10%20Anexo%202.%20Ruta%20para%20la%20atenci%C3%B3n%20del%20hostigamiento%20sexual%20y%20acoso%20sexual%20en%20la%20v%C3%ADa%20administrativa%2C.jpeg?alt=media&token=58fc9b49-46cd-4518-92d8-e61b07ce7fb5",
                icon: 'mdi-star',
            },
            {
                color: '#58609F',
                titulo: '11 Formato de denuncia',
                nombre: 'Ver',
                to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F11%20Formato%20de%20denuncia%20Hostigamiento%20o%20Acoso%20sexual.docx?alt=media&token=df375eae-3abe-41ed-9320-c819be7be7ec",
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
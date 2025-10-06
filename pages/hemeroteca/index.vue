<template>
    <v-container>

        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3  text-h3 ">{{ page.title }}</div>

                </v-alert>

            </v-col>
            <v-col cols="12">
                <v-card class=" pa-7 " color="article" cols="6">
                    <v-card-title> Objetivo</v-card-title>
                    <v-card-text align="center" justify="center" class="text-justify">
                        Azimut tiene el propósito de orientar la integración, el análisis
                        y la discusión de la amplia agenda que compete al Sistema Estatal Anticorrupción. En otras
                        palabras, con
                        esta publicación se pretende contribuir a la generación y consolidación de una
                        cultura eficaz de combate a la corrupción y sus consecuencias, poniendo sobre
                        la mesa, y a la vista de todos, los elementos necesarios para dicho propósito.

                    </v-card-text>

                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card class="pa-8" color="revista">
                    <div align="center" class="mb-8 text-xl-h2 text-md-h3 ">Revista</div>

                    <v-divider></v-divider>
                    <v-row>
                        <v-col v-for="(e, i) in page.revistas" :key="i">

                            <v-card class="mx-auto mt-5" max-width="356" dark color='#800040' shaped>
                                <v-img :src="require('@/pages/azimut/revistas/' + e.img)" height="500"></v-img>

                                <v-card-title>
                                    {{ e.titulo }}
                                </v-card-title>

                                <v-card-subtitle>
                                    {{ e.edicion }}
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn color="#f2e394" :href="require('@/pages/azimut/revistas/' + e.doc)" text
                                        download>
                                        Descargar
                                    </v-btn>
                                    <v-btn color="" :href="require('@/pages/azimut/revistas/' + e.doc)" text>
                                        Ver
                                    </v-btn>

                                </v-card-actions>

                            </v-card>
                        </v-col>

                    </v-row>
                </v-card>
                <v-divider></v-divider>

                <v-card class="pa-8" color="revista">
                    <div align="center" class="mb-8 text-xl-h2 text-md-h3 ">Colaboraciones</div>

                    <v-divider></v-divider>
                    <v-row>
                        <v-col v-for="(e, i) in page.colabs" :key="i">

                            <v-card class="mx-auto mt-5" max-width="356" dark color='#800040' shaped>
                                <v-img :src="require('@/pages/azimut/revistas/' + e.img)" height="500"></v-img>

                                <v-card-title>
                                    {{ e.titulo }}
                                </v-card-title>


                                <v-card-actions>
                                    <v-btn color="#f2e394" :href="e.to" text
                                        download >Descargar
                                    </v-btn>
                                    <v-btn color="" :href="e.to">
                                        Ver
                                    </v-btn>

                                </v-card-actions>

                            </v-card>
                        </v-col>

                    </v-row>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'azimut',
    data() {
        return {
            page: {
                color: 'pink',
                title: 'Publicaciones',
                icon: 'mdi-book-open-outline',
                revistas: [{
                    titulo: 'Brechas',
                    img: '04.png',
                    edicion: 'Edición 04',
                    doc: '04.pdf'
                },
                {
                    titulo: 'La Tragedia de los Comunes',
                    img: '03.jpg',
                    edicion: 'Edición 03',
                    doc: '03.pdf'
                },
                {
                    titulo: 'Género y Corrupción',
                    img: '02.jpg',
                    edicion: 'Edición 02',
                    doc: '02.pdf'
                },
                {
                    titulo: 'Construcción y consolidación',
                    img: '01.jpg',
                    edicion: 'Edición 01',
                    doc: '01.pdf'
                }

                ],

                colabs: [{
                    titulo: 'El derecho humano a una vida libre de corrupción',
                    img: 'dhvlc.png',
                    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FksXq4Cz4WUJ4TcRF2tDt%2Fel%20derecho%20humano%20a%20una%20vida%20libre%20de%20corrupcion.pdf?alt=media&token=bb173de5-40f8-4afb-9fd3-4b8c5b35c10a'
                },
                {
                    titulo: 'Diccionario prointegridad',
                    img: 'dp.png',
                    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FksXq4Cz4WUJ4TcRF2tDt%2FDiccionario-prointegridad-vf.pdf?alt=media&token=03b2f28d-adca-41bb-a772-5730471af115'
                },
               

                ],
            }

        }

    }
}
</script>

<style lang="scss" scoped></style>

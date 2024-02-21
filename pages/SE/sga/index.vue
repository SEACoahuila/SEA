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

                        <div><v-btn v-if="item.doc" :color="item.color" class="mx-0" outlined
                                :href="require('@/static/secretaria-ejecutiva/material-capacitaciones/' + item.doc)">{{
                                    item.nombre }}</v-btn>
                            <v-btn v-if="item.to" :color="item.color" class="ma-2" outlined :href="item.to">{{ item.nombre
                            }}</v-btn>
                        </div>
                        <div><v-btn v-if="item.doc2" :color="item.color" class="mx-0" outlined
                                :href="require('@/static/secretaria-ejecutiva/material-capacitaciones/' + item.doc2)">{{
                                    item.nombre2 }}</v-btn>
                            <v-btn v-if="item.to2" :color="item.color" class="ma-2" outlined :href="item.to2">{{
                                item.nombre2 }}</v-btn>
                        </div>
                    </v-card-text>

                </v-card>


            </v-timeline-item>
        </v-timeline>

        <v-divider></v-divider>

        <v-card color="sga">

            <v-card-title class=" justify-center">
                <div class=" text-xl-h3 text-md-h4 mt-5">
                    <v-icon large>mdi-web</v-icon>Denuncia Antisoborno
                </div>
            </v-card-title>
            <v-divider></v-divider>



            <v-card-text align="center" class="pa-6">



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

        <v-divider class="ma-8"></v-divider>

        <v-carousel v-model="model" height="950">
            <v-carousel-item v-for="(img, i) in imgs" :key="i">
               
                        <v-img :src="img.src"></v-img>
                    


            </v-carousel-item>
        </v-carousel>

        <v-col cols="12">

            <v-card class="mx-auto mb-3" max-width="">
                <v-img :position="center"
                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F2.png?alt=media&token=96b78c9b-cd55-44ba-b515-61af82f9fe51"
                    height=""></v-img>
            </v-card>
            <v-card class="mx-auto mb-3" max-width="">
                <v-img :position="center"
                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F5.png?alt=media&token=ee2235e4-c661-44fd-95ba-5a4c08d0b7e1"
                    height=""></v-img>
            </v-card>
            <v-card class="mx-auto mb-3" max-width="">
                <v-img :position="center"
                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F13.png?alt=media&token=da5c2fda-4028-444a-9176-d79bec740a76"
                    height=""></v-img>
            </v-card>
            <v-card class="mx-auto mb-3" max-width="">
                <v-img :position="center"
                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F14.png?alt=media&token=b16926e0-d91c-4236-bb94-cdac5477c32e"
                    height=""></v-img>
            </v-card>
            <v-card class="mx-auto mb-3" max-width="">
                <v-img :position="center"
                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F15.png?alt=media&token=7870dffc-5a5f-4258-9ec4-bebd61a3304f"
                    height=""></v-img>
            </v-card>
            <v-card class="mx-auto mb-3" max-width="">
                <v-img :position="center"
                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F16.png?alt=media&token=f946eae5-314b-47a4-89a6-2905959d8a08"
                    height=""></v-img>
            </v-card>
            <v-card class="mx-auto mb-3" max-width="">
                <v-img :position="center"
                    src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F17.png?alt=media&token=1d0165b8-eddf-4173-b7f2-c670d6b85530"
                    height=""></v-img>
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
                    nombre: 'Descarga material',
                    texto: 'Para dar cumplimiento a los requisitos del Sistema de Gestión Antisoborno se deben de conocer los siguientes conceptos.',
                    doc: 'material_capacitacion_externa.pdf',
                    icon: 'mdi-human-male-board-poll',
                },

                {
                    color: '#596F51',
                    titulo: 'Denuncia Antisoborno',
                    nombre: 'Formulario en línea aquí',
                    texto: 'Para facilitar la denuncia de posibles actos de soborno, hemos implementado un canal en línea seguro y confidencial. Invitamos a todos los empleados y partes interesadas a utilizar este formulario para informar cualquier conducta sospechosa o irregular que pueda viola nuestra Política Antisoborno.',
                    texto2: 'Tu contribución es esencial para mantener la integridad de la SESAEC. Aseguramos la confidencialidad de la información proporcionada, y tomaremos medidas rigurosas para abordar cada denuncia de manera justa y objetiva.',
                    to: "https://forms.gle/17YLoEMcogwKdhKg8",
                    icon: 'mdi-text-box-multiple-outline',
                },
                {
                    color: '#CB9C2A',
                    titulo: 'Políticas',
                    nombre: 'Política Antisoborno',
                    nombre2: 'Política de regalos, hospitalidad y beneficios',
                    texto: '',
                    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2FSESAEC-SGA-POL-CAL-01%20Política%20Antisoborno.pdf?alt=media&token=c6cc087a-b4fa-47bc-adf4-eee1012fe59e",
                    to2: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2FSESAEC-SGA-POL-CAL-02%20Política%20de%20Regalos%2C%20Hospitalidad%20y%20Beneficios.pdf?alt=media&token=80ffe549-ec09-47a2-8bcc-391734aa184d",
                    icon: 'mdi-book-open-variant-outline',
                },


            ],

            imgs: [

                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F2.png?alt=media&token=96b78c9b-cd55-44ba-b515-61af82f9fe51",
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F5.png?alt=media&token=ee2235e4-c661-44fd-95ba-5a4c08d0b7e1",
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F13.png?alt=media&token=da5c2fda-4028-444a-9176-d79bec740a76",
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F14.png?alt=media&token=b16926e0-d91c-4236-bb94-cdac5477c32e",
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F15.png?alt=media&token=7870dffc-5a5f-4258-9ec4-bebd61a3304f",
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F16.png?alt=media&token=f946eae5-314b-47a4-89a6-2905959d8a08",
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F17.png?alt=media&token=1d0165b8-eddf-4173-b7f2-c670d6b85530",
                },

            ],


        }

    }
}
</script>

<style lang="scss" scoped></style>

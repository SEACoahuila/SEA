

<template>
    <v-container class="min-height-vh">

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4">{{ page.title }}</div>

                </v-alert>

                <v-card class="mt-3 pa-10" color="article">
                    <v-col aling="center" justify="center">

                        <v-col align="center" class="mb-5 text-xl-h2 text-md-h3 ">Notas</v-col>
                        <v-divider></v-divider>
                       
                        
                        <v-row class="mt-3">

                            <v-card class="mx-auto mb-3" max-width="">
                               
                                <v-img :src="require('@/static/comunicados/capacitacion.jpg')" height=""></v-img>
                        
                                <v-card-title>
                                    Reciben municipios capacitación sobre la Política Estatal Anticorrupción
                                </v-card-title>

                                <v-card-subtitle>
                                    Saltillo, Coahuila a 29 de enero de 2024.- Los integrantes del Sistema Anticorrupción del Estado de Coahuila de Zaragoza concluyeron con éxito las reuniones de trabajo virtuales que abarcaron las cinco regiones del estado.
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn color="orange lighten-2" text href="publicaciones/capacitacion-municipios">
                                        Ver nota
                                    </v-btn>

                            

                              
                                </v-card-actions>

                                <!-- <v-card-actions> 
                                    <a :href="require('@/static/comunicados/boletin_gira.pdf')">
                                        <v-btn color="orange lighten-2"> Ver nota </v-btn>
                                    </a>

                              
                                </v-card-actions> -->

                            </v-card>
                            <v-card class="mx-auto mb-3" max-width="">
                                <v-img src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FImagen1.jpeg?alt=media&token=382e2de7-578f-4d00-b89b-fee09e7d131a" height=""></v-img>

                                <v-card-title>
                                    Refrendan su compromiso por la Justicia Abierta
                                </v-card-title>

                                <v-card-subtitle>
                                    WORLD JUSTICE PROJECT Y EL SISTEMA ANTICORRUPCIÓN DEL ESTADO DE COAHUILA COLABORARÁN PARA FORTALECER EL ACCESO A LA JUSTICIA Y LA PARTICIPACIÓN CIUDADANA
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn color="orange lighten-2" text href="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FBoletin1.jpeg?alt=media&token=1fe40c7b-fd13-4822-99f1-8228ed9d965b">
                                        Ver nota
                                    </v-btn>

                            

                              
                                </v-card-actions>

                            </v-card>
                       
                            
                        </v-row>
                         
                        <v-divider class="mt-8"></v-divider>



                    </v-col>
                    <v-col aling="center" justify="center">

                        <v-col align="center" class="mb-5 text-xl-h2 text-md-h3 ">Facebook</v-col>
                        <div class="powr-social-feed" id="a2eea91e_1674247401"></div>


                    </v-col>

                    <v-col aling="center" justify="center">
                        <div align="center" class="mb-5 text-xl-h2 text-md-h3 ">Twitter</div>
                        <div class="powr-social-feed" id="c1fd1c3c_1674248138"></div>

                    </v-col>

                </v-card>




            </v-col>
        </v-row>
    </v-container>
</template>
    
<script>
export default {
    name: 'publicaciones',

    metaInfo: {
        script: [
            { src: 'https://www.powr.io/powr.js?platform=html', async: true, defer: true },
            { src: 'https://www.powr.io/powr.js?platform=html', async: true, defer: true },
        ],
    },


    data() {
        return {
            page: {
                color: 'green lighten-2',
                title: 'Publicaciones',
                icon: 'mdi-comma-circle-outline'
            },

           
       
        }

    },
    mounted() {
        const recaptchaScript = document.createElement("script");
        recaptchaScript.setAttribute(
            "src",
            "https://www.powr.io/powr.js?platform=html"
        );
        document.head.appendChild(recaptchaScript);
    },
}
</script>
    
<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>
    
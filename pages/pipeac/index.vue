<template>
    <v-container>

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3  text-h4 ">{{ page.title }}</div>

                </v-alert>

                <!--  STEP = 2 Inicio de  PIEAC que es -->
                <v-card class="mt-3 mb-3" color="peac">
                    <v-col aling="center" justify="center">
                        <v-row justify="center" align="center" class="mt-5">

                            <v-col cols="12" align="center">

                            </v-col>
                            <v-col cols="12" lg="12" sm="12" v-for="(e, i) in btnitem" :key="i">

                                <v-card class="pa-2 mb-10 mx-auto text-justify" tile color="article">
                                    <v-row align="center">
                                        <v-col cols="12" lg="6" sm="12" align="center" justify="center">

                                            <h2> {{ e.title }}</h2>
                                            <v-card-subtitle class="text-justify">
                                                {{ e.desc }}
                                            </v-card-subtitle>
                                            <v-divider></v-divider>

                                            <v-btn x-medium dark color="#d69589"
                                                href="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FswfaOcLHsuCV2XHVVKDL%2FPIPEAC%202024.pdf?alt=media&token=59aab632-463f-4eb0-9fb7-8625c438182d">PIPEAC</v-btn>
                                           
                                           
                                        </v-col>

                                        <v-col cols="12" lg="6" sm="12">
                                            <nuxt-link :to="e.link">

                                                <v-hover>

                                                    <v-img slot-scope="{ hover }" v-if="hover"
                                                        :src="require('@/static/img/botonera/' + e.src2)">
                                                    </v-img>
                                                    <v-img v-else :src="require('@/static/img/botonera/' + e.src1)">
                                                    </v-img>

                                                </v-hover>
                                            </nuxt-link>
                                        </v-col>

                                    </v-row>
                                </v-card>

                            </v-col>

                        </v-row>
                    </v-col>

                </v-card>
                <!--  STEP = 3 Inicio de botones secundarios -->
                <v-card class="mt-3  pa-5">

                    <v-card-title class="justify-center">
                        <div class=" text-xl-h2 text-md-h4"> Datos</div>
                    </v-card-title>

                    

                    <v-card-title class="justify-center">
                        <div class=" text-xl-h2 text-md-h4"></div>
                    </v-card-title>

                    <v-col align="center" justify="center">
                        <v-row justify="center">
                            <v-col cols="12" md="3" xs="12" v-for="(e, i) in botonesSec" :key="i" align="center">
                                <v-card v-if="e.to" color="bluegreyt" :href="e.to">

                                    <v-card-actions class="justify-center">
                                        <v-avatar size="50" color="" tile>

                                            <img :src="require('@/pages/peac/icons/' + e.icon)" alt="alt">
                                        </v-avatar> {{ e.titulo }}
                                    </v-card-actions>

                                </v-card>
                                <v-card v-if="e.doc" color="bluegreyt" :href="require('@/static/peac/' + e.doc)">

                                    <v-card-actions class="justify-center">
                                        <v-avatar size="50" color="" tile>

                                            <img :src="require('@/pages/peac/icons/' + e.icon)" alt="alt">
                                        </v-avatar> {{ e.titulo }}
                                    </v-card-actions>

                                </v-card>
                            </v-col>

                            

                          

                        </v-row>


                    </v-col>

                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'peac',
    data() {
        return {
            page: {
                color: '#d69589',
                title: 'Programa de Implementación de la Política Estatal Anticorrupción Coahuila ',
                icon: 'mdi-dots-horizontal'
            },
          
           
            botonesSec: [
                

                {
                    titulo: 'Metodología para la PIPEAC',
                    icon: 'metodologia_pipeac.png',
                    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FhydCDe7h1EAolvzP0tq0%2FMetodología%20para%20la%20Implementación%20de%20la%20PEAC%20(3).pdf?alt=media&token=2e7559d5-f922-488f-91c6-a92d8695fa2f'
                },

            ],
            btnitem: [{
                title: '¿Qué es?:',
                desc: 'El Programa de Implementación de la Política Estatal Anticorrupción de Coahuila (PIPEAC), es el documento en el que se establecen las prioridades, objetivos, estrategias y líneas de acción que serán implementados por los entes públicos y particulares del estado de Coahuila de Zaragoza para dar cumplimiento a la PEAC.',
                src1: 'pipeac1.png',
                src2: 'pipeac2.png',
                link: '/pipeac'
            },

            ],
            
            

        }

    }, 
    
}
</script>

<style lang="scss" scoped></style>

<template>
    <v-container>

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{ page.title }}</div>
                    <div align="center" class="text-body-1">{{ page.sub }}</div>

                </v-alert>

                <v-card class="mt-3 ">

                    <v-col align="center" justify="center">
                        <v-row>
                            <v-col cols="12" md="4" xs="12" v-for="(e, i)  in botones" :key="i">
                                <v-card color="bluegreyt" :href="e.href">

                                    <v-card-actions class="justify-center">
                                        <v-avatar size="35" tile>

                                            <img :src="require('@/pages/sei/icons/' + e.icon)" alt="alt">
                                        </v-avatar> {{ e.titulo }}
                                    </v-card-actions>

                                </v-card>
                            </v-col>

                        </v-row>

                    </v-col>

                </v-card>

                <v-card color="peac" class="pa-5 mt-12">

                    <v-card-title class=" justify-center">
                        <div class=" text-xl-h4 text-md-h5 mt-5">
                            <v-avatar size="40" tile>

                                <img :src="require('@/pages/sei/icons/logo_SEI.png')" alt="alt">
                            </v-avatar>

                            Sistema Estatal de servidores públicos en contrataciones
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card-text align="center" class="pa-12">

                        <p class="text-h5">¿Qué es?:</p>
                        <p>Es un sistema que establece el mecanismo para que todas las dependencias y entidades de la
                            Administración Pública, identifiquen y clasifiquen el nivel de responsabilidad de los servidores
                            públicos que participan en los procedimientos de contratación. El objetivo es incrementar la
                            eficiencia de los procesos y procedimientos del sistema para que las instituciones puedan llevar
                            a cabo el desarrollo implementado, en tiempo y forma.</p>

                    </v-card-text>
                    <v-divider class="ma-8"></v-divider>
                    <v-card-text align="center" class="pa-6">

                        <p class="text-h5">Formato de pre-inscripción para incorporar el sistema dirigido las entidades
                            públicas del Estado</p>

                            <p class="text-justify">
                                Con la finalidad de establecer un canal directo, es necesaria la integración del sistema con
                                cada una de las instituciones de Coahuila. Las instituciones, a través de un servidor público
                                en cualquiera de sus áreas involucradas, como titulares de área, directivos, administrativos,
                                recursos humanos y cabildos, podrán acceder y llevar a cabo
                                el registro y seguimiento para incorporar a la institución en dichos procesos.
                            </p>
                            <p>Para instituciones públicas del estado de Coahuila interesadas en incorporar el sistema estatal
                                de servidores públicos en procesos de contratación, les invitamos a llenar este formato de
                                pre-registro.
                            </p>
                        <v-btn elevation="3" :color="page.color" dark href="https://docs.google.com/forms/d/e/1FAIpQLScKlik-KXfo5uvcO-5OMjcQBP0R4poGSWdG1lP6tquzxu6I_Q/viewform"> Registro de instituciones públicas</v-btn>
                    </v-card-text>

                </v-card>

                <v-card class="mt-3 mb-3" cr="peac">
                    <v-col aling="center" justify="center">
                        <v-row justify="center" align="center" class="mt-5">

                            <v-col cols="12" align="center">

                            </v-col>
                            <v-col cols="12" lg="8" sm="12" v-for="(e, i) in btnitem" :key="i">

                                <v-card class="pa-2 mb-10 mx-auto text-justify" tile color="article">
                                    <v-row align="center">
                                        <v-col cols="12" lg="6" sm="12" class="pa-8" align="center" justify="center">

                                            <h3> {{ e.title }}</h3>
                                            <v-card-subtitle class="text-justify">
                                                {{ e.desc }}
                                            </v-card-subtitle>
                                            <v-card-subtitle class="text-justify">
                                                {{ e.desc2 }}
                                            </v-card-subtitle>
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

                <v-card class="mt-10 pa-10" color="sei">
                    <v-col cols="12">
                       <div class=" text-xl-h2 text-md-h4"> Filtros </div>
                   </v-col>
                    <v-row>

                        <v-col cols="12" lg="5" align="center"> <v-select  v-model="IdDependencia" @input="traerInstituciones" label="Seleccionar Dependencia" variant="solo" :items="[{'Dependencia': 'Todas', 'IdDependencia': ''}].concat(allDependencias)" item-text='Dependencia'
                         item-value="IdDependencia"></v-select>
                        </v-col>
                        <v-col cols="12" lg="4" align="center"><v-select v-model="IdRamos" @input="traerInstituciones" label="Seleccionar Ramo" :items="itemsRamos"></v-select>
                        </v-col>
                        <v-col cols="12" lg="3"  align="center"><v-select v-model="EjercicioFiscal" @input="traerInstituciones" label="Seleccionar Ejercicio Fiscal" :items="itemsYears"></v-select>
                        </v-col>
                    </v-row>
                    
                    
              
                    

                </v-card>
                <v-card>
                    <v-card-title class="justify-center">
                        
                        <v-col cols="12" align="center">
                       <div class=" text-xl-h2 text-md-h4"> Datos </div>
                   </v-col>

                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line
                            hide-details></v-text-field>
                    </v-card-title>
                    <v-divider></v-divider>
                        <v-data-table :headers="headers" :items="servidores" :search="search" :loading='loading'>

                        </v-data-table>
                    </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
export default {

    name: 'servidores',
    data() {
        return {
            page: {
                color: 'pink darken-3',
                title: 'Servidores en Contrataciones',
                sub: 'Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas',
                icon: 'mdi-account-tie-outline'
            },
            IdDependencia: '',
            EjercicioFiscal: '',
            IdRamos:'',
            botones: [{
                titulo: 'Bases Plataforma Nacional Digital',
                icon: 'estandar de datos.png',
                href: 'https://www.plataformadigitalnacional.org/especificaciones/s2'
            },
            {
                titulo: 'Diccionario de datos',
                icon: 'datos abiertos.png',
                href: 'https://docs.google.com/spreadsheets/d/1fRhDfHtrBPYyR36zxpenXWind9FP1pLAQJOVS69QwUM/edit#gid=262781770'
            },
            {
                titulo: 'Log-In-Instituciones',
                icon: 'folder-account-outline.png',
                href: 'admin/'
            },

            ],
            btnitem: [{
                title: 'Servidores Públicos en Contrataciónes:',
                desc: 'Se basa en los servidores públicos que llevan una responsabilidad con los ciudadanos ya que intervienen en procedimientos como: -Contrataciones públicas -Tramite, atención y resolución de contratos. -Concesiones, licencias, permisos o autorizaciones.',
                desc2: 'Las contrataciones públicas son uno de los pilares de un buen gobierno. Estos procesos permiten que las instituciones adquieran bienes y servicios en beneficio de las personas. Es necesario conocer quiénes son los servidores públicos responsables de llevar correctamente los procesos del gobierno.',
                src1: 'sistema1.jpg',
                src2: 'sistema1.jpg',
                link: '/peac'
            },

            ],
            servidores: [],
            allDependencias: [],
            headers: [{
                text: 'Nombre',
                value: 'DatosServidor.Nombres',
                sortable: true,
                align: 'start',
            },
            {
                text: 'Primer Apellido',
                value: 'DatosServidor.PrimerApellido',
            },
            {
                text: 'Segundo Apellido',
                value: 'DatosServidor.SegundoApellido',
            },
            {
                text: 'Dependencia',
                value: 'Dependencium.Dependencia',
            },
            {
                text: 'Puesto',
                value: 'DatosServidor.Puesto.Puesto',
            },

            {
                text: 'Responsabilidad',
                value: 'NivelesResponsabilidad',
            },
            {
                text: 'Tipo de contrataciones',
                value: 'TipoProcedimiento',
            },
            {
                text: 'Ejercicio Fiscal',
                value: 'EjercicioFiscal',
            },
            {
                text: 'Ramo',
                value: 'Ramo.Ramo',
            },

            ],
            search: '',
            loading: true,
            itemsRamos: [
                {
                    text: 'Todos',
                    value: ""
                },
                {
                    text: 'Municipal',
                    value: "2"
                },
                {
                    text: 'Estatal',
                    value: "1"
                }
            ],
            itemsYears: [
            {
                    text: 'Todos',
                    value: ""
                },
                {
                    text: '2022',
                    value: "2022"
                },
                {
                    text: '2023',
                    value: "2023"
                }
            ],
            
        }

    }, // this.$axios.$post('https://pdncoah-6npsxhllvq-wl.a.run.app/Home/GetTabla?NombreTabla=Servidores&FechaIni=2021-01-01&FechaFin=2023-01-10')
    methods: {
        async traerInstituciones() {
            const _this = this;
            const queryData = {
                EjercicioFiscal: this.EjercicioFiscal,
                IdDependencia: this.IdDependencia,
                IdRamo: this.IdRamos
            }
            await axios.get(`${this.$store.state.URL}/api/servidores/public/`, { params: queryData })
                .then(res => {
                
                    _this.servidores = res.data.ServidoresContrataciones
                    this.loading = false
                   
                })
                .catch(e => {
                    console.log(e)
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.errors,
                        icon: 'error'
                    });

                });
        },
        async traerDependencias() {
            const _this = this;
          
            await axios.get(`${this.$store.state.URL}/api/servidores/dependencias/`)
                .then(res => {
                
                 this.allDependencias = res.data.allDependencias

                  
                })
                .catch(e => {
                    console.log(e)
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.errors,
                        icon: 'error'
                    });

                });
        }

    },
    mounted() {
        this.traerDependencias();
        this.traerInstituciones();

    },

}


</script>

<style lang="scss" scoped></style>

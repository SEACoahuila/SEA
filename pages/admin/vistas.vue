


<template>
<div>

    <v-container class="flex-grow-1 min-height-vh">

        <v-row justify="center">
           
                <h2>{{ $store.state.usuario.data.siglasInstitucion }}</h2>
              
            
            
         
            
            <v-col cols="12" class="mb-10">
                <v-layout class="" >

                    <v-row justify="center" >
                
                        <v-col  cols="12" xl="6" lg="6" md="6" v-if="userContratos || userGeneral">
                            <v-btn block @click="nuevaInstitucion = false ; nuevoSancionado =false; verSancionados = false; verContratos = true">
                                <v-icon color="info">mdi mdi-eye-settings</v-icon>

                                Ver Servidores en Contratos <p style="color:green">{{ AllUsers.length }}</p>
                            </v-btn>
                        </v-col>
                        <v-col cols="12"  xl="6" lg="6" md="6" v-if="userSancionados || userGeneral">
                            <v-btn  block @click="nuevaInstitucion = false ; nuevoSancionado =false; verContratos = false; verSancionados = true">
                                <v-icon color="warning">mdi mdi-eye-settings</v-icon>

                                Ver Sancionados <p style="color:red">{{ allSancionados.length }}</p>
                            </v-btn>
                        </v-col>
                        


                     
                     

                    </v-row>

                </v-layout>

            </v-col>

 

            <v-col cols="12"  v-if="verSancionados">
                <template>
                         <v-card-title>
                 <v-text-field
                     v-model="search"
                     append-icon="mdi-magnify"
                     label="Buscar"
                     single-line
                     hide-details
                 ></v-text-field>
                 </v-card-title>
                 <v-data-table
                     dense
                     :search="search"
                     :headers="sancionadosColumnas"
                     :items="allSancionados"
                     item-key="IdServidorPubSancionado"
                     class="elevation-1"
                 ></v-data-table>
                 </template>
            </v-col>
            <v-col cols="12" v-if="verContratos">
                     
                     <template>
                         <v-card-title>
                 <v-text-field
                     v-model="search2"
                     append-icon="mdi-magnify"
                     label="Buscar"
                     single-line
                     hide-details
                 ></v-text-field>
                 </v-card-title>
                 <v-data-table
                     dense
                     :search="search2"
                     :headers="nombresColumnas"
                     :items="AllUsers"
                     item-key="IdServidorEnContrataciones"
                     class="elevation-1"
                 ></v-data-table>
                 </template>
 
                
             </v-col>
   

        </v-row>
   

    </v-container>

</div>
</template>

<script>
import axios from "axios";

import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: 'Vistas',
    data() {
        return {
            page: {
                color: 'blacl',
                title: 'SEA USER',
                icon: 'mdi-cogs'
            },
            menuFechaResolucion: false,
            nuevaInstitucion: false,
            nuevoSancionado: false,
            verSancionados: false,
            verContratos: false,
            hidden: true,
            valid: false,
            loading: false,
           
            //    Variables a enviar
           
            picker: null,
            picker1: null,
            picker2: null,
            menu: false,
            menu1: false,
            menu2: false,
            menu3: false,
            monedasMulta: ['MXN', 'USD'],
            userGeneral: false,
            userSancionados: false,
            userContratos: false,
            AllUsers: [],
            allSancionados: [],
            search: '',
            search2: '',
            nombresColumnas: [
            {
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
                text: 'Tipo de contrataciónes',
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
            sancionadosColumnas: [
            {
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
                value: 'Dependencia.Dependencia',
            },
            {
                text: 'Expediente',
                value: 'Expediente',
            },
            {
                text: 'Falta',
                value: 'Falta.TipoFalta',
            },
            {
                text: 'Autoridad Sancionadora',
                value: 'AutoridadSancionadora',
            },
            {
                text: 'Observaciones',
                value: 'Observaciones',
            },
            ]


        }

    },

    computed: {
        ...mapState(['usuario', 'URL']),
  
        hasM() {
            return this.IdTipoSancion?.some(item => item === 'M');
        },
        hasI() {
          return this.IdTipoSancion?.some(item => item === 'I');
        },

    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },

    methods: {

        ...mapActions(['guardarUsuario', 'cerrarSesion']),

        save(FechaResolucion) {
            this.$refs.menu.save(FechaResolucion)
        },


       
        userExist() { 
     
            if (this.$store.state.usuario.data.Role == false) {
              
                this.$router.push('/admin')
  
                

            } else {
                this.traerServidores()
                this.traerSancionados()
            if (this.usuario.data.Role == 'ADMIN'  || 'USER-INSTITUCION' ) {
            console.log('Rol permitido')
            this.userGeneral = true
              
                

            }
            if (this.usuario.data.Role == 'USER-SANCION') {
                console.log('Rol permitido')
              
                this.userSancionados = true
            

            }
            if (this.usuario.data.Role == 'USER-CONTRATOS') {
                console.log('Rol permitido')
  
                this.userContratos = true

            }
          
            }

          
    
           
            

        },
       async traerServidores() {
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
           await axios.get(
                    `${this.$store.state.URL}/api/servidores/institucion`,
                    config
                )
                .then(res => {
                this.AllUsers = res.data.ServidoresContrataciones
                console.log(this.AllUsers)
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.errors,
                        icon: 'error'
                    });
             
                });
        },
        async traerSancionados() {
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            await axios.get(
                    `${this.$store.state.URL}/api/sanciones/misSancionados`,
                    config
                )
                .then(res => {
                this.allSancionados = res.data.Sancionados
                console.log(this.allSancionados)
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.errors,
                        icon: 'error'
                    });
             
                });
        }

    },
    beforeMount(){
        
    },
    mounted() {
        this.userExist()
    
    }
}
</script>

<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>

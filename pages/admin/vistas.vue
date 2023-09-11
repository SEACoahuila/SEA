


<template>
<div>

    <v-container class="flex-grow-1 min-height-vh">

        <v-row justify="center">
           
               
                <cols cols="12">

                <div class="text-h2" align="center">{{ $store.state.usuario.data.siglasInstitucion }}</div>
                <h3 align="center" class="mb-5">Datos</h3>
                <v-divider></v-divider>
                </cols>
            
            
         
            
            <v-col cols="12" class="mb-10">
                <v-layout class="" >

                    <v-row justify="center" >
                
                        <v-col  cols="12" xl="4" lg="4"  v-if="userContratos || userGeneral">
                            <v-btn block @click="verPartSancionado = false ; verSancionados = false; verContratos = true">
                                <v-icon color="info">mdi mdi-eye-settings</v-icon>

                                Ver Servidores en Contratos <p style="color:green">{{ AllUsers.length }}</p>
                            </v-btn>
                        </v-col>
                        <v-col cols="12"  xl="4" lg="4"  v-if="userSancionados || userGeneral">
                            <v-btn  block @click="verPartSancionado =false; verContratos = false; verSancionados = true">
                                <v-icon color="warning">mdi mdi-eye-settings</v-icon>

                                Servidores Sancionados <p style="color:red">{{ allSancionados.length }}</p>
                            </v-btn>
                        </v-col>
                        <v-col cols="12"  xl="4" lg="4"  v-if="userSancionados || userGeneral">
                            <v-btn  block @click="verPartSancionado = true; verContratos = false; verSancionados = false">
                                <v-icon color="danger">mdi mdi-eye-settings</v-icon>

                                Particulares Sancionados <p style="color:red">{{ allParticularesSancionados.length }}</p>
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
            
            <v-col cols="12"  v-if="verPartSancionado">
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
                     :headers="patSancionadosColumnas"
                     :items="allParticularesSancionados"
                     item-key="IdServidorPubSancionado"
                     class="elevation-1"   
                 >
                 
                 <template v-slot:item.URLResolucion="{ item }">
                    <a :href="item.URLResolucion">
                    <v-chip
                     >
                     Ver Resolución
                    </v-chip>
                </a>
                 </template>

                </v-data-table>
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
            verPartSancionado: false,
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
            allParticularesSancionados: [],
            search: '',
            search2: '',
            permitidosSancion: ['ADMIN', 'USER-INSTITUCION', 'USER-SANCION', 'USER-SANCIONES-CONCENTRADORA', 'USER-INSTITUCION-CONCENTRADORA'],
            permitidosContratos: ['ADMIN', 'USER-INSTITUCION', 'USER-CONTRATOS', 'USER-CONTRATOS-CONCENTRADORA', 'USER-INSTITUCION-CONCENTRADORA'],
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
            patSancionadosColumnas: [
            {
                text: 'Nombre / Razón Social',
                value: 'Particular.NombreRazonSocial'
            },
            {
                text: 'Objeto Social',
                value: 'Particular.ObjetoSocial'
            },
            {
                text: 'Expediente',
                value: 'Expediente',
            },
            {
                text: 'Falta',
                value: 'Acto',
            },
            {
                text: 'Autoridad Sancionadora',
                value: 'AutoridadSancionadora',
            },
            {
                text: 'Sentido de la resolución',
                value: 'SentidoResolucion',
            },
            {
                text: 'Resolución',
                value: 'URLResolucion',
            },
            {
                text: 'Teléfono',
                value: 'Particular.Telefono'
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
                this.traerParticularesSancionados()
            if (this.usuario.data.Role === 'ADMIN'  || this.usuario.data.Role === 'USER-INSTITUCION' || this.usuario.data.Role === 'USER-INSTITUCION-CONCENTRADORA' ) {
                this.userGeneral = true
            }
            else if (this.usuario.data.Role === 'USER-SANCIONES' || this.usuario.data.Role === 'USER-SANCIONADOS-CONCENTRADORA' ) {
                this.userSancionados = true
            }
            else if (this.usuario.data.Role === 'USER-CONTRATOS' || this.usuario.data.Role === 'USER-CONTRATOS-CONCENTRADORA' ) {
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
        if (_this.permitidosContratos.includes(this.usuario.data.Role)) {
            
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
                         text: e.response.data.msg,
                         icon: 'error'
                     });
              
                 });
        }
        },
        async traerSancionados() {
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
      
        if (_this.permitidosSancion.includes(this.usuario.data.Role) ){
            
            await axios.get(
                    `${this.$store.state.URL}/api/sanciones/misSancionados`,
                    config
                )
                .then(res => {
                this.allSancionados = res.data.Sancionados
        
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });
             
                });
        }
        },
        async traerParticularesSancionados() {
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
    
        if (_this.permitidosSancion.includes(this.usuario.data.Role) ){ 

            await axios.get(
                    `${this.$store.state.URL}/api/sanciones/misParticularesSancionados`,
                    config
                )
                .then(res => {
                this.allParticularesSancionados = res.data.SancionadosParticulares
               
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });
             
                });
        }
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

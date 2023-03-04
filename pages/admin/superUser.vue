<template>
    <div v-if="esAdmin">

        

        <v-container class="flex-grow-1 min-height-vh">

            <v-row justify="center">
                <v-col cols="12">
                <v-layout class="overflow-visible" style="height: 56px;">
                <v-bottom-navigation grow  color="primary" vertical>
                    <v-btn @click="nuevaInstitucion = true">
                        <v-icon>mdi mdi-plus-circle-outline</v-icon>

                        Nueva Intitución
                    </v-btn>

                    <v-btn @click="nuevaInstitucion = false">
                        <v-icon>mdi mdi-eye-settings</v-icon>

                        Ver instituciónes
                    </v-btn>

                    <v-btn @click="cerrarSesion">
                        <v-icon>mdi mdi-logout</v-icon>

                        Cerrar Sesión
                    </v-btn>


                </v-bottom-navigation>
            </v-layout>

                </v-col>

                <v-col cols="12" md="8" v-if="nuevaInstitucion">
                    <v-card elevation="4" align="center" class="mt-10">

                        <v-card-subtitle></v-card-subtitle>
                        <h3><strong>ALTA NUEVA INSTITUCION </strong></h3>
                        <v-card-text>

                            <v-form ref="form" v-model="valid" >
                                <v-row class="mt-4">
                                    
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Nombre" dense v-model="Nombres" :counter="50" required  :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Primer Apellido" dense v-model="PrimerApellido" :counter="25"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Segundo Apellido" dense v-model="SegundoApellido" :counter="25"
                                            required :rules="notNullRule">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Correo" type="email" dense v-model="Correo" :counter="50"
                                            required :rules="emailRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Teléfono" type="number" dense v-model="telefono" :counter="10"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field dense v-model="puestoActual" :rules="notNullRule" :counter="50"
                                            label="Puesto Actual" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field dense v-model="nombreInstitucion" :rules="notNullRule" :counter="50"
                                            label="Nombre de la Institución" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field dense v-model="siglasInstitucion" :rules="notNullRule" :counter="25"
                                            label="Siglas de la Institución" required></v-text-field>
                                    </v-col>
                                 
                                    <v-col cols="12"  lg="4">
                                        <v-select v-model="Role" :rules="notNullRule" required dense :items=roles
                                            label="Rol de usuario"></v-select>

                                    </v-col>

                                    <v-col cols="12">
                                        <v-card-actions>
                                            <v-btn block color="teal accent-4" @click="enviarDatos"
                                                :disabled="!valid">Crear</v-btn>

                                        </v-card-actions>


                                    </v-col>
                                </v-row>

                            </v-form>
                        </v-card-text>

                    </v-card>


                </v-col>

                <v-cols cols="12">
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
                    :headers="nombresColumnas"
                    :items="AllUsers"
                    item-key="name"
                    class="elevation-1"
                ></v-data-table>
                </template>

                </v-cols>
            </v-row>


        </v-container>

    </div>
</template>
    
        
<script>
import axios from "axios";
import { mapState, mapActions } from 'vuex'
export default {
    name: 'SuperUser',
    data() {
        return {
            page: {
                color: 'blacl',
                title: 'SEA USER',
                icon: 'mdi-cogs'
            },
            nuevaInstitucion: false,
            search: '',
            hidden: true,
            valid: false,
            loading: false,
            notNullRule: [v => !!v || "Este campo es requerido"],
            emailRules: [
                v => !!v || "El Email es requerido",
                v => /.+@.+/.test(v) || "El Email debe ser válido",
            ],
            roles: ['ADMIN', 'USER-INSTITUCION', 'USER-INSTITUCION', 'USER-SANCION', 'USER-CONTRATOS'],
        //    Variables a enviar
            Nombres: '',
            PrimerApellido: '',
            SegundoApellido: '',
            Correo: '',
            telefono: '',
            nombreInstitucion: '',
            siglasInstitucion: '',
            Role: '',
            puestoActual:'',
            Password: '1q2w3e',
            esAdmin: false,
            AllUsers: [],
            nombresColumnas: [
                {text: 'Nombre', value: 'Nombres'},
                {text: 'Primer Apellido', value: 'PrimerApellido'},
                {text: 'Segundo Apellido', value: 'SegundoApellido'},
                {text: 'Segundo Apellido', value: 'SegundoApellido'},
                {text: 'Teléfono', value: 'Telefono'},
                {text: 'Dependencia', value: 'Dependencia.Dependencia'},
                {text: 'ROL', value: 'Role'},
                {text: 'Usuario', value: 'Correo'},
                {text: 'Estado', value: 'Estado'},
                {text: 'FirstCheck', value: 'CheckPass'},
                

            ]

        }

    },

    computed: {
        ...mapState(['usuario', 'URL'])
    },
    methods: {

        ...mapActions(['guardarUsuario', 'cerrarSesion']),

        enviarDatos(){
        const userData =
        {
        Nombres: this.Nombres,
        PrimerApellido: this.PrimerApellido,
        SegundoApellido: this.SegundoApellido,
        Correo: this.Correo,
        telefono: this.telefono,
        nombreInstitucion: this.nombreInstitucion,
        siglasInstitucion: this.siglasInstitucion,
        PuestoActual: this.puestoActual,
        Role: this.Role,
        Password: this.Password,
        }
        const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.post(
                    `${this.$store.state.URL}/api/institucion`, userData,
                    config
                )
                .then(res => {
                        _this.nuevaInstitucion = false,
                        _this.limpiarDatos();
                        _this.$swal({
                            title: 'Registro Exitoso!',
                            text: "Nueva Institución Creada",
                            icon: 'success'
                        });
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.errors,
                        icon: 'error'
                    });
             
                });
        },
        verInstituciones(){
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.get(
                    `${this.$store.state.URL}/api/institucion`,
                    config
                )
                .then(res => {
                this.AllUsers = res.data.AllUsers
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
        
        limpiarDatos(){
        this.Nombres= '',
        this.PrimerApellido= '',
        this.SegundoApellido= '',
        this.Correo= '',
        this.telefono= '',
        this.nombreInstitucion= '',
        this.siglasInstitucion= '',
        this.puestoActual= '',
        this.Role= '',
        this.Password= '1q2w3e'
        },
        
        userExist() {
            if (this.usuario.data.Role == 'ADMIN' ) {
            this.verInstituciones()
              this.esAdmin = true

            } else {
               
                this.$router.push('/')    

            
            }

        },

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
    
    
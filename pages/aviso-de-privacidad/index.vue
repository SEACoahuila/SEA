<template>
    <v-container class="min-height-vh ">
    
        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>
    
                    <div align="center" class="mb-5 text-xl-h2 text-md-h4  text-h4 ">{{page.title}}</div>
    
                </v-alert>
    
            </v-col>
            <v-col cols="12">
                <v-card class=" pa-7 " color="article" cols="6">
                    <v-card-title> AVISO:</v-card-title>
                    <v-card-text align="center" justify="center" class="text-justify">
                        La Secretaría Ejecutiva del Sistema Anticorrupción del Estado de Coahuila de
                        Zaragoza, con domicilio en Boulevard Luis Donaldo Colosio #703, tercer piso,
                        Colonia Valle Real, Saltillo, Coahuila de Zaragoza, utilizará los datos personales
                        aquí recabados para los trámites correspondientes del Organismo como lo son:
                        solicitudes de información, procedimientos de recursos de revisión, contratos de
                        prestación de servicios, servicios de proveedores, eventos de capacitación
                        realizados por las Direcciones y Unidades Administrativas.
                        Los datos personales que serán sometidos a tratamiento son los siguientes:
                        nombre, edad, domicilio, correo electrónico, teléfono, CURP, RFC y currículo. Lo
                        anterior, de acuerdo a lo establecido en la Ley de Acceso a la Información Pública
                        para el Estado de Coahuila de Zaragoza y en la Ley de Protección de Datos
                        Personales en Posesión de Sujetos Obligados del Estado de Coahuila de Zaragoza.
                        Hacemos de su conocimiento que la recabada información no será compartida
                        con ninguna entidad, institución u órgano. En caso de que por alguna razón se
                        tuviese que compartir algún dato personal, se avisará al titular de los mismos.
                        Usted cuenta con la posibilidad de ejercer los derechos de Acceso, Rectificación,
                        Cancelación y Oposición, así como el de portabilidad de los datos, ante la Unidad
                        de Transparencia de éste Organismo público, ubicada en: Boulevard Luis Donaldo
                        Colosio #703, tercer piso, Colonia Valle Real, Saltillo, Coahuila de Zaragoza, una
                        vez que haya otorgado su consentimiento para el tratamiento de los mismos.
                        Los medios a través de los cuales le comunicaremos los cambios al aviso de
                        privacidad serán por el sitio web en Internet del Organismo .
    
                    </v-card-text>
    
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
                    color: 'blue darken-4',
                    title: 'Aviso de Privacidad Integral',
                    icon: 'mdi-book-open-outline',
                }
    
            }
    
        }
    }
    </script>
    
    <style lang="scss" scoped>
      .min-height-vh {
    min-height: 70vh;
  }
    
        </style>
    
<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4">{{(page.title)}}</div>

            </v-alert>
            <div v-for="(e,i) in page.contactos" :key="i">

                <v-card class="mt-8" color="article">
                    <v-row>

                        <v-col align="center" cols='6' justify="center">
                            <v-img width="300" :lazy-src="require('@/static/img/' + e.icon)" :src="require('@/static/img/' + e.icon)"></v-img>
                        </v-col>

                        <v-col cols="6">

                            <div class="mb-5 text-xl-h4 text-md-h5 ">{{ e.dependencia }}</div>
                            <div class="mb-5 text-subtitle-2 font-weight-bold" v-for="(i,index) in e.datos" :key="index"> {{ i }}</div>
                            <div v-if=" e.dependencia === 'Secretaría Ejecutiva'">

                                <v-btn href="https://www.google.com/maps/dir//Secretar%C3%ADa+Ejecutiva+del+Sistema+Anticorrupci%C3%B3n+del+Estado+de+Coahuila+de+Zaragoza,+Blvd.+Luis+Donaldo+Colosio+No.+703.+Piso+3,+Fraccionamiento+Valle+Real,+25205+Saltillo,+Coah.,+M%C3%A9xico/@25.4705483,-100.9604294,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86881331ebb6aadd:0x2c4069ae06e6a973!2m2!1d-100.9604294!2d25.4705483 ">

                                    <v-icon color="red">mdi-map-marker-radius </v-icon>  Ver ubicación

                                </v-btn>

                            </div>

                        </v-col>

                    </v-row>

                </v-card>

            </div>

        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'sei',
    data() {
        return {
            page: {
                color: 'info',
                title: 'Contacto',
                icon: 'mdi-card-account-phone-outline',
                contactos: [
                    {
                    dependencia: 'Secretaría Ejecutiva',
                    icon: 'seac.png',
                    datos: [
                        'Telefono: (844) 688 2178',
                        'Correo: informacion@seacoahuila.org.mx',
                        'Dirección: Blvd. Luis Donaldo Colosio No. 703 Piso 3 Fracc. Valle Real Saltillo, Coahuila de Zaragoza, México. C.P. 25205.',
                        'Horario de atención: Lunes a jueves de 08:30 a 17:00 hrs, viernes de 08:30 a 14:30 hrs.'
                    ]
                },
                {
                    dependencia: 'Consejo de Participación Ciudadana',
                    icon: 'cc-cpc.png',
                    datos: [
                        'Telefono: (844) 688 2178',
                        'Página Web: https://www.cpccoahuila.org.mx',
                        'Correos:',
                        'yolanda.montes@cpccoahuila.org.mx // carlos.guzman@cpccoahuila.org.mx //  diana.flores@cpccoahuila.org.mx // carlos.franco@cpccoahuila.org.mx // karla.natividad@cpccoahuila.org.mx',
                    ]
                }
            
            
            ]
            }
        }

    }
}
</script>

<style lang="scss" scoped>

    </style>

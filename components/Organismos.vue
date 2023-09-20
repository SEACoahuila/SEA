<template >
<div>
<v-card class="pa-4"><v-row justify="center" align="center" class="mt-5">
    <v-col cols="12" align="center" >
        <h2>Organismos que integran el Sistema Estatal Anticorrupción</h2>
    </v-col>
    <v-col cols="12" >
        <v-alert class="mx-auto text-justify"  border="left" colored-border elevation="8" icon="mdi-account-group" prominent dense color="orange lighten-2">

            <v-card-title>
                Comité Coordinador
            </v-card-title>

            <v-card-subtitle>
                Instancia responsable de establecer mecanismos de coordinación entre los integrantes del Sistema Estatal, y de éste con el Sistema Nacional
            </v-card-subtitle>

            <v-spacer></v-spacer>
            <v-btn to="/cc" color="orange lighten-2" text>
                <v-icon left>
                    mdi-eye-plus-outline
                </v-icon>

                Ver más
            </v-btn>

        </v-alert>
    </v-col>

    <v-col cols="12" >
        <v-alert class="mx-auto text-justify" border="left" colored-border color="purple lighten-2" elevation="8" icon="mdi-account-search" prominent>

            <v-card-title>
                Consejo de Participación Ciudadana
            </v-card-title>

            <v-card-subtitle>
                Órgano rector del sistema y canal de interacción entre la sociedad civil y las instituciones de gobierno.
            </v-card-subtitle>

            <v-spacer></v-spacer>
            <v-btn to="/cpc" color="purple lighten-2" text>
                <v-icon left>
                    mdi-eye-plus-outline
                </v-icon>

                Ver más
            </v-btn>

            <v-btn href="https://www.cpccoahuila.org.mx" color="blue lighten-2" text>
                <v-icon left>
                    mdi-link
                </v-icon>

                Sitio web
            </v-btn>

        </v-alert>
    </v-col>

    <v-col cols="12" >
        <v-alert class="mx-auto text-justify"  border="left" colored-border color="pink lighten-2" elevation="8" icon="mdi-cogs" prominent>

            <v-card-title>
                Municipios
            </v-card-title>

            <v-card-subtitle>
                Como parte del Sistema Estatal Anticorrupción del Estado de Coahuila de Zaragoza.
            </v-card-subtitle>

            <v-spacer></v-spacer>
            <!-- <v-btn to="/se" color="pink lighten-2" text>
                <v-icon left>
                    mdi-eye-plus-outline
                </v-icon>

                Ver más
            </v-btn> -->

        </v-alert>
    </v-col>

</v-row> 
</v-card>
<AvisoPrivacidad />
</div>


</template>

<script>
import AvisoPrivacidad from '@/components/AvisoPrivacidad.vue';

export default {
    data: () => ({
        show1: false,
        show2: false,
        show3: false,
    }),
    components: { AvisoPrivacidad }
}
</script>

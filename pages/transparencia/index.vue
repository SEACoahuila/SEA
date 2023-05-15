<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4 ">{{page.title}}</div>

            </v-alert>

            <!--  Inicio de ART 18 y Art 20 -->

            <v-card class="mt-3 pa-4" color="article">
                <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 18</div>
                        </v-card-title>
                        <v-card-actions class="justify-center">
                            <v-row justify="center" align="center">
                                <v-col cols="12">
                                    <v-chip label outlined color="info" max-width="100%" href="https://www.plataformadetransparencia.org.mx/">Plataforma Nacional de Transparencia</v-chip>
                                </v-col>
                                <v-col cols="12">
                                    <v-chip label outlined color="info" max-width="100%" href="https://goo.gl/forms/v9fUknvCjxNUqNzA2">Quejas y sugerencias</v-chip>
                                </v-col>
                            
                            </v-row>
                                

                        </v-card-actions>

                    </v-col>
               

                    <v-col align="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 20</div>
                        </v-card-title>
                        <v-card-actions class="justify-center" align="center">Calendario de información pública de oficio

                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <v-chip-group column>
                                <v-chip v-for="(e,i) in art20" :key="i" label outlined color="info" max-width="100%" :to="('/transparencia/' + e.to)" download>{{ e.año }}</v-chip>
                            </v-chip-group>
                        </v-card-actions>

                    </v-col>
                </v-row>

            </v-card>

            <!--  Inicio de ART 21 -->

            <v-card class="mt-3 pa-4">
                <v-row justify='center'>
                    <v-col aling="center" justify="center" cols="10">
                        <v-card-title class="justify-center" align="center">
                            <div class=" text-xl-h2 text-md-h4 mt-8 ">Art. 21 Información Pública de Oficio</div>
                        </v-card-title>
                        <v-card-text class="pa-3 text-md-h6" align="center"> De la "Ley de Acceso a la Información Pública para el Estado de
                            Coahuila de Zaragoza" Art. 21 y "Ley General de Transparencia y Acceso
                            a la Información pública" (Art. 70).</v-card-text>

                        <v-divider></v-divider>
                    </v-col>
                    <v-col cols="10" class="mt-8">
                        <v-row>
                            <v-col cols="12" md="4" v-for="(fraccion, i) in fracciones" :key="i">
                                <v-list color="bluegreyt">

                                    <v-list-item class="justify-center" align="center" :to="'/transparencia/'+fraccion.to" router exact>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-btn icon class="text-h4">{{i +1}}</v-btn>
                                                <v-icon large>{{fraccion.icon}}</v-icon>
                                            </v-col>
                                            <v-col cols="12"> {{ fraccion.titulo  }}</v-col>
                                        </v-row>

                                    </v-list-item>

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>

            <v-card class="mt-8" color="article">
                <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="4">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 22 </div>
                        </v-card-title>
                        </v-col><v-divider vertical></v-divider><v-col>
                        <v-row >
                            <v-col cols="12" md="4">
                                <v-list color="bluegreyt">

                                    <v-list-item  to="/transparencia/22-1" router exact>
                                        <v-row >

                                           <v-icon large>mdi-cash</v-icon> <v-col> Gastos de publicidad</v-col>
                                        </v-row>

                                    </v-list-item>

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>
                        
                    </v-row>
              
                    
                    <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="4">
                       
                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 25</div>
                        </v-card-title>
                    </v-col> <v-divider vertical></v-divider><v-col>
                        <v-row align="center">
                            <v-col cols="12" md="">
                                <v-list color="bluegreyt" two-line>

                                    <v-list-item  to="/transparencia/25-1" router exact>
                                        <v-row>

                                           <v-icon large >mdi-border-color</v-icon> <v-col > Los reglamentos de las leyes expedidos en ejercicio de sus atribuciones.</v-col>
                                        </v-row>

                                    </v-list-item>
                                    <v-list-item  to="/transparencia/25-2" router exact>
                                        <v-row >

                                            <v-icon large > mdi-file-link-outline</v-icon><v-col >Las iniciativas de leyes o decretos y demás disposiciones generales o particulares en materia administrativa.</v-col>
                                        </v-row>

                                    </v-list-item>
                                    <v-list-item to="/transparencia/25-3" router exact>
                                        <v-row >
                                           <v-icon large >mdi-cog-counterclockwise</v-icon> <v-col > Los convenios de coordinación con la Federación, Estados y Municipios y de concertación con los sectores social y privado, señalando el objeto, las partes y tiempo de duración.</v-col>

                                        </v-row>

                                    </v-list-item>

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="4">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 70 </div>
                        </v-card-title>
                        </v-col> <v-divider vertical></v-divider><v-col>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-list color="bluegreyt">

                                    <v-list-item  to="/transparencia/70-1" router exact>
                                        <v-row >

                                            <v-icon large >mdi-table-cog</v-icon> <v-col > Tabla de aplicabilidad</v-col>

                                        </v-row>

                                    </v-list-item>

                                  

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>

                </v-row>
                <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="4">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h4 text-md-h6">Transparencia LGCG</div>
                        </v-card-title>
                        </v-col> <v-divider vertical></v-divider><v-col>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-list color="bluegreyt">

                                    <v-list-item  to="/transparencia/LGCG-1" router exact>
                                        <v-row >

                                            <v-icon large >mdi mdi-folder-file-outline</v-icon> <v-col > I. Información Contable</v-col>

                                        </v-row>

                                    </v-list-item>

                                    <v-list-item  to="/transparencia/LGCG-2" router exact>
                                        <v-row >

                                            <v-icon large >mdi mdi-folder-file-outline</v-icon> <v-col > II. Información Presupuestal</v-col>
                                        </v-row>
                    
                                    </v-list-item>
                                    <v-list-item  to="/transparencia/LGCG-3" router exact>
                                        <v-row >
                                            
                                            <v-icon large >mdi mdi-folder-file-outline</v-icon> <v-col > III. Información Programática</v-col>
                                        </v-row>
                                        
                                    </v-list-item>
                                    <v-list-item  to="/transparencia/LGCG-4" router exact>
                                        <v-row >
                                            
                                            <v-icon large >mdi mdi-folder-file-outline</v-icon> <v-col > IV. Información Adicional</v-col>
                                        </v-row>
                                        
                                    </v-list-item>
                                    <v-list-item  to="/transparencia/LGCG-5" router exact>
                                        <v-row >

                                            <v-icon large >mdi mdi-folder-file-outline</v-icon> <v-col >V. Ley de Disciplina Financiera (LDF)</v-col>
                                        </v-row>
                    
                                    </v-list-item>
                                    <v-list-item  to="/transparencia/LGCG-6" router exact>
                                        <v-row >

                                            <v-icon large >mdi mdi-folder-file-outline</v-icon> <v-col > Título Quinto de la LGCG</v-col>
                                        </v-row>
                    
                                    </v-list-item>

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>

                </v-row>

            </v-card>

        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Transparencia',
    data() {
        return {
            page: {
                color: 'info',
                title: 'Transparencia',
                icon: 'mdi-magnify'
            },

            art20: [{
                    año: 'Calendario de información pública de oficio',
                    to: '20-1',

                },
               
            ],

            fracciones: [{
                    titulo: 'Estructura Orgánica',
                    to: '21-1',
                    icon: 'mdi-sitemap'
                },
                {
                    titulo: 'Marco normativo',
                    to: '21-2',
                    icon: 'mdi-scale-balance'
                },
                {
                    titulo: 'Directorio de los servidores públicos',
                    to: '21-3',
                    icon: 'mdi-card-account-details-outline'
                },
                {
                    titulo: 'Nombramientos, comisiones y licencias',
                    to: '21-4',
                    icon: 'mdi-folder-account-outline'
                },
                {
                    titulo: 'Remuneración mensual',
                    to: '21-5',
                    icon: 'mdi-account-credit-card'
                },
                {
                    titulo: 'Declaración Patrimonial',
                    to: '21-6',
                    icon: ' mdi-account-search'
                },
                {
                    titulo: 'Viáticos y gastos de representación',
                    to: '21-7',
                    icon: 'mdi-plane-car'
                },
                {
                    titulo: 'Perfil de puestos y currículum',
                    to: '21-8',
                    icon: 'mdi-badge-account-outline'
                },
                {
                    titulo: 'Convenios de colaboración',
                    to: '21-9',
                    icon: ' mdi-file-sign'
                },
                {
                    titulo: 'Condiciones generales de trabajo',
                    to: '21-10',
                    icon: 'mdi-briefcase-outline'
                },
                {
                    titulo: 'Planes, programas o proyectos',
                    to: '21-11',
                    icon: 'mdi-chart-donut-variant'
                },
                {
                    titulo: 'Servicios y trámites',
                    to: '21-12',
                    icon: 'mdi-face-agent'
                },
                {
                    titulo: 'Mecanismos de solicitudes, opiniones, quejas',
                    to: '21-13',
                    icon: 'mdi-account-tie-voice-outline'
                },
                {
                    titulo: 'Mecanismos de participación ciudadana',
                    to: '21-14',
                    icon: 'mdi-account-group-outline'
                },
                {
                    titulo: 'Estímulos, apoyos y requisitos',
                    to: '21-15',
                    icon: 'mdi-smoke-detector-outline'
                },
                {
                    titulo: 'Beneficiarios de subsidios, estímulos y apoyos',
                    to: '21-16',
                    icon: 'mdi-smoke-detector-outline'
                },
                {
                    titulo: 'Beneficiarios de programas sociales',
                    to: '21-17',
                    icon: 'mdi-home-group'
                },
                {
                    titulo: 'Personas que utilizan recursos públicos',
                    to: '21-18',
                    icon: 'mdi-account-cash'
                },
                {
                    titulo: 'Instituciones de beneficencia',
                    to: '21-19',
                    icon: 'mdi-bank-outline'
                },
                {
                    titulo: 'Presupuesto asignado',
                    to: '21-20',
                    icon: 'mdi-cash-check'
                },
                {
                    titulo: 'Calendario de reuniones públicas',
                    to: '21-21',
                    icon: 'mdi-laptop-account'
                },
                {
                    titulo: 'Unidad de transparencia y comité de transparencia',
                    to: '21-22',
                    icon: 'mdi-card-search-outline'
                },
                {
                    titulo: 'Catálogos documentales de archivos',
                    to: '21-23',
                    icon: 'mdi-archive'
                },
                {
                    titulo: 'Solicitudes y respuestas',
                    to: '21-24',
                    icon: 'mdi-folder-information-outline'
                },
                {
                    titulo: 'Informes financieros y cuenta pública',
                    to: '21-25',
                    icon: 'mdi-finance'
                },
                {
                    titulo: 'Deuda pública',
                    to: '21-26',
                    icon: 'mdi-chart-sankey'
                },
                {
                    titulo: 'Auditorías',
                    to: '21-27',
                    icon: 'mdi-folder-eye-outline'
                },
                {
                    titulo: 'Proveedores y contratistas',
                    to: '21-28',
                    icon: 'mdi-account-tie-woman'
                },
                {
                    titulo: 'Inspectores o visitadores',
                    to: '21-29',
                    icon: 'mdi-account-tie-outline'
                },
                {
                    titulo: 'Procedimientos de adjudicación directa, invitación restringida y licitación',
                    to: '21-30',
                    icon: 'mdi-folder-key-outline'
                },
                {
                    titulo: 'Agenda de eventos culturales o deportivos',
                    to: '21-31',
                    icon: 'mdi-view-agenda-outline'
                },
                {
                    titulo: 'Actas de entrega-recepción',
                    to: '21-32',
                    icon: 'mdi-file-document-outline'
                },

                {
                    titulo: 'Georreferenciación de obras públicas',
                    to: '21-33',
                    icon: 'mdi-map-marker-question'
                },
                {
                    titulo: 'Expedientes reservados',
                    to: '21-34',
                    icon: 'mdi-archive-alert-outline'
                },
                {
                    titulo: 'Guía de archivos',
                    to: '21-35',
                    icon: 'mdi-archive-outline'
                },
                {
                    titulo: 'Concesiones, permisos y autorizaciones',
                    to: '21-36',
                    icon: 'mdi-account-clock-outline'
                },
                {
                    titulo: 'Concesiones de transporte público',
                    to: '21-37',
                    icon: 'mdi-bus'
                },
                {
                    titulo: 'Entrega de recursos públicos',
                    to: '21-38',
                    icon: 'mdi-handshake-outline'
                },
                {
                    titulo: 'Sistemas pensionarios',
                    to: '21-39',
                    icon: 'mdi-folder-file-outline'
                },
                {
                    titulo: 'Informe de actividades',
                    to: '21-40',
                    icon: ' mdi-office-building-cog-outline'
                },
                {
                    titulo: 'Ingresos',
                    to: '21-41',
                    icon: 'mdi-account-cash-outline'
                },
                {
                    titulo: 'Información desclasificada',
                    to: '21-42',
                    icon: 'mdi-text-box-outline'
                },
                {
                    titulo: 'Preguntas frecuentes',
                    to: '21-43',
                    icon: 'mdi-chat-question-outline'
                },
                {
                    titulo: 'Catálogo de información adicional',
                    to: '21-44',
                    icon: 'mdi-information-outline'
                },
                {
                    titulo: 'Acciones realizadas por contingencias',
                    to: '21-45',
                    icon: 'mdi-weather-pouring'
                },
                {
                    titulo: 'Aportaciones nacionales o internacionales, para emergencia o desastre',
                    to: '21-46',
                    icon: 'mdi-hand-coin-outline'
                },
                {
                    titulo: 'Servidores públicos con sanciones definitivas',
                    to: '21-47',
                    icon: 'mdi-account-multiple-remove'
                },
                {
                    titulo: 'Listado del parque vehicular',
                    to: '21-48',
                    icon: 'mdi-car-hatchback'
                },
                {
                    titulo: 'Información catastral',
                    to: '21-49',
                    icon: 'mdi-domain'
                },
                {
                    titulo: 'Proceso catastral de valuación',
                    to: '21-50',
                    icon: 'mdi-office-building'
                },
                {
                    titulo: 'Mecanismos y resultados de evaluación',
                    to: '21-51',
                    icon: 'mdi-home-analytics'
                },
                {
                    titulo: 'Resultados de evaluación',
                    to: '21-52',
                    icon: 'mdi-table-large'
                },
                {
                    titulo: 'Otra información',
                    to: '21-53',
                    icon: 'mdi-information-variant'
                }
            ],
        }

    }
}
</script>

<style lang="scss" scoped>

</style>
63e6af16992ad88d27d73df4 bernardo
63f537c2b62204c08b6cc673 patto


{
    "$oid": "63fce482b62204c08b6d74e6"
  },
  {
    "$oid": "63fce4f9b62204c08b6d751f"
  },
  {
    "$oid": "63fce551b62204c08b6d7537"
  },
  {
    "$oid": "63fce5b4b62204c08b6d755d"
  },
  {
    "$oid": "63fce616b62204c08b6d7571"
  },
  {
    "$oid": "63fce692b62204c08b6d7583"
  },
  {
    "$oid": "63fce74eb62204c08b6d75a5"
  }
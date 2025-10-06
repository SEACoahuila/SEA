<template>
    <v-container>

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4">{{ page.title }}</div>

                </v-alert>


                <v-card class="mt-10 pa-5" color="article">
                    <v-row class="mt-5" v-for="(e, i) in page.presentacion" :key="i">
                        <v-col aling="center" justify="center">
                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> {{ e.titulo }}</div>
                            </v-card-title>

                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="12" md="9" sm="12">

                            <p align="center" class="text-justify">
                                {{ e.texto }}
                            </p>

                        </v-col>

                    </v-row>

                </v-card>

                <v-card class="mt-10 pa-3">
                    <v-card-title class="justify-center">
                        <div class=" text-xl-h2 text-md-h4"> Miembros que integran el comité coordinador</div>
                    </v-card-title>
                    <v-row>
                        <v-col cols="12" xl="4" lg="6" sm="12" v-for="(i, index) in integrantes" :key="index">
                            <v-card shaped class="mx-auto mt-8 pa-3" color="cc" min-height="330" light>
                                <v-col>
                                    <v-row align="center" class="fill-height">
                                        <v-col align-self="start" class="pa-0" cols="6">
                                            <v-avatar class="profile" size="164">
                                                <v-img :src="require('@/static/img/cc/' + i.foto)"></v-img>

                                            </v-avatar>

                                        </v-col>
                                        <v-col align-self="start" class="pa-1" cols="6">

                                            <v-img max-width="60%" :src="require('@/static/img/' + i.img)"></v-img>

                                        </v-col>

                                        <v-col class="py-0">
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title class="text-h6">
                                                        {{ i.nombre }}
                                                    </v-list-item-title>
                                                    <v-list-item-text>{{ i.cargo }}</v-list-item-text>
                                                </v-list-item-content>

                                            </v-list-item>
                                            <v-btn :href="i.web" color="blue lighten-2" text>
                                                <v-icon left>
                                                    mdi-link
                                                </v-icon>

                                                Sitio web
                                            </v-btn>
                                        </v-col>

                                    </v-row>

                                </v-col>
                                <div class="text-center">
                                    <v-dialog v-model="i.dialog" max-width="900px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn :color="page.color" fab small dark absolute top right v-on="on">
                                                <v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                        </template>

                                        <v-card>
                                            <div v-for="(e, index) in i.curriculum" :key="index">
                                                <v-card-title class="bluegreyt">
                                                    {{ e.subtitulo }}
                                                </v-card-title>

                                                <v-card-text>
                                                    <v-list>
                                                        <v-list-item v-for=" (item, i) in e.lista" :key="i" dense>
                                                            <v-icon>mdi-fountain-pen-tip</v-icon> {{ item }}
                                                        </v-list-item>
                                                    </v-list>

                                                </v-card-text>
                                            </div>

                                            <v-divider></v-divider>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="primary" text @click="i.dialog = false">
                                                    Cerrar
                                                </v-btn>
                                            </v-card-actions>

                                        </v-card>

                                    </v-dialog>
                                </div>

                            </v-card>

                        </v-col>

                    </v-row>

                </v-card>

                <v-card class="mt-10 pa-4" color="article">
                    <v-row justify="center" align="center">
                        <v-col align="center" justify="center" cols="12">

                            <v-card-title class="justify-center">
                                <div class=" text-xl-h2 text-md-h4"> Programas de trabajo</div>
                            </v-card-title>
                            <v-divider class="mb-5"></v-divider>
                            <v-card-actions class="justify-center">
                                <v-row justify="center">
                                    <div v-for=" (e, i) in programas" :key="i">
                                        <v-btn v-if="e.src" class="ma-2"
                                            :href="require('@/static/comiteCoordinador/' + e.src)">{{
                                                e.year }}</v-btn>
                                        <v-btn v-if="e.to" class="ma-2" :href="e.to">{{ e.year }}</v-btn>
                                    </div>

                                </v-row>


                            </v-card-actions>
                            <v-divider class="mt-5"></v-divider>
                        </v-col>

                        <v-col aling="center" justify="center" cols="12">

                            <v-card-title class="justify-center">
                                <div class=" text-xl-h2 text-md-h4"> Informes</div>
                            </v-card-title>
                            <v-divider class="mb-5"></v-divider>
                            <v-card-actions class="justify-center">
                                <!-- :href="require('@/pages/transparencia/art20/' + e.src)" -->
                                <v-row justify="center">
                                    <div v-for="(e, i) in informes" :key="i">
                                        <v-btn v-if="e.src" class="ma-2"
                                            :href="require('@/static/comiteCoordinador/' + e.src)" label color=""
                                            max-width="100%">{{ e.year }}</v-btn>
                                        <v-btn v-if="e.to" class="ma-2" :href="e.to">{{ e.year }}</v-btn>
                                    </div>
                                </v-row>
                            </v-card-actions>
                            <v-divider class="mt-5"></v-divider>
                        </v-col>

                        <v-col aling="center" justify="center" cols="12">

                            <v-card-title class="justify-center">
                                <div class=" text-xl-h2 text-md-h4"> Actas de Comité Coordinador </div>
                            </v-card-title>
                            <v-divider class="mb-5"></v-divider>
                            <v-card-actions class="justify-center">
                                <!-- :href="require('@/pages/transparencia/art20/' + e.src)" -->
                                <v-row justify="center">
                                    <div v-for=" (e, i) in actas" :key="i">
                                        <v-btn v-if="e.src" class="ma-2"
                                            :href="require('@/static/comiteCoordinador/' + e.src)">{{
                                                e.sesion }}</v-btn>
                                        <v-btn v-if="e.to" class="ma-2" :href="e.to">{{ e.sesion }}</v-btn>
                                    </div>
                                </v-row>
                            </v-card-actions>
                            <v-divider class="mt-5"></v-divider>
                        </v-col>
                    </v-row>

                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'sei',
    data() {
        return {

            informes: [
                {
                    year: '2024-2025',
                    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FfhAGuLD6a522k8FYDufB%2Finforme%20sistema%20DIGITAL.pdf?alt=media&token=c9bc8294-d764-4c58-ad2a-467cadf4c032'
                },
                {
                    year: '2023-2024',
                    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FkyYlvOBrjgH7F3p5TbcE%2FInforme_final_OK%202.pdf?alt=media&token=4f80053e-1392-432a-8eb8-c9c23a528963'
                },
                {
                    year: '2022-2023',
                    src: 'informeCC-2023.pdf'
                },
                {
                    year: '2021-2022',
                    src: 'informeCC-2022.pdf'
                },
                {
                    year: '2020-2021',
                    src: 'informeCC-2021.pdf'
                },
                {
                    year: '2019-2020',
                    src: 'informeCC-2020.pdf'
                },
                {
                    year: '2018-2019',
                    src: 'informeCC-2019.pdf'
                },
                {
                    year: '2017-2018',
                    src: 'informeCC-2018.pdf'
                },

            ],
            programas: [
                {
                    year: '2024-2025',
                    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FONP1aDRsiTSul2p1sFZi%2FPrograma%20Anual%20de%20Trabajo%20del%20CC%202024%20-%202025%20....pdf?alt=media&token=4ab8a15e-8647-4201-841f-36d3f4aa0b45"
                },
                {
                    year: '2023-2024',
                    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/InformesCC%2FPROGRAMA%20CC.pdf?alt=media&token=640d3267-ab3a-4b6b-8c1d-94ac9d9f9c8e"
                },
                {
                    year: '2022-2023',
                    src: 'programa-anual-2022-2023.pdf'
                },
                {
                    year: '2021-2022',
                    src: 'programa-anual-2021.pdf'
                },
                {
                    year: '2020-2021',
                    src: 'programa-anual-2020.pdf'
                },
                {
                    year: '2018-2019',
                    src: 'programa-anual-2019.pdf'
                },
                {
                    year: '2017-2018',
                    src: 'programa-anual-2018.pdf'
                },

            ],

            actas: [
                {
                    sesion: 'Actas',
                    to: "https://www.seacoahuila.org.mx/transparencia/21-21"
                },


            ],

            dialog: false,
            page: {
                color: 'orange lighte-2',
                title: 'Comité Coordinador',
                icon: 'mdi-account-group',
                presentacion: [{
                    titulo: 'Funciones',
                    texto: 'El Comité Coordinador del Sistema Anticorrupción del Estado de Coahuila de Zaragoza es  instancia responsable de establecer mecanismos de coordinación entre los integrantes del Sistema Estatal, y de éste con el Sistema Nacional, y tendrá bajo su encargo el diseño, promoción y evaluación de políticas públicas locales de prevención y combate a la corrupción.'
                },
                {
                    titulo: 'Misión',
                    texto: 'Somos un Órgano Rector que diseña, promociona y evalúa las políticas públicas integrales para la prevención y el combate a la corrupción, a través del establecimiento de mecanismos eficaces de coordinación y colaboración entre los integrantes del Sistema Estatal Anticorrupción alineado al Sistema Nacional.'
                },
                {
                    titulo: 'Visión',
                    texto: 'Ser un Órgano Rector garante en la adopción de medidas para el fortalecimiento Institucional en la prevención, detección y sanción, que permitan erradicar la opacidad, los actos ilícitos y de corrupción e incrementen la confianza de los ciudadanos respecto a las instituciones.'
                }

                ]
            },
            integrantes: [

                {
                    nombre: 'YOLANDA GUADALUPE MONTES MARTÍNEZ',
                    cargo: 'Consejera Presidente del Consejo de Participación Ciudadana.',
                    foto: 'cpc-ygmm.jpg',
                    img: 'cc-cpc.png',
                    web: 'http://www.cpccoahuila.org.mx/',
                    curriculum: [{
                        subtitulo: 'Formación Académica',
                        lista: [
                            'Licenciada en Derecho egresada de la Facultad de Jurisprudencia de la UA de C.',
                            'Cursó estudios en planeación y administración de proyectos, Economía Global e Influencia de la Teoría Económica en The Washington Center y Georgetown University.',
                            'Egresada de la maestría en Prospectiva Estratégica de la Escuela de Gobierno y Transformación Pública del Instituto Tecnológico de Estudios Superiores de Monterrey.'
                        ]
                    },
                    {
                        subtitulo: 'Experiencia profesional:',
                        lista: [
                            'Actualmente se  desempeña como Consejera del Consejo de Participación Ciudadana dentro del Sistema Estatal Anticorrupción, y a su vez  como Directora de Hermes Industrial Services; consultora Especializada en desarrollo inmobiliario para la industria  y planeación de nuevos proyectos.',
                            'Se desempeñó como Gerente Comercial de Parque Industrial Alianza Derramadero y estuvo al frente del Departamento técnico de Proyectos Industriales en la Secretaría de Fomento Económico del Estado de Coahuila',
                            'Durante el 2007 fungió como Asistente de Presidencia del U.S.-Mexico Chamber of Commerce en Washington D.C., Estados Unidos.'
                        ]
                    },
                    {
                        subtitulo: 'Logros y proyectos realizados',
                        lista: [
                            'Ha escrito en relación con el desempeño de las mujeres en la vida laboral, destacando el estudio titulado: Work/family life by 2040: Between a gig economy and traditional roles Yolanda Montes/ Guillermina Benavides Rincón.',
                            'Publicado en la revista especializada WORLD FUTURE STUDIES FEDERATION y la disertación: Family and work: scenarios of work/life balance for mexican families by 2040 Yolanda Montes/Guillermina Benavides.'
                        ]
                    }
                    ]

                },
                {
                    nombre: 'MIGUEL FELIPE MERY AYUP',
                    dialog: false,
                    cargo: 'Magistrado Presidente del Tribunal Superior de Justicia y del Consejo de la Judicatura del Poder Judicial del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-pjecz-mfma.jpg',
                    img: 'cc-pjecz.png',
                    web: 'https://www.pjecz.gob.mx/',
                    curriculum: [{
                        subtitulo: 'Formación Académica',
                        lista: [
                            'Maestría en Política Aplicada, Instituciones y Procesos Políticos. Instituto Universitario de Investigación Ortega y Gasset. 2007.',
                            'Licenciado en Derecho. Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila. 1996.',
                            'Diplomado en Gobernanza Local y Liderazgo Territorial. Fundación Ortega y Gasset. 2018',
                        ]
                    },
                    {
                        subtitulo: 'Experiencia Laboral',
                        lista: [
                            'Noviembre 2019 a la fecha: Magistrado Presidente del Poder Judicial del Estado de Coahuila. Poder Judicial del Estado de Coahuila de Zaragoza.',
                            '2018 a octubre 2019: Magistrado Presidente de la Sala Regional. Poder Judicial del Estado de Coahuila de Zaragoza.',
                            '2014-2017: Primer Regidor de Torreón. Republicano Ayuntamiento de Torreón, Coahuila de Zaragoza.',
                            '2010-2013: Secretario del Republicano Ayuntamiento. Gobierno Municipal de Torreón, Coahuila de Zaragoza.',
                            '2009: Subsecretario de Desarrollo y Cooperación Política. Gobierno del Estado de Coahuila de Zaragoza.',
                            '2003-2005: Diputado Local. Congreso del Estado de Coahuila de Zaragoza.',
                            '2000-2002: Director General de Desarollo Social. Gobierno Municipal de Torreón, Coahuila de Zaragoza.',
                            '1996-1999: Secretario Particular Adjunto del Gobernador. Gobierno del Estado de Coahuila de Zaragoza',
                        ]
                    },
                    {
                        subtitulo: 'Logros y proyectos realizados',
                        lista: [
                            'Autor del Libro "La Nueva Vía, hacia un modelo de ciudad". 2017.',
                            'Sistema de Normatividad Municipal. 2015.',
                            'Re-ingeniería administrativa del Gobierno Municipal. 2014.',
                            'Monitor de Cabildo. 2011-2012.'
                        ]
                    },

                    {
                        subtitulo: 'Actividades Académicas',
                        lista: [
                            'Catedrático en la Maestría en Políticas Públicas',
                            'Catedrático en Derecho Constitucional en la UAdeC',
                            'Catedrático en Teoría del Estado en la UAdeC',
                            'Catedrático en Políticas Públicas en la UAdeC',
                            'Catedrático en Administración Pública en la UAdeC',
                            'Catedrático en Administración en la UAdeC',
                        ]
                    }
                    ]
                },

                {
                    nombre: 'MANUEL RAMÍREZ BRIONES',
                    cargo: 'Auditor Superior del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-asec-as.png',
                    img: 'cc-asec.png',
                    web: 'https://www.asecoahuila.gob.mx/',
                    curriculum: [{
                        subtitulo: 'Datos Profesionales',
                        lista: ['Contador Público (1981-1985), por la Universidad Autónoma de Coahuila, Torreón, Coahuila']
                    },
                    {
                        subtitulo: 'Trayectoria Profesional',
                        lista: [
                            'Auditor Especial de Planeación y Servicios Administrativos de la ASEC',
                            'Auditor de Planeación e Información de la ASEC',
                            'Auditor Especial de Cumplimiento Financiero de la ASEC',
                            'Auditor Especial de Desempeño de la ASEC',
                            'Encargado de la Dirección General de Evaluación y Seguimiento SEFIN',
                            'Director General de Impuestos SEFIN',
                            'Despacho de Asesoría a Entidades Gubernamentales como Socio Director',
                            'Director de Contabilidad del Municipio de Torreón',
                            'Jefe de Departamento de Contabilidad del Municipio de Torreón'
                        ]
                    },
                    {
                        subtitulo: 'Trayectoria Académica',
                        lista: ['Catedrático de las materias Auditoría y Contabilidad (1992-1996) UAdeC',
                            'Auditor en la Contraloría General (Enero 1990 a enero 1996) UAdeC'
                        ]
                    },
                    ]

                },

                {
                    nombre: 'KARLA SAMPERIO FLORES',
                    cargo: 'Titular de la Fiscalía Especializada en Delitos por Hechos de Corrupción.',
                    foto: 'cc-fech-ksf.png',
                    img: 'cc-fehc.png',
                    web: 'https://www.fehc.gob.mx/',
                    curriculum: [{
                        subtitulo: 'Datos Profesionales',
                        lista: [

                        ]
                    },

                    {
                        subtitulo: 'Se desempeñó como',
                        lista: [

                        ]
                    },
                    ]

                },

                {
                    nombre: 'ELMA MARISOL MARTÍNEZ GONZÁLEZ',
                    cargo: 'Secretaria de Fiscalización y Rendición de Cuentas del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-sefirc-emm.jpg',
                    img: 'cc-sefirc.png',
                    web: 'http://www.sefircoahuila.gob.mx/',
                    curriculum: [{
                        subtitulo: 'Formación Académica',
                        lista: [
                            'Es licenciada en Derecho egresada de la Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila, especializada en Derecho a la Información, Fiscalización y Combate a la Corrupción por la Universidad Interamericana de Derechos Humanos, con estudios de maestría en Impuestos por la Universidad Autónoma del Noreste.'
                        ]
                    },
                    {
                        subtitulo: 'Experiencia Profesional:',
                        lista: [
                            'Coordinadora Jurídica de la Tesorería y como Coordinadora de Responsabilidades y Asistencia Jurídica. Presidencia Municipal de Saltillo.',
                            'Subdirectora en la Coordinación de Asuntos Jurídicos.  Auditoría Superior del Estado.',
                            'Directora de Seguimiento de Procedimientos. Secretaría de Fiscalización y Rendición de Cuentas.',
                            'Coordinadora y Facilitador Jurídico del “Proyecto de Modernización Normativa de la Secretaría de Seguridad Pública del Estado de Coahuila”. Secretaría de la Contraloría y Modernización Administrativa.',
                            'Asesor Jurídico en el Voluntariado de Coahuila y Abogado Defensor. Procuraduría de la Familia del Sistema DIF Coahuila.'
                        ]
                    },
                    {
                        subtitulo: 'Diplomados y cursos',
                        lista: [
                            'Normas Profesionales de Auditoría del Sistema Nacional de Fiscalización',
                            'Ley General de Responsabilidades Administrativas',
                            'Derecho Municipal',
                            'Derecho Laboral Burocrático,',
                            'Seminario Nacional de Vinculación de los Sistemas Nacionales Anticorrupción, Fiscalización y Transparencia.'
                        ]
                    },

                    ]

                },

               
                {
                    nombre: 'JESÚS GERARDO SOTOMAYOR HERNÁNDEZ',
                    cargo: 'Magistrado Presidente del Tribunal de Justicia Administrativa de Coahuila de Zaragoza.',
                    foto: 'cc-tjacz.jpg',
                    img: 'cc-tjacz.png',
                    web: 'http://www.tjacoahuila.org/',
                    curriculum: [{
                        subtitulo: 'Formación Académica',
                        lista: [
                            'Licenciado en Derecho Facultad de Derecho de la UADEC unidad Torreón.',
                            'Diplomado en Gestión Pública por la Universidad Iberoamericana de la Laguna.',
                            'Especialización en el Sistema Integral de Justicia Penal para Adolescentes.',
                        ]
                    },
                    {
                        subtitulo: 'Experiencia Laboral',
                        lista: [
                            'Magistrado de la Sala Especializada en Materia de Responsabilidades Administrativas del Tribunal de Justicia Administrativa de Coahuila de Zaragoza.',
                            'Subsecretario de Asuntos Jurídicos en el Republicano Ayuntamiento de Torreón.',
                            'Director del Instituto de Investigaciones Jurídicas y Parlamentarias del Congreso del Estado de Coahuila.',
                            'Asesor en la Secretaría General de Gobierno del Estado de Coahuila.',
                            'Secretaria de Desarrollo Social en el Republicano Ayuntamiento de Torreón.',
                            'Secretario Abogado y Agente del Ministerio Público por Ministerio de Ley.Procuraduría General de Justicia del Estado de Coahuila Región Laguna',
                        ]
                    },
                    {
                        subtitulo: 'Actividades Académicas',
                        lista: [
                            'Taller de Destrezas de Litigación en Juicios Orales(2019).',
                            'Taller de Prácticas Parlamentarias.',
                            'Taller de Juicio Oral Familiar',
                            'Curso de Contraloría Dinámica.',
                            'Curso sobre Tópicos Fiscales de la Actualidad',
                            'Curso Reformas Fiscales(2017)',
                            'Curso de Reducción de Pagos Provisionales.',
                            'Curso Amparo Administrativo',
                            'Curso Amparo Fiscal',
                            'Programa de Sensibilización y Capacitación dirigida a Abogados.',
                            'Taller de Juicio Oral en Materia Mercantil(2016)',
                            'Catedrático de la Preparatoria Venustiano Carranza en Materia de Lógica.',
                            'Catedrático de la Universidad La Salle en Materia Derecho Administrativo.',
                        ]
                    },
                    {
                        subtitulo: 'Otras Actividades en las que ha participado',
                        lista: [
                            'Vocal en el Consejo Regional de la Abogacía.',
                            'Secretario en el Consejo Regional de la Abogacía.',
                            'Presidente del Colegio Regional de Abogados de la Laguna.',
                            'Secretario del Colegio Regional de Abogados de la Laguna.',
                            'Titular en el Bufete Jurídico Gratuito del Colegio Regional de la Laguna',
                        ]
                    },

                    ]

                },

                // Termina integrantes
            ]

        }
        // Termina DATA

    }

}
</script>

<style lang="scss" scoped></style>

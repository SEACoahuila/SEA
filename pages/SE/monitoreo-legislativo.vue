<template>
    <v-container v-if="!this.Data" class="min-height-vh">
        <v-row justify-center>
            Aún no se cuenta con información de Monitoreo Legislativo.
        </v-row>
    </v-container>
    <v-container v-else class="min-height-vh">
        <v-row>
            <v-col cols="12">
                <v-alert class="mx-auto text-justify" border="top" colored-border elevation="2" icon="mdi-monitor-eye" color="cyan" prominent>
                    <div align="center" class="mb-5 text-h4 text-xl-h1 text-md-h3 ">Monitoreo Legislativo</div>
                </v-alert>
                <v-card v-if="Data.descripcion.length > 0" class="mt-3 pa-4" color="article">
                    <v-row>
                        <v-col cols="12">
                            <v-card-actions v-for="(descripcion, i) in Data.descripcion">
                                {{ descripcion.valor }}
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-container v-if="this.Data.secciones.length == 0">
                <v-row class="my-3">
                    <v-col cols="12" class="text-center my-3" align="center">
                        No se encontraron publicaciones
                    </v-col>
                </v-row>
            </v-container>
            <v-container v-else>
                <v-row v-for="(seccion, i) in this.Data.secciones" class="my-3">
                    <v-col cols="12" class="my-3">
                        <v-card color="bluegreyt">
                            <v-card-title color="bluegreyt">
                                <div class=" text-xl-h3 text-md-h4"> 
                                    {{seccion.subtitulo}}
                                </div>
                            </v-card-title>
                            <v-container v-if="seccion.descripcion" class="px-5">
                                <v-row>
                                    <v-col>
                                        <p>
                                        {{ seccion.descripcion }}
                                        </p>
                                        <v-divider></v-divider>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-list color="bluegreyt" dense>
                                <v-row  justify='center' class="mx-auto mb-3">
                                    <v-container v-if="seccion.documentos.length == 0">
                                        <v-row>
                                            <v-col>
                                                <v-list align="center" color="bluegreyt">Aún no hay publicaciones.</v-list>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <v-container v-else >
                                        <v-row>
                                            <v-col cols="12" xl="3" md="6" sm="12" v-for="(documento,i) in seccion.documentos" :key="index">
                                                <v-card shaped class="mx-auto mt-3 pa-5" min-height="320">
                                                    <v-col>
                                                        <v-row align="center" justify="center" class="fill-height">
                                                            <v-col align-self="center" class="pa-1" cols="12" xl="12" md="12" xs="12">
                                                                <v-icon size="130">mdi-file-document-outline</v-icon>
                                                                <div style="background-color:grey; height: 2px"></div>
                                                            </v-col>
                                                            <v-col class="py-0">
                                                                <v-list-item>
                                                                    <v-list-item-content>
                                                                        <v-list-item-title class="text-h6 py-3">
                                                                            {{documento.nombre}}
                                                                        </v-list-item-title>
                                                                        <v-divider ></v-divider>
                                                                        <v-list-item-text class="py-3">{{ documento.descripcion }}</v-list-item-text>
                                                                    </v-list-item-content>
                                                                </v-list-item>
                                                            </v-col>
                                                            <div class="text-center">
                                                                <a :href="documento.url" target="_blank">
                                                                    <v-btn color="blue" fab absolute bottom large dark right >
                                                                        <v-icon>mdi-arrow-down-bold-circle-outline</v-icon>
                                                                    </v-btn>
                                                                </a>
                                                            </div>
                                                        </v-row>
                                                    </v-col>
                                                </v-card>
                                            </v-col>
                                        </v-row>

                                        <!-- <div v-for="(documento, i) in seccion.documentos">
                                            <v-list class="mx-2 my-3 px-3 py-2" elevation="2" color="bluegreyt">
                                                <a style="text-decoration: none; color:#000" :href="documento.url" target="_blank">
                                                    <v-icon large class="mb-1">{{'mdi-file-document-outline'}}</v-icon>
                                                    <p>
                                                        {{  documento.nombre }}
                                                        <v-divider class="my-1"></v-divider>
                                                    </p>
                                                </a>
                                            </v-list>
                                        </div> -->
                                    </v-container>
                                </v-row>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
    </v-container>
    
    <!-- <v-container>
        <v-row v-if="Data.seccioines.length > 0">
            <v-col>
                <v-card v-for="(seccion, i) in Secciones" >
                    <v-card-title class="justify-center"  >
                        <div class=" text-xl-h3 text-md-h4"> 
                            {{seccion.subtitulo}}
                        </div>
                    </v-card-title>
                    <v-list dense>
                        <v-row justify='center' class="mx-auto mb-3">
                            <v-col v-for="(docs, i) in seccion.Documentos" :key="i" cols="12" md="4">
                                <v-list elevation="2" color="bluegreyt">
                                    <a :href="docs.url" target="_blank" style="text-decoration:none;" >
                                        <v-list-item class="justify-center" align="center" >
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-icon large class="mb-1">{{'mdi-file-document-outline'}}</v-icon>
                                                    <h3>
                                                        {{ docs.nombre  }}
                                                    </h3>
                                                    
                                                    <p v-if="docs.descripcion">
                                                        <v-divider class="my-1"></v-divider>
                                                        {{ docs.descripcion  }}
                                                    </p>
                                                </v-col>
                                            </v-row>
                                        </v-list-item>
                                    </a>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>  -->
    </template>
    
    <script>
    export default {
        data() {
            return {
                Data: {
                    descripcion:[],
                    secciones:[]
                }
            }
        },
        methods: {
            async moduloByFraccion(articulo) {
                try {

                    let monitoreo = await this.$fire.firestore.doc('modulos/7WAXa5VqudVEzPLsQseb/').get();
                    
                    if(monitoreo.exists){
                        let secs = [];
                        let secciones = await this.$fire.firestore.collection('modulos/7WAXa5VqudVEzPLsQseb/secciones').orderBy('uid').get();
                        secciones.forEach(async (seccion) => {
                            let docs = [];
                            let documentos = await this.$fire.firestore.collection('modulos/7WAXa5VqudVEzPLsQseb/secciones/'+seccion.id+'/documentos').orderBy('uid').get();
                            documentos.docs.forEach((documento) => {
                                docs.push({ id:documento.id, ...documento.data() });
                            })
                            secs.push({ id:seccion.id, ...seccion.data(), documentos:docs });
                        });

                        this.Data = {
                            id:monitoreo.id,
                            ...monitoreo.data(),
                            secciones:secs,
                        };

                    }

                    console.log(this.Data);

                } catch (error) {
                    throw new Error(error.message)
                }
            }
        },
    
        created() {
            this.moduloByFraccion(this.parametro)
        }
    
    }
    </script>
    
    <style lang="scss">
    .min-height-vh {
        min-height: 70vh;
    }
    </style>
    
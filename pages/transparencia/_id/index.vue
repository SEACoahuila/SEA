<template>
<v-container class="min-height-vh ">
    <v-row>
        <v-col cols="12">

            <div align="center" class="mb-7 mt-5 text-xl-h3  text-md-h3 text-h4">{{ Data.titulo }}</div>

            <div class="font-weight-black">
                <v-icon color="orange darken-3">mdi mdi-calendar-clock</v-icon> Fecha de Actualización: {{ Data.actualizacion }}
            </div>
            <div class="mt-5 text-justify" v-for="e, i in Data.descripcion" :key="i">{{ e.valor }}</div>
            <v-divider class="mt-5"></v-divider>
        </v-col>
<!-- EXEPCIONES DE TRANSPARENCIA -->
<v-col cols="12">
  <div v-if="parametro == '21-13'" align="center">
                <h2> En el siguiente link podrá consultar la forma de registro y como realizar una solicitud de acceso:  </h2>
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/fKOZ6Ep1Z2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div v-if="parametro == '21-22'" align="center">
                <h2>Ubicación oficinas de la Unidad de Transparencia </h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.016631465175!2d-100.96104139428223!3d25.470564738400462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868812c22fd32bcf%3A0xd72f0fa4e13c6e90!2sBlvd.+Luis+Donaldo+Colosio+703%2C+Valle+Real+2do+Sector%2C+25205+Saltillo%2C+Coah.!5e0!3m2!1ses!2smx!4v1524239750191" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
</v-col>
          
        
          <v-col v-if="parametro != '21-21'" class="pa-4" cols="12" v-for="e, i  in Data.secciones" :key="i"> 

      
           
            <v-card  class="pa-3" elevation="2" outlined shaped>
               
                            <div align="center" class=" mt-3 text-xl-h4 text-md-h4 text-h5">{{ e.subtitulo }}</div>
                    <div align="center" class="  text-subtitle-1" v-if="e.descripcion"> {{ e.descripcion }}</div>
                    <v-divider class="mt-5"></v-divider>
    
                    <div class="mt-5" v-if="e.documentos.length != 0">
                        <!-- <div class="mt-5 text-h5">Documentos:</div> -->
    
                        <v-list dense>
                            <div v-for="i in e.documentos">
                                <v-col v-if="i.descripcion" class="text-subtitle-2 font-weight-bold">
                                    <v-icon color="teal">mdi mdi-tooltip-text-outline</v-icon> {{i.descripcion}}
                                </v-col>
                                <v-list-item dense :href="i.url" class="text-body-1" router exact>
    
                                    <v-col class="text-body-1">
                                        <v-icon>mdi mdi-circle-medium</v-icon>{{ i.nombre }}
                                    </v-col>
    
                                </v-list-item>
                            </div>
                        </v-list>
    
                    </div>
    
     
               
            </v-card>
        </v-col>
            <v-col v-if="parametro == '21-21'" class="pa-0" cols="12" v-for="e, i  in Data.secciones" :key="i">
                <v-expansion-panels   >
                    <v-expansion-panel :key="i">
                        <v-expansion-panel-header> <div align="center" >{{ e.subtitulo }}</div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                    <div align="center" class="  text-subtitle-5" v-if="e.descripcion"> {{ e.descripcion }}</div>
                    <v-divider class="mt-4"></v-divider>
    
                    <div class="mt-5" v-if="e.documentos.length != 0">
                        <!-- <div class="mt-5 text-h5">Documentos:</div> -->
    
                        <v-list dense>
                            <div v-for="i in e.documentos">
                                <v-col v-if="i.descripcion" class="text-subtitle-2 font-weight-bold">
                                    <v-icon color="teal">mdi mdi-tooltip-text-outline</v-icon> {{i.descripcion}}
                                </v-col>
                                <v-list-item dense :href="i.url" class="text-body-1" router exact>
    
                                    <v-col class="text-body-1">
                                        <v-icon>mdi mdi-circle-medium</v-icon>{{ i.nombre }}
                                    </v-col>
    
                                </v-list-item>
                            </div>
                        </v-list>
    
                    </div>
    
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                </v-expansion-panels>
            </v-col>
              
               
           
       

        <v-col align="center" cols="12" v-if="Data">Responsable de la información: {{ Data.encargado.nombre + ', ' +Data.encargado.cargo}}</v-col>

    </v-row>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            parametro: this.$route.params.id,
            Data: '',

        }
    },
    methods: {
        async moduloByFraccion(articulo) {
            try {
                const art = articulo.split('-')[0];
                const fra = articulo.split('-')[1].toString();
                let secc = [],
                    docs = [];
                const mods = await this.$fire.firestore.collection('modulos').where('articulo', '==', art).where('fraccion', '==', fra).get();
                if (mods.docs.length == 1) {
                    const secs = await this.$fire.firestore.collection('modulos/' + mods.docs[0].id + '/secciones').orderBy('uid', 'asc').get();
                    secs.docs.forEach(async (sec) => {
                        const docus = await this.$fire.firestore.collection('modulos/' + mods.docs[0].id + '/secciones/' + sec.id + '/documentos').orderBy('uid', 'asc').get();
                        docs = [];
                        docus.docs.forEach((docu) => {
                            docs.push({
                                id: docu.id,
                                ...docu.data()
                            });
                        })
                        secc.push({
                            id: sec.id,
                            ...sec.data(),
                            documentos: docs
                        });
                    });
                    let encNombre = '',
                        encCargo = '';
                    const dptoID = mods.docs[0].data().encargado;
                    const dpto = await this.$fire.firestore.doc('departamentos/' + dptoID).get();
                    const userID = dpto.data().titular;
                    const user = await this.$fire.firestore.doc('usuarios/' + userID).get();

                    encNombre = user.data().nombre;
                    encCargo = user.data().cargo + ' de ' + dpto.data().nombre;
                    this.Data = {
                        id: mods.docs[0].id,
                        ...mods.docs[0].data(),
                        encargado: {
                            nombre: encNombre,
                            cargo: encCargo
                        },
                        secciones: secc
                    }
                } else {
                    this.Data = {};
                }
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

<template>
  <v-container class="min-height-vh ">
    <v-row>
      <v-col cols="12">

        <div align="center" class="mb-7 mt-5 text-xl-h2  text-md-h2 text-h3">{{ Data.titulo }}</div>
       
        <div  class="font-weight-black"><v-icon  color="orange darken-3">mdi mdi-calendar-clock</v-icon> Fecha de Actualización: {{ Data.actualizacion }}</div>
        <div class="mt-5 text-justify">{{ Data.descripcion }}</div>
        <v-divider class="mt-5"></v-divider>
      </v-col>

       <v-col class="pa-4" cols="12" v-for="e in Data.secciones">
        <v-card class="pa-3"
        elevation="2"
  outlined
  shaped
        >
        
        <div align="center" class=" mt-3 text-xl-h4 text-md-h4 text-h5">{{ e.subtitulo }}</div>
        <div align="center" class="  text-subtitle-1" v-if="e.descripcion">  {{ e.descripcion }}</div>
        <v-divider class="mt-5"></v-divider>
        
          <div  class="mt-5" v-if="e.documentos.length != 0">
            <!-- <div class="mt-5 text-h5">Documentos:</div> -->
           

              <v-list dense  >
                 <div  v-for="i in e.documentos">
                <v-col  v-if="i.descripcion" class="text-subtitle-2 font-weight-bold"> <v-icon color="teal">mdi mdi-tooltip-text-outline</v-icon>  {{i.descripcion}}</v-col>
                <v-list-item dense :href="i.url" class="text-body-1" router exact>
                
                  
                  
                 <v-col  class="text-body-1"> <v-icon>mdi mdi-circle-medium</v-icon>{{ i.nombre }}</v-col> 
                 
                </v-list-item>
                </div>
              </v-list>

            

          </div>
       

</v-card>
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
        const modulo = await this.$fire.firestore.collection("modulos").where('articulo', '==', articulo.toString()).get();
        if (modulo.docs.length == 0) {
          return {}
        }
        const secc = [];
        const secciones = await this.$fire.firestore.collection("modulos/" + modulo.docs[0].id + "/secciones").orderBy('uid', 'asc').get();
        secciones.forEach(async (sec) => {
          const docs = [];
          const documentos = await this.$fire.firestore.collection('modulos/' + modulo.docs[0].id + '/secciones/' + sec.id + '/documentos').orderBy('uid', 'asc').get();
          documentos.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() })
          })
          secc.push({ id: sec.id, ...sec.data(), documentos: docs })
        })
        this.Data = { id: modulo.docs[0].id, ...modulo.docs[0].data(), secciones: secc }
        console.log(this.Data)
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

<style lang="scss" >
.min-height-vh {
  min-height: 70vh;
}
</style>
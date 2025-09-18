

<template>
    <v-container class="min-height-vh">

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4">{{ page.title }}</div>

                </v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(publicacion, i) in publicaciones" cols="12" md="4" xs="12" >
                <a style="text-decoration: none;" target="_blank" :href="publicacion.enlace">
                    <v-card class="mx-auto" >
                        <v-img
                        height="120px"
                        :src="publicacion.imagen"
                        cover
                        ></v-img>
                        <v-card-title>
                            {{ publicacion.titulo }}
                        </v-card-title>
                        <v-card-text>
                            {{ publicacion.excerpt }}
                        </v-card-text>
                    </v-card>
                </a>
            </v-col>
        </v-row>
        <v-row  class="d-flex justify-center mb-6 mt-6">
            <v-btn v-show="btnShow == true" elevation="2" @click="nextPage()" >Cargar más</v-btn>
        </v-row>
    </v-container>
</template>
    
<script>
export default {
    name: 'publicaciones',

    metaInfo: {
        script: [
            { src: 'https://www.powr.io/powr.js?platform=html', async: true, defer: true },
            { src: 'https://www.powr.io/powr.js?platform=html', async: true, defer: true },
        ],
    },


    data() {
        return {
            page: {
                color: 'green lighten-2',
                title: 'Noticias',
                icon: 'mdi-comma-circle-outline'
            },
            publicaciones:[],
            lastVisible:"",
            limit:9,
            btnShow:false
        }
    },
    methods:{
        async getPublicaciones(){
            try{

                await this.$fire.firestore
                .collection("publicaciones/")
                .where("status","==","0")
                .orderBy("publishAt","desc")
                .limit(this.limit)
                .get()
                .then((publics) => {

                    this.lastVisible = publics.docs[publics.docs.length-1];
                    
                    publics.forEach(async (pub) => {
                        let autor = await this.$fire.firestore.doc("autores/"+pub.data().autor).get();
                        let excerpt = pub.data().excerpt;
                        let titulo = pub.data().titulo;
                        if(excerpt.length >= 60){ excerpt = excerpt.substring(0, 60) + "..."; }
                        if(titulo.length >= 40){ titulo = titulo.substring(0, 40) + "..."; }
                        let enlace, target;
    
                        if(pub.data().documento){ enlace = pub.data().contenido; }else{
                            enlace = "/publicaciones/nota?id="+pub.data().id;
                        }
    
                        this.publicaciones.push({
                            "titulo":titulo,
                            "excerpt":excerpt,
                            "imagen":pub.data().imagen,
                            "enlace":enlace,
                            "autor":autor.data()
                        });
                    });

                    this.btnShow = true;

                });

            } catch(e){
                throw new Error(e.message)
            }
        },

        async nextPage(){

            if(this.lastVisible != undefined){
                
                this.$fire.firestore
                .collection("publicaciones")
                .where("status", "==", "0")
                .orderBy("publishAt", "desc")
                .startAfter(this.lastVisible)
                .limit(this.limit).get().then((publics) => {
                    
                    this.lastVisible = publics.docs[publics.docs.length-1];
                    if(this.lastVisible == undefined){ this.btnShow = false; }
                    publics.forEach(async (pub) => {
                        let autor = await this.$fire.firestore.doc("autores/"+pub.data().autor).get();
                        let excerpt = pub.data().excerpt;
                        let titulo = pub.data().titulo;
                        if(excerpt.length >= 60){ excerpt = excerpt.substring(0, 60) + "..."; }
                        if(titulo.length >= 40){ titulo = titulo.substring(0, 40) + "..."; }
                        let enlace, target;
    
                        if(pub.data().documento){ enlace = pub.data().contenido; }else{
                            enlace = "/publicaciones/nota?id="+pub.data().id;
                        }
    
                        this.publicaciones.push({
                            "titulo":titulo,
                            "excerpt":excerpt,
                            "imagen":pub.data().imagen,
                            "enlace":enlace,
                            "autor":autor.data()
                        });
                    });
    
                });

            }
        }
    },
    created() {
        this.getPublicaciones()
    },
    mounted() {
        const recaptchaScript = document.createElement("script");
        recaptchaScript.setAttribute(
            "src",
            "https://www.powr.io/powr.js?platform=html"
        );
        document.head.appendChild(recaptchaScript);
    },
}
</script>
    
<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>
    
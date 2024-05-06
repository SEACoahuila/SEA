

<template>
    <v-container class="min-height-vh">
        <v-row :class="this.notFound">
            404 - La página solicitada no existe
        </v-row>
        <v-row :class="this.found" >
            
            <h1>{{ this.nota.titulo }}</h1>
            <p style="margin:15px 0 35px 0">{{ this.nota.excerpt }}</p>

            <v-card style="margin-bottom:35px">
                <v-img :src="this.nota.imagen" ></v-img>
            </v-card>
            
            
        </v-row >
        <v-row>
            <div v-html="this.nota.contenido" ></div>
        </v-row>
    </v-container>
</template>
    
<script>
export default {
    name: 'note',

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
                title: 'Publicaciones',
                icon: 'mdi-comma-circle-outline'
            },
            id:this.$route.query.id,
            nota:{},
            notFound:'d-none',
            found:"d-block"
        }
    },
    methods:{
        async getNote(){
            try{
                let db = this.$fire.firestore;
                let note = await db.doc("/publicaciones/"+this.id).get();

                if(note.exists){
                    let autor = await db.doc("autores/"+note.data().autor).get();
                    let elAutor = {
                        nombre:"Redacción", 
                        profilePic:"https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/publicaciones%2Fstatic%2Fdefault_profile.jpg?alt=media&token=86c69bc1-25a3-4486-bc3b-643a62034a38", 
                        biografia:"", 
                        links:{}
                    }
                    if( autor.exists ) { elAutor = autor.data(); }
                    this.nota = {...note.data(), autor:elAutor }
                    
                    this.found = "d-block";
                    this.notFound = "d-none";

                }else{
                    this.notFound = "d-block";
                    this.found = "d-none";
                }

            } catch(e){
                throw new Error(e.message)
            }
        }
    },
    created() {
        this.getNote(this.$route.query.id)
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
    
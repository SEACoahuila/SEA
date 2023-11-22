<template>
    <div>
        <v-card color="accent" class="mt-10">
            <v-col cols="12">
    
                <v-carousel height="">
                    <v-carousel-item v-for="(item,i) in items" :key="i" dark>
                        <!-- Si existe documento y usamos href con requiere para acceder a el documento -->
                        <div v-if="item.doc">
                        <a :href="require('@/static/img/banners/'+item.doc)">
                        <v-img  :src="require('@/static/img/banners/'+item.src)"></v-img>
                        </a>
                        </div>
                           <!-- Si existe link, href se lee directo del dato -->
                        <div v-if="item.to">
                        <a :href="item.to">
                        <v-img  :src="item.src"></v-img>
                        </a>
                        </div>
                         <!-- Banner solo -->
                        <div v-if="!item.to && !item.doc">
    
                        <v-img  :src="require('@/static/img/banners/'+item.src)"></v-img>
                      
                        </div>
                  
                       
                    </v-carousel-item>
                </v-carousel>
            </v-col>
    
            <v-divider></v-divider>
        </v-card>
    
     
    </div>
    </template>
    
    <script>
    export default {
        data() {
            return {
                items: [
    
                // {
                //     src: "banner_unodc.png",
                //     doc: "calendario-ipo-sea-coahuila-2018.pdf"
                // },
    
                // {
                //     src: "banner_unodc.png",
                //     to: "https://www.google.com/"
                // },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/pagina_web%2FbannerDibujaTusValores2023.jpeg?alt=media&token=d27126e2-e7a1-4f42-a847-9d070d958398",
                    to: "publicaciones/dibuja-tus-valores"
                },
                 {
                     src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/pagina_web%2Fgira-municipios-2023.png?alt=media&token=5a4dedfc-1696-49ac-a898-2115c028ff7e",
                     to: "https://seacoahuila.github.io/comunicados/2023-03-13-capacitacion-municipios/"
                 }
    
                ],
            }
        },
    }
    </script>
    
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
                        <v-img  :src="require('@/static/img/banners/'+item.src)"></v-img>
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
                     src: "banner_unodc.png",
                 }
    
                    
    
                ],
            }
        },
    }
    </script>
    
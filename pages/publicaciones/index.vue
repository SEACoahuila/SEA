

<template>
    <v-container  class="min-height-vh">
    
        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>
    
                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4">{{page.title}}</div>
    
                </v-alert>
    
                <v-card class="mt-3 pa-10"  color="article">
                    <v-col aling="center" justify="center" >

                        <div align="center" class="mb-5 text-xl-h2 text-md-h3 ">Facebook</div>
                        <div class="powr-social-feed" id="a2eea91e_1674247401"></div>
                        
                  
                    </v-col>

                    <v-col aling="center" justify="center" >
                        <div align="center" class="mb-5 text-xl-h2 text-md-h3 ">Twitter</div>
                        <div class="powr-social-feed" id="c1fd1c3c_1674248138"></div>
                  
                    </v-col>
    
                </v-card>
    
         
    
               
            </v-col>
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
                    title: 'Publicaciones',
                    icon: 'mdi-comma-circle-outline'
                }
            }
    
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
    
<template>

    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-h4 text-xl-h1 text-md-h3 ">{{ page.title }}</div>

                </v-alert>


            </v-col>
        </v-row>

        <v-row justify="center" align="stretch" >
            <!-- Tarjeta 1 -->
            <v-col  v-for="(e, i) in tarj" :key="i" cols="12" sm="6" md="6" lg="4" xl="3" >

                <v-card class="mx-auto mt-5 d-flex flex-column "  dark color='#515790' height="100%"  shaped>
                    <v-col>
                    <v-img :src="e.img" width="100%" ></v-img>
                    </v-col>
                  

                    <v-card-title class="text-center justify-center" style="word-break: break-word; line-height: 1.2;">
                       {{ e.titulo }} 
                    </v-card-title>


                    <v-card-actions class="justify-center ">
                        <v-btn color="white" class="black--text" block :href="e.to">Conoce más
                        </v-btn>


                    </v-card-actions>

                </v-card>
            </v-col>
            

        </v-row>
    </v-container>



</template>

<script>
export default {

    name: 'CIYE',
    data() {
        return {
            page: {
                color: '#77825e',
                title: 'Control Interno y Ética',
                icon: 'mdi-format-list-checks',

            },

            tarj: [
                {
                    titulo: 'Unidad Especializada de Control Interno (UECI)',
                    img: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FkyYlvOBrjgH7F3p5TbcE%2Fueci.png?alt=media&token=c0028501-240f-42fc-a84a-7f57920a1974',
                    to: '/SE/ciye/ueci',
                },
                {
                    titulo: 'Comité de Ética',
                    img: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FkyYlvOBrjgH7F3p5TbcE%2Fce.png?alt=media&token=1c77c9e0-3ab4-4085-84d5-a209fe496d3c",
                    to: '/SE/ciye/ce',
                },

                {
                    titulo: 'Subcomité de Hostigamiento Sexual y Acoso Sexual',
                    img: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FkyYlvOBrjgH7F3p5TbcE%2Fshsas.png?alt=media&token=9b0c66e7-2966-460a-a2f4-00eb3ac2cda5',
                    to: '/SE/ciye/shsas',
                },

            ],  



        }
    },
};
</script>



<style scoped></style>

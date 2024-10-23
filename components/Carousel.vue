<template>
    <div>
        <v-card color="accent" class="mt-10">
            <v-col cols="12">

                <v-carousel height="">
                    <v-carousel-item v-for="(item, i) in items" :key="i" dark>
                        <!-- Si existe documento y usamos href con requiere para acceder a el documento -->
                        <div v-if="item.doc">
                            <a :href="require('@/static/img/banners/' + item.doc)">
                                <v-img :src="require('@/static/img/banners/' + item.src)"></v-img>
                            </a>
                        </div>
                        <!-- Si existe link, href se lee directo del dato -->
                        <div v-if="item.to">
                            <a :href="item.to">
                                <v-img :src="item.src"></v-img>
                            </a>
                        </div>
                        <!-- Banner solo -->
                        <div v-if="!item.to && !item.doc">

                            <v-img :src="require('@/static/img/banners/' + item.src)"></v-img>

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
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FBanners%20p%C3%A1gina%20web%20(2).png?alt=media&token=8d0209a8-5175-49d1-a310-d42a40757a52",
                    to: "https://www.seacoahuila.org.mx/publicaciones/nota/?id=20240009"
                },

                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FBanners%20p%C3%A1gina%20web%20(1)%20(1).png?alt=media&token=774cd029-8001-4457-a005-d2b205f0bbae",
                    to: "publicaciones/dibuja-tus-valores-6"
                },
                //{
                //    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FWhatsApp%20Image%202024-04-30%20at%2010.08.48.jpeg?alt=media&token=8c4ebaf9-716d-462f-85db-6cc7550e9716",
                //    to: "https://monitorcpc.ccilaguna.org.mx/"
                //},
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FGira%20de%20capacitaci%C3%B3n%20(1).png?alt=media&token=9002d1fc-32b1-45c0-b72c-0d8ae2a19134",
                    to: "publicaciones/capacitacion-municipios"
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FBanner%20Programa%20Anual%20de%20Trabajo%20del%20CC%202024.png?alt=media&token=6cfbbf1b-6caa-4f91-92f3-26bad312033d",
                    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/InformesCC%2FPROGRAMA%20CC.pdf?alt=media&token=640d3267-ab3a-4b6b-8c1d-94ac9d9f9c8e"
                },
              
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/pagina_web%2Fgira-municipios-2023.png?alt=media&token=5a4dedfc-1696-49ac-a898-2115c028ff7e",
                    to: "https://seacoahuila.github.io/comunicados/2023-03-13-capacitacion-municipios/"
                },

            ],
        }
    },
}
</script>
    